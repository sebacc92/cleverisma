import { component$, useSignal, $ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LuCheck, LuArrowRight, LuSparkles, LuInfo, LuCalendarClock } from "@qwikest/icons/lucide";

// --- CONFIGURACIÓN DE NEGOCIO ---
const EXCHANGE_RATE = 1400; // 1 USD = 1500 ARS

// Si es TRUE, mostramos precios de oferta
const IS_LAUNCH_MODE = true;

type Plan = {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;

  // Precios
  baseSetupUsd: number;
  baseMonthlyUsd: number;
  baseOneTimeUsd: number;

  offerSetupUsd: number;
  offerMonthlyUsd: number;
  offerOneTimeUsd: number;

  features: string[];
  renewalText?: string;
  ctaText: string;
  ctaLink: string;
  highlight: boolean;
};

const PLANS: Plan[] = [
  {
    id: 'pro',
    title: 'Web Profesional',
    subtitle: 'Diseñada para captar clientes y generar confianza',

    // Anclaje: $749 USD
    baseSetupUsd: 188,
    baseMonthlyUsd: 34,
    baseOneTimeUsd: 1125,

    offerSetupUsd: 74,
    offerMonthlyUsd: 34,
    offerOneTimeUsd: 749,

    features: [
      'Diseño Estratégico (Landing o Multi-página)',
      'Velocidad de Carga Instantánea (Qwik)',
      'Botón WhatsApp Flotante (Leads Directos)',
      'SEO Técnico (Para aparecer en Google)',
      'Hosting Edge y Dominio (Incluidos 2 años)',
      'Correos Corporativos (tu@marca.com)',
      'Propiedad total del código al finalizar'
    ],
    renewalText: 'Renovación Hosting (Año 3): $90 USD/anual',
    ctaText: 'Consultar Disponibilidad',
    ctaLink: 'https://cal.com/sebastian-cardoso-castillo/estrategia?notes=Interes:WebProfesional',
    highlight: false
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Performance',
    subtitle: 'Infraestructura de venta rápida y sin fricción',

    baseSetupUsd: 450,
    baseMonthlyUsd: 64,
    baseOneTimeUsd: 1875,

    offerSetupUsd: 188,
    offerMonthlyUsd: 64,
    offerOneTimeUsd: 1350,

    features: [
      '⚡ Todo lo del Plan Profesional',
      'Tienda Headless (Carga < 1s entre productos)',
      'Gestión Fácil (Productos, Precios, Stock)',
      'Pasarelas Seguras (Mercado Pago / Stripe)',
      'Diseño Mobile-First (Compra sin Fricción)',
      'Optimización de Imágenes con IA',
      'Carrito de Compras Optimizado'
    ],
    renewalText: 'Renovación Hosting (Año 3): $135 USD/anual',
    ctaText: 'Planificar mi Tienda',
    ctaLink: 'https://cal.com/sebastian-cardoso-castillo/estrategia?notes=Interes:Ecommerce',
    highlight: false
  },
  {
    id: 'custom',
    title: 'SaaS / App a Medida',
    subtitle: 'Para Startups y proyectos especiales',

    baseSetupUsd: 0,
    baseMonthlyUsd: 0,
    baseOneTimeUsd: 0,
    offerSetupUsd: 0,
    offerMonthlyUsd: 0,
    offerOneTimeUsd: 0,

    features: [
      'Arquitectura de Software Dedicada',
      'Base de Datos Escalable',
      'Autenticación y Paneles de Usuario',
      'Integraciones API Complejas',
      'Panel de Administración Custom',
      'SLA (Garantía de Servicio) Empresarial'
    ],
    ctaText: 'Hablar con un Especialista',
    ctaLink: 'https://cal.com/sebastian-cardoso-castillo/estrategia?notes=Interes:SaaS',
    highlight: false
  }
];

