/* ==========================================================================
   EMCIEL NAILS STUDIO - APPLICATION ENGINE & CLEAN 3D GALLERY
   Complete Price List & Official Extras Data Integration
   ========================================================================== */

// Catálogo Oficial de Servicios (Ordenado: Esculturales, Gel Semipermanente, Pedicura PRIMEROS)
const SERVICES_DATA = [
  {
    id: "esculturales_nuevo",
    category: "esculturales",
    categoryName: "Uñas Esculturales",
    title: "Uñas Esculturales (Set Nuevo)",
    description: "Esculpidas 100% en acrílico con forma hecha a medida sobre uña natural. Estructura fuerte y personalizada.",
    badge: "Acrílico Puro",
    variants: [
      { id: "esc_n_12", name: "Set Nuevo - Largo 1 - 2", price: 290 },
      { id: "esc_n_34", name: "Set Nuevo - Largo 3 - 4", price: 320 },
      { id: "esc_n_56", name: "Set Nuevo - Largo 5 - 6", price: 370 }
    ]
  },
  {
    id: "esculturales_retoque",
    category: "esculturales",
    categoryName: "Uñas Esculturales",
    title: "Retoque Escultural",
    description: "Mantenimiento y rebalanceo de crecimiento en acrílico para conservar tus uñas perfectas.",
    badge: "Mantenimiento",
    variants: [
      { id: "esc_r_12", name: "Retoque - Largo 1 - 2", price: 280 },
      { id: "esc_r_34", name: "Retoque - Largo 3 - 4", price: 330 },
      { id: "esc_r_56", name: "Retoque - Largo 5 - 6", price: 380 }
    ]
  },
  {
    id: "semipermanente",
    category: "semipermanente",
    categoryName: "Gel Semipermanente",
    title: "Gel Semipermanente",
    description: "Esmaltado en gel curado en lámpara UV/LED con alto brillo hasta por 3 semanas.",
    badge: "Brillo 3 Semanas",
    variants: [
      { id: "gel_1tono", name: "1 tono liso", price: 180 },
      { id: "gel_2tonos", name: "2 tonos lisos", price: 200 },
      { id: "gel_reflectivo", name: "1 tono liso + 1 tono reflectivo", price: 220 }
    ]
  },
  {
    id: "pedicura_spa",
    category: "pedicura",
    categoryName: "Pedicura Spa / Seco",
    title: "Pedicura Spa o en Seco",
    description: "Tratamiento completo de exfoliación, limpieza de cutícula profunda y esmaltado duradero.",
    badge: "Spa Deluxe",
    variants: [
      { id: "pedi_russe", name: "Paquete Russe", price: 360 },
      { id: "pedi_2russe", name: "Paquete 2 Russe", price: 380 },
      { id: "pedi_luxus", name: "Paquete Luxus", price: 420 }
    ]
  },
  {
    id: "pedicura_sencilla",
    category: "pedicura",
    categoryName: "Pedicura Sencilla",
    title: "Pedicura Sencilla",
    description: "Embellecimiento básico de pies con limpieza y color deslumbrante.",
    badge: "Cuidado Esencial",
    variants: [
      { id: "pedi_s_1tono", name: "1 tono liso", price: 300 },
      { id: "pedi_s_diseno", name: "Con diseño", price: 340 }
    ]
  },
  {
    id: "rubber",
    category: "rubber",
    categoryName: "Nivelación Rubber",
    title: "Nivelación Rubber",
    description: "Refuerzo estructural flexible ideal para uñas naturales. Rellena imperfecciones, evita quiebres y aporta alineación perfecta.",
    badge: "Manicura Incluida",
    variants: [
      { id: "rubber_mismo", name: "Mismo largo", price: 200 },
      { id: "rubber_1mas", name: "1 # más largo", price: 230 },
      { id: "rubber_glitter", name: "Baby Glitter", price: 250 }
    ]
  },
  {
    id: "polygel",
    category: "polygel",
    categoryName: "Polygel",
    title: "Polygel",
    description: "Técnica híbrida ultra ligera y resistente. Permite extensión de largo sintiéndolas cómodas sin pesar en tu uña.",
    badge: "Manicura Incluida",
    variants: [
      { id: "polygel_12", name: "Largo 1 - 2", price: 290 },
      { id: "polygel_34", name: "Largo 3 - 4", price: 320 },
      { id: "polygel_56", name: "Largo 5 - 6", price: 370 }
    ]
  },
  {
    id: "dual",
    category: "dual",
    categoryName: "Dual System",
    title: "Dual System",
    description: "Moldes reutilizables con acabado pulcro y curva C perfecta en menor tiempo de aplicación.",
    badge: "Manicura Incluida",
    variants: [
      { id: "dual_34", name: "Largo 3 - 4", price: 350 },
      { id: "dual_56", name: "Largo 5 - 6", price: 390 }
    ]
  },
  {
    id: "manicura",
    category: "manicura",
    categoryName: "Manicura",
    title: "Manicura Individual",
    description: "Limpieza anatómica de cutícula con torno o alicate profesional para lucir manos impecables.",
    badge: "Limpieza Anatómica",
    variants: [
      { id: "mani_rusa", name: "Manicura Rusa", price: 100 },
      { id: "mani_combinada", name: "Manicura Combinada", price: 120 }
    ]
  },
  {
    id: "bano_acrilico",
    category: "bano",
    categoryName: "Baño Acrílico",
    title: "Baño Acrílico",
    description: "Capa fina de acrílico protector sobre la uña natural para evitar quiebres y rajaduras.",
    badge: "Protección Uña Natural",
    variants: [
      { id: "bano_mismo", name: "Mismo largo", price: 180 },
      { id: "bano_1mas", name: "Un número más largo", price: 200 }
    ]
  }
];

