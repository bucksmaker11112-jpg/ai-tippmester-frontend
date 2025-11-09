import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // 🔥 fontos, Render static site buildhez kötelező!
  build: {
    outDir: "dist",
  },
});
