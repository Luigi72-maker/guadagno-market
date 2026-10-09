import {
  store,
  services,
  steps,
  getWhatsAppUrl,
  getMapsUrl,
} from "@/data/store";
import StoreImage from "@/components/StoreImage";
import WhatsAppLink from "@/components/WhatsAppLink";
import Icon from "@/components/Icon";

export default function Home() {
  const mapsUrl = getMapsUrl();
  return (
    <>
      <a className="skip-link" href="#contenuto">
        Vai al contenuto
      </a>
      <div className="hero-background">
        <header className="container header">
          <a className="brand" href="#" aria-label={`${store.name}, homepage`}>
            <StoreImage image={store.images.logo} className="logo" priority />
            <span>{store.name}</span>
          </a>
          <nav aria-label="Navigazione principale">
            <a
              className="button button-secondary header-secondary"
              href="#servizi"
            >
              Spesa fresca ogni giorno
            </a>
            <a className="button button-green button-small" href="#chi-siamo">
              Chi siamo
            </a>
          </nav>
        </header>
        <main id="contenuto">
          <section className="container hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <span className="eyebrow-badge">Alimentari di quartiere</span>
              <h1 id="hero-title">
                La spesa
                <br />
                buona, fresca
                <br />e vicina a casa.
              </h1>
              <p>
                Da {store.name} trovi salumi scelti, frutta e verdura di
                stagione, prodotti da dispensa e tutto il necessario per una
                spesa quotidiana semplice e genuina.
              </p>
              <WhatsAppLink />
            </div>
            <div className="daily-card">
              <div className="daily-label">
                BANCO DEL GIORNO
                <span aria-hidden="true" />
              </div>
              <StoreImage
                image={store.images.store}
                className="shop-photo"
                priority
              />
              <h2>
                Prodotti selezionati,
                <br className="desktop-break" /> servizio familiare e spesa
                pronta quando ti serve.
              </h2>
              <ul>
                {store.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
          <section
            id="chi-siamo"
            className="services-section section-surface"
            aria-labelledby="services-title"
          >
            <div className="container">
              <div className="section-heading">
                <p className="eyebrow">Fresco, scelto, quotidiano</p>
                <h2 id="services-title">
                  Tutto quello che serve
                  <br />
                  per una spesa fatta bene.
                </h2>
                <p>
                  Passa in negozio oppure scrivici su WhatsApp: prepariamo la
                  <br className="desktop-break" /> spesa, i panini e
                  organizziamo ritiro o consegna a domicilio.
                </p>
              </div>
              <div className="services-grid" id="servizi">
                {services.map((service) => (
                  <article
                    key={service.title}
                    className={`service-card theme-${service.theme}`}
                  >
                    <div className="icon-box">
                      <Icon name={service.icon} />
                    </div>
                    {service.image && (
                      <StoreImage image={store.images[service.image]} />
                    )}
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <span className="service-badge">{service.badge}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section
            className="ordering section-surface"
            aria-labelledby="order-title"
          >
            <div className="container">
              <div className="section-heading">
                <p className="eyebrow">FACILE E VELOCE</p>
                <h2 id="order-title">Ordina in tre semplici passaggi.</h2>
                <p>
                  Spesa, panini e consegna a domicilio: basta un messaggio su
                  WhatsApp.
                </p>
              </div>
              <ol className="steps">
                {steps.map((step, index) => (
                  <li className={`step theme-${step.theme}`} key={step.title}>
                    <span className="step-number">0{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
          <section
            id="contatti"
            className="contact-section"
            aria-labelledby="contact-title"
          >
            <div className="container">
              <div className="section-heading">
                <p className="eyebrow">Passa a trovarci</p>
                <h2 id="contact-title">
                  Orari, indirizzo e ritiro in negozio.
                </h2>
              </div>
              <div className="contact-grid">
                <article className="contact-card">
                  <div className="icon-box">
                    <Icon name="clock" />
                  </div>
                  <h3>Orari di apertura</h3>
                  {store.hours.length ? (
                    <dl className="hours">
                      {store.hours.map(({ days, time }) => (
                        <div key={days}>
                          <dt>{days}</dt>
                          <dd>{time}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <p className="contact-detail">Orari in aggiornamento.</p>
                  )}
                  <p>
                    Gli orari possono variare nei giorni festivi: contattaci per
                    conferma o per prenotare la spesa da ritirare.
                  </p>
                </article>
                <article className="contact-card location-card">
                  <div className="icon-box">
                    <Icon name="pin" />
                  </div>
                  <h3>Dove siamo</h3>
                  <address className="contact-detail">
                    {store.address || "Indirizzo in aggiornamento."}
                  </address>
                  <p>
                    Per informazioni, disponibilità prodotti, consegna a
                    domicilio o per ordinare con ritiro in negozio, contattaci
                    direttamente su WhatsApp.
                  </p>
                  {store.phone && (
                    <p>
                      <a className="phone-link" href={`tel:${store.phone}`}>
                        Chiamaci: {store.phoneLabel || store.phone}
                      </a>
                    </p>
                  )}
                  {mapsUrl ? (
                    <a
                      className="button button-white"
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apri indicazioni
                    </a>
                  ) : (
                    <button className="button button-white" disabled>
                      Indicazioni in aggiornamento
                    </button>
                  )}
                </article>
              </div>
              {!getWhatsAppUrl() && (
                <p className="contact-status" role="status">
                  Il contatto WhatsApp sarà disponibile a breve. Ti aspettiamo
                  in negozio.
                </p>
              )}
              {store.instagram && (
                <p className="social-link">
                  <a
                    href={store.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Seguici su Instagram ↗
                  </a>
                </p>
              )}
            </div>
          </section>
          <section
            className="final-section section-surface"
            aria-labelledby="cta-title"
          >
            <div className="container">
              <div className="cta">
                <div>
                  <h2 id="cta-title">
                    Vuoi ordinare la spesa
                    <br />o i panini su WhatsApp?
                  </h2>
                  <p>
                    Scrivici: confermiamo disponibilità, prepariamo tutto e
                    scegli
                    <br className="desktop-break" /> tu tra ritiro al volo o
                    consegna a domicilio.
                  </p>
                </div>
                <WhatsAppLink>Contattaci ora</WhatsAppLink>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="container footer">
        <strong>{store.name}</strong>
        <p>Alimentari locali · Prodotti freschi · Ritiro in negozio</p>
      </footer>
      <WhatsAppLink floating>WhatsApp</WhatsAppLink>
    </>
  );
}
