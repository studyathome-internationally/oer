import { defineConfig, type HeadConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import base from "./config/base.js";

import MdItAbbr from "markdown-it-abbr";

import MdItAnchor from "markdown-it-anchor";

export default withPwa(
  defineConfig({
    base,
    head: head(),
    markdown: markdown(),
    lastUpdated: true,
    locales: {
      root: {
        label: "English",
        lang: "en-US",
        title: "Open Educational Resources",
        description: "Open Educational Resources by UAS Technikum Wien",
        themeConfig: {
          logo: "/img/fhtw.svg",
          nav: nav("en"),
          outlineTitle: "Table of Contents",
          editLink: {
            pattern: "https://github.com/studyathome-internationally/oer/edit/master/docs/:path",
            text: "Edit this page on GitHub",
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
          nav: nav("de"),
          outlineTitle: "Inhaltsverzeichnis",
          darkModeSwitchLabel: "Darstellung",
          lastUpdatedText: "Letzte Aktualisierung",
          sidebarMenuLabel: "Menü",
          returnToTopLabel: "Zurück zum Anfang",
          docFooter: {
            prev: "Vorherige Seite",
            next: "Nächste Seite",
          },
          editLink: {
            pattern: "https://github.com/studyathome-internationally/oer/edit/master/docs/:path",
            text: "Diese Seite auf GitHub bearbeiten",
          },
        },
      },
    },
    themeConfig: {
      socialLinks: [{ icon: "github", link: "https://github.com/studyathome-internationally/oer" }],
      algolia: {
        appId: "JI7BWPYEMW",
        apiKey: "a5976af2be8c2ccbb60ba75f309ceb58",
        indexName: "oer",
        locales: {
          root: {
            placeholder: "Search Open Educational Resources",
          },
          de: {
            placeholder: "Suche in Open Educational Resources",
            translations: {
              button: {
                buttonText: "Suche",
                buttonAriaLabel: "Suche",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "Lösche die Eingabe",
                  resetButtonAriaLabel: "Lösche die Eingabe",
                  cancelButtonText: "Abbrechen",
                  cancelButtonAriaLabel: "Abbrechen",
                },
                startScreen: {
                  recentSearchesTitle: "Suchverlauf",
                  noRecentSearchesText: "Kein Suchverlauf",
                  saveRecentSearchButtonTitle: "Im Suchverlauf speichern",
                  removeRecentSearchButtonTitle: "Aus Suchverlauf entfernen",
                  favoriteSearchesTitle: "Favoriten",
                  removeFavoriteSearchButtonTitle: "Aus Favoriten entfernen",
                },
                errorScreen: {
                  titleText: "Ergebnisse konnten nicht abgerufen werden",
                  helpText: "Überprüfen Sie Ihre Netzwerkverbindung",
                },
                footer: {
                  selectText: "Auswählen",
                  selectKeyAriaLabel: "Auswählen",
                  navigateText: "Wechseln",
                  navigateUpKeyAriaLabel: "Nach oben wechseln",
                  navigateDownKeyAriaLabel: "Nach unten wechseln",
                  closeText: "Schließen",
                  closeKeyAriaLabel: "Schließen",
                  searchByText: "Suchanbieter",
                },
                noResultsScreen: {
                  noResultsText: "Keine Ergebnisse für:",
                  suggestedQueryText: "Versuchen Sie eine Suche nach",
                  reportMissingResultsText: "Solten Ergebnisse angezeigt werden?",
                  reportMissingResultsLinkText: "Feedback",
                },
              },
            },
          },
        },
      },
    },
    pwa: {
      // https://github.com/vite-pwa/vitepress/blob/main/examples/pwa-prompt/.vitepress/config.ts#L35
      mode: "development",
      base,
      scope: base,
      includeAssets: ["favicon.svg"],
      workbox: {
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
      },
      devOptions: {
        enabled: true,
        navigateFallback: "/",
      },
    },
  })
);

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
    anchor: {
      permalink: MdItAnchor.permalink.linkAfterHeader({
        style: "aria-label",
        assistiveText: (title) => `Permalink to "${title}"`,
        visuallyHiddenClass: "visually-hidden",
        wrapper: ['<div class="header-wrapper">', "</div>"],
      }),
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
