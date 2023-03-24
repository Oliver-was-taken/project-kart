import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://oliver-was-taken.github.io/project-kart",
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
    }),
  ],
});
