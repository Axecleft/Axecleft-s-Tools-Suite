# Adventurers and Minions

**Where:** **Axecleft's Tools → Adventurers and Minions**, the **Build a character** button at the top of the Actors directory, or the **Adventurers and Minions** button in the token controls. To change an existing actor: **Edit with Adventurers and Minions** in the actor's right-click menu in the Actors directory, or on its sheet (see [Opening it](#opening-it)).

Make complete D35E characters and NPCs: build one step by step, roll random ones (one or many at once), or edit an existing actor and add or change its classes and levels. You choose race, ability scores, classes, hit points, skills, feats, spells and gear; D35E works out BAB, saves, skills, AC, attacks and class features from your choices, as its own level-up window does. The SRD rules are checked and shown, never enforced.

Adventurers and Minions (A&M) replaces the earlier Ability Assigner and Class Assigner: **Build a character** and **Edit an actor** do their jobs.

> 📷 **Screenshot:** the Adventurers and Minions start page, with the three large choices, the Recent list and the GM buttons.

## Pages of this guide

| Page | What it covers |
|---|---|
| [Build a character](AM-Build) | The steps one by one: Basics, Abilities, Classes and levels, Skills, Feats, Spells, Equipment and Review. |
| [Random character](AM-Random) | Random characters and NPCs, several at once, a prestige class, the owner. |
| [Edit an actor](AM-Edit) | Reading an actor back into the steps, trading in gear, the backup copy. |
| [Variants and builds](AM-Variants-and-Builds) | Variant classes, class feature variants, domain wizards, spontaneous casting, gestalt, Build profiles and Prestige requirements. |

## Versions

| | Foundry 13 and 14 | Foundry 11 |
|---|---|---|
| Game system | D35E 3.1 | D35E 2.4.3 |
| Module | Axecleft's Adventurers and Minions, **1.14.x** | Axecleft's Adventurers and Minions for v11, **1.11.x** |
| Edit from an actor's sheet | The sheet's **⋮** menu | The A&M button in the sheet's title bar |
| Tour of a page | The window's **⋮** menu → **Tour of this tab** | The window's **Tour** button |

Everything else works the same on both.

A&M recommends **Axecleft's Gemstones** (the Treasure Generator, for the treasure a character's wealth buys; Armory and Curios have it too), **Axecleft's Armory** (masterwork and magic arms and armor, special materials and abilities) and **Axecleft's Curios** (potions, scrolls, wands, rings and wondrous items in a character's treasure). It works without them.

<a id="opening-it"></a>
## Opening it

| From | What it opens |
|---|---|
| **Axecleft's Tools → Adventurers and Minions** | The start page. |
| **Build a character** (top of the Actors directory) | The start page. |
| **Adventurers and Minions** button in the token controls | Edit on the selected token's actor when you own it; otherwise the start page. |
| **Edit with Adventurers and Minions** (an actor's right-click menu in the Actors directory) | That actor, read into the steps (see [Edit an actor](AM-Edit)). |
| An actor's sheet: the **⋮** menu (Foundry 13–14) or the A&M button in the title bar (Foundry 11) | The same, for that actor. |

## Who can use it

A&M is for players too.

- Players open it from the **Axecleft's Tools** menu and the **Build a character** button. They build and randomize characters, and edit the actors they own (from the right-click menu, the sheet and the token button).
- Players see only the compendiums they have permission to see.
- **New actors for players:** players don't have Foundry's **Create New Actors** permission by default. While the setting **Players build through the GM** is on, a player's new actor is made by a GM's Foundry, so **a GM needs to be logged in**. The actor belongs to that player, and the player's window fills it in as usual. The copy made before an edit is made the same way, owned by the player. The start page tells players how it works.
- With **Players build through the GM** off, only users with the Create New Actors permission can make actors. Everyone can still edit what they own.
- GM only: **Build profiles**, **Prestige requirements**, the **Owner** of new actors, and selling gear on Edit (unless **Players can trade in gear** is on).

## The start page

| Control | What it does |
|---|---|
| **Build a character** | Choose everything, step by step. See [Build a character](AM-Build). A character you were building is kept in this browser: **Continue…** goes back to it. |
| **Random character** | Pick what matters (race, class, level…) and A&M chooses the rest. See [Random character](AM-Random). |
| **Edit an actor** | Read an existing actor back into the steps and change it. See [Edit an actor](AM-Edit). |
| **Recent** | The last characters you made or edited in this browser, with **Edit** and **Sheet** buttons to edit them again or open their sheets. |
| **Build profiles** | GM only. The builds A&M follows for each class. See [Build profiles](AM-Variants-and-Builds#build-profiles). |
| **Prestige requirements** | GM only. What A&M checks before each prestige class. See [Prestige requirements](AM-Variants-and-Builds#prestige-requirements). |
| **Reload** | Races, classes and feats are read from your compendiums once a session. Press it after adding or changing a compendium. |

While A&M works (Generate, Roll again, Choose for me, Standard gear, Fill in what's missing, Create actor, Apply changes) the window shows what it's doing and for how long, for example "Character 3 of 10: Spells…", and waits for it to finish.

## Tours

Every page of the window has a tour: the start page, Random, Edit an actor, each step, and (GM) Build profiles and Prestige requirements. Start one from **Configure Settings → Tour Management**, or for the page shown from the window's **⋮** menu → **Tour of this tab** (Foundry 11: the window's **Tour** button). Players can take them too.

When the character being built has no levels yet, a step's tour shows a sample character (a human ranger 3 / rogue 1) so it has something to point at. Your character comes back when the tour ends; the sample is never saved.

<a id="settings"></a>
## Settings

**Configure Settings → Axecleft's Adventurers and Minions.** World settings, changed by the GM.

| Setting | Default | What it does |
|---|---|---|
| **Ability scores** | Point buy | How new characters start their ability scores: Point buy, Elite array, Nonelite array, Roll, or Type in the scores (each one can be changed in the window). |
| **Point-buy points** | 25 | Points for the point buy (25 standard, 28 tougher, 32 high-powered). |
| **Hit points per level** | Average (rounded up) | Hit points for each level after the first: Average (rounded up), Maximum or Roll. The first level is the maximum unless unticked in the window. |
| **Non-SRD spells per caster level** | 1 | Clerics, druids, paladins, rangers and adepts get every SRD spell they can cast plus up to this many random non-SRD spells from your other compendiums for each caster level, at each spell level (a 9th-level cleric gets up to 9 at each spell level). 0: SRD spells only. |
| **Copy before an edit** | On | Edit makes a copy of the actor in the folder **A&M backups** before it applies changes. |
| **Trade-in value** | 50 | The % of an item's value it's worth when sold on Edit (SRD: half). Gems, art and trade goods count at full value. |
| **Players can trade in gear** | Off | Lets players sell their actor's gear on Edit. Players can always keep or unequip. |
| **Players build through the GM** | On | A player without the Create New Actors permission gets the new actor made by a logged-in GM's Foundry. Off: only users with that permission can make actors. |
| **Multiclass XP penalty** | On | A character with the SRD multiclass XP penalty gets a **Multiclass XP Penalty** trait that reduces the XP it gains. See [Classes and levels](AM-Build#classes-and-levels). |
| **Variant classes** | On | The Unearthed Arcana variant classes, class feature variants and domain wizards. Off: they're hidden. See [Variants and builds](AM-Variants-and-Builds). |
| **Spontaneous casting** | Off | Every caster casts spontaneously. See [Spontaneous casting](AM-Variants-and-Builds#spontaneous-casting). |
