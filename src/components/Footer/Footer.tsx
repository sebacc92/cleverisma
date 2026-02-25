import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuInstagram, LuLinkedin, LuYoutube } from "@qwikest/icons/lucide";
import { BsTiktok } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <footer class="bg-gray-50 border-t border-gray-200">
      <div class="container mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">A</span>
              </div>
              <an class="text-xl font-bold text-gray-900">Cleverisma</an>
            </div>
            <p class="text-gray-600 mb-6 max-w-md">
              Creamos sitios webs veloces que mejoran tus Core Web Vitals. Más velocidad, mas retención, mejor SEO, más clientes. Simple.
            </p>
            <div class="flex space-x-4">
              <a href="https://linkedin.com/in/sebastiancardoso92/" aria-label="Seguir a Cleverisma en LinkedIn" class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300">
                <LuLinkedin class="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@sebacc92" aria-label="Seguir a Cleverisma en YouTube" class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300">
                <LuYoutube class="w-5 h-5" />
              </a>
              <a href="https://tiktok.com/@sebacc92" aria-label="Seguir a Cleverisma en TikTok" class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300">
                <BsTiktok class="w-5 h-5" />
              </a>
              <a href="https://instagram.com/sebacc92" aria-label="Seguir a Cleverisma en Instagram" class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300">
                <LuInstagram class="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p class="font-semibold text-gray-900 mb-4">Servicios</p>
            <ul class="space-y-2">
              <li><Link href="#" class="text-gray-600 hover:text-purple-600 transition-colors">Diseño Web</Link></li>
              <li><Link href="#" class="text-gray-600 hover:text-purple-600 transition-colors">IA & Automatización</Link></li>
              <li><Link href="#" class="text-gray-600 hover:text-purple-600 transition-colors">Marketing Digital</Link></li>
              <li><Link href="#services" class="text-gray-600 hover:text-purple-600 transition-colors">Consultoría</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p class="font-semibold text-gray-900 mb-4">Empresa</p>
            <ul class="space-y-2">
              <li><a href="#about" class="text-gray-600 hover:text-purple-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#portfolio" class="text-gray-600 hover:text-purple-600 transition-colors">Portafolio</a></li>
              <li><a href="#contacto" class="text-gray-600 hover:text-purple-600 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div class="pt-8">
          {/* Bottom Bar */}
          <div class="pt-8 border-t border-gray-200 text-center">
            <p class="text-gray-600 text-sm mb-4">
              Hecho con ❤️ para ayudar a tu negocio a crecer
            </p>
            <p class="text-gray-600 text-sm">
              © {new Date().getFullYear()} Cleverisma. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});