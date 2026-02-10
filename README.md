# 📁 Portfolio Web App

Una Single Page Application moderna e responsive per gestire e mostrare i tuoi progetti professionali nelle categorie:

- 🎤 **Voice Over** (con player audio integrato)
- ✍️ **Copywriting** (con visualizzazione testi)
- 💻 **Web Development** (con link ai siti)

## 🚀 Come Iniziare

### Apertura del progetto

1. Apri il file `index.html` con un browser (Chrome, Firefox, Edge, ecc.)
2. Oppure usa un server locale per il testing (consigliato):
   - Con VS Code: installa l'estensione "Live Server" e clicca "Go Live"
   - Con Python: `python -m http.server 8000`
   - Con Node.js: `npx http-server`

## 📝 Come Aggiungere Nuovi Progetti

### 1. Apri il file `js/main.js`

### 2. Trova l'array `projects` (all'inizio del file)

### 3. Aggiungi un nuovo oggetto progetto seguendo questi esempi

#### Per un progetto VOICE OVER

```javascript
{
    id: 9,  // Incrementa sempre l'ID
    category: 'voiceover',
    categoryLabel: 'Voice Over',
    title: 'Il Tuo Titolo',
    shortDescription: 'Breve descrizione che appare nella card',
    fullDescription: 'Descrizione completa che appare nel popup',
    image: 'assets/images/nome-immagine.jpg',
    audioFile: 'assets/audio/nome-audio.mp3'
}
```

#### Per un progetto COPYWRITING

```javascript
{
    id: 10,
    category: 'copywriting',
    categoryLabel: 'Copywriting',
    title: 'Il Tuo Titolo',
    shortDescription: 'Breve descrizione',
    fullDescription: 'Descrizione completa',
    image: 'assets/images/nome-immagine.jpg',
    copyText: `
        Il tuo testo qui.
        Puoi usare più righe.
        Mantieni la formattazione.
    `
}
```

#### Per un progetto WEB DEVELOPMENT

```javascript
{
    id: 11,
    category: 'webdev',
    categoryLabel: 'Web Development',
    title: 'Il Tuo Titolo',
    shortDescription: 'Breve descrizione',
    fullDescription: 'Descrizione completa',
    image: 'assets/images/nome-immagine.jpg',
    websiteUrl: 'https://il-tuo-sito.com'
}
```

## 📂 Struttura Cartelle

App_Portofolio/
├── index.html # Pagina principale
├── css/
│ └── style.css # Tutti gli stili
├── js/
│ └── main.js # Logica e database progetti
├── assets/
│ ├── images/ # 🖼️ Metti qui le immagini dei progetti
│ └── audio/ # 🎵 Metti qui i file audio
└── README.md # Questa guida

## 🎨 Personalizzazione Colori

Per cambiare i colori del sito, apri `css/style.css` e modifica le variabili all'inizio del file:

```css
:root {
  --primary-color: #2c3e50; /* Colore principale */
  --secondary-color: #3498db; /* Colore secondario */
  --accent-color: #e74c3c; /* Colore accento */
  /* ... */
}
```

## 📱 Caratteristiche

- ✅ Design responsive (funziona su desktop, tablet, mobile)
- ✅ Navigazione tra categorie
- ✅ Modal popup per dettagli progetto
- ✅ Player audio integrato per voice over
- ✅ Visualizzazione testi per copywriting
- ✅ Link esterni per progetti web
- ✅ Animazioni smooth
- ✅ Codice commentato per facile apprendimento

## 🌐 Pubblicazione Online

### Opzione 1: GitHub Pages (Gratuito)

1. Crea un repository GitHub
2. Carica tutti i file
3. Vai in Settings → Pages
4. Seleziona il branch "main" e salva
5. Il tuo sito sarà online su `username.github.io/nome-repo`

### Opzione 2: Netlify (Gratuito)

1. Vai su [netlify.com](https://www.netlify.com)
2. Trascina la cartella del progetto
3. Il sito è online in pochi secondi!

### Opzione 3: Vercel (Gratuito)

1. Vai su [vercel.com](https://vercel.com)
2. Importa il progetto
3. Deploy automatico

## 🔧 Troubleshooting

**Le immagini non si vedono?**

- Controlla che le immagini siano nella cartella `assets/images/`
- Verifica che il nome del file corrisponda esattamente a quello nel codice
- L'app mostra un placeholder se l'immagine non è trovata

**L'audio non si sente?**

- Verifica che i file audio siano in formato MP3
- Controlla che siano nella cartella `assets/audio/`
- Alcuni browser bloccano l'autoplay audio (è normale)

**Il sito non si vede bene su mobile?**

- Il design è già responsive, prova a ricaricare la pagina
- Controlla che il file CSS sia caricato correttamente

## 📚 Per Studiare il Codice

Il codice è abbondantemente commentato. Suggerisco di studiarlo in questo ordine:

1. **HTML** (`index.html`) - Struttura della pagina
2. **CSS** (`style.css`) - Styling e layout
3. **JavaScript** (`main.js`) - Logica e interattività

Ogni sezione è commentata per spiegare cosa fa!

## 🎯 Prossimi Passi Possibili

- [ ] Aggiungere una barra di ricerca
- [ ] Implementare filtri multipli
- [ ] Aggiungere form contatti
- [ ] Migrare a React per gestione più avanzata
- [ ] Integrare un CMS (Contentful, Strapi)
- [ ] Aggiungere Google Analytics

## 💡 Tips

- Usa immagini ottimizzate (max 500KB per immagine)
- Comprimi i file audio per caricamenti più veloci
- Testa il sito su diversi browser
- Chiedi feedback ad amici/colleghi

---

**Creato con ❤️ per il tuo successo professionale!**
