import { component$ } from '@builder.io/qwik';

// Import ESM con optimización automática (srcset, width/height, webp, lazy+async)
import ImgSebastian from '~/media/images/Sebastian-Cardoso-Castillo.webp?quality=72&jsx';
import ImgDai from '~/media/images/dai.webp?quality=72&jsx';

export default component$(() => {
  return (
    <section id="about" class="relative bg-gradient-to-br from-white via-blue-50/40 to-purple-50/30 overflow-hidden pt-22">
      {/* Animated Background Elements */}
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-indigo-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div class="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Title Section */}
        <div class="inline-block px-4 py-2 mb-4 bg-purple-100 border border-purple-300 rounded-full">
          <span class="text-purple-700 text-sm font-semibold uppercase tracking-wider">Sobre Nosotros</span>
        </div>

        {/* Main Content Section - Image Left, Content Right */}
        <div class="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start mb-20">
          {/* Text Content */}
          <div class="animate-fade-up pt-8" style={{ animationDelay: '0.2s' }}>
            <div class="space-y-6">
              <div>
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  Construimos sitios web que
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> venden</span>
                </h2>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  Somos especialistas en desarrollo web de alto rendimiento. Nos enfocamos en velocidad real en mobile, accesibilidad y experiencia de usuario que convierte. Estamos ampliando nuestras capacidades en automatización con IA y marketing digital.
                </p>
              </div>

              <div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">Nuestra Misión</h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                  Ayudar a empresas, negocios, emprendedores y profesionales a incrementar su presencia digital para vender más, ahorrar tiempo automatizando procesos repetitivos y analizar el comportamiento de sus usuarios para mejorar su estrategia de ventas.
                </p>
              </div>
            </div>
          </div>

          {/* Team Images Section */}
          <div class="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div class="grid md:grid-cols-2 gap-2 lg:gap-8 max-w-lg">
              {/* Card Sebastián */}
              <div class="relative group rounded-3xl">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:blur-3xl"></div>
                <div class="relative bg-white border-2 border-blue-200 rounded-3xl pb-4 lg:p-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-blue-400">
                  <div class="relative overflow-hidden rounded-t-2xl mb-4">
                    <ImgSebastian
                      alt="Sebastián - Founder y Dev Front/Perf"
                      class="w-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                      style={{ height: '350px' }}
                      sizes="(min-width: 768px) 250px, (min-width: 640px) 512px, 90vw"
                      loading="lazy"
                      decoding="async"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div class="text-center">
                    <h4 class="font-bold text-lg text-gray-900 mb-1">Sebastián</h4>
                    <p class="text-sm text-blue-600 font-medium">Founder y Dev Front/Perf</p>
                  </div>
                </div>
              </div>

              {/* Card Daiana */}
              <div class="relative group rounded-3xl">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:blur-3xl"></div>
                <div class="relative bg-white border-2 border-purple-200 rounded-3xl pb-4 lg:p-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-purple-400">
                  <div class="relative overflow-hidden rounded-t-2xl mb-4">
                    <ImgDai
                      alt="Daiana - Marketing y Operaciones"
                      class="w-full object-cover object-top rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                      style={{ height: '350px' }}
                      sizes="(min-width: 768px) 250px, (min-width: 640px) 512px, 90vw"
                      loading="lazy"
                      decoding="async"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div class="text-center">
                    <h4 class="font-bold text-lg text-gray-900 mb-1">Daiana</h4>
                    <p class="text-sm text-purple-600 font-medium">Marketing en formación y Operaciones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/10 to-transparent rounded-3xl"></div>

          <div class="relative z-10 text-center pb-12">
            <div class="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Stat 1 */}
              <div class="relative group animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div class="relative">
                  <div class="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"></div>

                  <div class="relative bg-white border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-lg">
                    <div class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                      3+
                    </div>
                    <p class="text-lg font-semibold text-gray-900 mb-1">Proyectos Completados</p>
                    <p class="text-sm text-gray-600">Startups y empresas satisfechas</p>
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div class="relative group animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div class="relative">
                  <div class="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"></div>

                  <div class="relative bg-white border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-lg">
                    <div class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                      100%
                    </div>
                    <p class="text-lg font-semibold text-gray-900 mb-1">Clientes Satisfechos</p>
                    <p class="text-sm text-gray-600">Tasa de retención excepcional</p>
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div class="relative group animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <div class="relative">
                  <div class="absolute -inset-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"></div>

                  <div class="relative bg-white border-2 border-pink-200 rounded-2xl p-8 hover:border-pink-400 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-lg">
                    <div class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600 mb-2">
                      24/7
                    </div>
                    <p class="text-lg font-semibold text-gray-900 mb-1">Soporte Técnico</p>
                    <p class="text-sm text-gray-600">Asistencia continua</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});