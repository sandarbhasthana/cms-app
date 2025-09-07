import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@cms-app/prisma"]
  },
  ssr: {
    noExternal: ["@cms-app/prisma"]
  },
  build: {
    // Generate source maps for better error debugging
    sourcemap: true,
    // Don't minify in case of build errors for easier debugging
    minify: process.env.NODE_ENV === "production" ? "esbuild" : false,
    // Increase chunk size warning limit (we discussed this earlier)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Better error reporting for chunk loading failures
        manualChunks: {
          vendor: ["react", "react-dom"],
          antd: ["antd"],
          refine: ["@refinedev/core", "@refinedev/antd"]
        }
      }
    }
  },
  server: {
    // Better error overlay in development
    hmr: {
      overlay: true
    }
  },
  // Enhanced error reporting
  define: {
    __APP_VERSION__: JSON.stringify(
      process.env.npm_package_version || "unknown"
    ),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  }
});