// Lista Completa y Oficial de EXTRAS Extraída del PDF de Emciel Nails
const EXTRAS_DATA = [
  { id: "ex_asesoria_foto", name: "Asesoría de Foto de Referencia (Enviar por WhatsApp)", unitPrice: 0, unitText: "Evaluación en Studio", hasFullSet: false },
  { id: "ex_tono_extra", name: "Tono extra", unitPrice: 15, unitText: "c/u", hasFullSet: false },
  { id: "ex_reflectivo", name: "Tono extra reflectivo", unitPrice: 20, unitText: "c/u", hasFullSet: false },
  { id: "ex_glitter_gel", name: "Glitter gel", unitPrice: 20, unitText: "c/u", hasFullSet: false },
  { id: "ex_blooming", name: "Efecto blooming", unitPrice: 10, fullPrice: 50, unitText: "c/u", fullText: "2 manos" },
  { id: "ex_lineas_espejo", name: "Líneas efecto espejo", unitPrice: 4, fullPrice: 40, unitText: "c/u", fullText: "2 manos" },
  { id: "ex_azucar", name: "Efecto azúcar", unitPrice: 7, fullPrice: 60, unitText: "c/u", fullText: "2 manos" },
  { id: "ex_sueter", name: "Efecto suéter", unitPrice: 7, fullPrice: 60, unitText: "c/u", fullText: "2 manos" },
  { id: "ex_french", name: "French", unitPrice: 5, fullPrice: 60, unitText: "c/u", fullText: "2 manos" },
  { id: "ex_ojo_gato", name: "Ojo de gato", unitPrice: 12, fullPrice: 70, unitText: "c/u", fullText: "2 manos" },
  { id: "ex_foil", name: "Foil", unitPrice: 8, fullPrice: 40, unitText: "c/u", fullText: "2 manos" },
  { id: "ex_espejo_comp", name: "Efecto espejo completo", unitPrice: 10, fullPrice: 60, unitText: "c/u", fullText: "2 manos" },
  { id: "ex_aurora_comp", name: "Efecto aurora completo", unitPrice: 10, fullPrice: 60, unitText: "c/u", fullText: "2 manos" },
  { id: "ex_baby_boomer", name: "Baby boomer", unitPrice: 15, fullPrice: 50, unitText: "par", fullText: "2 manos" },
  { id: "ex_mano_sencillo", name: "Mano alzada (sencillo)", unitPrice: 20, fullPrice: 60, unitText: "par", fullText: "2 manos" },
  { id: "ex_mano_alzada", name: "Mano alzada", unitPrice: 30, fullPrice: 80, unitText: "par", fullText: "2 manos" },
  { id: "ex_3d", name: "Efecto 3D", unitPrice: 20, fullPrice: 60, unitText: "c/u", fullText: "2 manos" },
  { id: "ex_relieve", name: "Relieve", unitPrice: 15, fullPrice: 80, unitText: "c/u", fullText: "2 manos" },
  { id: "ex_cristal_ch", name: "Cristales (Chicos)", unitPrice: 1, unitText: "c/u", hasFullSet: false },
  { id: "ex_cristal_med", name: "Cristales (Medianos)", unitPrice: 3, unitText: "c/u", hasFullSet: false },
  { id: "ex_cristal_grd", name: "Cristales (Grandes)", unitPrice: 5, unitText: "c/u", hasFullSet: false }
];

