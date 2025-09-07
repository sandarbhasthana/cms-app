import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// Add error handling for missing root element
const container = document.getElementById("root");
if (!container) {
  throw new Error(
    "Failed to find the root element. Make sure your HTML has a div with id='root'"
  );
}

const root = createRoot(container);

// Wrap render in try-catch for better error reporting
try {
  root.render(
    <React.StrictMode>
      <Auth0Provider
        domain="dev-y38p834gjptooc4g.us.auth0.com"
        clientId="AcinJvjWp1Dr41gPcJeQ20r5vcsteks4"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  );
} catch (error) {
  console.error("🚨 Failed to render React app:", error);

  // Show a Vercel-style error message to the user
  if (container) {
    container.innerHTML = `
      <div style="min-height: 100vh; background-color: #fafafa; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="max-width: 600px; width: 100%; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); padding: 32px;">

          <div style="text-align: center; margin-bottom: 24px;">
            <div style="width: 64px; height: 64px; background-color: #ff4d4f; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: white; font-size: 24px;">
              🐛
            </div>
            <h2 style="color: #262626; margin-bottom: 8px; font-size: 24px; font-weight: 600;">
              Application error: a client-side exception has occurred
            </h2>
            <p style="color: #8c8c8c; font-size: 16px; margin: 0;">
              See the browser console for more information.
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #f0f0f0; margin: 24px 0;">

          <div style="display: flex; gap: 12px; justify-content: center; margin-bottom: 24px; flex-wrap: wrap;">
            <button onclick="window.location.reload()" style="background: #1890ff; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
              🔄 Reload Page
            </button>
            <button onclick="window.location.href='/'" style="background: #f5f5f5; color: #262626; border: 1px solid #d9d9d9; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
              🏠 Go Home
            </button>
          </div>

          <hr style="border: none; border-top: 1px solid #f0f0f0; margin: 24px 0;">

          <details style="margin-top: 16px;">
            <summary style="cursor: pointer; padding: 8px 0; font-size: 14px; font-weight: 500; color: #595959;">
              🔍 Technical Details (Click to expand)
            </summary>
            <div style="margin-top: 12px; padding: 16px; background-color: #f5f5f5; border-radius: 6px; border: 1px solid #d9d9d9;">
              <div style="margin-bottom: 12px;">
                <strong>Error Message:</strong>
                <div style="margin-top: 4px; background-color: #fff2f0; padding: 8px; border-radius: 4px; border: 1px solid #ffccc7; font-family: monospace; font-size: 13px;">
                  ${error instanceof Error ? error.message : String(error)}
                </div>
              </div>
              <div style="margin-bottom: 12px;">
                <strong>Stack Trace:</strong>
                <pre style="font-size: 12px; background-color: #fff; padding: 12px; border-radius: 4px; border: 1px solid #d9d9d9; overflow: auto; max-height: 200px; margin-top: 4px;">
${error instanceof Error ? error.stack : String(error)}
                </pre>
              </div>
              <div style="margin-top: 12px; font-size: 12px; color: #8c8c8c;">
                <div>URL: ${window.location.href}</div>
                <div>Timestamp: ${new Date().toISOString()}</div>
                <div>User Agent: ${navigator.userAgent}</div>
              </div>
            </div>
          </details>

          <div style="text-align: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid #f0f0f0;">
            <p style="color: #8c8c8c; font-size: 12px; margin: 0;">
              If this error persists, please contact support with the error details above.
            </p>
          </div>
        </div>
      </div>
    `;
  }
}
