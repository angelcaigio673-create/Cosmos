/**
 * Cosmos // Tactical OSINT Intelligence Platform
 * Pure Vector Typography & Zero-Emoji Engine
 * Dual-Mode: Desktop Workstation & Mobile Touch Edition
 */

(function () {
  'use strict';

  const STORAGE_KEY = "cosmos_graph_v7";

  // ---------------------------------------------------------------------------
  // 1. DATASETS (Zero Emojis)
  // ---------------------------------------------------------------------------
  const TAG_COLORS = {
    "Субъект": "#38bdf8",
    "Организация": "#c084fc",
    "Место": "#34d399",
    "Контакт": "#fbbf24",
    "Документ": "#94a3b8",
    "Заметка": "#facc15"
  };

  const CASES = [
    {
      id: "phishing_net",
      name: "Фишинг-сеть",
      pan: { x: Math.round(window.innerWidth * 0.35), y: Math.round(window.innerHeight * 0.45) },
      zoom: 0.62,
      nodes: [
        {
          id: "root", x: -280, y: 0, tag: "Субъект", risk: "high",
          title: "acme-secure-login.example", sub: "Case 0417: phishing domain",
          color: "#38bdf8", fields: []
        },
        {
          id: "namebox", x: 0, y: -200, tag: "Организация", risk: "none",
          title: "NameBox Ltd", sub: "Registrar, created 2026-08-14",
          color: "#c084fc", fields: []
        },
        {
          id: "ip", x: 0, y: -100, tag: "Место", risk: "med",
          title: "203.0.113.7", sub: "Hosting, AS64500",
          color: "#34d399", fields: []
        },
        {
          id: "email", x: 0, y: 0, tag: "Контакт", risk: "med",
          title: "admin@mailbox.example", sub: "Registrant e-mail",
          color: "#fbbf24", fields: []
        },
        {
          id: "tls", x: 0, y: 100, tag: "Документ", risk: "none",
          title: "TLS certificate", sub: "Issued 2026-08-14, 90 days",
          color: "#94a3b8", fields: []
        },
        {
          id: "phish_kit", x: 0, y: 200, tag: "Заметка", risk: "med",
          title: "Phishing kit v2", sub: "Identical template on 3 domains",
          color: "#facc15", fields: []
        },
        {
          id: "sibling1", x: 280, y: -150, tag: "Субъект", risk: "low",
          title: "acme-support-help.example", sub: "Sibling domain, same IP",
          color: "#38bdf8", fields: []
        },
        {
          id: "sibling2", x: 280, y: -60, tag: "Субъект", risk: "low",
          title: "acme-billing-portal.example", sub: "Sibling domain, same IP",
          color: "#38bdf8", fields: []
        },
        {
          id: "tg_bot", x: 280, y: 40, tag: "Контакт", risk: "med",
          title: "@acme_support_bot", sub: "Messenger account",
          color: "#fbbf24", fields: []
        },
        {
          id: "host_prov", x: 280, y: 140, tag: "Организация", risk: "none",
          title: "Hosting provider", sub: "Abuse report filed",
          color: "#c084fc", fields: []
        },
        {
          id: "payment", x: 560, y: 0, tag: "Документ", risk: "low",
          title: "Payment address", sub: "Sample value, not real",
          color: "#94a3b8", fields: []
        }
      ],
      edges: [
        { id: "e1", from: "root", to: "namebox" },
        { id: "e2", from: "root", to: "ip" },
        { id: "e3", from: "root", to: "email" },
        { id: "e4", from: "root", to: "tls" },
        { id: "e5", from: "root", to: "phish_kit" },
        { id: "e6", from: "ip", to: "sibling1" },
        { id: "e7", from: "ip", to: "sibling2" },
        { id: "e8", from: "ip", to: "host_prov" },
        { id: "e9", from: "email", to: "sibling1" },
        { id: "e10", from: "email", to: "tg_bot" },
        { id: "e11", from: "phish_kit", to: "sibling2" },
        { id: "e12", from: "tg_bot", to: "payment" }
      ]
    },
    {
      id: "person_osint",
      name: "Профиль OSINT",
      pan: { x: Math.round(window.innerWidth / 2), y: Math.round(window.innerHeight / 2 - 20) },
      zoom: 0.75,
      nodes: [
        {
          id: "root", x: -280, y: 0, tag: "Субъект", risk: "none",
          title: "Валидация базы", sub: "ФИО / Основной профиль",
          color: "#38bdf8", fields: [{ k: "Статус", v: "Активен" }]
        },
        {
          id: "tg", x: 0, y: -180, tag: "Контакт", risk: "med",
          title: "Телеграмм", sub: "@username_id",
          color: "#fbbf24", fields: [{ k: "TG ID", v: "594821044" }]
        },
        {
          id: "addr_val", x: 280, y: -180, tag: "Место", risk: "none",
          title: "Киевская, д. 75, кв. 6", sub: "Подтверждено по реестру",
          color: "#34d399", fields: [{ k: "Индекс", v: "08132" }]
        },
        {
          id: "school", x: 0, y: -60, tag: "Учеба", risk: "none",
          title: "Школа номер 3", sub: "7Б класс",
          color: "#ec4899", fields: []
        },
        {
          id: "phone", x: 0, y: 60, tag: "Связь", risk: "low",
          title: "Номер телефона", sub: "+380 (XX) XXX-XX-XX",
          color: "#38bdf8", fields: [{ k: "Сеть", v: "Online" }]
        },
        {
          id: "dob", x: 280, y: 60, tag: "Дата", risk: "none",
          title: "Дата рождения", sub: "17.09.2012 (14 лет)",
          color: "#94a3b8", fields: []
        },
        {
          id: "rel_1", x: 0, y: 180, tag: "Семья", risk: "none",
          title: "Отец / Мать", sub: "Контактные данные",
          color: "#c084fc", fields: [{ k: "Статус", v: "Верифицирован" }]
        },
        {
          id: "verdict", x: 280, y: 180, tag: "Статус", risk: "none",
          title: "ИТОГ ВАЛИДНУТ", sub: "Все ветки сведены",
          color: "#38bdf8", fields: []
        }
      ],
      edges: [
        { id: "e1", from: "root", to: "tg" },
        { id: "e2", from: "tg", to: "addr_val" },
        { id: "e3", from: "root", to: "school" },
        { id: "e4", from: "root", to: "phone" },
        { id: "e5", from: "phone", to: "dob" },
        { id: "e6", from: "root", to: "rel_1" },
        { id: "e7", from: "rel_1", to: "verdict" }
      ]
    }
  ];

  // ---------------------------------------------------------------------------
  // 2. WALLPAPERS CONFIGURATION
  // ---------------------------------------------------------------------------
  const WALLPAPER_PRESETS = [
    { id: "dark_neon", name: "Чистый неон", url: "" },
    { id: "winter_forest", name: "Зимний лес", url: "assets/winter_forest.jpg" },
    { id: "clouds", name: "Облака", url: "assets/clouds.jpg" },
    { id: "black_hole", name: "Черная дыра", url: "assets/blackhole.jpg" },
    { id: "cyber_grid", name: "3D Каркас", url: "assets/wireframe_terrain.png" },
    { id: "city", name: "Мегаполис", url: "assets/foggy_city.png" },
    { id: "eyes", name: "Мистик", url: "assets/surveillance_eyes.jpg" },
    { id: "halftone", name: "Растр", url: "assets/halftone.png" }
  ];

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function loadInitialState() {
    let loaded = null;
    try {
      let raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) raw = localStorage.getItem("vibetrace_graph_v6");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.nodes && parsed.edges) loaded = parsed;
      }
    } catch (e) {}
    if (!loaded) {
      loaded = deepClone(CASES[0]);
      loaded.activeCaseId = "phishing_net";
    }
    loaded.settings = Object.assign({
      bgType: "dark_neon",
      dim: 35,
      blur: 0,
      showDots: false,
      dotsOpacity: 9,
      particles: "off",
      edgeFlow: true,
      edgeWidth: 1.8,
      showSpectrum: true,
      deviceMode: "auto",
      lang: "RU"
    }, loaded.settings || {});
    return loaded;
  }

  let state = loadInitialState();
  let selectedNodeId = "root";
  let hoveredNodeId = null;
  let linkMode = false;
  let linkSourceId = null;
  let searchQuery = "";

  // Undo / Redo History
  const historyStack = [];
  let historyIndex = -1;

  function pushHistory() {
    const snap = JSON.stringify({ nodes: state.nodes, edges: state.edges });
    if (historyIndex >= 0 && historyStack[historyIndex] === snap) return;
    historyStack.splice(historyIndex + 1);
    historyStack.push(snap);
    if (historyStack.length > 30) historyStack.shift();
    historyIndex = historyStack.length - 1;
  }

  function undo() {
    if (historyIndex > 0) {
      historyIndex--;
      const snap = JSON.parse(historyStack[historyIndex]);
      state.nodes = snap.nodes;
      state.edges = snap.edges;
      saveState();
      renderAll();
      showToast("Отменено");
    }
  }

  function redo() {
    if (historyIndex < historyStack.length - 1) {
      historyIndex++;
      const snap = JSON.parse(historyStack[historyIndex]);
      state.nodes = snap.nodes;
      state.edges = snap.edges;
      saveState();
      renderAll();
      showToast("Возвращено");
    }
  }

  let saveTimer = null;
  function saveState() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveStateImmediate, 200);
    updateTelemetry();
  }

  function saveStateImmediate() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // If quota exceeded due to large photo, trim custom photo and retry
      try {
        if (state.settings) state.settings.customBg = null;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (err) {}
    }
  }

  // ---------------------------------------------------------------------------
  // 3. DOM ELEMENTS
  // ---------------------------------------------------------------------------
  const bgLayer = document.getElementById("bg-layer");
  const bgDots = document.getElementById("bg-dots");
  const viewport = document.getElementById("viewport");
  const world = document.getElementById("world");
  const nodesLayer = document.getElementById("nodes-layer");
  const edgesSvg = document.getElementById("edges-svg");

  const statNodes = document.getElementById("stat-nodes");
  const statEdges = document.getElementById("stat-edges");
  const statZoom = document.getElementById("stat-zoom");

  const casePopover = document.getElementById("case-popover");
  const caseNameDisplay = document.getElementById("case-name-display");
  const btnCaseDropdown = document.getElementById("btn-case-dropdown");

  const exportPopover = document.getElementById("export-popover");
  const btnExportDropdown = document.getElementById("btn-export-dropdown");

  const presetsGrid = document.getElementById("presets-grid");
  const sliderDim = document.getElementById("slider-dim");
  const sliderBlur = document.getElementById("slider-blur");
  const labelDim = document.getElementById("label-dim");
  const labelBlur = document.getElementById("label-blur");
  const selectParticles = document.getElementById("select-particles");
  const customBgInput = document.getElementById("custom-bg-input");

  // Settings Modal DOM
  const settingsModal = document.getElementById("settings-modal");
  const btnOpenSettings = document.getElementById("btn-open-settings");
  const btnCloseSettings = document.getElementById("btn-close-settings");
  const btnSaveSettings = document.getElementById("btn-save-settings");
  const settingsToggleDots = document.getElementById("settings-toggle-dots");
  const groupDotsOpacity = document.getElementById("group-dots-opacity");
  const sliderDotsOpacity = document.getElementById("slider-dots-opacity");
  const labelDotsOpacity = document.getElementById("label-dots-opacity");
  const settingsToggleFlow = document.getElementById("settings-toggle-flow");
  const settingsSelectEdgeWidth = document.getElementById("settings-select-edge-width");
  const settingsSelectDeviceMode = document.getElementById("settings-select-device-mode");
  const settingsToggleSpectrum = document.getElementById("settings-toggle-spectrum");
  const settingsSelectLang = document.getElementById("settings-select-lang");
  const btnSettingsReset = document.getElementById("btn-settings-reset");

  // Snapshot Photo Modal DOM
  const snapshotModal = document.getElementById("snapshot-modal");
  const snapshotImg = document.getElementById("snapshot-img");
  const btnOpenSnapshot = document.getElementById("btn-open-snapshot");
  const btnSnapshotCopy = document.getElementById("btn-snapshot-copy");
  const btnSnapshotOpen = document.getElementById("btn-snapshot-open");
  const btnSnapshotDownload = document.getElementById("btn-snapshot-download");
  const btnCloseSnapshot = document.getElementById("btn-close-snapshot");

  // Zen Presentation Mode
  const btnZen = document.getElementById("btn-zen");
  const zenBadge = document.getElementById("zen-badge");

  const inspectorModal = document.getElementById("inspector-modal");
  const edTag = document.getElementById("ed-tag");
  const edTitle = document.getElementById("ed-title");
  const edSub = document.getElementById("ed-sub");
  const edRisk = document.getElementById("ed-risk");
  const edColor = document.getElementById("ed-color");

  const dossierModal = document.getElementById("dossier-modal");
  const dossierText = document.getElementById("dossier-text");
  const jsonModal = document.getElementById("json-modal");
  const jsonTextarea = document.getElementById("json-textarea");
  const jsonFileInput = document.getElementById("json-file-input");

  const mobileSheet = document.getElementById("mobile-sheet");
  const sheetTitle = document.getElementById("sheet-title");
  const sheetContent = document.getElementById("sheet-content");
  const btnCloseSheet = document.getElementById("btn-close-sheet");

  const toast = document.getElementById("toast");
  let toastTimer = null;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
  }

  function closeAllPopovers() {
    if (casePopover) casePopover.classList.remove("open");
    if (exportPopover) exportPopover.classList.remove("open");
  }

  function closeAllModals() {
    closeAllPopovers();
    if (settingsModal) settingsModal.classList.remove("open");
    if (snapshotModal) snapshotModal.classList.remove("open");
    if (inspectorModal) inspectorModal.classList.remove("open");
    if (dossierModal) dossierModal.classList.remove("open");
    if (jsonModal) jsonModal.classList.remove("open");
    closeMobileSheet();
  }

  // ---------------------------------------------------------------------------
  // 4. DEVICE MODE (PC / PHONE DUAL ENGINE)
  // ---------------------------------------------------------------------------
  function applyDeviceMode() {
    const mode = (state.settings && state.settings.deviceMode) || "auto";
    document.body.classList.remove("force-mobile", "force-desktop");

    if (mode === "phone") {
      document.body.classList.add("force-mobile");
    } else if (mode === "pc") {
      document.body.classList.add("force-desktop");
    }
    if (settingsSelectDeviceMode) settingsSelectDeviceMode.value = mode;
  }

  // ---------------------------------------------------------------------------
  // 5. CAMERA & TOUCH GESTURES (PAN & PINCH-ZOOM)
  // ---------------------------------------------------------------------------
  function updateTransform() {
    world.style.transform = `translate3d(${state.pan.x}px, ${state.pan.y}px, 0) scale(${state.zoom})`;
    updateTelemetry();
  }

  function updateTelemetry() {
    statNodes.textContent = state.nodes.length;
    statEdges.textContent = state.edges.length;
    statZoom.textContent = `${Math.round(state.zoom * 100)}%`;
  }

  let isPanning = false;
  let panStartX = 0, panStartY = 0;
  let initialPinchDist = null;
  let initialZoom = 1;

  viewport.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".node") || e.target.closest(".action-btn")) return;
    closeAllPopovers();
    closeMobileSheet();

    isPanning = true;
    panStartX = e.clientX - state.pan.x;
    panStartY = e.clientY - state.pan.y;
    viewport.classList.add("panning");
  });

  viewport.addEventListener("pointermove", (e) => {
    if (!isPanning || initialPinchDist) return;
    state.pan.x = Math.round(e.clientX - panStartX);
    state.pan.y = Math.round(e.clientY - panStartY);
    requestAnimationFrame(updateTransform);
  });

  const endPan = () => {
    if (isPanning) {
      isPanning = false;
      viewport.classList.remove("panning");
      saveState();
    }
  };
  viewport.addEventListener("pointerup", endPan);
  viewport.addEventListener("pointercancel", endPan);

  // Mouse wheel zoom for PC
  viewport.addEventListener("wheel", (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.09 : 0.91;
    const newZoom = Math.min(Math.max(state.zoom * factor, 0.2), 2.5);

    const rect = viewport.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    state.pan.x = cx - ((cx - state.pan.x) / state.zoom) * newZoom;
    state.pan.y = cy - ((cy - state.pan.y) / state.zoom) * newZoom;
    state.zoom = newZoom;

    updateTransform();
    saveState();
  }, { passive: false });

  // Touch Pinch-Zoom for Mobile
  viewport.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
      isPanning = false;
      initialPinchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialZoom = state.zoom;
    }
  }, { passive: true });

  viewport.addEventListener("touchmove", (e) => {
    if (e.touches.length === 2 && initialPinchDist) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / initialPinchDist;
      state.zoom = Math.min(Math.max(initialZoom * factor, 0.2), 2.5);
      requestAnimationFrame(updateTransform);
    }
  }, { passive: true });

  viewport.addEventListener("touchend", () => {
    initialPinchDist = null;
    saveState();
  }, { passive: true });

  function fitViewToScreen() {
    if (!state.nodes.length) return;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    state.nodes.forEach(n => {
      minX = Math.min(minX, n.x - 40);
      maxX = Math.max(maxX, n.x + NODE_W + 40);
      minY = Math.min(minY, n.y - 40);
      maxY = Math.max(maxY, n.y + NODE_H + 40);
    });

    const w = Math.max(500, maxX - minX);
    const h = Math.max(400, maxY - minY);
    const vpW = window.innerWidth;
    const isMobile = window.innerWidth <= 820 || document.body.classList.contains("force-mobile");
    const vpH = window.innerHeight - (isMobile ? 110 : 50);

    const targetZoom = Math.min(Math.max(Math.min((vpW * 0.85) / w, (vpH * 0.85) / h), 0.25), 1.2);
    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;

    state.zoom = Number(targetZoom.toFixed(2));
    state.pan.x = Math.round(vpW / 2 - midX * state.zoom);
    state.pan.y = Math.round((vpH + (isMobile ? 44 : 48)) / 2 - midY * state.zoom);

    updateTransform();
    saveState();
  }

  // ---------------------------------------------------------------------------
  // 6. GRAPH RENDERING: NODES & 100% RELIABLE BEZIER EDGES
  // ---------------------------------------------------------------------------
  const NODE_W = 195;
  const NODE_H = 74;

  function computeSmoothBezier(n1, n2) {
    let x1, y1, x2, y2, dx, curveOffset;

    if (n2.x >= n1.x - 30) {
      x1 = n1.x + NODE_W;
      y1 = n1.y + NODE_H / 2;
      x2 = n2.x;
      y2 = n2.y + NODE_H / 2;
      dx = x2 - x1;
      curveOffset = Math.max(Math.abs(dx) * 0.45, 40);
      return `M ${x1} ${y1} C ${x1 + curveOffset} ${y1}, ${x2 - curveOffset} ${y2}, ${x2} ${y2}`;
    } else {
      x1 = n1.x;
      y1 = n1.y + NODE_H / 2;
      x2 = n2.x + NODE_W;
      y2 = n2.y + NODE_H / 2;
      dx = x1 - x2;
      curveOffset = Math.max(Math.abs(dx) * 0.45, 40);
      return `M ${x1} ${y1} C ${x1 - curveOffset} ${y1}, ${x2 + curveOffset} ${y2}, ${x2} ${y2}`;
    }
  }

  function renderEdges() {
    edgesSvg.innerHTML = "";
    const nodeMap = new Map(state.nodes.map(n => [n.id, n]));
    const activeFocusNodeId = hoveredNodeId || selectedNodeId;

    state.edges.forEach(edge => {
      const n1 = nodeMap.get(edge.from);
      const n2 = nodeMap.get(edge.to);
      if (!n1 || !n2) return;

      const d = computeSmoothBezier(n1, n2);
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

      const hit = document.createElementNS("http://www.w3.org/2000/svg", "path");
      hit.setAttribute("d", d);
      hit.setAttribute("class", "edge-hit");
      hit.addEventListener("click", () => {
        if (confirm(`Удалить связь между "${n1.title}" и "${n2.title}"?`)) {
          state.edges = state.edges.filter(e => e.id !== edge.id);
          pushHistory();
          saveState();
          renderEdges();
          showToast("Связь удалена");
        }
      });

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", d);
      path.setAttribute("class", "edge-path");
      path.dataset.id = edge.id;

      const flow = document.createElementNS("http://www.w3.org/2000/svg", "path");
      flow.setAttribute("d", d);
      flow.setAttribute("class", "edge-flow");

      if (activeFocusNodeId) {
        if (edge.from === activeFocusNodeId || edge.to === activeFocusNodeId) {
          const edgeColor = n1.color || TAG_COLORS[n1.tag] || "#38bdf8";
          path.classList.add("highlighted");
          path.style.setProperty("--edge-color", edgeColor);
          flow.classList.add("highlighted");
          flow.style.setProperty("--edge-color", edgeColor);
        } else {
          path.classList.add("dimmed");
        }
      }

      g.appendChild(hit);
      g.appendChild(path);
      g.appendChild(flow);
      edgesSvg.appendChild(g);
    });
  }

  function updateEdgesForNode(nodeId) {
    const nodeMap = new Map(state.nodes.map(n => [n.id, n]));
    edgesSvg.querySelectorAll(".edge-path").forEach(pathEl => {
      const edgeId = pathEl.dataset.id;
      const edge = state.edges.find(e => e.id === edgeId);
      if (edge && (edge.from === nodeId || edge.to === nodeId)) {
        const n1 = nodeMap.get(edge.from);
        const n2 = nodeMap.get(edge.to);
        if (n1 && n2) {
          const d = computeSmoothBezier(n1, n2);
          pathEl.setAttribute("d", d);
          const parentG = pathEl.parentElement;
          if (parentG) {
            const hit = parentG.querySelector(".edge-hit");
            const flow = parentG.querySelector(".edge-flow");
            if (hit) hit.setAttribute("d", d);
            if (flow) flow.setAttribute("d", d);
          }
        }
      }
    });
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderNodes() {
    nodesLayer.innerHTML = "";
    const q = searchQuery.trim().toLowerCase();

    state.nodes.forEach(node => {
      const el = document.createElement("div");
      el.className = "node";
      if (node.id === selectedNodeId) el.classList.add("selected");
      if (linkMode && linkSourceId === node.id) el.classList.add("link-source");

      el.style.left = `${node.x}px`;
      el.style.top = `${node.y}px`;
      const nodeColor = node.color || TAG_COLORS[node.tag] || "#38bdf8";
      el.style.setProperty("--node-color", nodeColor);

      if (q) {
        const hay = `${node.title} ${node.sub || ''} ${node.tag || ''}`.toLowerCase();
        if (!hay.includes(q)) el.classList.add("dimmed");
      }

      let riskText = "";
      if (node.risk && node.risk !== "none") {
        riskText = node.risk === "high" ? "ВЫСОКИЙ" : (node.risk === "med" ? "СРЕДНИЙ" : "НИЗКИЙ");
      }

      el.innerHTML = `
        <div class="node-socket socket-in"></div>
        <div class="node-socket socket-out"></div>
        <div class="node-actions">
          <button class="action-btn btn-link" title="Создать связь">Связь</button>
          <button class="action-btn btn-edit" title="Редактировать">Данные</button>
          <button class="action-btn btn-add-child" title="Добавить ветку">+ Ветка</button>
          <button class="action-btn del btn-del" title="Удалить">Удалить</button>
        </div>
        <div class="node-header">
          <span class="node-tag">${escapeHtml(node.tag || "Субъект")}</span>
          ${riskText ? `<span class="node-risk-pill risk-${node.risk}">${escapeHtml(riskText)}</span>` : ""}
        </div>
        <div class="node-title">${escapeHtml(node.title || "Безымянный")}</div>
        ${node.sub ? `<div class="node-sub">${escapeHtml(node.sub)}</div>` : ""}
      `;

      // Quick Actions
      el.querySelector(".btn-link").addEventListener("click", (e) => {
        e.stopPropagation();
        setLinkMode(true, node.id);
      });
      el.querySelector(".btn-edit").addEventListener("click", (e) => {
        e.stopPropagation();
        openNodeEditor(node.id);
      });
      el.querySelector(".btn-add-child").addEventListener("click", (e) => {
        e.stopPropagation();
        spawnChildNode(node);
      });
      el.querySelector(".btn-del").addEventListener("click", (e) => {
        e.stopPropagation();
        deleteNode(node.id);
      });

      // Hover glow on connecting edges
      el.addEventListener("mouseenter", () => {
        hoveredNodeId = node.id;
        renderEdges();
      });
      el.addEventListener("mouseleave", () => {
        hoveredNodeId = null;
        renderEdges();
      });

      attachNodeDrag(el, node);
      nodesLayer.appendChild(el);
    });
  }

  function attachNodeDrag(el, node) {
    let isDragging = false;
    let hasMoved = false;
    let startX = 0, startY = 0;
    let initialX = 0, initialY = 0;
    let dragRafPending = false;

    el.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".node-actions")) return;
      e.stopPropagation();

      if (linkMode) {
        handleLinkModeClick(node.id);
        return;
      }

      isDragging = true;
      hasMoved = false;
      startX = e.clientX;
      startY = e.clientY;
      initialX = node.x;
      initialY = node.y;
      el.setPointerCapture(e.pointerId);

      if (selectedNodeId !== node.id) {
        selectedNodeId = node.id;
        document.querySelectorAll(".node.selected").forEach(n => n.classList.remove("selected"));
        el.classList.add("selected");
        renderEdges();
      }
    });

    el.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      if (!hasMoved && Math.hypot(e.clientX - startX, e.clientY - startY) > 5) {
        hasMoved = true;
      }
      const dx = (e.clientX - startX) / state.zoom;
      const dy = (e.clientY - startY) / state.zoom;

      node.x = Math.round(initialX + dx);
      node.y = Math.round(initialY + dy);

      if (!dragRafPending) {
        dragRafPending = true;
        requestAnimationFrame(() => {
          dragRafPending = false;
          el.style.left = `${node.x}px`;
          el.style.top = `${node.y}px`;
          updateEdgesForNode(node.id);
        });
      }
    });

    const endDrag = (e) => {
      if (isDragging) {
        isDragging = false;
        try { el.releasePointerCapture(e.pointerId); } catch (_) {}
        if (hasMoved) {
          pushHistory();
          saveState();
        } else {
          // Clean tap on the node
          const isMobile = window.innerWidth <= 820 || document.body.classList.contains("force-mobile");
          if (isMobile) {
            openMobileNodeSheet(node);
          }
        }
      }
    };
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);

    // Double tap to edit
    let lastTap = 0;
    el.addEventListener("click", () => {
      const now = Date.now();
      if (now - lastTap < 300) {
        openNodeEditor(node.id);
      }
      lastTap = now;
    });
  }

  function renderAll() {
    applyVisualSettings();
    renderNodes();
    renderEdges();
    updateTransform();
  }

  // ---------------------------------------------------------------------------
  // 7. LINK CREATION MODE
  // ---------------------------------------------------------------------------
  const btnLinkMode = document.getElementById("btn-link-mode");
  const btnMobileLink = document.getElementById("btn-mobile-link");

  function setLinkMode(active, sourceId = null) {
    linkMode = active;
    linkSourceId = sourceId;

    btnLinkMode.classList.toggle("active", linkMode);
    if (btnMobileLink) btnMobileLink.classList.toggle("active", linkMode);
    viewport.classList.toggle("link-mode", linkMode);

    if (linkMode) {
      showToast(sourceId ? "Выберите целевой объект для связи" : "Кликните по первому объекту для связи");
    } else {
      linkSourceId = null;
    }
    renderNodes();
  }

  btnLinkMode.addEventListener("click", () => {
    setLinkMode(!linkMode, selectedNodeId || null);
  });
  if (btnMobileLink) {
    btnMobileLink.addEventListener("click", () => {
      setLinkMode(!linkMode, selectedNodeId || null);
    });
  }

  function handleLinkModeClick(targetId) {
    if (!linkSourceId) {
      linkSourceId = targetId;
      showToast("Исток выбран. Кликните по цели связи");
      renderNodes();
      return;
    }

    if (linkSourceId === targetId) {
      showToast("Нельзя связать узел с самим собой");
      setLinkMode(false);
      return;
    }

    const exists = state.edges.some(e =>
      (e.from === linkSourceId && e.to === targetId) ||
      (e.from === targetId && e.to === linkSourceId)
    );

    if (!exists) {
      state.edges.push({
        id: "e_" + Date.now(),
        from: linkSourceId,
        to: targetId
      });
      pushHistory();
      saveState();
      showToast("Связь установлена");
    }

    setLinkMode(false);
    renderAll();
  }

  // ---------------------------------------------------------------------------
  // 8. AUTO-LAYOUT: HIERARCHICAL TREE (Cosmos Intelligence Engine)
  // ---------------------------------------------------------------------------
  function runHierarchicalLayout() {
    const root = state.nodes.find(n => n.id === "root") || state.nodes[0];
    if (!root) return;

    const levels = new Map();
    levels.set(root.id, 0);

    const queue = [root.id];
    while (queue.length > 0) {
      const curId = queue.shift();
      const curLvl = levels.get(curId);

      state.edges.forEach(e => {
        if (e.from === curId && !levels.has(e.to)) {
          levels.set(e.to, curLvl + 1);
          queue.push(e.to);
        }
      });
    }

    state.nodes.forEach(n => {
      if (!levels.has(n.id)) levels.set(n.id, 1);
    });

    const columns = new Map();
    levels.forEach((lvl, id) => {
      if (!columns.has(lvl)) columns.set(lvl, []);
      columns.get(lvl).push(id);
    });

    const COL_GAP = 280;
    const ROW_GAP = 92;

    columns.forEach((nodeIds, colIdx) => {
      const colX = (colIdx - 1) * COL_GAP;
      const totalH = (nodeIds.length - 1) * ROW_GAP;
      const startY = -totalH / 2;

      nodeIds.forEach((id, rowIdx) => {
        const node = state.nodes.find(n => n.id === id);
        if (node) {
          node.x = colX;
          node.y = Math.round(startY + rowIdx * ROW_GAP);
        }
      });
    });

    pushHistory();
    saveState();
    renderAll();
    fitViewToScreen();
    showToast("Иерархическая раскладка выполнена");
  }

  document.getElementById("btn-layout").addEventListener("click", runHierarchicalLayout);
  const btnMobileLayout = document.getElementById("btn-mobile-layout");
  if (btnMobileLayout) btnMobileLayout.addEventListener("click", runHierarchicalLayout);
  document.getElementById("spectrum-widget").addEventListener("click", runHierarchicalLayout);

  // ---------------------------------------------------------------------------
  // 9. NODE INSPECTOR & EDITING
  // ---------------------------------------------------------------------------
  let editingNodeId = null;

  function openNodeEditor(nodeId) {
    const node = state.nodes.find(n => n.id === nodeId);
    if (!node) return;

    editingNodeId = node.id;
    edTag.value = node.tag || "Субъект";
    edTitle.value = node.title || "";
    edSub.value = node.sub || "";
    edRisk.value = node.risk || "none";
    edColor.value = node.color || "#38bdf8";

    inspectorModal.classList.add("open");
  }

  document.getElementById("btn-close-inspector").addEventListener("click", () => {
    inspectorModal.classList.remove("open");
  });

  document.getElementById("btn-save-node").addEventListener("click", () => {
    const node = state.nodes.find(n => n.id === editingNodeId);
    if (node) {
      node.tag = edTag.value.trim() || "Субъект";
      node.title = edTitle.value.trim() || "Без названия";
      node.sub = edSub.value.trim();
      node.risk = edRisk.value;
      node.color = edColor.value;

      pushHistory();
      saveState();
      renderAll();
      inspectorModal.classList.remove("open");
      showToast("Объект сохранен");
    }
  });

  document.getElementById("btn-delete-node").addEventListener("click", () => {
    if (editingNodeId) {
      deleteNode(editingNodeId);
      inspectorModal.classList.remove("open");
    }
  });

  function deleteNode(id) {
    if (confirm("Удалить этот объект и все его связи?")) {
      state.nodes = state.nodes.filter(n => n.id !== id);
      state.edges = state.edges.filter(e => e.from !== id && e.to !== id);
      if (selectedNodeId === id) selectedNodeId = null;
      pushHistory();
      saveState();
      renderAll();
      showToast("Узел удален");
    }
  }

  function spawnChildNode(parent) {
    const newNode = {
      id: "node_" + Date.now(),
      x: parent.x + 280,
      y: parent.y + Math.round((Math.random() - 0.5) * 80),
      tag: "Субъект",
      risk: "none",
      title: "Новый объект",
      sub: "Сведения",
      color: parent.color || "#38bdf8",
      fields: []
    };
    state.nodes.push(newNode);
    state.edges.push({
      id: "e_" + Date.now(),
      from: parent.id,
      to: newNode.id
    });
    selectedNodeId = newNode.id;
    pushHistory();
    saveState();
    renderAll();
    openNodeEditor(newNode.id);
  }

  function addNewNode() {
    const vpW = window.innerWidth;
    const vpH = window.innerHeight;
    const spawnX = Math.round((-state.pan.x + vpW / 2) / state.zoom - NODE_W / 2);
    const spawnY = Math.round((-state.pan.y + vpH / 2) / state.zoom - NODE_H / 2);

    const newNode = {
      id: "node_" + Date.now(),
      x: spawnX,
      y: spawnY,
      tag: "Субъект",
      risk: "none",
      title: "Новый объект",
      sub: "Сведения",
      color: "#38bdf8",
      fields: []
    };

    state.nodes.push(newNode);
    selectedNodeId = newNode.id;
    pushHistory();
    saveState();
    renderAll();
    openNodeEditor(newNode.id);
  }

  document.getElementById("btn-add-node").addEventListener("click", addNewNode);
  const btnMobileAdd = document.getElementById("btn-mobile-add");
  if (btnMobileAdd) btnMobileAdd.addEventListener("click", addNewNode);

  // ---------------------------------------------------------------------------
  // 10. MOBILE BOTTOM SHEET HANDLERS
  // ---------------------------------------------------------------------------
  function openMobileNodeSheet(node) {
    sheetTitle.textContent = node.title || "Объект";
    sheetContent.innerHTML = `
      <div style="font-size:11.5px; color:var(--text-muted); line-height:1.4;">
        Категория: <strong style="color:${node.color || '#38bdf8'}">${escapeHtml(node.tag || 'Субъект')}</strong><br>
        Риск: <strong>${(node.risk || 'none').toUpperCase()}</strong><br>
        ${node.sub ? `Описание: ${escapeHtml(node.sub)}` : ''}
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:8px;">
        <button class="nav-btn" id="sheet-btn-link" style="height:38px; justify-content:center;">Связь</button>
        <button class="nav-btn primary" id="sheet-btn-edit" style="height:38px; justify-content:center;">Данные</button>
        <button class="nav-btn" id="sheet-btn-branch" style="height:38px; justify-content:center;">+ Ветка</button>
        <button class="nav-btn" id="sheet-btn-delete" style="height:38px; justify-content:center; color:#f87171; border-color:rgba(248,113,113,0.3);">Удалить</button>
      </div>
    `;

    document.getElementById("sheet-btn-link").addEventListener("click", () => {
      closeMobileSheet();
      setLinkMode(true, node.id);
    });
    document.getElementById("sheet-btn-edit").addEventListener("click", () => {
      closeMobileSheet();
      openNodeEditor(node.id);
    });
    document.getElementById("sheet-btn-branch").addEventListener("click", () => {
      closeMobileSheet();
      spawnChildNode(node);
    });
    document.getElementById("sheet-btn-delete").addEventListener("click", () => {
      closeMobileSheet();
      deleteNode(node.id);
    });

    mobileSheet.classList.add("open");
  }

  function closeMobileSheet() {
    mobileSheet.classList.remove("open");
  }
  btnCloseSheet.addEventListener("click", closeMobileSheet);

  const btnMobileMore = document.getElementById("btn-mobile-more");
  if (btnMobileMore) {
    btnMobileMore.addEventListener("click", () => {
      sheetTitle.textContent = "Меню инструментов";
      sheetContent.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:8px;">
          <button class="nav-btn primary" id="m-btn-snapshot" style="height:40px; justify-content:flex-start; padding-left:14px;">Снимок визуализации (HD)</button>
          <button class="nav-btn" id="m-btn-settings" style="height:40px; justify-content:flex-start; padding-left:14px;">Настройки системы</button>
          <button class="nav-btn" id="m-btn-zen" style="height:40px; justify-content:flex-start; padding-left:14px;">Чистый экран (Zen)</button>
          <button class="nav-btn" id="m-btn-dossier" style="height:40px; justify-content:flex-start; padding-left:14px;">Разведывательное досье</button>
          <button class="nav-btn" id="m-btn-export" style="height:40px; justify-content:flex-start; padding-left:14px;">База данных (JSON)</button>
          <button class="nav-btn" id="m-btn-reset" style="height:40px; justify-content:flex-start; padding-left:14px; color:#f87171;">Сбросить граф</button>
        </div>
      `;

      document.getElementById("m-btn-snapshot").addEventListener("click", () => {
        closeMobileSheet();
        openSnapshotModal();
      });
      document.getElementById("m-btn-settings").addEventListener("click", () => {
        closeMobileSheet();
        settingsModal.classList.add("open");
      });
      document.getElementById("m-btn-zen").addEventListener("click", () => {
        closeMobileSheet();
        toggleZenMode();
      });
      document.getElementById("m-btn-dossier").addEventListener("click", () => {
        closeMobileSheet();
        document.getElementById("btn-dossier").click();
      });
      document.getElementById("m-btn-export").addEventListener("click", () => {
        closeMobileSheet();
        exportPopover.classList.add("open");
      });
      document.getElementById("m-btn-reset").addEventListener("click", () => {
        closeMobileSheet();
        document.getElementById("btn-reset").click();
      });

      mobileSheet.classList.add("open");
    });
  }

  const btnMobileMenuTrigger = document.getElementById("btn-mobile-menu-trigger");
  if (btnMobileMenuTrigger) {
    btnMobileMenuTrigger.addEventListener("click", () => {
      btnMobileMore.click();
    });
  }

  // ---------------------------------------------------------------------------
  // 11. CASE SELECTOR POPOVER
  // ---------------------------------------------------------------------------
  btnCaseDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    casePopover.classList.toggle("open");
    wallpapersPopover.classList.remove("open");
    exportPopover.classList.remove("open");
  });

  casePopover.querySelectorAll(".popover-item[data-case]").forEach(item => {
    item.addEventListener("click", () => {
      const idx = Number(item.dataset.case);
      const targetCase = CASES[idx];
      state.nodes = deepClone(targetCase.nodes);
      state.edges = deepClone(targetCase.edges);
      state.activeCaseId = targetCase.id;
      caseNameDisplay.textContent = targetCase.name;

      casePopover.querySelectorAll(".popover-item").forEach(p => p.classList.remove("active"));
      item.classList.add("active");
      casePopover.classList.remove("open");

      pushHistory();
      saveState();
      renderAll();
      fitViewToScreen();
      showToast(`Загружен: ${targetCase.name}`);
    });
  });

  document.getElementById("btn-new-empty-case").addEventListener("click", () => {
    state.nodes = [{
      id: "root", x: 0, y: 0, tag: "Субъект", risk: "high",
      title: "Главная цель", sub: "Начальная точка расследования",
      color: "#38bdf8", fields: []
    }];
    state.edges = [];
    state.activeCaseId = "custom";
    caseNameDisplay.textContent = "Новое дело";
    casePopover.classList.remove("open");

    pushHistory();
    saveState();
    renderAll();
    fitViewToScreen();
    showToast("Создано чистое расследование");
  });

  // ---------------------------------------------------------------------------
  // 12. WALLPAPERS & SETTINGS ENGINE
  // ---------------------------------------------------------------------------
  function initWallpapersGrid() {
    if (!presetsGrid) return;
    presetsGrid.innerHTML = "";
    WALLPAPER_PRESETS.forEach(p => {
      const card = document.createElement("div");
      card.className = "preset-card";
      if (state.settings && state.settings.bgType === p.id) card.classList.add("active");
      if (p.url) card.style.backgroundImage = `url("${p.url}")`;
      else card.style.background = "#070a10";

      card.innerHTML = `<span class="preset-card-title">${escapeHtml(p.name)}</span>`;
      card.addEventListener("click", () => {
        state.settings.bgType = p.id;
        state.settings.customBg = null;
        presetsGrid.querySelectorAll(".preset-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        applyVisualSettings();
        saveState();
      });

      presetsGrid.appendChild(card);
    });
  }

  function applyVisualSettings() {
    const s = state.settings || {};

    // 1. Dimmer
    if (sliderDim) sliderDim.value = s.dim ?? 35;
    if (labelDim) labelDim.textContent = `${s.dim ?? 35}%`;
    document.documentElement.style.setProperty("--bg-dim", ((s.dim ?? 35) / 100).toString());

    // 2. Blur
    if (sliderBlur) sliderBlur.value = s.blur ?? 0;
    if (labelBlur) labelBlur.textContent = `${s.blur ?? 0}px`;
    document.documentElement.style.setProperty("--bg-blur", `${s.blur ?? 0}px`);

    // 3. White Dots Matrix
    const showDots = Boolean(s.showDots);
    if (settingsToggleDots) settingsToggleDots.checked = showDots;
    if (bgDots) {
      if (showDots) bgDots.classList.remove("hidden");
      else bgDots.classList.add("hidden");
    }
    if (groupDotsOpacity) {
      groupDotsOpacity.style.display = showDots ? "flex" : "none";
    }
    const dotsOp = (s.dotsOpacity ?? 9) / 100;
    document.documentElement.style.setProperty("--dots-opacity", dotsOp.toString());
    if (sliderDotsOpacity) sliderDotsOpacity.value = s.dotsOpacity ?? 9;
    if (labelDotsOpacity) labelDotsOpacity.textContent = `${s.dotsOpacity ?? 9}%`;

    // 4. Trace Data Flow & Width
    const flowEnabled = s.edgeFlow !== false;
    if (settingsToggleFlow) settingsToggleFlow.checked = flowEnabled;
    if (edgesSvg) {
      if (flowEnabled) edgesSvg.classList.remove("no-flow");
      else edgesSvg.classList.add("no-flow");
    }

    const edgeW = s.edgeWidth || 1.8;
    document.documentElement.style.setProperty("--edge-width", `${edgeW}px`);
    if (settingsSelectEdgeWidth) settingsSelectEdgeWidth.value = String(edgeW);

    // 5. Spectrum Dock Widget
    const showSpec = s.showSpectrum !== false;
    if (settingsToggleSpectrum) settingsToggleSpectrum.checked = showSpec;
    const dock = document.getElementById("bottom-left-dock");
    if (dock) {
      if (showSpec) dock.classList.remove("hidden");
      else dock.classList.add("hidden");
    }

    // 6. Device Mode
    if (settingsSelectDeviceMode) settingsSelectDeviceMode.value = s.deviceMode || "auto";
    applyDeviceMode();

    // 7. Language
    if (settingsSelectLang) settingsSelectLang.value = s.lang || "RU";

    // 8. Wallpaper
    let bgUrl = "";
    if (s.customBg) {
      bgUrl = s.customBg;
    } else {
      const found = WALLPAPER_PRESETS.find(p => p.id === s.bgType);
      if (found && found.url) bgUrl = found.url;
    }

    if (bgLayer) {
      if (bgUrl) {
        bgLayer.style.backgroundImage = `url("${bgUrl}")`;
        bgLayer.style.opacity = "1";
      } else {
        bgLayer.style.backgroundImage = "none";
        bgLayer.style.opacity = "0";
      }
    }

    if (presetsGrid && presetsGrid.children.length) {
      presetsGrid.querySelectorAll(".preset-card").forEach((c, idx) => {
        const preset = WALLPAPER_PRESETS[idx];
        if (preset && !s.customBg && s.bgType === preset.id) {
          c.classList.add("active");
        } else {
          c.classList.remove("active");
        }
      });
    }

    // 9. Particles
    if (selectParticles) selectParticles.value = s.particles || "off";
    syncParticlesEngine();
  }

  if (sliderDim) {
    sliderDim.addEventListener("input", (e) => {
      state.settings.dim = Number(e.target.value);
      if (labelDim) labelDim.textContent = `${state.settings.dim}%`;
      document.documentElement.style.setProperty("--bg-dim", (state.settings.dim / 100).toString());
      saveState();
    });
  }

  if (sliderBlur) {
    sliderBlur.addEventListener("input", (e) => {
      state.settings.blur = Number(e.target.value);
      if (labelBlur) labelBlur.textContent = `${state.settings.blur}px`;
      document.documentElement.style.setProperty("--bg-blur", `${state.settings.blur}px`);
      saveState();
    });
  }

  if (selectParticles) {
    selectParticles.addEventListener("change", (e) => {
      state.settings.particles = e.target.value;
      saveState();
      syncParticlesEngine();
    });
  }

  const btnUploadBg = document.getElementById("btn-upload-bg");
  if (btnUploadBg && customBgInput) {
    btnUploadBg.addEventListener("click", () => {
      customBgInput.click();
    });

    customBgInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const maxW = 1920, maxH = 1080;
          let w = img.width, h = img.height;
          if (w > maxW || h > maxH) {
            if (w > h) { h = Math.round((h * maxW) / w); w = maxW; }
            else { w = Math.round((w * maxH) / h); h = maxH; }
          }
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, w, h);
          const dataUrl = canvas.toDataURL("image/jpeg", 0.85);

          state.settings.customBg = dataUrl;
          state.settings.bgType = "custom";
          applyVisualSettings();
          saveState();
          showToast("Пользовательское фото установлено");
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
      customBgInput.value = "";
    });
  }

  // ---------------------------------------------------------------------------
  // 13. OPTIMIZED PARTICLES ENGINE
  // ---------------------------------------------------------------------------
  const particlesCanvas = document.getElementById("particles-canvas");
  const pCtx = particlesCanvas ? particlesCanvas.getContext("2d") : null;
  let particlesList = [];
  let particlesAnimationId = null;

  function resizeParticlesCanvas() {
    if (!particlesCanvas) return;
    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeParticlesCanvas);
  resizeParticlesCanvas();

  function initParticlesList() {
    particlesList = [];
    const count = 38;
    for (let i = 0; i < count; i++) {
      particlesList.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.35,
        vy: Math.random() * 0.75 + 0.35,
        alpha: Math.random() * 0.55 + 0.2
      });
    }
  }
  initParticlesList();

  function syncParticlesEngine() {
    if (!particlesCanvas || !pCtx) return;
    const isOff = !state.settings || state.settings.particles === "off" || document.hidden;
    if (isOff) {
      if (particlesAnimationId) {
        cancelAnimationFrame(particlesAnimationId);
        particlesAnimationId = null;
      }
      pCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
    } else {
      if (!particlesAnimationId) {
        particlesAnimationId = requestAnimationFrame(stepParticles);
      }
    }
  }

  function stepParticles() {
    particlesAnimationId = null;
    if (!particlesCanvas || !pCtx) return;
    if (state.settings && state.settings.particles === "off") {
      pCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
      return;
    }
    if (document.hidden) return;

    const w = particlesCanvas.width;
    const h = particlesCanvas.height;
    pCtx.clearRect(0, 0, w, h);

    const isMatrix = state.settings && state.settings.particles === "matrix";

    particlesList.forEach(p => {
      p.y += p.vy;
      p.x += p.vx;
      if (p.y > h) { p.y = -6; p.x = Math.random() * w; }
      if (p.x > w) p.x = 0;
      if (p.x < 0) p.x = w;

      pCtx.fillStyle = isMatrix
        ? `rgba(56, 189, 248, ${p.alpha * 0.75})`
        : `rgba(255, 255, 255, ${p.alpha * 0.55})`;

      pCtx.beginPath();
      pCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      pCtx.fill();
    });

    particlesAnimationId = requestAnimationFrame(stepParticles);
  }
  document.addEventListener("visibilitychange", syncParticlesEngine);

  // ---------------------------------------------------------------------------
  // 14. EXPORT & IMPORT (JSON DATABASE)
  // ---------------------------------------------------------------------------
  if (btnExportDropdown) {
    btnExportDropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      exportPopover.classList.toggle("open");
      if (casePopover) casePopover.classList.remove("open");
    });
  }

  const btnActionExportJson = document.getElementById("btn-action-export-json");
  if (btnActionExportJson) {
    btnActionExportJson.addEventListener("click", () => {
      exportPopover.classList.remove("open");
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Cosmos_Case_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("База JSON сохранена");
    });
  }

  const btnActionImportJson = document.getElementById("btn-action-import-json");
  if (btnActionImportJson) {
    btnActionImportJson.addEventListener("click", () => {
      exportPopover.classList.remove("open");
      jsonTextarea.value = "";
      jsonModal.classList.add("open");
    });
  }

  const btnActionSnapshot = document.getElementById("btn-action-snapshot");
  if (btnActionSnapshot) {
    btnActionSnapshot.addEventListener("click", () => {
      exportPopover.classList.remove("open");
      openSnapshotModal();
    });
  }

  document.getElementById("btn-close-json").addEventListener("click", () => {
    jsonModal.classList.remove("open");
  });

  document.getElementById("btn-trigger-json-file").addEventListener("click", () => {
    jsonFileInput.click();
  });

  jsonFileInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      jsonTextarea.value = ev.target.result;
    };
    reader.readAsText(file);
  });

  document.getElementById("btn-apply-json").addEventListener("click", () => {
    try {
      const parsed = JSON.parse(jsonTextarea.value);
      if (Array.isArray(parsed.nodes) && Array.isArray(parsed.edges)) {
        state = parsed;
        pushHistory();
        saveState();
        applyVisualSettings();
        renderAll();
        fitViewToScreen();
        jsonModal.classList.remove("open");
        showToast("База JSON загружена");
      } else {
        alert("Ошибка: неверная структура JSON");
      }
    } catch (err) {
      alert("Ошибка парсинга JSON: " + err.message);
    }
  });

  // ---------------------------------------------------------------------------
  // 15. FULL VISUALIZATION PHOTO GENERATOR (ZERO DOWNLOAD / PHOTO MODAL)
  // ---------------------------------------------------------------------------
  let currentSnapshotDataUrl = "";

  function generateSnapshotDataUrl() {
    if (!state.nodes.length) return null;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    state.nodes.forEach(n => {
      minX = Math.min(minX, n.x);
      maxX = Math.max(maxX, n.x + NODE_W);
      minY = Math.min(minY, n.y);
      maxY = Math.max(maxY, n.y + NODE_H);
    });

    const graphW = maxX - minX;
    const graphH = maxY - minY;

    const padX = 140;
    const padY = 120;
    const targetW = Math.max(1600, graphW + padX * 2);
    const targetH = Math.max(900, graphH + padY * 2);

    const offscreen = document.createElement("canvas");
    offscreen.width = targetW;
    offscreen.height = targetH;
    const ctx = offscreen.getContext("2d");

    // Pure obsidian background
    ctx.fillStyle = "#0c0f17";
    ctx.fillRect(0, 0, targetW, targetH);

    // Subtle radial gradient
    const grad = ctx.createRadialGradient(targetW / 2, targetH / 2, 80, targetW / 2, targetH / 2, targetW * 0.7);
    grad.addColorStop(0, "rgba(22, 28, 44, 0.35)");
    grad.addColorStop(1, "rgba(12, 15, 23, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, targetW, targetH);

    // If white dots enabled in settings, draw matrix
    if (state.settings && state.settings.showDots) {
      ctx.fillStyle = `rgba(255, 255, 255, ${(state.settings.dotsOpacity || 9) / 100})`;
      const step = 26;
      for (let x = 0; x < targetW; x += step) {
        for (let y = 0; y < targetH; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const offsetX = Math.round((targetW - graphW) / 2 - minX);
    const offsetY = Math.round((targetH - graphH) / 2 - minY);
    const nodeMap = new Map(state.nodes.map(n => [n.id, n]));

    // Draw Smooth Cubic Bezier Curves (Traces)
    ctx.lineWidth = state.settings.edgeWidth || 1.8;
    ctx.strokeStyle = "rgba(148, 163, 184, 0.38)";
    ctx.lineCap = "round";

    state.edges.forEach(e => {
      const n1 = nodeMap.get(e.from);
      const n2 = nodeMap.get(e.to);
      if (!n1 || !n2) return;

      const p1x = offsetX + n1.x + NODE_W;
      const p1y = offsetY + n1.y + NODE_H / 2;
      const p2x = offsetX + n2.x;
      const p2y = offsetY + n2.y + NODE_H / 2;
      const dx = p2x - p1x;
      const curveOffset = Math.max(Math.abs(dx) * 0.48, 40);

      ctx.beginPath();
      ctx.moveTo(p1x, p1y);
      ctx.bezierCurveTo(p1x + curveOffset, p1y, p2x - curveOffset, p2y, p2x, p2y);
      ctx.stroke();
    });

    // Draw Node Cards matching reference
    state.nodes.forEach(n => {
      const x = offsetX + n.x;
      const y = offsetY + n.y;
      const w = NODE_W;
      const h = NODE_H;
      const color = n.color || TAG_COLORS[n.tag] || "#38bdf8";

      // Card body
      ctx.fillStyle = "#101524";
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 8);
      ctx.fill();

      // Card border
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Left Accent Stripe (3.5px width)
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 8);
      ctx.clip();
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 3.5, h);
      ctx.restore();

      // Category Tag
      ctx.fillStyle = color;
      ctx.font = "600 11px 'Inter', sans-serif";
      ctx.fillText((n.tag || "Субъект").toUpperCase(), x + 13, y + 21);

      // Title
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 13px 'Inter', sans-serif";
      ctx.fillText((n.title || "Безымянный").slice(0, 24), x + 13, y + 39);

      // Subtitle
      if (n.sub) {
        ctx.fillStyle = "#94a3b8";
        ctx.font = "10.5px 'Inter', sans-serif";
        ctx.fillText(n.sub.slice(0, 28), x + 13, y + 56);
      }
    });

    return offscreen.toDataURL("image/png");
  }

  function openSnapshotModal() {
    showToast("Формирование снимка визуализации...");
    currentSnapshotDataUrl = generateSnapshotDataUrl();
    if (!currentSnapshotDataUrl) {
      showToast("Нет объектов для формирования снимка");
      return;
    }
    snapshotImg.src = currentSnapshotDataUrl;
    closeAllPopovers();
    snapshotModal.classList.add("open");
  }

  if (btnOpenSnapshot) btnOpenSnapshot.addEventListener("click", openSnapshotModal);
  const btnMobileSnapshot = document.getElementById("btn-mobile-snapshot");
  if (btnMobileSnapshot) btnMobileSnapshot.addEventListener("click", openSnapshotModal);

  if (btnCloseSnapshot) {
    btnCloseSnapshot.addEventListener("click", () => {
      snapshotModal.classList.remove("open");
    });
  }

  if (btnSnapshotCopy) {
    btnSnapshotCopy.addEventListener("click", async () => {
      try {
        const res = await fetch(currentSnapshotDataUrl);
        const blob = await res.blob();
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob })
        ]);
        showToast("Картинка скопирована в буфер (Ctrl+V)");
      } catch (err) {
        showToast("Правый клик по картинке -> Копировать изображение");
      }
    });
  }

  if (btnSnapshotOpen) {
    btnSnapshotOpen.addEventListener("click", () => {
      const win = window.open();
      if (win) {
        win.document.write(`<title>Cosmos Recon Snapshot</title><body style="margin:0; background:#0c0f17; display:flex; align-items:center; justify-content:center; height:100vh;"><img src="${currentSnapshotDataUrl}" style="max-width:98%; max-height:98%; object-fit:contain; border-radius:8px; box-shadow:0 10px 40px rgba(0,0,0,0.8);"></body>`);
      }
    });
  }

  if (btnSnapshotDownload) {
    btnSnapshotDownload.addEventListener("click", () => {
      const link = document.createElement("a");
      link.download = `Cosmos_Snapshot_${Date.now()}.png`;
      link.href = currentSnapshotDataUrl;
      link.click();
      showToast("Снимок сохранен на диск (.png)");
    });
  }

  // ---------------------------------------------------------------------------
  // 16. ZEN PRESENTATION MODE (CLEAN SCREEN)
  // ---------------------------------------------------------------------------
  function toggleZenMode() {
    const isZen = document.body.classList.toggle("zen-mode");
    if (isZen) {
      showToast("Чистый экран (Esc для выхода)");
    }
  }

  if (btnZen) btnZen.addEventListener("click", toggleZenMode);
  if (zenBadge) zenBadge.addEventListener("click", () => {
    document.body.classList.remove("zen-mode");
  });

  // ---------------------------------------------------------------------------
  // 17. CENTRALIZED SETTINGS HANDLERS
  // ---------------------------------------------------------------------------
  if (btnOpenSettings) {
    btnOpenSettings.addEventListener("click", () => {
      closeAllPopovers();
      settingsModal.classList.add("open");
    });
  }

  if (btnCloseSettings) {
    btnCloseSettings.addEventListener("click", () => {
      settingsModal.classList.remove("open");
    });
  }

  if (btnSaveSettings) {
    btnSaveSettings.addEventListener("click", () => {
      settingsModal.classList.remove("open");
      showToast("Настройки сохранены");
    });
  }

  if (settingsToggleDots) {
    settingsToggleDots.addEventListener("change", (e) => {
      state.settings.showDots = e.target.checked;
      applyVisualSettings();
      saveState();
    });
  }

  if (sliderDotsOpacity) {
    sliderDotsOpacity.addEventListener("input", (e) => {
      state.settings.dotsOpacity = Number(e.target.value);
      if (labelDotsOpacity) labelDotsOpacity.textContent = `${state.settings.dotsOpacity}%`;
      document.documentElement.style.setProperty("--dots-opacity", (state.settings.dotsOpacity / 100).toString());
      saveState();
    });
  }

  if (settingsToggleFlow) {
    settingsToggleFlow.addEventListener("change", (e) => {
      state.settings.edgeFlow = e.target.checked;
      applyVisualSettings();
      saveState();
    });
  }

  if (settingsSelectEdgeWidth) {
    settingsSelectEdgeWidth.addEventListener("change", (e) => {
      state.settings.edgeWidth = Number(e.target.value);
      applyVisualSettings();
      saveState();
    });
  }

  if (settingsSelectDeviceMode) {
    settingsSelectDeviceMode.addEventListener("change", (e) => {
      state.settings.deviceMode = e.target.value;
      applyDeviceMode();
      saveState();
      fitViewToScreen();
    });
  }

  if (settingsToggleSpectrum) {
    settingsToggleSpectrum.addEventListener("change", (e) => {
      state.settings.showSpectrum = e.target.checked;
      applyVisualSettings();
      saveState();
    });
  }

  if (settingsSelectLang) {
    settingsSelectLang.addEventListener("change", (e) => {
      state.settings.lang = e.target.value;
      saveState();
      showToast(`Язык: ${e.target.value}`);
    });
  }

  if (btnSettingsReset) {
    btnSettingsReset.addEventListener("click", () => {
      settingsModal.classList.remove("open");
      document.getElementById("btn-reset").click();
    });
  }

  // ---------------------------------------------------------------------------
  // 18. DOSSIER GENERATOR
  // ---------------------------------------------------------------------------
  document.getElementById("btn-dossier").addEventListener("click", () => {
    const timestamp = new Date().toLocaleString("ru-RU");
    let doc = `=====================================================\n`;
    doc += `COSMOS // РАЗВЕДЫВАТЕЛЬНОЕ ДОСЬЕ СЕТИ\n`;
    doc += `Дата формирования: ${timestamp}\n`;
    doc += `Всего объектов: ${state.nodes.length} | Связей: ${state.edges.length}\n`;
    doc += `-----------------------------------------------------\n\n`;

    state.nodes.forEach((n, idx) => {
      doc += `[${idx + 1}] [${(n.tag || 'Субъект').toUpperCase()}] ${n.title}\n`;
      if (n.sub) doc += `    Сведения: ${n.sub}\n`;
      if (n.risk && n.risk !== "none") doc += `    Уровень риска: ${n.risk.toUpperCase()}\n`;
      doc += `\n`;
    });

    doc += `КАРТА ВЗАИМОСВЯЗЕЙ:\n`;
    const nodeMap = new Map(state.nodes.map(n => [n.id, n]));
    state.edges.forEach((e, idx) => {
      const n1 = nodeMap.get(e.from);
      const n2 = nodeMap.get(e.to);
      if (n1 && n2) {
        doc += `  ${idx + 1}. [${n1.title}]  ──>  [${n2.title}]\n`;
      }
    });

    dossierText.textContent = doc;
    dossierModal.classList.add("open");
  });

  document.getElementById("btn-close-dossier").addEventListener("click", () => {
    dossierModal.classList.remove("open");
  });

  document.getElementById("btn-copy-dossier").addEventListener("click", () => {
    navigator.clipboard.writeText(dossierText.textContent).then(() => {
      showToast("Досье скопировано в буфер");
    });
  });

  document.getElementById("btn-download-dossier").addEventListener("click", () => {
    const blob = new Blob([dossierText.textContent], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Cosmos_Dossier_${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Отчет скачан (.md)");
  });

  document.getElementById("btn-print-dossier").addEventListener("click", () => {
    window.print();
  });

  // ---------------------------------------------------------------------------
  // 19. SEARCH, HOTKEYS & RESET
  // ---------------------------------------------------------------------------
  const searchInput = document.getElementById("search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    searchClearBtn.style.display = searchQuery ? "block" : "none";
    renderNodes();
  });

  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClearBtn.style.display = "none";
    renderNodes();
    searchInput.focus();
  });

  document.getElementById("btn-undo").addEventListener("click", undo);
  document.getElementById("btn-redo").addEventListener("click", redo);
  document.getElementById("btn-fit").addEventListener("click", fitViewToScreen);

  document.getElementById("btn-reset").addEventListener("click", () => {
    if (confirm("Сбросить текущее расследование к исходному состоянию?")) {
      const base = CASES.find(c => c.id === state.activeCaseId) || CASES[0];
      state.nodes = deepClone(base.nodes);
      state.edges = deepClone(base.edges);
      selectedNodeId = state.nodes[0] ? state.nodes[0].id : null;
      pushHistory();
      saveState();
      applyVisualSettings();
      renderAll();
      fitViewToScreen();
      showToast("Граф сброшен к эталону");
    }
  });

  window.addEventListener("click", (e) => {
    if (!e.target.closest(".popover-menu") && !e.target.closest(".nav-btn")) {
      closeAllPopovers();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
      e.preventDefault();
      if (e.shiftKey) redo(); else undo();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") {
      e.preventDefault();
      redo();
    } else if (e.key === " " || e.code === "Space") {
      e.preventDefault();
      fitViewToScreen();
    } else if (e.key.toLowerCase() === "n") {
      addNewNode();
    } else if (e.key.toLowerCase() === "l") {
      setLinkMode(!linkMode, selectedNodeId);
    } else if (e.key.toLowerCase() === "p") {
      e.preventDefault();
      openSnapshotModal();
    } else if (e.key.toLowerCase() === "f" || e.key.toLowerCase() === "h") {
      e.preventDefault();
      toggleZenMode();
    } else if (e.key === "Delete" && selectedNodeId) {
      deleteNode(selectedNodeId);
    } else if (e.key === "Escape") {
      if (document.body.classList.contains("zen-mode")) {
        document.body.classList.remove("zen-mode");
      } else {
        closeAllModals();
      }
    }
  });

  // ---------------------------------------------------------------------------
  // 20. INITIALIZATION
  // ---------------------------------------------------------------------------
  function init() {
    initWallpapersGrid();
    applyVisualSettings();
    renderAll();
    setTimeout(fitViewToScreen, 120);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
