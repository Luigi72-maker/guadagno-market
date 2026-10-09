import { getWhatsAppUrl } from "@/data/store";
import Icon from "./Icon";

export default function WhatsAppLink({
  children = "Ordina su WhatsApp",
  floating = false,
}) {
  const url = getWhatsAppUrl();
  return (
    <a
      className={`button button-green ${floating ? "floating-whatsapp" : ""}`}
      href={url || "#contatti"}
      {...(url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={floating ? "Contattaci su WhatsApp" : undefined}
    >
      <Icon name="whatsapp" />
      <span>{children}</span>
    </a>
  );
}
