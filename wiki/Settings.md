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

## Shared (Axecleft's Shop)

Shipped by Armory, Curios and Gemstones. See [Axecleft's Shop](Axecleft's-Shop).

| Setting | Default | What it does |
|---|---|---|
| **Trade goods: merchants sell at (%)** | 100 | Gems, art and jewelry (D35E's **Full Resale Price**): what Axecleft's Shop merchants charge, as a % of their value. SRD: 100. A shop can set its own on its sheet. |
| **Trade goods: merchants buy at (%)** | 100 | What merchants pay for them, as a % of their value. SRD: 100. A shop can set its own on its sheet. |
| **Pickpocketing and shoplifting** | On | Players can try to pick pockets (the hand button in the token controls, on a targeted token) and shoplift at merchants; you decide each attempt on a card in chat. Characters players own can't be robbed. Each shop can also turn it off on its sheet. |

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

## Axecleft's Adventurers and Minions

See [Adventurers and Minions](Adventurers-and-Minions).

| Setting | Default | What it does |
|---|---|---|
| **Ability scores** | Point buy | How new characters start their ability scores: Point buy, Elite array, Nonelite array, Roll, or Type in the scores (each one can be changed). |
| **Point-buy points** | 25 | Points for the point buy (25 standard, 28 tougher, 32 high-powered). |
| **Hit points per level** | Average (rounded up) | Hit points for each level after the first: Average (rounded up), Maximum or Roll. The first level is the maximum unless unticked in the window. |
| **Non-SRD spells per caster level** | 1 | Clerics, druids, paladins, rangers and adepts get every SRD spell they can cast, plus this many spells from other compendiums for each caster level, at each spell level they can cast. Above 0, spellbooks and spells known also get the odd non-SRD spell. 0: SRD spells only. |
| **Copy before an edit** | On | Editing an actor makes a copy of it first, in the folder **A&M backups** (it can be turned off on Review for one edit). |
| **Players build through the GM** | On | Players can open A&M and edit the actors they own. To make a new actor without Foundry's **Create New Actors** permission, A&M asks a GM who is logged in to create it, owned by that player. Off: only users with that permission make actors. |
| **Trade-in value** | 50 | Editing an actor: what an item sold for the new levels' gear is worth, as a % of its value (SRD: half). Gems, art and trade goods count at full value. |
| **Players can trade in gear** | Off | Editing an actor: players can sell the actor's items for the new levels' gear. Off: players can keep or unequip items; only a GM sells them. |
| **Spontaneous casting** | Off | Every caster casts spontaneously (Unearthed Arcana). See [Variants and builds](AM-Variants-and-Builds). Reload races, classes and feats on the start page after a change. |
| **Variant classes** | On | Offer Unearthed Arcana's variant classes with the standard ones. Reload races, classes and feats on the start page after a change. |
| **Multiclass XP penalty** | On | A character whose classes give a multiclass XP penalty (SRD: −20% for each class more than one level below the highest; the favored class doesn't count) gets a **Multiclass XP Penalty** trait, and the XP it gains is reduced by that much. Off: no trait, XP as given. |

## Axecleft's Armory

| Setting | Default | What it does |
|---|---|---|
| **Psionic share of magic arms and armor (%)** | 10 | House rule, while Psionics is on (Treasure Generator → Generation settings): this share of random magic weapons, armor and shields that get special abilities roll them on the SRD psionic ability tables instead. 0 = none. |
| **Socket crystals** | Off | Weapons, armor and shields a character carries get a **Socket crystal** button: set a crystal from the inventory into the item (one per item) and take it out again. Foundry reloads when you change it. See [Forge](Forge#crystals-tab). |
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

## Axecleft's Printable Sheets

These are client settings: each user picks their own. See [Printable Sheets](Printable-Sheets).

| Setting | Default | What it does |
|---|---|---|
| **Printed sheet layout** | Classic 3.5 sheet | The layout the **Print** button uses for player characters. The Actors sidebar's right-click menu offers every layout. |
| **Printed NPC / monster layout** | Monster Manual stat block | The layout the **Print** button uses for NPCs and monsters. |

## Axecleft's Traps, Poisons, and Diseases

| Setting | Default |
|---|---|
| **Trap kits: GM approves** | On |
| **Trap kits: setting takes time** | On |
| **Trap kits: who sees a placed trap** | GM only, plus a marker for the player who set it |
| **Trap kits: placed traps can be recovered** | On |
| **Trap kits: compendiums for crafting** | Blank (every compendium with trap actors) |
| **Trap kits: crafting progress** | Silver pieces (SRD) |
| **Trap kits: need Craft (trapmaking)** | On |
| **Magic traps: can be carried** | Off |

See [Trap Kits](Trap-Kits#settings) for details.

## Axecleft's VooDoo

See [VooDoo](VooDoo).

| Setting | Default | What it does |
|---|---|---|
| **Mobile accounts** (button: **Create mobile accounts**) | | Opens the Mobile accounts pop-up: pick players and create a linked mobile account for each. |
| **Hide mobile accounts in the player list** | Off | Off: mobile accounts show in the player list with a phone icon. On: they're left out of it. |

## Axecleft's Tool Suite (module)

See [Axecleft's Tool Suite](Axecleft's-Tools-Suite).

| Setting | Default | What it does |
|---|---|---|
| **Update notice on startup** | On | Your own setting, on this browser. When a GM loads the world, check for Axecleft module updates (at most every 6 hours) and show a notice. |

## Tool Suite settings in every module

Each Axecleft module's section has an **Axecleft's Tool Suite** button (**Tool Suite settings**). It holds the settings every module shares, for everyone, players included:

| Setting | Default | What it does |
|---|---|---|
| **Show the welcome window when Foundry starts (everyone in this world)** | On | GM only. Off: nobody in this world sees the welcome window. |
| **Show it to me** | On | Just for you, on this browser. The welcome window has the same tick box (**Show this when Foundry starts**). |

The welcome window thanks you for using the suite, has the links to [Axecleft's Tool Suite Discord server](https://discord.gg/FRhPPwDWta) (help, news and ideas), [Axecleft's Patreon](https://www.patreon.com/Axecleft) and this User Guide, and lists the Axecleft modules active in the world. **Show the welcome window** opens it at any time.
