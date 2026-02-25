import { component$ } from "@builder.io/qwik";
import ImgPortfolioSebastian from '~/media/images/portfolio-sebastian.png?quality=75&jsx';
import ImgPortfolioItalianos from '~/media/images/portfolio-italianos.png?quality=75&jsx';
import ImgPortfolioFabian from '~/media/images/portfolio-fabian.png?quality=75&jsx';
import ImgPortfolioEnlaceSalud from '~/media/images/portfolio-enlace-salud.png?quality=75&jsx';
import ImgPortfolioKoop from '~/media/images/portfolio-koop.png?quality=75&jsx';
import { CircleScore } from "~/components/ui/CircleScore/CircleScore";

export default component$(() => {
  const projects = [
    {
      title: "Koop Viajes",
      description: "Agencia de viajes dedicada a crear experiencias inolvidables y destinos exclusivos. (Próximamente)",
      image: ImgPortfolioKoop,
      link: "https://koop.com.ar/",
      tags: ["Turismo", "Plataforma"],
      wip: true
    },
    {
      title: "Enlace en Salud",
      description: "Soluciones integrales en gestión sanitaria, salud ocupacional y bienestar laboral.",
      image: ImgPortfolioEnlaceSalud,
      link: "https://enlacesalud.com.ar/",
      tags: ["Salud", "Gestión", "Empresas"]
    },
    {
      title: "Sebastian Cardoso",
      description: "Portfolio personal y servicios de desarrollo web de alto rendimiento.",
      image: ImgPortfolioSebastian,
      link: "https://sebastiancardoso.com/es/",
      tags: ["Desarrollo Web", "Personal Branding"]
    },
    {
      title: "Italianos en Miramar",
      description: "Plataforma comunitaria para conectar a la comunidad italiana en Miramar.",
      image: ImgPortfolioItalianos,
      link: "https://italianosenmiramar.com/es/",
      tags: ["Comunidad", "Servicios"]
    },
    {
      title: "Coach Fitness",
      description: "Sitio web para programas de entrenamiento personalizado y transformación integral.",
      image: ImgPortfolioFabian,
      link: "https://fa.cleverisma.com",
      tags: ["Fitness", "Coaching"]
    }
  ];

  return (
    <section id="portfolio" class="relative bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/30 overflow-hidden py-22">
      {/* Animated Background Elements */}
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-300/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div class="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Title Section */}
        <div class="text-center mb-16">
          <div class="inline-block mb-6 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full animate-fade-up">
            <span class="text-purple-700 text-sm font-semibold uppercase tracking-wider">Portafolio</span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Nuestros Proyectos
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Destacados</span>
          </h2>
          <p class="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Explora cómo ayudamos a nuestros clientes a transformar su presencia digital con diseño moderno y tecnología de punta.
          </p>
        </div>

        {/* Projects Grid */}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              {/* Image Container */}
              <div class="relative h-48 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <project.image
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  alt={project.title}
                />

                {/* PageSpeed Badge */}
                {'wip' in project && project.wip ? (
                  <div class="absolute top-3 left-3 z-30 bg-amber-400 px-3 py-1 rounded-full shadow-lg border border-amber-300 flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-amber-950 animate-pulse"></div>
                    <span class="text-xs font-bold text-amber-950 uppercase tracking-wider">En Desarrollo</span>
                  </div>
                ) : (
                  <div class="absolute top-3 right-3 z-20 bg-green-700 px-3 py-1 rounded-full shadow-lg border border-green-500 flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    <span class="text-xs font-bold text-white">CORE WEB VITALS: 100/100</span>
                  </div>
                )}

                <div class="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-white font-medium hover:underline"
                  >
                    {'wip' in project && project.wip ? 'Ver Preview' : 'Visitar Sitio'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div class="p-6">
                <div class="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} class="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Performance Indicator - Hide for WIP if needed, or keep 100 if we want to show off :) Let's hide score for WIP and show "Building" */}
                <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
                  {'wip' in project && project.wip ? (
                    <div class="flex items-center gap-2 text-amber-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin-slow"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
                      <span class="text-sm font-bold">Construyendo experiencia...</span>
                    </div>
                  ) : (
                    <>
                      <div class="relative w-14 h-14 flex-shrink-0">
                        <CircleScore score={100} />
                        <div class="absolute inset-0 flex items-center justify-center">
                          <span class="text-sm font-bold text-green-700">100</span>
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-sm font-bold text-gray-900">Rendimiento</span>
                        <span class="text-xs text-gray-500">Google PageSpeed</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
