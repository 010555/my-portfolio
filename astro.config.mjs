// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// قيم النشر تُقرأ من متغيرات البيئة التي يضبطها GitHub Actions وقت البناء،
// لذلك يبقى التطوير المحلي دون تغيير
// https://astro.build/config
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE,
  vite: {
    plugins: [tailwindcss()],
  },
});
