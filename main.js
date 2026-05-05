/* ========================================
   DATABASE PROGETTI
   Qui puoi aggiungere/modificare i tuoi progetti
   ======================================== */

const projects = [
  // PROGETTI VOICE OVER
  {
    id: 1,
    category: "voiceover",
    categoryLabel: "Voice Over",
    title: "Spot Pubblicitario Coca-Cola",
    shortDescription: "Voice over per campagna pubblicitaria nazionale",
    fullDescription:
      "Registrazione professionale per spot pubblicitario televisivo di 30 secondi. Tono energico e coinvolgente per target giovani.",
    image: "assets/images/voiceover-1.jpg", // Puoi sostituire con le tue immagini
    audioFile: "", // Inserisci qui il percorso del tuo file audio
  },
  {
    id: 2,
    category: "voiceover",
    categoryLabel: "Voice Over",
    title: "Audiolibro - Il Piccolo Principe",
    shortDescription: "Narrazione completa audiolibro classico",
    fullDescription:
      'Narrazione professionale del celebre romanzo "Il Piccolo Principe". Tono caldo e narrativo, perfetto per l\'ascolto serale.',
    image: "assets/images/voiceover-2.jpg",
    audioFile: "",
  },
  {
    id: 3,
    category: "voiceover",
    categoryLabel: "Voice Over",
    title: "Video Aziendale Corporate",
    shortDescription: "Voice over per presentazione aziendale B2B",
    fullDescription:
      "Registrazione per video corporate. Tono professionale e autorevole, adatto a presentazioni aziendali e video istituzionali.",
    image: "assets/images/voiceover-3.jpg",
    audioFile: "",
  },

  // PROGETTI WEB DEVELOPMENT
  {
    id: 6,
    category: "webdev",
    categoryLabel: "Web Development",
    title: "Landing Page - Studio Dentistico",
    shortDescription: "Sito one-page moderno e responsive per studio medico",
    fullDescription:
      "Creazione di landing page responsive con form contatti, galleria prima/dopo, sezione servizi e integrazione Google Maps. Design pulito e professionale.",
    image: "assets/images/webdev-1.jpg",
    websiteUrl: "", // Sostituisci con il link reale
  },
  {
    id: 7,
    category: "webdev",
    categoryLabel: "Web Development",
    title: "Portfolio Fotografo",
    shortDescription: "Sito portfolio minimalista per fotografo professionista",
    fullDescription:
      "Sviluppo di portfolio fotografico con galleria immagini ottimizzata, lightbox personalizzata e animazioni smooth. Focus sull'esperienza visiva.",
    image: "assets/images/webdev-2.jpg",
    websiteUrl: "",
  },
  {
    id: 8,
    category: "webdev",
    categoryLabel: "Web Development",
    title: "E-commerce Landing - Prodotto Singolo",
    shortDescription: "Pagina vendita per lancio nuovo prodotto",
    fullDescription:
      "Landing page ad alta conversione per vendita prodotto singolo. Include countdown timer, recensioni clienti, FAQ e checkout semplificato.",
    image: "assets/images/webdev-3.jpg",
    websiteUrl: "",
  },
];

/* ========================================
   VARIABILI GLOBALI
   ======================================== */

let currentCategory = "all"; // Categoria attualmente selezionata
const projectsGrid = document.getElementById("projects-grid");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");
const navButtons = document.querySelectorAll(".nav-btn");

/* ========================================
   INIZIALIZZAZIONE
   ======================================== */

// Quando la pagina è caricata, esegui queste funzioni
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing projects...");
  console.log("Projects array length:", projects.length);
  renderProjects(currentCategory); // Mostra tutti i progetti
  setupEventListeners(); // Attiva i listener per i click
});

/* ========================================
   FUNZIONE: RENDERIZZA PROGETTI
   Mostra i progetti nella griglia
   ======================================== */

function renderProjects(category) {
  // Filtra i progetti in base alla categoria selezionata
  const filteredProjects =
    category === "all"
      ? projects // Se "all", mostra tutti
      : projects.filter((project) => project.category === category); // Altrimenti filtra

  // Svuota la griglia prima di riempirla
  projectsGrid.innerHTML = "";

  // Se non ci sono progetti nella categoria
  if (filteredProjects.length === 0) {
    projectsGrid.innerHTML = `
            <div class="no-projects">
                <p>Nessun progetto disponibile in questa categoria.</p>
            </div>
        `;
    return;
  }

  // Per ogni progetto filtrato, crea una card
  filteredProjects.forEach((project) => {
    const card = createProjectCard(project);
    projectsGrid.appendChild(card);
  });
}

/* ========================================
   FUNZIONE: CREA CARD PROGETTO
   Crea l'HTML per una singola card
   ======================================== */

