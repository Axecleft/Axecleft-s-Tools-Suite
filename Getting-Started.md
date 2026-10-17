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
| [Crafting](Crafting) window | | ✔ | ✔ | ✔ |
| [Forge](Forge) tab | | ✔ | | |
| [Curios Workshop](Curios-Workshop) tab, Common Buffs compendium | | | ✔ | |
| Traps, poisons, diseases, trap kits | | | | ✔ |

The shared windows run as long as **any** module that ships them is active. With only Gemstones, the Treasure Generator rolls coins, gems and art, and lists the magic items in the chat card for you to handle. Add Armory and Curios and those items are made for you.

## Opening the tools

All the tools are in the **Axecleft's Tools** group on Foundry's left toolbar, next to the Game Master tools:

- **Treasure Generator**: coins, gems, art, jewelry and items.
- **Crafting**: craft items by the SRD (magic items with item creation feats, mundane items with Craft).
- **Merchant Generator**: create, stock and restock merchants.
- **Shop Tags**: tag compendium items with the shops that sell them.
- **Random Trap Generator**: roll random traps by CR and create trap actors.

The Treasure Generator also has a **Treasure** button at the top of the **Items** sidebar.

> **[Screenshot: the Axecleft's Tools group on the left toolbar]**

Most tools are for the GM. Players can open **Crafting** from their character sheet (see [Crafting](Crafting)).

## First things to set up

1. **Item sources.** Open the [Merchant Generator](Merchant-Generator) → **Item Sources** tab and tick the compendiums that hold your items. The Treasure Generator and merchants only take items from these.
2. **Campaign switches.** In the Treasure Generator → **Treasure by Level** → [Generation Settings](Generation-Settings), turn **Psionics** and **Epic items** on or off for your campaign.
3. **Coins.** In the same tab, choose how the SRD's copper, silver, gold and platinum are paid (see [Treasure by Level](Treasure-by-Level#coins)).
4. **Try it.** Pick an encounter level, set **Put items in** to **Chat card only**, and press **Generate**.

## Updating

Install updates from Foundry's **Add-on Modules** tab as usual. Your settings, Treasure Lists journal and custom lists are kept: custom lists are also saved to a file in your Data folder (see [Treasure Lists](Treasure-Lists)), so they survive module updates.

After an update, restart Foundry and refresh the browser with **Ctrl+F5** so it loads the new scripts.
