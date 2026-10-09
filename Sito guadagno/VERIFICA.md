# Verifiche eseguite

- Build di produzione Next.js 16.4.0 completata; homepage prerenderizzata statica.
- Esportazione statica `STATIC_EXPORT=1` completata con generazione di `out/`.
- Installazione dipendenze: audit npm senza vulnerabilità segnalate al momento della verifica.
- Browser: controllato layout desktop 1200 px e mobile 390 px; misurata assenza di overflow orizzontale anche a 320 px.
- Navigazione “Chi siamo” verificata; griglia mobile a una colonna e pulsante WhatsApp flottante presenti.
- Nessun errore o avviso nella console del browser durante la verifica finale.
- Link verificati nel DOM: WhatsApp `393760521763`, fisso `+390812137555`, Maps con civico 109 e località presente negli screenshot. Non sono stati inviati messaggi o effettuate chiamate.
- Verificate funzioni per codifica URL, numeri separati, precedenza dei collegamenti espliciti e fallback per dati assenti.

Restano da inserire il dominio definitivo in `siteUrl` e foto/logo originali ad alta qualità. Il controllo `npm run check:store` segnala intenzionalmente questi punti. Instagram è facoltativo. La posizione Maps viene aperta tramite ricerca dell'indirizzo, non tramite una scheda attività verificata.

Il progetto è pronto per essere caricato su GitHub, ma non è stato pubblicato e non è stato creato un repository remoto.