// Coverflow 3D Data
const COVERFLOW_ITEMS = [
  {
    image: "assets/image.png",
    title: "Nivelación Rubber en Tono Nude Satin",
    tag: "[ NIVELACION_RUBBER ]",
    price: "$200 MXN",
    desc: "Alineación estructural perfecta sobre uña natural corta. Otorga brillo y evita que las uñas delgadas se quiebren.",
    serviceId: "rubber",
    variantId: "rubber_mismo"
  },
  {
    image: "assets/image copy.png",
    title: "Polygel Estilizado Largo 1-2",
    tag: "[ POLYGEL_EXTENSIONAL ]",
    price: "$290 MXN",
    desc: "Extensión sutil y femenina con técnica híbrida Polygel. Ligera, resistente e ideal para el día a día.",
    serviceId: "polygel",
    variantId: "polygel_12"
  },
  {
    image: "assets/image copy 2.png",
    title: "Uñas Esculturales Largo 3-4",
    tag: "[ ESCULTURALES_NUEVAS ]",
    price: "$320 MXN",
    desc: "Esculpidas 100% a mano con molde desde la cutícula. Ofrece una curvatura espectacular y dureza.",
    serviceId: "esculturales_nuevo",
    variantId: "esc_n_34"
  },
  {
    image: "assets/image copy 3.png",
    title: "Efecto Ojo de Gato Magnético",
    tag: "[ EFECTO_SPECIAL ]",
    price: "$212 MXN",
    desc: "Partículas imantadas que crean destellos tridimensionales al moverse la luz.",
    serviceId: "rubber",
    variantId: "rubber_mismo"
  },
  {
    image: "assets/image copy 4.png",
    title: "Dual System Largo 3-4 Impecable",
    tag: "[ DUAL_SYSTEM ]",
    price: "$350 MXN",
    desc: "Aplicación rápida con moldes reutilizables. Deja una superficie ultra pulida.",
    serviceId: "dual",
    variantId: "dual_34"
  },
  {
    image: "assets/image copy 5.png",
    title: "French Clásico & Manicura Rusa",
    tag: "[ MANICURA_RUSA_FRENCH ]",
    price: "$260 MXN",
    desc: "Preparación anatómica de cutícula con torno y línea french trazada a mano alzada.",
    serviceId: "rubber",
    variantId: "rubber_mismo"
  }
];

// State
const cotizadorState = {
  selectedServiceId: null,
  selectedVariantId: null,
  extras: {}, 
  clientInfo: { name: "", date: "", notes: "" }
};

const quizAnswers = { step1: null, step2: null, step3: null };
let currentCoverflowIndex = 0;

// On DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("servicesGrid")) renderServicesCatalog();
  if (document.getElementById("selectedServiceCard")) initCotizadorEngine();
  if (document.getElementById("nailExtension")) initLengthGuide();
  if (document.getElementById("handCanvas")) initProbadorVirtual();
  if (document.querySelector(".accordion-item")) initAccordions();
  if (document.getElementById("coverflowTrack")) initCoverflowGallery();
  
  initMobileMenu();
  checkUrlParams();
});

// Menú Móvil & Desplegable Glassmorphism
function initMobileMenu() {
  const toggle = document.getElementById("mobileToggle");
  const menu = document.getElementById("navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (menu.classList.contains("active") && !menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("active");
      }
    });

    menu.querySelectorAll(".nav-page-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  }
}

function checkUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const serviceId = params.get("service");
  const variantId = params.get("variant");

  if (serviceId && document.getElementById("selectedServiceCard")) {
    selectServiceInCotizador(serviceId, variantId);
  }
}

