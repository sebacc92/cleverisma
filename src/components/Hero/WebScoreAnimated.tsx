import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 w-full max-w-2xl mx-auto">
      <ScoreCirclePure label="Rendimiento" />
      <ScoreCirclePure label="Accesibilidad" />
      <ScoreCirclePure label="Recomendaciones" />
      <ScoreCirclePure label="SEO" />
    </div>
  );
});

// Componente visual puro sin lógica de estado
export const ScoreCirclePure = component$((props: { label: string }) => {
  return (
    <div class="flex flex-col items-center gap-2 md:gap-4">
      <div class="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
        {/* Círculo base (gris) */}
        <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r="36"
            stroke="currentColor"
            stroke-width="6"
            fill="transparent"
            class="text-gray-200/50"
          />

          {/* Círculo de progreso animado via CSS Keyframes */}
          <circle
            cx="50" cy="50" r="36"
            stroke="currentColor"
            stroke-width="6"
            fill="transparent"
            stroke-dasharray="226.19"
            stroke-dashoffset="0"
            stroke-linecap="round"
            class="text-[#00C950] animate-score-draw"
          />
        </svg>

        <div class="absolute inset-0 flex items-center justify-center font-mono text-xl md:text-2xl font-bold text-green-800">
          100
        </div>
      </div>

      <span class="text-[10px] md:text-xs md:text-sm font-semibold text-gray-600 tracking-wider uppercase text-center leading-tight">
        {props.label}
      </span>
    </div>
  );
});