// LAXMAN SHRESTHA PORTFOLIO INTERACTIVITY CONTROL SCRIPT
// Replicating a robust Blogger widgets engine utilizing localized persistent storage

// Current language state
let currentLang = 'en';

// Initial download counts for educational materials
let downloadCounts = {
  kasamu: 412,
  leave: 128,
  grid: 219
};

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Load download counts from localStorage if available
  initLocalStorage();

  // Render initial count values on layout
  updateDownloadUI();

  // Odometer live ticker incrementer simulation (simulates passive visitor hits)
  setInterval(() => {
    const odoLive = document.getElementById("odo-live");
    if (odoLive) {
      let val = parseInt(odoLive.innerText);
      if (Math.random() > 0.6) {
        val = (val + 1) % 10;
        odoLive.innerText = val.toString();
      }
    }
  }, 4500);
});

// Setup Initial Storage Engine
function initLocalStorage() {
  if (!localStorage.getItem("laxman_downloads")) {
    localStorage.setItem("laxman_downloads", JSON.stringify(downloadCounts));
  } else {
    try {
      downloadCounts = JSON.parse(localStorage.getItem("laxman_downloads"));
    } catch (e) {
      console.error("Failed to parse downloads count:", e);
    }
  }
}

// LANGUAGE SWITCHER ENGINE
function switchLanguage(lang) {
  currentLang = lang;
  
  // Highlight correct language button
  const btns = document.querySelectorAll(".lang-btn");
  btns.forEach(btn => btn.classList.remove("active"));
  
  const targetId = `btn-${lang}`;
  const targetBtn = document.getElementById(targetId);
  if (targetBtn) {
    targetBtn.classList.add("active");
  }

  // Update translatable elements with precise translation mapping
  const translateElements = document.querySelectorAll("[data-en]");
  translateElements.forEach(el => {
    const textEn = el.getAttribute("data-en");
    const textNe = el.getAttribute("data-ne");
    
    if (lang === "en") {
      el.innerHTML = textEn;
    } else {
      el.innerHTML = textNe;
    }
  });
}

// DOWNLOAD TRIGGER & COUNTERS ENGINE
function triggerDownload(fileKey) {
  // Increment tracker count
  if (downloadCounts[fileKey] !== undefined) {
    downloadCounts[fileKey]++;
    localStorage.setItem("laxman_downloads", JSON.stringify(downloadCounts));
    updateDownloadUI();
  }

  // Informative confirmation alerts in selected language
  const messagesEn = {
    kasamu: "Preparing Download: Teacher's Ka.Sa.Mu Performance Evaluation Sheets.",
    leave: "Preparing Download: School Academic Teacher Leave Application Template.",
    grid: "Preparing Download: Integrated Curriculum Refresher Workshop Booklet."
  };

  const messagesNe = {
    kasamu: "डाउनलोड तयारी हुँदैछ: शिक्षक कार्यसम्पादन मूल्याङ्कन (कासमु) फाराम।",
    leave: "डाउनलोड तयारी हुँदैछ: विद्यालय शिक्षक बिदा स्वीकृत ढाँचा।",
    grid: "डाउनलोड तयारी हुँदैछ: एकीकृत पाठ्यक्रम अभिमुखीकरण कार्यशाला स्तरपुस्तिका।"
  };

  const msg = (currentLang === "en") ? messagesEn[fileKey] : messagesNe[fileKey];
  alert(`[PORTAL DIALOGUE]: ${msg}`);
}

function updateDownloadUI() {
  for (const [key, val] of Object.entries(downloadCounts)) {
    const el = document.getElementById(`count-${key}`);
    if (el) {
      el.innerText = val;
    }
  }
}

// category filter handler (scroll to top for Home category)
function showCategory(category) {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


