import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib"],
      outDir: "dist", // Ensure types are output to the dist folder
      tsconfigPath: "./tsconfig-build.json", // Specify the tsconfig for type generation
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
      fileName: "greenmoons-web-auth", // Set file name without the .js extension
    },
    outDir: "dist", // Ensure everything goes to the dist folder
    rollupOptions: {
      external: ["react", "react-dom"], // Mark peer dependencies as external
    },
  },
});
