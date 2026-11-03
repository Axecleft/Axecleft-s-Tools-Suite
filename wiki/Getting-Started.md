# Getting Started

## What you need

| | Foundry 13 or 14 | Foundry 11 |
|---|---|---|
| Game system | D35E 3.x | D35E 2.4.3 |
| Module versions | 1.14.x | 1.11.x |
| Intelligent items | Yes (D35E 3.1 or later) | No (hidden) |

Optional: **Babele** and a translation module (for example the French D35E translation) for worlds in another language. See [Languages](Languages).

## Installing

1. In Foundry's **Add-on Modules** tab, choose **Install Module** and paste the module's manifest URL (from its GitHub release page), or search for it by name.
2. Install the modules you want. They don't depend on each other, but they recommend each other because each one adds to the shared windows.
3. In your world, open **Game Settings → Manage Modules**, tick the modules and save. Foundry reloads the world.

> **Foundry 11 users:** install the **1.11.x** downloads. The 1.14.x versions need Foundry 13 or 14.

## Which module gives you what

| Window or feature | Gemstones | Armory | Curios | Traps |
|---|:-:|:-:|:-:|:-:|
| [Treasure Generator](Treasure-Generator) window | ✔ | ✔ | ✔ | |
| Gems, art objects and jewelry | ✔ | | | |
| Weapons, armor, shields, ammunition | | ✔ | | |
| Potions, scrolls, wands, rings, rods, staffs, wondrous and psionic items | | | ✔ | |
| [Merchant Generator](Merchant-Generator) and [Shop Tags](Shop-Tags) | ✔ | ✔ | ✔ | |
| [Axecleft's Shop](Axecleft's-Shop) sheet: merchants, loot, party storage | ✔ | ✔ | ✔ | |
| [Crafting](Crafting) window | | ✔ | ✔ | ✔ |
| [Forge](Forge) tab | | ✔ | | |
| [Curios Workshop](Curios-Workshop) tab, Common Buffs compendium | | | ✔ | |
| Traps, poisons, diseases, trap kits | | | | ✔ |

The other modules each stand alone:

| Module | What you get |
|---|---|
| **Axecleft's Hoard Editor** | The **Hoards** tab of the Treasure Generator (needs Gemstones, Armory or Curios for the Treasure Generator). See [Hoard Editor](Hoard-Editor). |
| **Axecleft's Adventurers and Minions** | The character builder: Build, Random and Edit. See [Adventurers and Minions](Adventurers-and-Minions). |
| **Axecleft's VooDoo** | Mobile accounts and the phone window. See [VooDoo](VooDoo). |
| **Axecleft's Printable Sheets** | Print buttons and menu entries. See [Printable Sheets](Printable-Sheets). |
| **Axecleft's Tool Suite** | The suite manager: modules on and off, update checks. See [Axecleft's Tool Suite](Axecleft's-Tools-Suite). |

The shared windows run as long as **any** module that ships them is active. With only Gemstones, the Treasure Generator rolls coins, gems and art, and lists the magic items in the chat card for you to handle. Add Armory and Curios and those items are made for you.

## Opening the tools

All the tools are in the **Axecleft's Tools** group on Foundry's left toolbar, next to the Game Master tools:

- **Treasure Generator**: coins, gems, art, jewelry and items.
- **Crafting**: craft items by the SRD (magic items with item creation feats, mundane items with Craft).
- **Merchant Generator**: create, stock and restock merchants.
- **Shop Tags**: tag compendium items with the shops that sell them.
- **Random Trap Generator**: roll random traps by CR and create trap actors.
- **Adventurers and Minions**: build, roll or edit characters and NPCs (with A&M).
- **Mobile accounts**: create your players' phone accounts (with VooDoo).

The Treasure Generator also has a **Treasure** button at the top of the **Items** sidebar.

> **<img width="460" height="412" alt="image" src="https://github.com/user-attachments/assets/fdf98582-71b7-4a44-8bbc-c5253b7fcb3e" />**

Most tools are for the GM. Players see **Crafting** in their Axecleft's Tools group while the setting **Players may craft** is on (see [Crafting](Crafting)), **My Traps** (with Traps, Poisons, and Diseases), **Adventurers and Minions** (with A&M: they edit the actors they own and can build new ones; see [Who can use it](Adventurers-and-Minions)), and **User Guide**.

The last button, **User Guide**, opens this wiki in your web browser.

## Tours

Most windows have guided tours. Open **Configure Settings → Tour Management** and look under the module's name, or use **Tour of this tab** in a window's ⋮ menu (Foundry 13–14). On Foundry 11 the window's title bar has a **Tour** button instead. Players get tours for the windows they use too (the shop sheet, A&M, the VooDoo phone window).

## First things to set up

1. **Item sources.** Open the [Merchant Generator](Merchant-Generator) → **Item Sources** tab and tick the compendiums that hold your items. The Treasure Generator and merchants only take items from these.
2. **Campaign switches.** In the Treasure Generator → **Treasure by Level** → [Generation Settings](Generation-Settings), turn **Psionics** and **Epic items** on or off for your campaign.
3. **Coins.** In the same tab, choose how the SRD's copper, silver, gold and platinum are paid (see [Treasure by Level](Treasure-by-Level#coins)).
4. **Try it.** Pick an encounter level, set **Put items in** to **Chat card only**, and press **Generate**.

## Updating

Install updates from Foundry's **Add-on Modules** tab as usual. With **Axecleft's Tool Suite** installed, a GM is told when Axecleft updates are out, and its window checks every module against the right downloads for your Foundry version (see [Axecleft's Tool Suite](Axecleft's-Tools-Suite)). Your settings, Treasure Lists journal and custom lists are kept: custom lists are also saved to a file in your Data folder (see [Treasure Lists](Treasure-Lists)), so they survive module updates.

After an update, restart Foundry and refresh the browser with **Ctrl+F5** so it loads the new scripts.