// 3D Coverflow Engine
function initCoverflowGallery() {
  const track = document.getElementById("coverflowTrack");
  const prevBtn = document.getElementById("coverflowPrevBtn");
  const nextBtn = document.getElementById("coverflowNextBtn");
  const dotsContainer = document.getElementById("coverflowDots");

  if (!track) return;

  track.innerHTML = "";
  if (dotsContainer) dotsContainer.innerHTML = "";

  COVERFLOW_ITEMS.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = `coverflow-card-item ${index === 0 ? 'active' : ''}`;
    card.dataset.index = index;
    card.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
    
    card.addEventListener("click", () => {
      currentCoverflowIndex = index;
      updateCoverflowState();
    });

    track.appendChild(card);

    if (dotsContainer) {
      const dot = document.createElement("div");
      dot.className = `coverflow-dot ${index === 0 ? 'active' : ''}`;
      dot.onclick = () => {
        currentCoverflowIndex = index;
        updateCoverflowState();
      };
      dotsContainer.appendChild(dot);
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentCoverflowIndex = (currentCoverflowIndex - 1 + COVERFLOW_ITEMS.length) % COVERFLOW_ITEMS.length;
      updateCoverflowState();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentCoverflowIndex = (currentCoverflowIndex + 1) % COVERFLOW_ITEMS.length;
      updateCoverflowState();
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      currentCoverflowIndex = (currentCoverflowIndex - 1 + COVERFLOW_ITEMS.length) % COVERFLOW_ITEMS.length;
      updateCoverflowState();
    } else if (e.key === "ArrowRight") {
      currentCoverflowIndex = (currentCoverflowIndex + 1) % COVERFLOW_ITEMS.length;
      updateCoverflowState();
    }
  });

  // Touch Swipe
  let startX = 0;
  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    if (Math.abs(diffX) > 35) {
      if (diffX > 0) {
        currentCoverflowIndex = (currentCoverflowIndex + 1) % COVERFLOW_ITEMS.length;
      } else {
        currentCoverflowIndex = (currentCoverflowIndex - 1 + COVERFLOW_ITEMS.length) % COVERFLOW_ITEMS.length;
      }
      updateCoverflowState();
    }
  }, { passive: true });

  updateCoverflowState();
}

