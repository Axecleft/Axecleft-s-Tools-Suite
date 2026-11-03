/**
 * Axecleft's Tool Suite
 * - Lists the suite modules (SUITE below), for the Foundry version it runs on: Foundry 13 and 14 builds come from each
 *   module's main repository, Foundry 11 and 12 builds from its "-v11" repository. One release of this module serves both.
 * - GM can enable/disable installed suite modules
 * - Checks GitHub for newer versions (installs/updates happen on the Setup screen). An installed module is checked
 *   against its own manifest (a v11 build points to its v11 repository); one not installed against this version's repository.
 * - Foundry 13+: an ApplicationV2 window; Foundry 11-12: the same window as a classic Application.
 */

const MODULE_ID = "axeclefts-tool-suite";
const CACHE_HOURS = 6;
const LINKS = {
  wiki: "https://github.com/Axecleft/Axecleft-s-Tools-Suite/wiki/Home",
  discord: "https://discord.gg/FRhPPwDWta",
  patreon: "https://patreon.com/Axecleft"
};

const L = (key) => game.i18n.localize(`AXETS.${key}`);
const F = (key, data) => game.i18n.format(`AXETS.${key}`, data);

/* -------------------------------------------- */
/*  Helpers                                     */
/* -------------------------------------------- */

function moduleConfigKey() {
  return foundry.applications?.sidebar?.apps?.ModuleManagement?.CONFIG_SETTING ?? "moduleConfiguration";
}

/** The suite: each module's id, its repository for Foundry 13-14 and the one for Foundry 11-12. */
const SUITE = [
  { id: "traps-and-poisons", repo: "Traps-and-Poisons", v11: "Traps-and-Poisons-v11", reason: "Traps, poisons and diseases: trap actors, poison consumables and generators." },
  { id: "axeclefts-armory", repo: "Armory", v11: "Armory-v11", reason: "Weapon and armor generation and crafting." },
  { id: "axeclefts-curios", repo: "Curios", v11: "Curios-v11", reason: "Magic items, consumables, spellbooks and psionics." },
  { id: "axecleft-gemstones", repo: "Axeclefts-Gemstones", v11: "Axeclefts-Gemstones-v11", reason: "Gems, jewelry and art objects with the Treasure Generator." },
  { id: "axeclefts-adventurers-minions", repo: "Axeclefts-Adventurers-Minions", v11: "Axeclefts-Adventurers-Minions-v11", reason: "Complete characters and NPCs: build, random and edit." },
  { id: "axeclefts-hoards", repo: "Axeclefts-Hoard-Editor", v11: "Axeclefts-Hoard-Editor-v11", reason: "Treasure hoards: build, fill, place and share out." },
  { id: "axeclefts-voodoo", repo: "Axeclefts-VooDoo", v11: "Axeclefts-VooDoo-v11", reason: "A mobile character sheet for players' phones." },
  { id: "axeclefts-printable-sheets", repo: "Axeclefts-Printable-Sheets", v11: "Axeclefts-Printable-Sheets-v11", reason: "Paper character sheets, stat blocks, merchants, loot, hoards and traps." }
];
const OWNER = "Axecleft";
/** Foundry's generation (11, 12, 13, 14…). */
const generation = () => Number(game.release?.generation ?? String(game.version ?? "").split(".")[0]) || 13;
/** Foundry 13 and later use the main repositories; 11 and 12 the "-v11" ones. */
const useV11 = () => generation() < 13;
const manifestOf = (repo) => `https://github.com/${OWNER}/${repo}/releases/latest/download/module.json`;

/** The suite = this hub + every suite module, with the manifest for this Foundry version. */
function getSuiteEntries() {
  const self = game.modules.get(MODULE_ID);
  const entries = [{ id: MODULE_ID, manifest: self?.manifest, isHub: true }];
  for (const m of SUITE) entries.push({ id: m.id, manifest: manifestOf(useV11() ? m.v11 : m.repo), reason: m.reason });
  return entries;
}

