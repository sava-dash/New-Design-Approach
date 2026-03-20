const challengeCards = [
  {
    step: "01",
    title: "Review the full project package",
    text: "The designer starts by reading briefs, notes, references, requirements, and technical constraints to understand the product before drawing anything.",
  },
  {
    step: "02",
    title: "Find structure before visuals",
    text: "The first goal is not polished UI. It is identifying flows, priorities, dependencies, and missing information that will shape the product.",
  },
  {
    step: "03",
    title: "Use agents for early exploration",
    text: "ClaudeCode or Codex is used as an exploration partner to test information architecture, edge cases, routes, and screen logic quickly.",
  },
  {
    step: "04",
    title: "Capture everything in shared tools",
    text: "Instead of keeping discovery private, the team stores findings in GitHub and shares progress through Vercel with colleagues and clients.",
  },
];

const opportunityCards = [
  {
    tag: "Layer 1",
    title: "Agent-guided exploration",
    text: "ClaudeCode or Codex helps the designer think through flows, content structures, interaction logic, and product gaps before wireframes exist.",
  },
  {
    tag: "Layer 2",
    title: "GitHub as project memory",
    text: "Prompts, notes, content structures, and implementation-ready artifacts are stored in a repository so the whole team can reuse and extend them.",
  },
  {
    tag: "Layer 3",
    title: "Vercel as review surface",
    text: "Live previews make progress easy to share with colleagues and clients, which creates faster feedback loops and better alignment.",
  },
];

const roadmapSteps = [
  {
    label: "Loop 1",
    title: "Explore in CLI",
    text: "Start inside ClaudeCode or Codex to test flows, screen groupings, naming, edge cases, and possible directions.",
    pictogram: "pictogram-ai.svg",
  },
  {
    label: "Loop 2",
    title: "Translate into Figma",
    text: "Move the strongest structure into Figma so the UX flow becomes visible, reviewable, and easier to refine with stakeholders.",
    pictogram: "pictogram-design-thinking-team.svg",
  },
  {
    label: "Loop 3",
    title: "Return to the agent",
    text: "Go back to the CLI agent to improve weak points, add states, challenge assumptions, and tighten the logic behind the flow.",
    pictogram: "pictogram-insights.svg",
  },
  {
    label: "Loop 4",
    title: "Repeat until stable",
    text: "The loop continues until the UX direction is clear enough that visual design and system work can move forward with confidence.",
    pictogram: "pictogram-chart-evaluation.svg",
  },
];

const templatePages = [
  {
    tag: "For the team",
    title: "Clearer internal collaboration",
    text: "Design exploration, decisions, and handoff materials stay connected across Figma, GitHub, and Vercel instead of being split across disconnected files.",
    bullets: [
      "Shared project memory in GitHub",
      "Faster review with Vercel previews",
      "More reusable work for design and development",
    ],
  },
  {
    tag: "For the process",
    title: "A stronger design sequence",
    text: "The workflow validates UX first, then applies manual UI craft and a design system to an already tested product structure.",
    bullets: [
      "Analysis before wireframes",
      "Agent-assisted UX exploration",
      "Manual UI applied to approved flow",
    ],
  },
  {
    tag: "For the client",
    title: "A more buildable handoff",
    text: "The client receives more than polished screens: they get a repository and shared artifacts that point toward an almost ready product.",
    bullets: [
      "Repository with working context",
      "Live preview visibility during the process",
      "Stronger starting point for implementation",
    ],
  },
];

const tocEntries = [
  { number: "03", title: "Core Loop" },
  { number: "04", title: "Process Shift" },
  { number: "05", title: "Before Wireframes" },
  { number: "06", title: "Shared Exploration Stack" },
  { number: "07", title: "Agent to Figma Loop" },
  { number: "08", title: "UX Flow" },
  { number: "09", title: "UI + Design System" },
  { number: "10", title: "Delivery" },
  { number: "11", title: "Final Outcome" },
];

const phaseProfiles = {
  uxFlow: {
    cardLabel: "Phase goal",
    featureHeading: "What happens in this phase",
    overviewText:
      "The UX flow is where exploration becomes product structure. It proves how users move, what decisions they face, and which states the product must support before UI craft begins.",
    features: [
      "Analyze project materials before making wireframes",
      "Use ClaudeCode or Codex to explore IA, paths, and missing states",
      "Translate the best direction into Figma and refine it until the flow is stable",
    ],
  },
  uiSystem: {
    cardLabel: "Phase goal",
    featureHeading: "What happens in this phase",
    overviewText:
      "Once UX is validated, the team creates the interface manually and builds the design system around real product structure instead of abstract assumptions.",
    features: [
      "Craft the UI manually for stronger product quality and brand fit",
      "Prepare a design system with reusable foundations and components",
      "Apply the system directly to the previously approved UX flow",
    ],
  },
  delivery: {
    cardLabel: "Phase goal",
    featureHeading: "What happens in this phase",
    overviewText:
      "Delivery stays connected to the working process. GitHub and Vercel make the design journey transparent and give the client a handoff that is much closer to a real product.",
    features: [
      "Keep decisions, structures, and artifacts inside a shared GitHub repository",
      "Use Vercel previews so colleagues and clients can review progress live",
      "Hand off an almost ready product foundation instead of only static design files",
    ],
  },
};

