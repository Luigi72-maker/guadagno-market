# Guadagno Market

Sito Next.js / React ricostruito dagli screenshot forniti, con CSS semplice, contenuti statici e nessun database. Non usa Framer. Font Baloo 2 e Nunito Sans ospitati automaticamente dal progetto tramite `next/font` (scaricati durante la build, nessuna richiesta a Google dal browser dei visitatori).

## 1. Avvio locale

Installa Node.js 22 LTS o successivo con npm. Apri un terminale **in questa cartella**, dove si trova `package.json`:

```sh
npm ci
npm run dev
```

Apri http://localhost:3000. Per fermare il server premi Ctrl+C.

Per verificare la versione di produzione:

```sh
npm run build
npm start
```

La prima installazione e la compilazione richiedono accesso a Internet per dipendenze e font. La homepage è prerenderizzata staticamente; su Vercel le immagini sono ottimizzate da Next.js.

## 2. Modifiche

- `src/data/store.js`: nome, telefono, WhatsApp, Instagram, indirizzo, link Maps, orari, URL pubblico, immagini, servizi e passaggi di ordinazione.
- `src/app/page.js`: struttura e testi della pagina.
- `src/app/globals.css`: colori, dimensioni, spazi e regole responsive.
- `src/app/layout.js`: font, title, description e Open Graph.
- `src/components/`: componenti riutilizzabili per immagini, icone e pulsanti WhatsApp.
- `public/images/`: logo e fotografie.

Telefono fisso, WhatsApp, civico e orari sono compilati con i dati confermati. La località proviene dagli screenshot. Instagram, URL della scheda Maps e dominio restano facoltativi o da completare. Se si svuotano i campi, si attivano i seguenti fallback. Il sito mostra “Orari in aggiornamento” e “Indirizzo in aggiornamento”. Senza contatto WhatsApp, le CTA portano alla sezione contatti; senza indirizzo/link Maps il relativo pulsante è disabilitato. Compila i dati prima della pubblicazione operativa.

Inserisci il telefono con prefisso internazionale, senza numero di esempio: `whatsappPhone: '+39…'`. Il collegamento WhatsApp viene generato automaticamente. Un link in `whatsapp` ha precedenza sul numero WhatsApp. `phone` e `phoneLabel` sono invece riservati al telefono fisso, mostrato con un link per chiamare. Il testo iniziale è in `whatsappMessage`. Per Maps puoi incollare un link verificato in `googleMaps`, oppure inserire l'indirizzo: il sito genera una ricerca Google Maps.

Gli orari sono un array di oggetti `{ days: 'giorno o gruppo di giorni', time: 'orario confermato' }`. Sono inseriti gli orari e il civico confermati nel messaggio successivo: lunedì–sabato 07:30–14:00 e 16:30–19:30; domenica 09:30–13:30; civico 109.

### Fotografie

Le immagini incluse sono gli screenshot forniti, visualizzati attraverso una finestra CSS sulle sole aree fotografiche. Sono **provvisori a risoluzione limitata**, non fotografie originali. `crop` contiene `[larghezza screenshot, altezza screenshot, x, y, larghezza area, altezza area]`.

Per ottenere la qualità definitiva:

1. Inserisci il logo e le foto originali in `public/images/`, preferibilmente WebP (foto larghe 1000–1400 px, evitando file inutilmente grandi).
2. In `store.images`, cambia `src` con il nuovo percorso, aggiorna `alt` e **rimuovi `crop`** dall'immagine sostituita.
3. Per il logo originale usa un'immagine quadrata. Le foto vengono adattate senza deformazioni.

Il layout desktop mantiene la disposizione 3+1 delle card mostrata negli screenshot. Sotto 1000 px usa due colonne; sotto 680 px una colonna e pulsante WhatsApp flottante.

### Verifica prima della pubblicazione

```sh
npm run check:store
npm run build
```

Il primo comando segnala i dati mancanti e le immagini provvisorie: è previsto che fallisca finché non sono completati. Il secondo verifica la compilazione. Verifica poi numero WhatsApp, destinazione Maps, indirizzo, orari e resa delle fotografie anche sul tuo telefono. `siteUrl` abilita canonical e URL Open Graph senza inventare un dominio.

## 3. GitHub

Crea su GitHub un repository vuoto chiamato `guadagno-market`, senza README generato. Poi, da questa cartella:

```sh
git init
git add .
git commit -m "Crea il sito Guadagno Market"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/guadagno-market.git
git push -u origin main
```

Sostituisci `TUO-USERNAME` con il tuo account. GitHub potrebbe chiederti di autenticarti. `.gitignore` esclude dipendenze, build e file di ambiente. Non caricare `node_modules`, `.next` o `out`. Carica invece anche `package-lock.json` per installazioni riproducibili.

Per aggiornamenti successivi:

```sh
git add .
git commit -m "Aggiorna contenuti del negozio"
git push
```

## 4. Vercel

**Il piano gratuito Hobby non è consentito per questo sito commerciale.** Vercel limita Hobby all'uso personale non commerciale e richiede Pro o Enterprise per uso commerciale. Non è quindi corretto promettere la pubblicazione gratuita del sito di un negozio su Vercel. Condizioni verificate il 7 ottobre 2026: https://vercel.com/docs/limits/fair-use-guidelines e https://vercel.com/pricing.

La procedura tecnica resta semplice:

1. Accedi a Vercel e collega il tuo account GitHub.
2. Crea un nuovo progetto e importa il repository `guadagno-market` nel piano adatto all'attività.
3. Se il repository contiene direttamente questo progetto, lascia Root Directory alla radice. Se hai caricato l'intera cartella di lavoro, seleziona `outputs/guadagno-market`.
4. Framework: **Next.js**. Build command: `npm run build`. Lascia Output Directory al valore automatico di Next.js. Non servono variabili d'ambiente.
5. Avvia Deploy. Dopo il primo deploy inserisci l'URL pubblico in `store.siteUrl` e invia un nuovo commit.
6. Per un dominio personalizzato usa Settings → Domains e segui i record DNS indicati da Vercel.

Ogni successivo push sul branch principale attiva un nuovo deploy. Documentazione: https://vercel.com/docs/git/vercel-for-github.

## Esportazione statica portabile

Per un hosting statico differente, puoi generare la cartella `out/` senza backend:

PowerShell:

```powershell
$env:STATIC_EXPORT = '1'
npm run build
Remove-Item Env:STATIC_EXPORT
```

macOS/Linux:

```sh
STATIC_EXPORT=1 npm run build
```

Pubblica il contenuto di `out/` su un hosting statico con condizioni compatibili con il negozio. In questa modalità il servizio di ottimizzazione immagini Next.js non è presente: usa foto già ottimizzate WebP. `npm start` riguarda la build Next.js standard, non l'export statico. Riferimento: https://nextjs.org/docs/app/guides/static-exports.

