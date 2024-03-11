import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [
    ...baseConfig.content,
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  presets: [baseConfig],
  theme: {
    extend: {},
  },
} satisfies Config;
