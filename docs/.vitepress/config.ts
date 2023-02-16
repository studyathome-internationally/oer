import { defineConfig } from "vitepress";
import base from "./config/base.js";

export default defineConfig({
  base,
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
        algolia: {
          appId: "JI7BWPYEMW",
          apiKey: "a5976af2be8c2ccbb60ba75f309ceb58",
          indexName: "oer",
        },
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
        algolia: {
          appId: "JI7BWPYEMW",
          apiKey: "a5976af2be8c2ccbb60ba75f309ceb58",
          indexName: "oer",
        },
      },
    },
  },
  // themeConfig: {
  //   algolia: {
  //     appId: "JI7BWPYEMW",
  //     apiKey: "a5976af2be8c2ccbb60ba75f309ceb58",
  //     indexName: "oer",
  //     locales: {
  //       de: {
  //         placeholder: "Placeholder",
  //         translations: {
  //           button: {
  //             buttonText: "B Text",
  //             buttonAriaLabel: "B ALabel",
  //           },
  //         },
  //       },
  //       en: {
  //         placeholder: "Placeholder",
  //         translations: {
  //           button: {
  //             buttonText: "B Text",
  //             buttonAriaLabel: "B ALabel",
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
});

function nav(lang) {
  return {
    en: [
      { text: "Legal Notice", link: "/legal-notice" },
      { text: "Contact", link: "/contact" },
    ],
    de: [
      { text: "Impressum", link: "/legal-notice" },
      { text: "Kontakt", link: "/contact" },
    ],
  }[lang];
}
