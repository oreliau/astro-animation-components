// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Astro UI component",
      credits: true,
      social: {
        github: "https://github.com/oreliau/astro-ui-components",
        twitter: "https://twitter.com/@OreliauK",
        "x.com": "https://x.com/@OreliauK",
      },
      sidebar: [
        {
          label: "Components",
          items: [
            { label: "Dialog", slug: "components/dialog" },
            { label: "Datalist", slug: "components/datalist" },
            { label: "Togglelist", slug: "components/togglelist" },
            { label: "Scroll", slug: "components/scroll" },
            { label: "Switch", slug: "components/switch" },
            {
              label: "Checkbox",
              slug: "components/checkbox",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