function parseGitHub(url) {
  const m = String(url ?? "").match(/github(?:usercontent)?\.com\/([^/]+)\/([^/#?]+)/i);
  if (!m) return null;
  return { owner: m[1], repo: m[2].replace(/\.git$/i, "") };
}

/** Fetch the latest published version for one manifest URL. */
async function fetchLatest(manifestUrl) {
  if (!manifestUrl) return null;

  // 1) The manifest itself
  try {
    const res = await fetch(manifestUrl, { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      if (json?.version) {
        return {
          version: String(json.version),
          title: json.title,
          changelog: json.changelog ?? json.url ?? null
        };
      }
    }
  } catch (err) { /* fall through to the GitHub API */ }

  // 2) Fallback: GitHub's latest release tag (CORS-friendly)
  const gh = parseGitHub(manifestUrl);
  if (!gh) return null;
  try {
    const res = await fetch(`https://api.github.com/repos/${gh.owner}/${gh.repo}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json" }
    });
    if (res.ok) {
      const json = await res.json();
      if (json?.tag_name) {
        return { version: String(json.tag_name).replace(/^v/i, ""), changelog: json.html_url ?? null };
      }
    }
  } catch (err) { /* give up */ }
  return null;
}

/** Check every suite module. Cached per browser for CACHE_HOURS unless forced. */
async function checkForUpdates({ force = false } = {}) {
  const cached = game.settings.get(MODULE_ID, "updateCache");
  if (!force && cached?.time && (Date.now() - cached.time) < CACHE_HOURS * 3600 * 1000) return cached;

  const data = {};
  await Promise.all(getSuiteEntries().map(async (entry) => {
    // Prefer the installed copy's manifest so v11 / v14 builds check their own repo
    const manifest = game.modules.get(entry.id)?.manifest || entry.manifest;
    data[entry.id] = await fetchLatest(manifest);
  }));

  const result = { time: Date.now(), data };
  await game.settings.set(MODULE_ID, "updateCache", result);
  return result;
}

function isNewer(latest, installed) {
  if (!latest || !installed) return false;
  return foundry.utils.isNewerVersion(latest, installed);
}

function countUpdates(results) {
  let n = 0;
  for (const entry of getSuiteEntries()) {
    const mod = game.modules.get(entry.id);
    if (mod && isNewer(results?.data?.[entry.id]?.version, mod.version)) n++;
  }
  return n;
}

/* -------------------------------------------- */
/*  Suite Manager window                        */
/* -------------------------------------------- */

const AppV2 = foundry.applications?.api?.ApplicationV2 ?? null;
const HandlebarsMixin = foundry.applications?.api?.HandlebarsApplicationMixin ?? null;
const USE_V2 = !!(AppV2 && HandlebarsMixin) && generation() >= 13;
const WINDOW_ID = "axeclefts-tool-suite-manager";
const TEMPLATE = `modules/${MODULE_ID}/templates/suite-manager.hbs`;

/** A yes/no question (DialogV2 on Foundry 13+, Dialog before). */
async function confirmDialog(title, content) {
  const DV2 = foundry.applications?.api?.DialogV2;
  if (DV2 && generation() >= 13) return DV2.confirm({ window: { title }, content });
  return Dialog.confirm({ title, content, defaultYes: false });
}

/** What the window shows, and what its buttons do (the same for both window classes). */
const Manager = {
  context(app) {
    const results = app.results ?? game.settings.get(MODULE_ID, "updateCache");
    const rows = getSuiteEntries().map((entry) => {
      const mod = game.modules.get(entry.id);
      const remote = results?.data?.[entry.id] ?? null;
      const installed = !!mod;
      const isActive = !!mod?.active;
      const active = app.pending.has(entry.id) ? app.pending.get(entry.id) : isActive;

      let status, icon;
      if (!installed) { status = "missing"; icon = "fa-solid fa-circle-plus"; }
      else if (!remote?.version) { status = "unknown"; icon = "fa-solid fa-circle-question"; }
      else if (isNewer(remote.version, mod.version)) { status = "update"; icon = "fa-solid fa-circle-arrow-up"; }
      else if (isNewer(mod.version, remote.version)) { status = "ahead"; icon = "fa-solid fa-flask"; }
      else { status = "current"; icon = "fa-solid fa-circle-check"; }

      return {
        id: entry.id,
        title: mod?.title ?? remote?.title ?? entry.id,
        reason: entry.reason,
        isHub: !!entry.isHub,
        installed,
        installedVersion: mod?.version ?? null,
        latestVersion: remote?.version ?? null,
        status,
        statusIcon: icon,
        statusLabel: L(`Status.${status}`),
        active,
        changed: installed && active !== isActive,
        canToggle: installed && !entry.isHub,
        manifest: entry.manifest,
        showManifest: !installed && !!entry.manifest,
        changelog: remote?.changelog ?? mod?.changelog ?? mod?.url ?? null
      };
    });

    return {
      rows,
      links: LINKS,
      checking: app.checking,
      hasChanges: app.pending.size > 0,
      lastChecked: results?.time ? new Date(results.time).toLocaleString() : null,
      foundryLine: F("ForFoundry", { version: generation() })
    };
  },

  toggle(app, target) {
    const id = target.dataset.moduleId;
    const current = !!game.modules.get(id)?.active;
    if (target.checked === current) app.pending.delete(id);
    else app.pending.set(id, target.checked);
    app.render();
  },

  async check(app) {
    app.checking = true;
    await app.render();
    try {
      app.results = await checkForUpdates({ force: true });
      const n = countUpdates(app.results);
      ui.notifications.info(n ? F("Notify.Updates", { count: n }) : L("Notify.NoUpdates"));
    } catch (err) {
      console.error(`${MODULE_ID} | update check failed`, err);
      ui.notifications.error(L("Notify.CheckFailed"));
    }
    app.checking = false;
    app.render();
  },

  async apply(app) {
    if (!game.user.isGM || !app.pending.size) return;
    const key = moduleConfigKey();
    const config = foundry.utils.deepClone(game.settings.get("core", key) ?? {});
    const alsoEnabled = [];
    const missing = [];

    for (const [id, on] of app.pending) {
      config[id] = on;
      if (!on) continue;
      // Turn on any installed modules this one requires
      for (const req of game.modules.get(id)?.relationships?.requires ?? []) {
        if (req.type && req.type !== "module") continue;
        const reqMod = game.modules.get(req.id);
        if (!reqMod) missing.push(`${game.modules.get(id).title} → ${req.id}`);
        else if (!config[req.id]) { config[req.id] = true; alsoEnabled.push(reqMod.title); }
      }
    }

    if (missing.length) {
      ui.notifications.error(F("Notify.MissingRequired", { list: missing.join(", ") }), { permanent: true });
      return;
    }

    const changes = [...app.pending].map(([id, on]) =>
      `<li>${on ? "✔" : "✖"} ${game.modules.get(id)?.title ?? id}</li>`).join("");
    const extra = alsoEnabled.length ? `<p>${F("ApplyDialog.AlsoEnabled", { list: alsoEnabled.join(", ") })}</p>` : "";

    const ok = await confirmDialog(L("ApplyDialog.Title"), `<p>${L("ApplyDialog.Content")}</p><ul>${changes}</ul>${extra}`);
    if (!ok) return;

    await game.settings.set("core", key, config);
    app.pending.clear();
    const SettingsConfig = foundry.applications?.settings?.SettingsConfig ?? (typeof SettingsConfig !== "undefined" ? SettingsConfig : globalThis.SettingsConfig);
    if (SettingsConfig?.reloadConfirm) await SettingsConfig.reloadConfirm({ world: true });
    else foundry.utils.debouncedReload();
  },

  async copy(app, target) {
    const url = target.dataset.manifest;
    if (!url) return;
    await game.clipboard.copyPlainText(url);
    ui.notifications.info(L("Notify.Copied"));
  }
};

/** Foundry 13+: the window as an ApplicationV2. */
const SuiteManagerV2 = USE_V2 ? class SuiteManager extends HandlebarsMixin(AppV2) {
  constructor(options = {}) {
    super(options);
    this.pending = new Map(); // moduleId -> desired active state
    this.checking = false;
    this.results = null;
  }

  static DEFAULT_OPTIONS = {
    id: WINDOW_ID,
    classes: ["axecleft-suite"],
    tag: "div",
    window: { title: "AXETS.Title", icon: "fa-solid fa-toolbox", resizable: true },
    position: { width: 760, height: "auto" },
    actions: {
      toggle(event, target) { Manager.toggle(this, target); },
      check() { return Manager.check(this); },
      apply() { return Manager.apply(this); },
      copy(event, target) { return Manager.copy(this, target); }
    }
  };

  static PARTS = {
    main: { template: TEMPLATE, scrollable: [".axs-table-wrap"] }
  };

  async _prepareContext() { return Manager.context(this); }
} : null;

/** Foundry 11-12: the same window as a classic Application (the template's data-action buttons wired by hand). */
const SuiteManagerV1 = USE_V2 ? null : class SuiteManager extends Application {
  constructor(options = {}) {
    super(options);
    this.pending = new Map();
    this.checking = false;
    this.results = null;
  }

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: WINDOW_ID, classes: ["axecleft-suite"], template: TEMPLATE, title: game.i18n.localize("AXETS.Title"),
      width: 760, height: "auto", resizable: true, scrollY: [".axs-table-wrap"]
    });
  }

  async getData() { return Manager.context(this); }

  activateListeners(html) {
    super.activateListeners(html);
    const root = html?.[0] ?? html;
    root.querySelectorAll("[data-action]").forEach((el) => {
      const action = el.dataset.action;
      const handler = (ev) => {
        if (action === "toggle") return Manager.toggle(this, el);
        ev.preventDefault();
        if (action === "check") return Manager.check(this);
        if (action === "apply") return Manager.apply(this);
        if (action === "copy") return Manager.copy(this, el);
      };
      el.addEventListener(action === "toggle" ? "change" : "click", handler);
    });
  }
};

function openManager() {
  if (!game.user.isGM) return ui.notifications.warn(L("Notify.GMOnly"));
  if (USE_V2) {
    const existing = foundry.applications.instances.get(WINDOW_ID);
    if (existing) return existing.render({ force: true });
    return new SuiteManagerV2().render({ force: true });
  }
  const existing = Object.values(ui.windows ?? {}).find((w) => w.id === WINDOW_ID);
  if (existing) return existing.render(true);
  return new SuiteManagerV1().render(true);
}

/* -------------------------------------------- */
/*  Hooks                                       */
/* -------------------------------------------- */

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, "notifyUpdates", {
    name: "AXETS.Settings.Notify.Name",
    hint: "AXETS.Settings.Notify.Hint",
    scope: "client",
    config: true,
    type: Boolean,
    default: true
  });

  game.settings.register(MODULE_ID, "updateCache", {
    scope: "client",
    config: false,
    type: Object,
    default: {}
  });

  // Settings-menu launcher (Configure Settings → Axecleft's Tool Suite): opens the manager instead of a form
  const LauncherBase = USE_V2 ? AppV2 : FormApplication;
  class SuiteLauncher extends LauncherBase {
    async render() { openManager(); return this; }
  }
  game.settings.registerMenu(MODULE_ID, "manager", {
    name: "AXETS.Title",
    label: "AXETS.Open",
    hint: "AXETS.MenuHint",
    icon: "fa-solid fa-toolbox",
    type: SuiteLauncher,
    restricted: true
  });

  const mod = game.modules.get(MODULE_ID);
  mod.api = { open: openManager, checkForUpdates };
});

Hooks.once("ready", async () => {
  if (!game.user.isGM || !game.settings.get(MODULE_ID, "notifyUpdates")) return;
  try {
    const results = await checkForUpdates();
    const n = countUpdates(results);
    if (n) ui.notifications.info(F("Notify.UpdatesStartup", { count: n }), { permanent: true });
  } catch (err) {
    console.warn(`${MODULE_ID} | startup update check failed`, err);
  }
});

// Button in the Settings sidebar, under Manage Modules
Hooks.on("renderSettings", (app, html) => {
  if (!game.user.isGM) return;
  const root = html instanceof HTMLElement ? html : html?.[0];
  if (!root || root.querySelector(".axs-open-button")) return;
  const anchor = root.querySelector('[data-app="modules"], [data-action="modules"]');
  if (!anchor) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "axs-open-button";
  btn.innerHTML = `<i class="fa-solid fa-toolbox"></i> ${L("Title")}`;
  btn.addEventListener("click", (ev) => { ev.preventDefault(); openManager(); });
  anchor.after(btn);
});