function updateCoverflowState() {
  const cards = document.querySelectorAll(".coverflow-card-item");
  const dots = document.querySelectorAll(".coverflow-dot");
  const total = COVERFLOW_ITEMS.length;

  cards.forEach((card, index) => {
    card.className = "coverflow-card-item";

    let diff = index - currentCoverflowIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) {
      card.classList.add("active");
    } else if (diff === -1) {
      card.classList.add("prev-1");
    } else if (diff === 1) {
      card.classList.add("next-1");
    } else if (diff === -2) {
      card.classList.add("prev-2");
    } else if (diff === 2) {
      card.classList.add("next-2");
    } else {
      card.classList.add("hidden");
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === currentCoverflowIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  const item = COVERFLOW_ITEMS[currentCoverflowIndex];
  if (!item) return;

  if (document.getElementById("cfTagPill")) document.getElementById("cfTagPill").textContent = item.tag;
  if (document.getElementById("cfPriceTag")) document.getElementById("cfPriceTag").textContent = item.price;
  if (document.getElementById("cfTitle")) document.getElementById("cfTitle").textContent = item.title;
  if (document.getElementById("cfDesc")) document.getElementById("cfDesc").textContent = item.desc;

  const btnCotizar = document.getElementById("cfBtnCotizar");
  if (btnCotizar) {
    btnCotizar.onclick = () => {
      window.location.href = `cotizador.html?service=${item.serviceId}&variant=${item.variantId}`;
    };
  }
}

// Modal Visual Selector
function openServiceModal() {
  const modal = document.getElementById("serviceModalBackdrop");
  if (!modal) return;
  renderModalServicesGrid();
  modal.classList.add("active");

  const tabs = document.querySelectorAll(".modal-cat-btn");
  tabs.forEach(tab => {
    tab.onclick = () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderModalServicesGrid(tab.dataset.mcat);
    };
  });
}

function closeServiceModal() {
  const modal = document.getElementById("serviceModalBackdrop");
  if (modal) modal.classList.remove("active");
}

function renderModalServicesGrid(filterCat = "all") {
  const grid = document.getElementById("modalServicesGrid");
  if (!grid) return;

  grid.innerHTML = "";
  const services = filterCat === "all" ? SERVICES_DATA : SERVICES_DATA.filter(s => s.category === filterCat);

  services.forEach(service => {
    service.variants.forEach(variant => {
      const card = document.createElement("div");
      card.className = "modal-service-card";

      card.innerHTML = `
        <div>
          <span class="ms-badge">${service.badge}</span>
          <h4 class="ms-title">${service.title}</h4>
          <div class="ms-variant">${variant.name}</div>
        </div>
        <div class="ms-price">$${variant.price} MXN</div>
        <button type="button" class="ms-select-btn" onclick="selectVariantFromModal('${service.id}', '${variant.id}')">
          <i class="fa-solid fa-check-circle"></i> Seleccionar
        </button>
      `;

      grid.appendChild(card);
    });
  });
}

function selectVariantFromModal(serviceId, variantId) {
  selectServiceInCotizador(serviceId, variantId);
  closeServiceModal();
}

function selectServiceInCotizador(serviceId, variantId = null) {
  const service = SERVICES_DATA.find(s => s.id === serviceId);
  if (!service) return;

  const targetVariant = variantId ? service.variants.find(v => v.id === variantId) : service.variants[0];

  cotizadorState.selectedServiceId = service.id;
  cotizadorState.selectedVariantId = targetVariant.id;

  const badge = document.getElementById("ssdBadge");
  const title = document.getElementById("ssdTitle");
  const sub = document.getElementById("ssdSub");
  const btn = document.getElementById("ssdBtn");

  if (title && sub) {
    badge.textContent = service.badge;
    title.textContent = `${service.title} — $${targetVariant.price} MXN`;
    sub.textContent = `Opción: ${targetVariant.name} | Incluye manicura anatómica.`;
    btn.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> Cambiar Servicio`;
  }

  updateTicketReceipt();
}

// Cotizador Engine
function initCotizadorEngine() {
  renderCotizadorExtrasGrid();

  if (document.getElementById("clientName")) {
    document.getElementById("clientName").addEventListener("input", (e) => {
      cotizadorState.clientInfo.name = e.target.value;
    });
  }
  if (document.getElementById("preferredDate")) {
    document.getElementById("preferredDate").addEventListener("input", (e) => {
      cotizadorState.clientInfo.date = e.target.value;
    });
  }
  if (document.getElementById("clientNotes")) {
    document.getElementById("clientNotes").addEventListener("input", (e) => {
      cotizadorState.clientInfo.notes = e.target.value;
    });
  }

  if (document.getElementById("extraSearchInput")) {
    document.getElementById("extraSearchInput").addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      renderCotizadorExtrasGrid(query);
    });
  }

  if (document.getElementById("btnWhatsappQuote")) document.getElementById("btnWhatsappQuote").addEventListener("click", sendWhatsAppQuote);
  if (document.getElementById("btnCopyQuote")) document.getElementById("btnCopyQuote").addEventListener("click", copyQuoteToClipboard);
  if (document.getElementById("btnClearQuote")) document.getElementById("btnClearQuote").addEventListener("click", resetQuote);

  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const filter = pill.dataset.filter;
      renderServicesCatalog(filter);
    });
  });

  updateTicketReceipt();
}

function renderCotizadorExtrasGrid(filterQuery = "") {
  const container = document.getElementById("extrasGridContainer");
  if (!container) return;

  container.innerHTML = "";
  const list = EXTRAS_DATA.filter(ex => ex.name.toLowerCase().includes(filterQuery));

  list.forEach(extra => {
    if (!cotizadorState.extras[extra.id]) {
      cotizadorState.extras[extra.id] = { count: 0, mode: "unit" };
    }

    const currentState = cotizadorState.extras[extra.id];
    const itemCard = document.createElement("div");
    itemCard.className = "extra-item-card";

    let modeToggleHTML = "";
    if (extra.fullPrice) {
      modeToggleHTML = `
        <button class="mode-toggle-btn" style="font-size: 0.68rem; padding: 0.15rem 0.45rem; border-radius: 6px; border: 1.5px solid var(--c-rose-light); background: ${currentState.mode === 'full' ? 'var(--c-magenta)' : 'var(--c-white)'}; color: ${currentState.mode === 'full' ? '#FFFDFD' : 'var(--c-black)'}; font-weight: 700; cursor: pointer;" 
                onclick="toggleExtraMode('${extra.id}')">
          ${currentState.mode === 'full' ? `2 Manos ($${extra.fullPrice})` : `${extra.unitText} ($${extra.unitPrice})`}
        </button>
      `;
    } else {
      modeToggleHTML = `<span style="font-size: 0.72rem; color: var(--c-magenta); font-weight: 800;">$${extra.unitPrice} ${extra.unitText}</span>`;
    }

    itemCard.innerHTML = `
      <div style="font-weight: 700; font-size: 0.8rem; color: var(--c-black); margin-bottom: 0.2rem;">${extra.name}</div>
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.4rem;">
        ${modeToggleHTML}
        <div class="counter-control">
          <button class="counter-btn" onclick="changeExtraCount('${extra.id}', -1)">-</button>
          <span class="counter-val">${currentState.count}</span>
          <button class="counter-btn" onclick="changeExtraCount('${extra.id}', 1)">+</button>
        </div>
      </div>
    `;

    container.appendChild(itemCard);
  });
}

function toggleExtraMode(extraId) {
  const st = cotizadorState.extras[extraId];
  if (!st) return;
  st.mode = st.mode === "unit" ? "full" : "unit";
  if (st.mode === "full" && st.count === 0) st.count = 1;
  const query = document.getElementById("extraSearchInput") ? document.getElementById("extraSearchInput").value : "";
  renderCotizadorExtrasGrid(query);
  updateTicketReceipt();
}

function changeExtraCount(extraId, delta) {
  const st = cotizadorState.extras[extraId];
  if (!st) return;
  st.count = Math.max(0, st.count + delta);
  const query = document.getElementById("extraSearchInput") ? document.getElementById("extraSearchInput").value : "";
  renderCotizadorExtrasGrid(query);
  updateTicketReceipt();
}

function renderServicesCatalog(filter = "all") {
  const container = document.getElementById("servicesGrid");
  if (!container) return;

  container.innerHTML = "";
  const filtered = filter === "all" ? SERVICES_DATA : SERVICES_DATA.filter(s => s.category === filter);

  filtered.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";

    let variantsHTML = service.variants.map(v => `
      <div class="variant-row">
        <span class="variant-name">${v.name}</span>
        <span class="variant-price">$${v.price} MXN</span>
      </div>
    `).join("");

    card.innerHTML = `
      <div>
        <span class="g-tag" style="margin-bottom: 0.4rem;">${service.badge}</span>
        <h3 class="service-card-title">${service.title}</h3>
        <p class="service-card-desc">${service.description}</p>
        <div style="margin-bottom: 0.75rem;">
          ${variantsHTML}
        </div>
      </div>
      <button class="card-action-btn" onclick="selectServiceInCotizador('${service.id}')">
        <i class="fa-solid fa-plus-circle"></i> Cotizar Servicio
      </button>
    `;

    container.appendChild(card);
  });
}

function answerQuiz(step, val) {
  if (step === 1) {
    quizAnswers.step1 = val;
    document.getElementById("quizStep1").classList.remove("active");
    document.getElementById("quizStep2").classList.add("active");
    document.getElementById("quizProgressFill").style.width = "66%";
  } else if (step === 2) {
    quizAnswers.step2 = val;
    document.getElementById("quizStep2").classList.remove("active");
    document.getElementById("quizStep3").classList.add("active");
    document.getElementById("quizProgressFill").style.width = "100%";
  } else if (step === 3) {
    quizAnswers.step3 = val;
    document.getElementById("quizStep3").classList.remove("active");
    showQuizResult();
  }
}

function showQuizResult() {
  const pane = document.getElementById("quizResultPane");
  const titleEl = document.getElementById("quizResultTitle");
  const descEl = document.getElementById("quizResultDesc");
  const applyBtn = document.getElementById("btnQuizApply");

  let recServiceId = "rubber";
  let recVariantId = "rubber_mismo";
  let title = "Nivelación Rubber ($200)";
  let desc = "Ideada para proteger tu uña natural con fuerza y brillo liso.";

  if (quizAnswers.step1 === "retoque") {
    recServiceId = "esculturales_retoque";
    recVariantId = "esc_r_12";
    title = "Retoque Escultural c/ Manicura ($280)";
    desc = "Mantenimiento, nivelación de crecimiento y rebalanceo de tu set anterior.";
  } else if (quizAnswers.step1 === "medium") {
    recServiceId = "polygel";
    recVariantId = "polygel_12";
    title = "Polygel Largo 1-2 ($290)";
    desc = "Extensión sutil y ligera ideal para uso diario.";
  } else if (quizAnswers.step1 === "long") {
    recServiceId = "esculturales_nuevo";
    recVariantId = "esc_n_34";
    title = "Uñas Esculturales ($320)";
    desc = "Esculpidas en acrílico con forma personalizada.";
  }

  titleEl.textContent = title;
  descEl.textContent = desc;
  pane.classList.add("active");

  applyBtn.onclick = () => {
    window.location.href = `cotizador.html?service=${recServiceId}&variant=${recVariantId}`;
  };
}

function restartQuiz() {
  quizAnswers.step1 = null;
  quizAnswers.step2 = null;
  quizAnswers.step3 = null;

  document.getElementById("quizResultPane").classList.remove("active");
  document.getElementById("quizStep2").classList.remove("active");
  document.getElementById("quizStep3").classList.remove("active");
  document.getElementById("quizStep1").classList.add("active");
  document.getElementById("quizProgressFill").style.width = "33%";
}

function updateTicketReceipt() {
  const ticketBody = document.getElementById("ticketBody");
  const totalAmountEl = document.getElementById("totalAmount");
  const floatingBadge = document.getElementById("floatingTotalBadge");

  if (!ticketBody || !totalAmountEl) return;

  let total = 0;
  let receiptHTML = "";

  if (cotizadorState.selectedServiceId && cotizadorState.selectedVariantId) {
    const service = SERVICES_DATA.find(s => s.id === cotizadorState.selectedServiceId);
    const variant = service.variants.find(v => v.id === cotizadorState.selectedVariantId);
    total += variant.price;

    receiptHTML += `
      <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 700; padding: 0.3rem 0; border-bottom: 1px solid var(--c-rose-light);">
        <div>
          <span style="color: var(--c-black);">${service.title}</span>
          <small style="display: block; font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">${variant.name}</small>
        </div>
        <span style="color: var(--c-magenta); font-family: var(--font-serif); font-size: 1rem;">$${variant.price}</span>
      </div>
    `;
  } else {
    ticketBody.innerHTML = `
      <div class="empty-ticket-state text-center" style="padding: 1.5rem 0; color: #888;">
        <i class="fa-solid fa-receipt" style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-magenta);"></i>
        <p style="font-size: 0.8rem;">Selecciona un servicio base.</p>
      </div>
    `;
    totalAmountEl.textContent = "$0 MXN";
    if (floatingBadge) floatingBadge.textContent = "$0";
    return;
  }

  Object.keys(cotizadorState.extras).forEach(extraId => {
    const itemState = cotizadorState.extras[extraId];
    if (itemState.count > 0) {
      const extraObj = EXTRAS_DATA.find(e => e.id === extraId);
      let cost = (itemState.mode === "full" && extraObj.fullPrice) ? extraObj.fullPrice * itemState.count : extraObj.unitPrice * itemState.count;
      total += cost;
      let label = (itemState.mode === "full" && extraObj.fullPrice) ? `${extraObj.name} (${extraObj.fullText})` : `${extraObj.name} x${itemState.count}`;

      receiptHTML += `
        <div style="display: flex; justify-content: space-between; font-size: 0.78rem; padding: 0.22rem 0; color: var(--text-dark);">
          <span>${label}</span>
          <span style="font-weight: 700; color: var(--c-magenta);">+$${cost}</span>
        </div>
      `;
    }
  });

  ticketBody.innerHTML = receiptHTML;
  totalAmountEl.textContent = `$${total} MXN`;
  if (floatingBadge) floatingBadge.textContent = `$${total}`;
}

function sendWhatsAppQuote() {
  if (!cotizadorState.selectedServiceId) {
    alert("Por favor selecciona primero un servicio base para cotizar.");
    return;
  }

  const service = SERVICES_DATA.find(s => s.id === cotizadorState.selectedServiceId);
  const variant = service.variants.find(v => v.id === cotizadorState.selectedVariantId);

  let text = `Hola Emciel Nails, me gustaría agendar una cita con el siguiente desglose:\n\n`;
  text += `SERVICIO BASE:\n- ${service.title} (${variant.name}) - $${variant.price} MXN\n`;

  let hasExtras = false;
  let extrasText = `\nEXTRAS SELECCIONADOS:\n`;
  let total = variant.price;

  Object.keys(cotizadorState.extras).forEach(extraId => {
    const st = cotizadorState.extras[extraId];
    if (st.count > 0) {
      hasExtras = true;
      const ex = EXTRAS_DATA.find(e => e.id === extraId);
      let cost = (st.mode === "full" && ex.fullPrice) ? ex.fullPrice * st.count : ex.unitPrice * st.count;
      total += cost;
      let label = (st.mode === "full" && ex.fullPrice) ? `${ex.name} (${ex.fullText})` : `${ex.name} x${st.count}`;
      extrasText += `- ${label}: +$${cost}\n`;
    }
  });

  if (hasExtras) text += extrasText;
  text += `\nTOTAL ESTIMADO: $${total} MXN\n`;
  if (cotizadorState.clientInfo.name) text += `\nNombre: ${cotizadorState.clientInfo.name}`;
  if (cotizadorState.clientInfo.date) text += `\nHorario: ${cotizadorState.clientInfo.date}`;

  window.open(`https://wa.me/522221038084?text=${encodeURIComponent(text)}`, "_blank");
}

function copyQuoteToClipboard() {
  if (!cotizadorState.selectedServiceId) return;
  const service = SERVICES_DATA.find(s => s.id === cotizadorState.selectedServiceId);
  const variant = service.variants.find(v => v.id === cotizadorState.selectedVariantId);
  let totalText = `Cotización Emciel Nails:\n- ${service.title} (${variant.name}): $${variant.price}\n`;

  let total = variant.price;
  Object.keys(cotizadorState.extras).forEach(extraId => {
    const st = cotizadorState.extras[extraId];
    if (st.count > 0) {
      const ex = EXTRAS_DATA.find(e => e.id === extraId);
      let cost = (st.mode === "full" && ex.fullPrice) ? ex.fullPrice * st.count : ex.unitPrice * st.count;
      total += cost;
      let label = (st.mode === "full" && ex.fullPrice) ? `${ex.name} (${ex.fullText})` : `${ex.name} x${st.count}`;
      totalText += `- ${label}: +$${cost}\n`;
    }
  });

  totalText += `Total: $${total} MXN`;
  navigator.clipboard.writeText(totalText).then(() => alert("Cotización copiada al portapapeles."));
}

function resetQuote() {
  cotizadorState.selectedServiceId = null;
  cotizadorState.selectedVariantId = null;
  Object.keys(cotizadorState.extras).forEach(k => {
    cotizadorState.extras[k] = { count: 0, mode: "unit" };
  });
  updateTicketReceipt();
}

function initLengthGuide() {
  const buttons = document.querySelectorAll(".length-btn");
  const extension = document.getElementById("nailExtension");
  const metricBadge = document.getElementById("lengthMetricBadge");
  const title = document.getElementById("lengthTitle");
  const desc = document.getElementById("lengthDesc");

  if (!buttons.length || !extension) return;

  const heightMap = { same: "0px", l12: "35px", l34: "70px", l56: "110px" };

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const lenKey = btn.dataset.length;
      extension.style.height = heightMap[lenKey];
      if (metricBadge) metricBadge.textContent = `${btn.dataset.name} (${btn.dataset.mm})`;
      if (title) title.textContent = btn.dataset.name;
      if (desc) desc.textContent = btn.dataset.desc;
    });
  });
}

function initProbadorVirtual() {
  const swatches = document.querySelectorAll(".color-swatch");
  const simNails = document.querySelectorAll(".sim-nail");
  const badge = document.getElementById("previewStatusBadge");

  if (!simNails.length) return;

  let currentColor = "#E4C7CF";
  let currentColorName = "Rosa Blush";

  swatches.forEach(swatch => {
    swatch.addEventListener("click", () => {
      swatches.forEach(s => s.classList.remove("active"));
      swatch.classList.add("active");
      currentColor = swatch.dataset.color;
      currentColorName = swatch.dataset.name;
      simNails.forEach(nail => nail.style.background = currentColor);
      if (badge) badge.textContent = `Tono: ${currentColorName}`;
    });
  });
}

function initAccordions() {
  const items = document.querySelectorAll(".accordion-item");
  items.forEach(item => {
    const header = item.querySelector(".accordion-header");
    if (header) {
      header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        items.forEach(i => i.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
    }
  });
}
