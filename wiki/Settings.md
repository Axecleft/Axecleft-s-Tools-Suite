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
| **Special material share of random magic arms (%)** | 5 | This share of random magic weapons, ammunition, armor and shields is made of a special material that fits it (adamantine, cold iron, alchemical silver, darkwood, mithral, dragonhide), priced by the SRD. The core rules give 96–100 on d% (5%). 0 = none. |

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
| **Premade pieces in random art (%)** | 5 | How often a random art object or piece of jewelry is a premade piece (Leo's art and books, and your own on the Custom Premade Art list) instead of one built from an object, material and gem. 0 = never; they can still be picked on the Art Objects tab. |
| **Full resale price for gems, jewelry and art** | On | Gems, jewelry and art objects are trade goods: merchants buy and sell them at their full value (D35E's **Full Resale Price**). Applies to generated pieces and to gems taken from the module's compendiums. Off: merchants buy them at half price, like other items. |

**Value rolls and base values** (the GM's button) opens **Gem and art values**: your own value roll and base value for each of the 6 gem values and the 12 art values, and **A rolled value is never below the base value**. See [Gems, Art and Jewelry](Gems-Art-and-Jewelry#value-rolls-and-base-values).

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

## Axecleft's Tool Suite

Each Axecleft module's section has an **Axecleft's Tool Suite** button (**Tool Suite settings**). It holds the settings every module shares, for everyone, players included:

| Setting | Default | What it does |
|---|---|---|
| **Show the welcome window when Foundry starts (everyone in this world)** | On | GM only. Off: nobody in this world sees the welcome window. |
| **Show it to me** | On | Just for you, on this browser. The welcome window has the same tick box (**Show this when Foundry starts**). |

The welcome window thanks you for using the suite, has the links to [Axecleft's Tool Suite Discord server](https://discord.gg/FRhPPwDWta) (help, news and ideas), [Axecleft's Patreon](https://www.patreon.com/Axecleft) and this User Guide, and lists the Axecleft modules active in the world. **Show the welcome window** opens it at any time.
