# Settings

**Where:** **Configure Settings**, under each module's name. These are world settings: only the GM changes them.

The Treasure Generator's own options (campaign, magic items, gems, coins…) are not here. They're on its [Generation Settings](Generation-Settings) tab.

Shared scripts register their settings once, under the first active Axecleft module that ships them. If you have Armory, Curios and Gemstones, you'll find **Shared treasure lists library** under one of them, not all three.

## Shared (Treasure Generator)

Shipped by Armory, Curios and Gemstones.

| Setting | Default | What it does |
|---|---|---|
| **Shared treasure lists library** | Automatic | **Automatic**: your [Treasure Lists](Treasure-Lists) are saved to a file in the Foundry Data folder whenever you change them, and every world loads them at start-up, so they survive module updates and follow you between worlds. **Manual**: only when you press Save / Load on the Treasure Generator's Lists tab. |
| **Shared library folder** | `axecleft-treasure` | The folder inside your Foundry Data folder that holds `treasure-lists.json`. |

## Shared (Crafting)

Shipped by Armory, Curios and Traps. See [Crafting](Crafting#settings) for details.

| Setting | Default |
|---|---|
| **Players may craft** | On |
| **Magic item checks** | SRD (no check) |
| **Poison crafting** | House rule |
| **Crafting checks are rolled as** | Public roll |
| **Charge gp** | On |
| **Charge XP** | On |
| **XP can't cost a level** | On |

## Axecleft's Armory

| Setting | Default | What it does |
|---|---|---|
| **Psionic share of magic arms and armor (%)** | 10 | House rule, while Psionics is on (Treasure Generator → Generation settings): this share of random magic weapons, armor and shields that get special abilities roll them on the SRD psionic ability tables instead. 0 = none. |

## Axecleft's Curios

| Setting | Default | What it does |
|---|---|---|
| **Highest potion level (GM)** | 3 | SRD: potions and psionic tattoos hold 3rd-level spells or powers or lower. The GM may raise this to 9th for items made on the [Curios tab](Curios-Workshop#gm-only). Random treasure follows the SRD tables. Players' crafting always stays at 3rd. |
| **Highest wand level (GM)** | 4 | The same for wands and dorjes (SRD: 4th). Players' crafting always stays at 4th. |
| **Psionic share of potions, scrolls, wands, staffs and wondrous items (%)** | 10 | House rule, while Psionics is on: this share of random potion, scroll and wand rolls become psionic tattoos, power stones and dorjes; of staff rolls, SRD psicrowns; of wondrous item rolls, cognizance crystals and psionic universal items. 0 = none. |
| **Pearls of power for spontaneous casters (house rule)** | Off | SRD: a pearl of power recalls a spell a caster prepared. On: sorcerers, bards and other spontaneous casters can use one to regain a used spell slot of the pearl's level. |
| **Set up psicrowns** | On | A psicrown added to a character from a compendium (D35E's Dominator, Evader…) gets its power points and its powers as separate items that spend the crown's points. |
| **Prefer module compendiums** | On | When a spell, power or item is in both D35E's compendiums and a module's (such as Axecleft's Shared Data), use the module's copy. |
| **Take over hand-made linked items** | On | A spellbook or scroll you linked by hand on D35E's Links tab: when it's added to a character, Curios keeps a copy of its contents, so used scrolls stay used when it changes hands. |
| **Spellbook rule** | Off | Optional: characters whose spellbook class is listed below can only prepare spells found in a spellbook item they carry (Read Magic is always allowed, as in the SRD). The GM is warned but not stopped. |
| **Spellbook classes** | `Wizard` | The classes the spellbook rule applies to, separated by commas. |

## Axecleft's Gemstones

| Setting | Default | What it does |
|---|---|---|
| **Gem size & quality variations** | On | Random gems use the homebrew sizes (Tiny to Huge) and qualities (Flawed to Exceptional). Off: plain SRD-value gems. The generator has the same checkbox for one-off changes. |
| **Art & jewelry quality variations** | On | Random art and jewelry use the homebrew workmanship qualities (Junk to Masterpiece). Off: plain SRD art values. |

## Axecleft's Traps, Poisons, and Diseases

| Setting | Default |
|---|---|
| **Trap kits: GM approves** | On |
| **Trap kits: setting takes time** | On |
| **Trap kits: who sees a placed trap** | GM only, plus a marker for the player who set it |
| **Trap kits: placed traps can be recovered** | On |
| **Trap kits: compendiums for crafting** | Blank (every compendium with trap actors) |
| **Trap kits: crafting progress** | Silver pieces (SRD) |

See [Trap Kits](Trap-Kits#settings) for details.

## Join the Discord

Each Axecleft module's section also has **Join the Discord** and an **Open Discord** button. It opens [Axecleft's Tool Suite Discord server](https://discord.gg/FRhPPwDWta) in your web browser, for help, news and ideas. Everyone, players included, also has a **Join the Discord** button in the Axecleft's Tools menu.

## Support on Patreon

Each Axecleft module's section starts with **Support on Patreon** and an **Open Patreon** button. It opens [Axecleft's Patreon](https://www.patreon.com/Axecleft) in your web browser and changes nothing in your world. Players see it too; the GM also has a **Support on Patreon** button in the Axecleft's Tools menu.