export default component$(() => {
  const isMonthly = useSignal(true);
  const isArs = useSignal(false);

  // FORMATTER
  const formatPrice = $((amount: number) => {
    if (amount === 0) return 'Consultar';

    let value = amount;
    let currency = 'USD';
    let locale = 'en-US';

    if (isArs.value) {
      value = amount * EXCHANGE_RATE;
      currency = 'ARS';
      locale = 'es-AR';
    }

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0
    }).format(value);
  });

  return (
    <section id="services" class="relative bg-gray-50 overflow-hidden pt-24 pb-32">
      <div class="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

        {/* HEADER */}
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Planes Claros, <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Sin Sorpresas</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparencia total. Financia tu web en 24 cuotas o haz un pago único bonificado.
          </p>

          {/* CONTROLES */}
          <div class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">

            {/* Moneda */}
            <div class="bg-white p-1 rounded-lg border border-gray-200 shadow-sm inline-flex">
              <button
                onClick$={() => isArs.value = false}
                class={`px-4 py-2 rounded-md text-sm font-bold transition-all ${!isArs.value ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                USD ($)
              </button>
              <button
                onClick$={() => isArs.value = true}
                class={`px-4 py-2 rounded-md text-sm font-bold transition-all ${isArs.value ? 'bg-green-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                ARS ($)
              </button>
            </div>

            {/* Frecuencia */}
            <div class="flex items-center gap-3">
              <span class={`text-sm font-bold ${isMonthly.value ? 'text-gray-900' : 'text-gray-500'}`}>
                Plan Cuotas (24 meses)
              </span>
              <button
                onClick$={() => isMonthly.value = !isMonthly.value}
                class={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${isMonthly.value ? 'bg-green-600' : 'bg-gray-600'}`}
                aria-label="Alternar frecuencia de pago"
              >
                <span class={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ${isMonthly.value ? 'translate-x-1' : 'translate-x-7'}`} />
              </button>
              <span class={`text-sm font-bold ${!isMonthly.value ? 'text-gray-900' : 'text-gray-500'}`}>
                Pago Único
              </span>
            </div>
          </div>
        </div>

        {/* PRICING GRID */}
        <div class="grid lg:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan) => {
            const isCustom = plan.id === 'custom';

            return (
              <div key={plan.id} class={`
                relative rounded-3xl p-8 transition-all duration-300 flex flex-col h-full
                ${plan.highlight
                  ? 'bg-white shadow-2xl border-2 border-green-500 transform lg:-translate-y-4 z-10'
                  : isCustom
                    ? 'bg-gray-900 text-white border border-gray-800 shadow-xl'
                    : 'bg-white shadow-lg border border-gray-200 hover:shadow-xl'}
              `}>

                {/* BADGE */}
                {plan.badge && (
                  <div class="absolute top-0 right-0 -mt-4 mr-4 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                    {plan.badge}
                  </div>
                )}

                {/* TÍTULO */}
                <h3 class={`text-2xl font-bold mb-2 ${isCustom ? 'text-white' : 'text-gray-900'}`}>
                  {plan.title}
                </h3>
                <p class={`text-sm mb-6 ${isCustom ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.subtitle}
                </p>

                {/* PRECIO DINÁMICO */}
                <div class="min-h-[140px] mb-6">
                  {isCustom ? (
                    <div class="flex items-baseline mt-4">
                      <span class="text-4xl font-extrabold text-white">Consultar</span>
                    </div>
                  ) : (
                    <>
                      {isMonthly.value ? (
                        // --- VISTA PLAN CUOTAS (MENSUAL) ---
                        <div class="animate-fadeIn">
                          <div class="flex items-center gap-2 mb-1">
                            <span class={`text-xs font-bold uppercase tracking-wide ${plan.highlight ? 'text-green-700' : 'text-gray-500'}`}>
                              Pago Inicial (Setup)
                            </span>
                            {IS_LAUNCH_MODE && (
                              <span class="bg-red-100 text-red-700 text-[10px] px-1.5 py-0.5 rounded font-bold">
                                OFERTA BETA
                              </span>
                            )}
                          </div>

                          <div class="flex items-baseline gap-2">
                            {IS_LAUNCH_MODE && (
                              <span class="text-lg text-gray-500 line-through decoration-red-400">
                                {formatPrice(plan.baseSetupUsd)}
                              </span>
                            )}
                            <span class={`text-3xl font-extrabold ${plan.highlight ? 'text-gray-900' : 'text-gray-900'}`}>
                              {formatPrice(plan.offerSetupUsd)}
                            </span>
                          </div>

                          <div class="mt-4 pt-4 border-t border-dashed border-gray-200">
                            <div class="flex items-baseline">
                              <span class="text-2xl font-bold text-green-600">+ {formatPrice(plan.offerMonthlyUsd)}</span>
                              <span class="text-gray-500 text-sm ml-1 font-medium">por mes</span>
                            </div>

                            {/* AQUÍ ESTÁ LA ACLARACIÓN DE LOS 24 MESES */}
                            <div class="flex items-start gap-1.5 mt-2">
                              <LuCalendarClock class="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                              <p class="text-xs text-gray-500 leading-tight">
                                Durante <strong>24 meses</strong>. <br />
                                Luego la web es 100% tuya.
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // --- VISTA PAGO ÚNICO ---
                        <div class="animate-fadeIn">
                          <div class="flex items-center gap-2 mb-1">
                            <span class="text-xs font-bold uppercase tracking-wide text-gray-500">
                              Precio Final
                            </span>
                            {IS_LAUNCH_MODE && (
                              <span class="bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded font-bold">
                                AHORRO TOTAL
                              </span>
                            )}
                          </div>

                          <div class="flex flex-col">
                            {IS_LAUNCH_MODE && (
                              <span class="text-lg text-gray-500 line-through decoration-gray-400">
                                {formatPrice(plan.baseOneTimeUsd)}
                              </span>
                            )}
                            <span class="text-4xl font-extrabold text-gray-900">
                              {formatPrice(plan.offerOneTimeUsd)}
                            </span>
                          </div>
                          <p class="text-xs text-green-600 font-bold mt-3 flex items-center gap-1">
                            <LuSparkles class="w-3 h-3" />
                            Sin cuotas mensuales por 2 años
                          </p>
                          <div class="mt-2 bg-gray-50 p-2 rounded border border-gray-100 flex items-start gap-2">
                            <LuInfo class="w-3 h-3 text-gray-400 mt-0.5 shrink-0" />
                            <p class="text-[10px] text-gray-500 leading-tight">
                              Incluye 24 meses de servicio completo. <br />
                              Luego decides: renuevas o te llevas el código.
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* FEATURES */}
                <ul class="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li class="flex items-start gap-3" key={feature}>
                      <div class={`${plan.highlight ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'} rounded-full p-1 shrink-0`}>
                        <LuCheck class="w-3 h-3" />
                      </div>
                      <span class={`text-sm font-medium ${isCustom ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {!isCustom && !isMonthly.value && plan.renewalText && (
                    <li class="flex items-start gap-3 pt-2 border-t border-gray-100 mt-2">
                      <div class="bg-blue-50 text-blue-600 rounded-full p-1 shrink-0">
                        <LuInfo class="w-3 h-3" />
                      </div>
                      <span class="text-xs font-semibold text-blue-600">
                        {plan.renewalText}
                      </span>
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.ctaLink}
                  class={`
                    w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-base transition-all transform hover:-translate-y-1 mt-auto
                    ${plan.highlight
                      ? 'bg-green-700 text-white shadow-lg hover:bg-green-800 hover:shadow-green-500/30'
                      : isCustom
                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                        : 'bg-green-50 text-green-700 hover:bg-green-100'}
                  `}
                >
                  {plan.ctaText}
                  <LuArrowRight class="w-5 h-5" />
                </Link>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});