const challengeGrid = document.getElementById("challengeGrid");
const opportunityGrid = document.getElementById("opportunityGrid");
const roadmapContainer = document.getElementById("roadmapSteps");
const templatePagesContainer = document.getElementById("templatePages");
const tocList = document.getElementById("tocList");
const uxFlowFeatures = document.getElementById("uxFlowFeatures");
const uiSystemFeatures = document.getElementById("uiSystemFeatures");
const deliveryFeatures = document.getElementById("deliveryFeatures");

const deck = document.getElementById("deck");
const slides = [...document.querySelectorAll(".slide")];
const navLinks = [...document.querySelectorAll(".rail-nav a")];
const topbarTitle = document.getElementById("topbarTitle");
const slideIndex = document.getElementById("slideIndex");
const slideTotal = document.getElementById("slideTotal");
const progressFill = document.getElementById("progressFill");
const prevSlideButton = document.getElementById("prevSlide");
const nextSlideButton = document.getElementById("nextSlide");

function renderPhaseFeatures(profile, container) {
  container.innerHTML = `
    <span>${profile.featureHeading}</span>
    <ul class="project-feature-list">
      ${profile.features
        .map(
          (feature, index) => `
            <li>
              <strong>${String(index + 1).padStart(2, "0")}</strong>
              <p>${feature}</p>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function renderCards() {
  challengeGrid.innerHTML = challengeCards
    .map(
      (card) => `
        <article class="challenge-card">
          <span>${card.step}</span>
          <h4>${card.title}</h4>
          <p>${card.text}</p>
        </article>
      `
    )
    .join("");

  opportunityGrid.innerHTML = opportunityCards
    .map(
      (card) => `
        <article class="opportunity-card">
          <span>${card.tag}</span>
          <h4>${card.title}</h4>
          <p>${card.text}</p>
        </article>
      `
    )
    .join("");

  roadmapContainer.innerHTML = roadmapSteps
    .map(
      (item) => `
        <article class="timeline-item">
          <img
            class="timeline-pictogram"
            src="${item.pictogram}"
            alt=""
            aria-hidden="true"
          />
          <span>${item.label}</span>
          <h4>${item.title}</h4>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");

  templatePagesContainer.innerHTML = templatePages
    .map(
      (page) => `
        <article class="template-card">
          <div>
            <span>${page.tag}</span>
            <h4>${page.title}</h4>
            <p>${page.text}</p>
          </div>
          <ul class="browser-points">
            ${page.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");

  renderPhaseFeatures(phaseProfiles.uxFlow, uxFlowFeatures);
  renderPhaseFeatures(phaseProfiles.uiSystem, uiSystemFeatures);
  renderPhaseFeatures(phaseProfiles.delivery, deliveryFeatures);

  tocList.innerHTML = tocEntries
    .map((slide) => {
      return `
        <li>
          <span>${slide.number}</span>
          <strong>${slide.title}</strong>
        </li>
      `;
    })
    .join("");

  slideTotal.textContent = String(slides.length).padStart(2, "0");
}

function updateSlideState(activeId) {
  const activeIndex = slides.findIndex((slide) => slide.id === activeId);

  if (activeIndex === -1) {
    return;
  }

  const activeSlide = slides[activeIndex];
  const progress = ((activeIndex + 1) / slides.length) * 100;

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
  });

  topbarTitle.textContent = activeSlide.dataset.title;
  slideIndex.textContent = String(activeIndex + 1).padStart(2, "0");
  progressFill.style.width = `${progress}%`;

  prevSlideButton.disabled = activeIndex === 0;
  nextSlideButton.disabled = activeIndex === slides.length - 1;
}

function goToSlide(index) {
  const boundedIndex = Math.max(0, Math.min(index, slides.length - 1));
  slides[boundedIndex].scrollIntoView({ behavior: "smooth", block: "start" });
}

function getCurrentSlideIndex() {
  const viewportHeight = deck.clientHeight || window.innerHeight;

  return slides.findIndex((slide) => {
    const rect = slide.getBoundingClientRect();
    return rect.top >= -viewportHeight * 0.25 && rect.top < viewportHeight * 0.35;
  });
}

function getObserverRoot() {
  return getComputedStyle(deck).overflowY === "auto" ? deck : null;
}

function bindEvents() {
  prevSlideButton.addEventListener("click", () => {
    const currentIndex = getCurrentSlideIndex();
    goToSlide((currentIndex === -1 ? 0 : currentIndex) - 1);
  });

  nextSlideButton.addEventListener("click", () => {
    const currentIndex = getCurrentSlideIndex();
    goToSlide((currentIndex === -1 ? 0 : currentIndex) + 1);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "PageDown") {
      event.preventDefault();
      const currentIndex = getCurrentSlideIndex();
      goToSlide((currentIndex === -1 ? 0 : currentIndex) + 1);
    }

    if (event.key === "ArrowUp" || event.key === "PageUp") {
      event.preventDefault();
      const currentIndex = getCurrentSlideIndex();
      goToSlide((currentIndex === -1 ? 0 : currentIndex) - 1);
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href")?.replace("#", "");
      const targetIndex = slides.findIndex((slide) => slide.id === targetId);
      goToSlide(targetIndex);
    });
  });
}

function observeSlides() {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0];

      if (visibleEntry) {
        updateSlideState(visibleEntry.target.id);
      }
    },
    {
      root: getObserverRoot(),
      threshold: [0.35, 0.55, 0.75],
    }
  );

  slides.forEach((slide) => observer.observe(slide));
}

renderCards();
bindEvents();
observeSlides();
updateSlideState(slides[0].id);
