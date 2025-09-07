// Global error handler for unhandled errors
let errorCount = 0;
const MAX_ERRORS_BEFORE_UI = 3; // Show UI after 3 critical errors

// Type for notification API (matching Ant Design's NotificationInstance)
type NotificationPlacement =
  | "topRight"
  | "top"
  | "topLeft"
  | "bottom"
  | "bottomLeft"
  | "bottomRight";

interface NotificationConfig {
  message: string;
  description: string;
  duration?: number;
  placement?: NotificationPlacement;
  onClick?: () => void;
  style?: Record<string, string>;
}

interface NotificationApi {
  error: (config: NotificationConfig) => void;
}

// Store notification API reference
let notificationApi: NotificationApi | null = null;

// Function to set the notification API (called from App component)
export const setNotificationApi = (api: NotificationApi) => {
  notificationApi = api;
};

const showGlobalErrorNotification = (error: unknown, type: string) => {
  errorCount++;

  // Type guard for error objects
  const errorMessage = error instanceof Error ? error.message : String(error);

  // Only show UI for critical errors or after multiple errors
  const isCritical =
    errorMessage?.includes("ChunkLoadError") ||
    errorMessage?.includes("Loading chunk") ||
    errorMessage?.includes("Failed to fetch") ||
    errorCount >= MAX_ERRORS_BEFORE_UI;

  if (isCritical) {
    if (notificationApi) {
      // Use your existing themed notification system
      notificationApi.error({
        message: `${type} Detected`,
        description: `${
          errorMessage || "An unexpected error occurred"
        }. Click to reload the page.`,
        duration: 10, // 10 seconds
        placement: "topRight",
        onClick: () => {
          window.location.reload();
        },
        style: {
          cursor: "pointer"
        }
      });
    } else {
      // Fallback: Try to use antd notification directly
      try {
        import("antd").then(({ notification }) => {
          notification.error({
            message: `${type} Detected`,
            description: errorMessage || "An unexpected error occurred",
            duration: 10,
            placement: "topRight"
          });
        });
      } catch {
        // Final fallback to console
        console.error(`🚨 ${type}:`, errorMessage || error);
      }
    }
  }
};

export const setupGlobalErrorHandling = () => {
  // Handle unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    console.error("🚨 Unhandled Promise Rejection:", event.reason);

    // Log additional context
    console.error("Promise:", event.promise);
    console.error("Stack:", event.reason?.stack);

    // Show UI for critical promise rejections
    showGlobalErrorNotification(event.reason, "Promise Rejection");

    // Prevent the default browser behavior (logging to console)
    // event.preventDefault();
  });

  // Handle uncaught JavaScript errors
  window.addEventListener("error", (event) => {
    console.error("🚨 Uncaught JavaScript Error:", {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      error: event.error,
      stack: event.error?.stack
    });

    // Show UI for critical JavaScript errors
    showGlobalErrorNotification(event.error, "JavaScript Error");
  });

  // Handle module loading errors (important for Vite)
  window.addEventListener(
    "error",
    (event) => {
      if (event.target !== window) {
        const target = event.target as HTMLElement;
        if (target.tagName === "SCRIPT" || target.tagName === "LINK") {
          console.error("🚨 Resource Loading Error:", {
            type: target.tagName,
            src:
              (target as HTMLScriptElement).src ||
              (target as HTMLLinkElement).href,
            message: "Failed to load resource"
          });
        }
      }
    },
    true
  );

  console.log("✅ Global error handling setup complete");
};

// Enhanced console logging for development
export const enhanceConsoleLogging = () => {
  if (import.meta.env.DEV) {
    console.log("🔧 Development mode - Enhanced logging enabled");

    // Log environment variables (be careful not to log secrets)
    console.log("Environment:", {
      MODE: import.meta.env.MODE,
      DEV: import.meta.env.DEV,
      PROD: import.meta.env.PROD,
      BASE_URL: import.meta.env.BASE_URL
      // Add other safe env vars here
    });
  }
};
