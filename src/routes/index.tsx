import { component$ } from "@builder.io/qwik";
import { routeAction$, type DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero/Hero";
import AuthoritySection from "~/components/Authority/AuthoritySection";
import Services from "~/components/Services/Services";
import WorkProcess from "~/components/WorkProcess/WorkProcess";
import About from "~/components/About/About";
import Portfolio from "~/components/Portfolio/Portfolio";
import Contacto from "~/components/Contacto/Contacto";

export const useAuditWebsite = routeAction$(async (data, requestEvent) => {
  console.log('Audit request data:', data);
  const token = (data as any)['cf-turnstile-response'] as string | undefined;
  if (!token) {
    return { success: false, message: 'Falta la verificación anti-bots. Por favor, intenta nuevamente.' };
  }

  const SECRET_KEY = requestEvent.env.get('CLOUDFLARE_TURNSTILE_SECRET_KEY');
  if (!SECRET_KEY) {
    console.error('Falta TURNSTILE_SECRET_KEY en el servidor');
    return { success: false, message: 'Error de configuración del servidor (captcha).' };
  }

  const remoteip =
    requestEvent.request.headers.get('cf-connecting-ip') ||
    requestEvent.request.headers.get('x-forwarded-for')?.split(',')[0] ||
    undefined;

  let result: any;
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: SECRET_KEY,
        response: token,
        remoteip,
      }),
    });
    result = await response.json();
  } catch (error) {
    console.error('Turnstile validation error:', error);
    return { success: false, message: 'Error validando el captcha.' };
  }

  // Importante: para el form de auditoría usamos "audit"
  if (result?.action && result.action !== 'audit') {
    console.warn('Acción inesperada en Turnstile:', result.action);
    return { success: false, message: 'Validación de seguridad no válida (action mismatch).' };
  }

  if (!result?.success) {
    console.warn('Turnstile inválido:', result);
    const code = result['error-codes']?.join(', ') ?? 'desconocido';
    return { success: false, message: `La validación falló (${code}). Por favor, intenta nuevamente.` };
  }

  // EmailJS
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_AUDIT_REQUEST_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_AUDIT_REQUEST_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const PRIVATE_KEY = requestEvent.env.get('EMAILJS_PRIVATE_KEY');

  if (!SERVICE_ID || !TEMPLATE_AUDIT_REQUEST_ID || !PUBLIC_KEY || !PRIVATE_KEY) {
    console.error('Faltan credenciales de EmailJS');
    return { success: false, message: 'Faltan credenciales de EmailJS en el servidor.' };
  }

  const payload = {
    websiteUrl: (data as any).websiteUrl,
    email: (data as any).email,
  };

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_AUDIT_REQUEST_ID,
        user_id: PUBLIC_KEY,
        template_params: payload,
        accessToken: PRIVATE_KEY,
      }),
    });

    if (!res.ok) {
      throw new Error(`EmailJS request failed with status ${res.status}`);
    }

    return {
      success: true,
      message: '¡Solicitud enviada! Te contactaremos pronto con el reporte de auditoría.',
    };
  } catch (err) {
    console.error('EmailJS FAILED...', err);
    return {
      success: false,
      message: 'Error al enviar la solicitud. Intenta nuevamente.',
    };
  }
});

export const useContact = routeAction$(async (data, requestEvent) => {
  console.log('Contact request data:', data);
  const token = (data as any)['cf-turnstile-response'] as string | undefined;
  if (!token) {
    return { success: false, message: 'Falta la verificación anti-bots. Por favor, intenta nuevamente.' };
  }

  const SECRET_KEY = requestEvent.env.get('CLOUDFLARE_TURNSTILE_SECRET_KEY');
  if (!SECRET_KEY) {
    console.error('Falta TURNSTILE_SECRET_KEY en el servidor');
    return { success: false, message: 'Error de configuración del servidor (captcha).' };
  }

  const remoteip =
    requestEvent.request.headers.get('cf-connecting-ip') ||
    requestEvent.request.headers.get('x-forwarded-for')?.split(',')[0] ||
    undefined;

  let result: any;
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: SECRET_KEY, response: token, remoteip }),
    });
    result = await response.json();
  } catch (error) {
    console.error('Turnstile validation error:', error);
    return { success: false, message: 'Error validando el captcha.' };
  }

  if (result?.action && result.action !== 'contact') {
    console.warn('Acción inesperada en Turnstile:', result.action);
    return { success: false, message: 'Validación de seguridad no válida (action mismatch).' };
  }

  if (!result?.success) {
    console.warn('Turnstile inválido:', result);
    const code = result['error-codes']?.join(', ') ?? 'desconocido';
    return { success: false, message: `La validación falló (${code}). Por favor, intenta nuevamente.` };
  }

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_CONTACT_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const PRIVATE_KEY = requestEvent.env.get('EMAILJS_PRIVATE_KEY');

  if (!SERVICE_ID || !TEMPLATE_CONTACT_ID || !PUBLIC_KEY || !PRIVATE_KEY) {
    console.error('Faltan credenciales de EmailJS');
    return { success: false, message: 'Faltan credenciales de EmailJS en el servidor.' };
  }

  const payload = {
    from_name: (data as any).nombre,
    from_email: (data as any).email,
    telefono: (data as any).telefono,
    proyecto: (data as any).proyecto,
    website: (data as any).website || 'No especificado',
  };


  try {
    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_CONTACT_ID,
        user_id: PUBLIC_KEY,
        template_params: payload,
        accessToken: PRIVATE_KEY,
      }),
    });
    return { success: true, message: '¡Mensaje enviado correctamente! Te responderemos pronto.' };
  } catch (err: any) {
    console.error('EmailJS error', err);
    return { success: false, message: 'Error al enviar el mensaje. Intenta nuevamente.' };
  }
});

export default component$(() => {
  return (
    <>
      <Hero />
      <AuthoritySection />
      <WorkProcess />
      <Services />
      <About />
      <Portfolio />
      <Contacto />
    </>
  );
});

export const head: DocumentHead = {
  title: "Cleverisma - Desarrollo Web de alto rendimiento",
  meta: [
    { name: "description", key: "description", content: "Especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico para startups y empresas tecnológicas." },
    { name: "keywords", content: "diseño web, automatización IA, marketing digital, startups, agencia digital, desarrollo web, inteligencia artificial, transformación digital, growth hacking, UX/UI" },
    { name: "author", content: "Cleverisma" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://cleverisma.com/" },
    { property: "og:title", content: "Cleverisma - Diseño Web, IA y Marketing Digital para Startups" },
    { property: "og:description", key: "og:description", content: "Especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico para startups y empresas tecnológicas." },
    { property: "og:image", key: "og:image", content: "/images/oso_panda_usando_notebook.png" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://cleverisma.com/" },
    { property: "twitter:title", content: "Cleverisma - Diseño Web, IA y Marketing Digital para Startups" },
    { property: "twitter:description", content: "Especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico para startups." },
    { property: "twitter:image", content: "/images/oso_panda_usando_notebook.png" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "language", content: "Spanish" },
    { name: "geo.region", content: "AR-B" },
    { name: "geo.placename", content: "Buenos Aires" },
    { name: "geo.position", content: "-34.603722;-58.381592" },
    { name: "ICBM", content: "-34.603722, -58.381592" },
  ],
  links: [
    // Nota: El preload se omite porque la imagen ya tiene loading="eager" y fetchPriority="high"
    // Además, Qwik genera URLs optimizadas con hashes que cambian en cada build
    // La imagen se carga eficientemente mediante el componente ImagePanda optimizado
  ],
};