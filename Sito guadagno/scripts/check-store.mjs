import { store, getWhatsAppUrl, getMapsUrl } from "../src/data/store.js";
const missing = [];
if (!getWhatsAppUrl()) missing.push("whatsappPhone oppure whatsapp");
if (!store.address) missing.push("address");
if (!getMapsUrl()) missing.push("googleMaps oppure address");
if (!store.hours.length) missing.push("hours");
if (!store.siteUrl) missing.push("siteUrl");
if (Object.values(store.images).some((image) => image.crop))
  missing.push("foto e logo originali (attualmente screenshot provvisori)");
if (missing.length) {
  console.error(
    "Prima della pubblicazione completa src/data/store.js:\n- " +
      missing.join("\n- "),
  );
  process.exitCode = 1;
} else
  console.log(
    "Dati principali compilati. Verifica manualmente numero, orari e posizione.",
  );
