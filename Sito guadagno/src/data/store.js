// Modifica qui i dati del negozio. Le stringhe vuote sono dati da confermare.
export const store = {
  name: "Guadagno Market",
  phone: "+390812137555", // Numero fisso, solo per chiamate.
  phoneLabel: "081 213 7555",
  whatsappPhone: "+393760521763", // Numero separato per WhatsApp.
  whatsapp: "", // Link facoltativo; altrimenti viene usato whatsappPhone.
  whatsappMessage: "Ciao Guadagno Market! Vorrei informazioni per un ordine.",
  instagram: "",
  googleMaps: "", // Incolla il link della scheda Google Maps verificata.
  address: "Via Francesco Cappiello 109 — San Giorgio a Cremano (NA)",
  hours: [
    { days: "Dal lunedì al sabato", time: "07:30–14:00 · 16:30–19:30" },
    { days: "Domenica", time: "09:30–13:30" },
  ],
  siteUrl: "", // URL pubblico definitivo, incluso https://.
  description:
    "Salumeria, frutta e verdura di stagione, panini e spesa quotidiana. Da Guadagno Market, la spesa buona, fresca e vicina a casa.",
  highlights: [
    "Salumeria tagliata al momento",
    "Frutta e verdura di stagione",
    "Ordini rapidi via WhatsApp con ritiro",
  ],
  // Le immagini provvisorie sono porzioni VISUALIZZATE degli screenshot originali.
  // Per usare una foto originale: cambia src e rimuovi crop.
  images: {
    logo: {
      src: "/images/logo.png",
      alt: "Logo Guadagno Market",
      crop: [1200, 555, 49, 30, 54, 54],
    },
    store: {
      src: "/images/negozio.png",
      alt: "Ingresso del negozio Guadagno Market",
      crop: [1200, 555, 644, 182, 481, 189],
    },
    deli: {
      src: "/images/salumeria.png",
      alt: "Banco salumeria con affettati e formaggi",
      crop: [1187, 537, 62, 232, 311, 125],
    },
    produce: {
      src: "/images/ortofrutta.png",
      alt: "Banco di frutta e verdura del negozio",
      crop: [1187, 537, 437, 232, 311, 125],
    },
  },
};

export function getWhatsAppUrl(data = store) {
  if (data.whatsapp) return data.whatsapp;
  const number = (data.whatsappPhone || "").replace(/\D/g, "");
  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(data.whatsappMessage)}`
    : null;
}
export function getMapsUrl(data = store) {
  return (
    data.googleMaps ||
    (data.address
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.address)}`
      : null)
  );
}

export const services = [
  {
    title: "Salumeria",
    text: "Affettati, formaggi e specialità selezionate, tagliate al momento per panini, aperitivi e tavole di famiglia.",
    badge: "Taglio fresco",
    theme: "white",
    icon: "knife",
    image: "deli",
  },
  {
    title: "Ortofrutta",
    text: "Frutta e verdura di stagione, scelte ogni giorno con attenzione alla qualità, al gusto e alla freschezza.",
    badge: "Di stagione",
    theme: "mint",
    icon: "carrot",
    image: "produce",
  },
  {
    title: "Panini d’asporto",
    text: "Panini imbottiti preparati al momento per la pausa pranzo: ordina su WhatsApp e passa a ritirarli al volo.",
    badge: "Pronti al momento",
    theme: "peach",
    icon: "bread",
  },
  {
    title: "Spesa quotidiana",
    text: "Pane, latte, pasta, conserve, bevande e piccoli indispensabili per completare la spesa senza fretta.",
    badge: "Sempre utile",
    theme: "butter",
    icon: "bag",
  },
];
export const steps = [
  {
    title: "Scrivici su WhatsApp",
    text: "Mandaci la lista della spesa oppure il tuo panino preferito.",
    theme: "white",
  },
  {
    title: "Confermiamo noi",
    text: "Ti diciamo subito disponibilità, tempi e totale dell’ordine.",
    theme: "mint",
  },
  {
    title: "Ritiro o consegna",
    text: "Passa in negozio oppure ricevi la spesa a domicilio.",
    theme: "butter",
  },
];
