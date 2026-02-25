import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import { ScrollToTop } from "~/components/scroll-to-top";
import WhatsappButton from "~/components/WhatsappButton/WhatsappButton";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <Header />
      <main class="pt-20 lg:pt-0">
        <Slot />
      </main>
      <ScrollToTop />
      <WhatsappButton />
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  meta: [
    {
      name: 'description',
      key: 'description',
      content: 'Agencia digital enfocada en desarrollo web de alto rendimiento (Qwik), automatización con IA y estrategias de performance técnica.',
    },
    {
      property: 'og:image',
      key: 'og:image',
      content: '/images/oso_panda_usando_notebook.png',
    }
  ],
  scripts: [
    {
      props: {
        type: 'application/ld+json',
      },
      // Usamos JSON.stringify para evitar errores de sintaxis manuales
      script: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ProfessionalService",
            "@id": "https://cleverisma.com/#organization",
            "name": "Cleverisma",
            "url": "https://cleverisma.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://cleverisma.com/favicon.svg",
              "width": 512,
              "height": 512
            },
            "founder": {
              "@type": "Person",
              "name": "Seba Cardoso",
              "jobTitle": "Lead Developer & Founder"
            },
            "description": "Agencia digital enfocada en desarrollo web de alto rendimiento (Qwik), automatización con IA y estrategias de performance técnica.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Miramar",
              "addressRegion": "Buenos Aires",
              "addressCountry": "AR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-38.2833",
              "longitude": "-57.8333"
            },
            "priceRange": "$$"
          },
          {
            "@type": "WebSite",
            "@id": "https://cleverisma.com/#website",
            "url": "https://cleverisma.com",
            "name": "Cleverisma",
            "publisher": {
              "@id": "https://cleverisma.com/#organization"
            },
            "inLanguage": "es-AR"
          }
        ]
      }),
    },
  ],
};