function createProjectCard(project) {
  // Crea un elemento div
  const card = document.createElement("div");
  card.className = "project-card";
  card.dataset.projectId = project.id; // Salva l'ID come attributo data

  // Riempie il div con l'HTML della card
  card.innerHTML = `
        <div class="image-container" style="position: relative; background: #eee; height: 180px; overflow: hidden;">
          <img src="${project.image}" alt="${project.title}" class="project-image" 
               style="width: 100%; height: 100%; object-fit: cover;"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="image-placeholder" style="display: none; height: 100%; align-items: center; justify-content: center; text-align: center; padding: 1rem; color: #666; font-style: italic;">
            Carica qui la preview del tuo progetto
          </div>
        </div>
        <div class="project-content">
            <span class="project-category">${project.categoryLabel}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDescription}</p>
        </div>
    `;

  // Aggiungi evento click per aprire il modal
  card.addEventListener("click", () => openModal(project));

  return card;
}

/* ========================================
   FUNZIONE: APRI MODAL
   Mostra i dettagli del progetto nel popup
   ======================================== */

function openModal(project) {
  // Crea il contenuto base del modal
  let modalContent = `
        <h2>${project.title}</h2>
        <span class="category-badge">${project.categoryLabel}</span>
        <p class="full-description">${project.fullDescription}</p>
    `;

  // Aggiungi contenuto specifico in base alla categoria
  switch (project.category) {
    case "voiceover":
      // Per voice over: mostra immagine + player audio
      modalContent += `
                <div class="modal-image-container" style="background: #eee; min-height: 200px; display: flex; align-items: center; justify-content: center;">
                  <img src="${project.image}" alt="${project.title}" class="modal-image"
                       onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                  <p class="placeholder-text" style="display: none; color: #666; font-style: italic;">Immagine anteprima</p>
                </div>
                <div class="audio-player">
                    <h4>Ascolta l'audio:</h4>
                    <div class="audio-container" style="background: #f9f9f9; padding: 1rem; border-radius: 8px; border: 1px dashed #ccc; margin: 1rem 0;">
                      <audio controls style="width: 100%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                          <source src="${project.audioFile}" type="audio/mpeg">
                          Il tuo browser non supporta l'audio HTML5.
                      </audio>
                      <p class="audio-placeholder" style="display: none; text-align: center; color: #666; font-style: italic;">
                        🎙️ File audio non trovato. <br> Caricalo in: <strong>${project.audioFile}</strong>
                      </p>
                    </div>
                </div>
            `;
      break;

    case "webdev":
      // Per web development: mostra screenshot + link al sito
      modalContent += `
                <div class="modal-image-container" style="background: #eee; min-height: 200px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                  <img src="${project.image}" alt="${project.title}" class="modal-image"
                       onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                  <p class="placeholder-text" style="display: none; color: #666; font-style: italic;">Immagine anteprima</p>
                </div>
                <h4>Visita il sito:</h4>
                <a href="${project.websiteUrl}" target="_blank" rel="noopener noreferrer" class="website-link">
                    Apri il sito web →
                </a>
            `;
      break;
  }

  // Inserisci il contenuto nel modal
  modalBody.innerHTML = modalContent;

  // Mostra il modal con animazione
  modal.classList.add("show");
  document.body.style.overflow = "hidden"; // Blocca lo scroll della pagina
}

/* ========================================
   FUNZIONE: CHIUDI MODAL
   ======================================== */

function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "auto"; // Riabilita lo scroll
}

/* ========================================
   FUNZIONE: SETUP EVENT LISTENERS
   Attiva tutti gli eventi della pagina
   ======================================== */

function setupEventListeners() {
  // Click sui bottoni di navigazione
  navButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Rimuovi classe "active" da tutti i bottoni
      navButtons.forEach((b) => b.classList.remove("active"));
      // Aggiungi "active" al bottone cliccato
      e.target.classList.add("active");

      // Aggiorna la categoria corrente
      currentCategory = e.target.dataset.category;

      // Renderizza i progetti della nuova categoria
      renderProjects(currentCategory);
    });
  });

  // Click sul bottone X per chiudere il modal
  closeBtn.addEventListener("click", closeModal);

  // Click fuori dal modal per chiuderlo
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      // Se clicchi sullo sfondo scuro
      closeModal();
    }
  });

  // Chiudi modal premendo ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
}

/* ========================================
   FUNZIONI UTILITY (opzionali per future espansioni)
   ======================================== */

// Funzione per aggiungere un nuovo progetto (per futuro uso)
function addProject(projectData) {
  projects.push({
    id: projects.length + 1,
    ...projectData,
  });
  renderProjects(currentCategory);
}

// Funzione per cercare progetti (per futuro uso)
function searchProjects(searchTerm) {
  const filtered = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return filtered;
}
