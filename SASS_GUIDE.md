# Guida Sass per il Portfolio

## 🎨 Cos'è Sass?

Sass (Syntactically Awesome Style Sheets) è un preprocessore CSS che aggiunge funzionalità potenti:

- **Variabili** - Riutilizza valori (colori, spacing, ecc.)
- **Nesting** - Annida selettori come HTML
- **Mixins** - Funzioni CSS riutilizzabili
- **Partial files** - Organizza CSS in file separati
- **Funzioni** - Calcoli e manipolazioni (darken, lighten, ecc.)

## 📁 Struttura File Sass Creata

```
css/
├── sass/
│   ├── _variables.scss    # 🎨 Colori, font, spacing
│   ├── _mixins.scss        # 🔧 Funzioni riutilizzabili
│   ├── _base.scss          # 📄 Reset e stili base
│   ├── _header.scss        # 🔝 Header e navigazione
│   ├── _hero.scss          # 🌟 Sezione hero
│   ├── _projects.scss      # 📦 Cards progetti
│   ├── _modal.scss         # 🪟 Modal popup
│   ├── _footer.scss        # 👟 Footer
│   ├── _animations.scss    # ✨ Animazioni
│   ├── _responsive.scss    # 📱 Media queries
│   └── main.scss           # 🎯 File principale
└── style.css               # ✅ CSS compilato (generato automaticamente)
```

## 🚀 Come Usare Sass

### Opzione 1: Installazione con npm (Raccomandato)

1. **Installa Node.js** (se non lo hai già)

   - Scarica da: https://nodejs.org/
   - Verifica installazione: apri PowerShell e digita `node --version`

2. **Installa le dipendenze**

   ```powershell
   cd "C:\Users\giuse\OneDrive\Desktop\App_Portofolio"
   npm install
   ```

3. **Compila Sass in CSS**

   **Una volta sola:**

   ```powershell
   npm run sass
   ```

   **Modalità watch (compilazione automatica ad ogni modifica):**

   ```powershell
   npm run sass:watch
   ```

   **Build per produzione (CSS minificato):**

   ```powershell
   npm run sass:build
   ```

### Opzione 2: Estensione VS Code (Più Semplice!)

1. **Installa l'estensione "Live Sass Compiler"**

   - Apri VS Code
   - Vai su Extensions (Ctrl+Shift+X)
   - Cerca "Live Sass Compiler" di Glenn Marks
   - Installa

2. **Usa l'estensione**
   - Apri il file `css/sass/main.scss`
   - Clicca su "Watch Sass" nella barra in basso
   - Ogni modifica ai file `.scss` verrà compilata automaticamente!

## ✏️ Come Modificare gli Stili

### 1. Cambiare Colori

Apri `css/sass/_variables.scss` e modifica:

```scss
$primary-color: #2c3e50; // Cambia questo!
$secondary-color: #3498db; // E questo!
```

### 2. Cambiare Spacing

```scss
$spacing-lg: 2rem; // Aumenta o diminuisci
```

### 3. Modificare un Componente

Apri il file corrispondente (es. `_header.scss`) e modifica gli stili.

**Esempio - Cambiare stile header:**

```scss
// In _header.scss
.header {
  background-color: $primary-color; // Usa variabile
  padding: $spacing-md 0; // Usa spacing
  @include shadow("medium"); // Usa mixin
}
```

## 🎓 Concetti Sass da Studiare

### 1. Variabili

```scss
// Definisci
$colore-principale: #3498db;

// Usa
.bottone {
  background-color: $colore-principale;
}
```

### 2. Nesting (Annidamento)

```scss
// Sass
.card {
  padding: 1rem;

  &:hover {
    transform: scale(1.05);
  }

  .title {
    color: blue;
  }
}

// Diventa CSS:
// .card { padding: 1rem; }
// .card:hover { transform: scale(1.05); }
// .card .title { color: blue; }
```

### 3. Mixins

```scss
// Definisci mixin
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Usa mixin
.container {
  @include flex-center;
}
```

### 4. Funzioni

```scss
// Scurisci colore
background: darken($primary-color, 10%);

// Schiarisci colore
background: lighten($primary-color, 20%);

// Trasparenza
background: rgba($primary-color, 0.5);
```

### 5. Partial Files

I file con `_` davanti (es. `_variables.scss`) sono "partial" e vengono importati in `main.scss`:

```scss
@import "variables";
@import "mixins";
```

## 🔍 Vantaggi Sass in Questo Progetto

✅ **Organizzazione** - Ogni componente in un file separato
✅ **Manutenibilità** - Cambi i colori in un posto solo
✅ **Riutilizzabilità** - Mixins per codice DRY
✅ **Responsive** - Media queries con mixins
✅ **Professionalità** - Codice più pulito e scalabile

## ⚠️ Importante

- **NON modificare** `css/style.css` direttamente! Verrà sovrascritto dalla compilazione
- **Modifica sempre** i file `.scss` in `css/sass/`
- Dopo ogni modifica, ricompila con `npm run sass:watch` o l'estensione VS Code

## 📚 Risorse per Imparare

- [Sass Official Guide](https://sass-lang.com/guide)
- [Sass Documentation](https://sass-lang.com/documentation)
- Tutorial YouTube: "Sass Crash Course"

## 🎯 Prossimi Passi

1. Installa Sass (npm o estensione VS Code)
2. Compila i file con `npm run sass:watch`
3. Apri `_variables.scss` e cambia un colore per vedere la magia!
4. Studia i mixins in `_mixins.scss` - sono molto potenti!

Buono studio! 🚀
