# Axecleft's Tool Suite (the module)

**Where:** **Configure Settings → Axecleft's Tool Suite → Open Tool Suite**, or the **Axecleft's Tool Suite** button in the Settings sidebar, under **Manage Modules**. GM only.

One window to manage the suite: turn the installed Axecleft modules on or off for this world, and check GitHub for new versions. Installs and updates are still done on Foundry's Setup screen.

It's one module for Foundry 11 and Foundry 13–14. It knows which Foundry it runs on and checks each module against the right repository: the main repositories (versions 1.14.x) on Foundry 13–14, the "-v11" repositories (versions 1.11.x) on Foundry 11.

Not to be confused with the **Axecleft's Tool Suite** button in each module's own settings, which holds the welcome window settings (see [Settings](Settings#tool-suite-settings-in-every-module)).

> 📷 **Screenshot:** the Axecleft's Tool Suite window, with a module ticked off (highlighted), one row showing Update available and one Not installed.

## Installing

Install **Axecleft's Tool Suite** from Foundry's **Add-on Modules → Install Module** with its manifest URL:

`https://github.com/Axecleft/Axecleft-s-Tools-Suite/releases/latest/download/module.json`

It offers Traps, Poisons, and Diseases, Armory, Curios, Gemstones and Adventurers and Minions as recommended modules.

## The modules

| Module | What it's for | Foundry 13–14 | Foundry 11 |
|---|---|---|---|
| Axecleft's Tool Suite | This window. | [Axecleft-s-Tools-Suite](https://github.com/Axecleft/Axecleft-s-Tools-Suite) | (the same) |
| Axecleft's Traps, Poisons, and Diseases | Traps, poisons and diseases: trap actors, poison consumables and generators. | [Traps-and-Poisons](https://github.com/Axecleft/Traps-and-Poisons) | [Traps-and-Poisons-v11](https://github.com/Axecleft/Traps-and-Poisons-v11) |
| Axecleft's Armory | Weapon and armor generation and crafting. | [Armory](https://github.com/Axecleft/Armory) | [Armory-v11](https://github.com/Axecleft/Armory-v11) |
| Axecleft's Curios | Magic items, consumables, spellbooks and psionics. | [Curios](https://github.com/Axecleft/Curios) | [Curios-v11](https://github.com/Axecleft/Curios-v11) |
| Axecleft's Gemstones | Gems, jewelry and art objects with the Treasure Generator. | [Axeclefts-Gemstones](https://github.com/Axecleft/Axeclefts-Gemstones) | [Axeclefts-Gemstones-v11](https://github.com/Axecleft/Axeclefts-Gemstones-v11) |
| Axecleft's Adventurers and Minions | Complete characters and NPCs: build, random and edit. See [Adventurers and Minions](Adventurers-and-Minions). | [Axeclefts-Adventurers-Minions](https://github.com/Axecleft/Axeclefts-Adventurers-Minions) | [Axeclefts-Adventurers-Minions-v11](https://github.com/Axecleft/Axeclefts-Adventurers-Minions-v11) |
| Axecleft's Hoard Editor | Treasure hoards: build, fill, place and share out. | [Axeclefts-Hoard-Editor](https://github.com/Axecleft/Axeclefts-Hoard-Editor) | [Axeclefts-Hoard-Editor-v11](https://github.com/Axecleft/Axeclefts-Hoard-Editor-v11) |
| Axecleft's VooDoo | A mobile character sheet for players' phones. See [VooDoo](VooDoo). | [Axeclefts-VooDoo](https://github.com/Axecleft/Axeclefts-VooDoo) | [Axeclefts-VooDoo-v11](https://github.com/Axecleft/Axeclefts-VooDoo-v11) |
| Axecleft's Printable Sheets | Paper character sheets, stat blocks, merchants, loot, hoards and traps. | [Axeclefts-Printable-Sheets](https://github.com/Axecleft/Axeclefts-Printable-Sheets) | [Axeclefts-Printable-Sheets-v11](https://github.com/Axecleft/Axeclefts-Printable-Sheets-v11) |

## The window

### Top

**Turn suite modules on or off for this world and check GitHub for new versions**, and links to the **User Guide** (this wiki), **Discord** and **Patreon**.

### The table

One row for each module above.

| Column | What it shows |
|---|---|
| **Enabled** | Tick or untick an installed module to turn it on or off in this world. Rows you've changed are highlighted until you apply them. The Tool Suite itself shows a lock (**The Tool Suite manager stays enabled while you use it.**). A module that isn't installed shows —. |
| **Module** | The module's name and what it's for. |
| **Installed** | The version installed, or — when it isn't. |
| **Latest** | The latest version found on GitHub, or — before a check. |
| **Status** | See below. |
| Changelog button | **Changelog / release notes**: opens the module's release notes or GitHub page. |
| Copy button | Only for a module that isn't installed: **Copy manifest URL** to paste in **Setup → Add-on Modules → Install Module**. |

| Status | Meaning |
|---|---|
| **Up to date** | The installed version is the latest. |
| **Update available** | A newer version is on GitHub. |
| **Development build** | The installed version is newer than the latest release. |
| **Not checked** | No version found yet: press **Check for Updates**. |
| **Not installed** | The module isn't installed. |

Under the table: **Updates and new installs are done from Foundry's Setup screen: Add-on Modules → Update All updates every installed suite module.**

### Bottom

| Control | What it does |
|---|---|
| **Last checked:** | When updates were last checked on this browser, or **Updates not checked yet.** |
| **Check for Updates** | Checks GitHub now and shows how many updates there are, or **All installed Axecleft modules are up to date.** |
| **Apply & Reload** | Only when you've changed a tick. Opens **Apply Module Changes**, listing the modules to turn on (✔) or off (✖) and any **Required modules also enabled**. Confirm, and the world reloads. |

If a module you're turning on needs a module that isn't installed, nothing changes and an error names it (**Can't enable — required module not installed: …**).

## How updates are checked

- An installed module is checked against its own manifest, so a Foundry 11 build checks its "-v11" repository and a 1.14.x build its main one.
- A module that isn't installed is checked against the repository for the Foundry version you're running.
- The latest version comes from the module's latest release on GitHub.
- The results are kept on this browser for 6 hours. **Check for Updates** always checks again.

## Setting

**Configure Settings → Axecleft's Tool Suite.**

| Setting | Default | What it does |
|---|---|---|
| **Update notice on startup** | On | When a GM loads the world, check for Axecleft module updates (at most every 6 hours) and show a notice: **Axecleft's Tool Suite: N update(s) available. Install them from the Setup screen (Update All).** A setting for each browser. |
