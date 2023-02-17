import { defineConfig, type HeadConfig } from "vitepress";
import base from "./config/base.js";

import MdItAbbr from "markdown-it-abbr";

export default defineConfig({
  base,
  head: head(),
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

function head(): HeadConfig[] {
  return [
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: base + "favicon/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: base + "favicon/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: base + "favicon/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: base + "favicon/site.webmanifest" }],
    ["link", { rel: "mask-icon", href: base + "favicon/safari-pinned-tab.svg", color: "#00659c" }],
    ["link", { rel: "shortcut icon", href: base + "favicon/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }],
    ["meta", { name: "msapplication-config", content: base + "favicon/browserconfig.xml" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ];
}

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
