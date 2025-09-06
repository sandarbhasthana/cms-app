import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@cms-app/prisma"]
  },
  ssr: {
    noExternal: ["@cms-app/prisma"]
  }
});
