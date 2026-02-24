import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { LuChevronUp } from "@qwikest/icons/lucide";

export const ScrollToTop = component$(() => {
  const show = useSignal(false);
  // Referencia al elemento centinela para observarlo sin buscarlo en el DOM
  const sentinelRef = useSignal<Element>();

  useVisibleTask$(({ cleanup }) => {
    if (!sentinelRef.value) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Si el centinela NO se ve, mostramos el botón
      show.value = !entry.isIntersecting;
    }, {
      rootMargin: "0px",
      threshold: 0
    });

    observer.observe(sentinelRef.value);

    cleanup(() => observer.disconnect());
  });

  const scrollToTop = $(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <>
      <div
        ref={sentinelRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '120px',
          width: '100%',
          pointerEvents: 'none',
          visibility: 'hidden',
          zIndex: -1
        }}
        aria-hidden="true"
      />

      <button
        type="button"
        aria-label="Volver arriba"
        onClick$={scrollToTop}
        class={`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 z-50 hover:-translate-y-1 hover:shadow-xl ${show.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
      >
        <LuChevronUp class="w-6 h-6" />
      </button>
    </>
  );
});