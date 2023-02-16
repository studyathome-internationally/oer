import { defineConfig } from "vitepress";
import base from "./config/base.js";

import MdItAbbr from "markdown-it-abbr";

export default defineConfig({
  base,
  markdown: markdown(),
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      title: "Open Educational Resources",
      description: "Open Educational Resources by UAS Technikum Wien",
      themeConfig: {
        logo: "/img/fhtw.svg",
        outlineTitle: "Table of Contents",
        nav: nav("en"),
      },
    },
    de: {
      label: "Deutsch",
      lang: "de-AT",
      title: "Open Educational Resources",
      description: "Open Educational Resources der FH Technikum Wien",
      themeConfig: {
        logo: "/img/fhtw.svg",
        outlineTitle: "Inhaltsverzeichnis",
        nav: nav("de"),
      },
    },
  },
  themeConfig: {
    algolia: {
      appId: "JI7BWPYEMW",
      apiKey: "a5976af2be8c2ccbb60ba75f309ceb58",
      indexName: "oer",
    },
  },
});

function markdown() {
  return {
    config: (md) => {
      md.use(MdItAbbr);
    },
  };
}

function nav(lang) {
  return {
    en: [
      { text: "Legal Notice", link: "./legal-notice" },
      { text: "Contact", link: "./contact" },
    ],
    de: [
      { text: "Impressum", link: "./legal-notice" },
      { text: "Kontakt", link: "./contact" },
    ],
  }[lang];
}
