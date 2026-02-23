import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { BsWhatsapp } from "@qwikest/icons/bootstrap";
import styles from "./whatsapp-button.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const phoneNumber = "+542233490214";
  const message = encodeURIComponent(
    "Hola, me gustaría solicitar un sitio web para mi negocio. ¿Podrían brindarme más información sobre los servicios y presupuesto?"
  );
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-button"
      title="Contactanos por WhatsApp"
    >
      <BsWhatsapp width="32" height="32" />
    </a>
  );
});
