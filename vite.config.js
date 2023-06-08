import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "vite-plugin-sass";

export default defineConfig({
    plugins: [react()],
});
