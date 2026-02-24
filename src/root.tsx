import { component$, isDev, useStyles$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import globalCss from './global.css?inline';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  useStyles$(globalCss);
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <link
          rel="preload"
          href="/fonts/PlusJakartaSans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        {/* <Chatbot /> */}
      </body>
    </QwikCityProvider>
  );
});
