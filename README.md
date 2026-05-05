# 🎙️ Portfolio Professionale | Giuseppe Randazzo

Un'applicazione web elegante e moderna per mostrare progetti di **Voice Over** e **Web Development**. Sviluppata con un approccio professionale utilizzando HTML, Sass (SCSS) e JavaScript Vanilla.

## 🌟 Visione del Progetto
Questo portfolio è stato progettato per comunicare professionalità ed eleganza attraverso una palette cromatica "Slate & Gold" (Ardesia e Oro), ideale per un profilo che unisce creatività vocale e competenze tecniche nel web.

## 🚀 Caratteristiche Tecniche
- **Single Page Application (SPA) Logic:** Navigazione fluida tra le categorie senza ricaricamento.
- **Sass Architecture:** Organizzazione modulare professionale utilizzando la sintassi moderna `@use`.
- **Media Handling:** Player audio personalizzato per demo vocali e integrazione link per progetti web.
- **Responsive Design:** Ottimizzato per ogni dispositivo (Mobile, Tablet, Desktop).
- **SEO & Social Ready:** Meta tag Open Graph configurati per una condivisione d'impatto.

## 🛠️ Setup e Sviluppo

### Installazione
```bash
npm install
```

### Compilazione Sass
Il progetto utilizza Sass per la gestione degli stili. Puoi compilarlo nei seguenti modi:

- **Sviluppo (Watch):** `npm run sass:watch`
- **Produzione (Build):** `npm run sass:build` (genera CSS minificato in `css/style.css`)

## 📂 Struttura del Repository
- `index.html`: Entry point con ottimizzazione SEO.
- `main.js`: Logica applicativa e database dei progetti.
- `css/sass/`: Sorgenti modulari (variabili, mixin, componenti).
- `assets/`: Cartelle predisposte per `audio/` e `images/`.

## ✍️ Personalizzazione Contenuti
I progetti sono gestiti dinamicamente nel file [main.js](main.js). Per aggiungere un nuovo lavoro, basta inserire un oggetto nell'array `projects` seguendo lo schema nel file.

## 🌐 Pubblicazione
Per rendere il sito visibile online:
1. Carica i file su un repository GitHub.
2. Vai in **Settings** > **Pages**.
3. Sotto **Build and deployment**, imposta Source su **Deploy from a branch** e seleziona il branch `main`.
4. Salva e attendi il link del tuo nuovo sito!

---
*Creato da Giuseppe Randazzo*
