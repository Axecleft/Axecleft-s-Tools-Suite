# Printable Sheets (Axecleft's Printable Sheets)

**Where:** the **Print** button in an actor sheet's title bar (or the sheet's menu), or right-click an actor in the **Actors** sidebar and choose a **Print: …** entry. GM and players.

Print D35E actors on paper: characters, NPCs and monsters as a character sheet or a stat block, and merchants, loot piles, hoards, traps and companions in layouts of their own. The print dialog opens with the sheet (no pop-up window, so it works in the Foundry desktop app and in browsers). Choose your printer, or **Save as PDF**.

Axecleft's Printable Sheets is for Foundry 13 and 14.

> 📷 **Screenshot:** an actor sheet's title bar with the Print button, and the Actors sidebar right-click menu with the Print entries

## How to print

- **From the sheet:** click **Print** in the sheet's title bar (or its menu). It prints in the layout set for that kind of actor (see [Choosing the layout](#choosing-the-layout)).
- **From the Actors sidebar:** right-click a character or NPC and choose **Print: Classic 3.5 sheet**, **Print: eTools-style sheet** or **Print: Monster Manual stat block**. The menu always offers every layout.

Players can print any character they can at least observe. Merchants, loot piles, hoards, traps and companions print in their own layout, picked by what the actor is: see [Merchants, loot, hoards, traps and companions](#merchants-loot-hoards-traps-and-companions).

Every layout prints on whatever paper the printer uses (Letter or A4).

## Characters, NPCs and monsters

Three layouts:

| Layout | What it prints |
|---|---|
| **Classic 3.5 sheet** | The layout of the 3.5 edition character sheet, on three pages: character and combat, gear and feats, spells. The spells page only prints for spellcasters. Spells are listed by level in three balanced columns; a level too long for one column carries on in the next under a "Level N (continued)" title. Each spellbook starts its own page, and long lists start on a fresh page when that uses no more paper. |
| **eTools-style sheet** | The layout of eTools' standard character sheet. Sections flow from page to page (no forced page breaks), and spellcasters get a spells section after their feats. |
| **Monster Manual stat block** | The familiar stat block (Hit Dice, Initiative, Speed, Armor Class, Base Attack/Grapple, Attack, Full Attack, Space/Reach, Special Attacks, Special Qualities, Saves, Abilities, Skills, Feats), the ecology lines (Environment, Organization, Challenge Rating, Treasure, Alignment, Advancement, Level Adjustment), spells if any, then the actor's biography as its description. |

> 📷 **Screenshot:** page 1 of the Classic 3.5 sheet beside a Monster Manual stat block

### The eTools-style sheet

- **Page 1:** name, class, race and details; ability scores; HP, AC (with its breakdown, touch and flat-footed); initiative; BAB; saves; melee, ranged and grapple; each equipped weapon (attack, damage, critical); worn armor and shield; all skills.
- **Then:** equipment with load limits and carried weight; money; languages; feats; special abilities (racial traits such as senses, damage reduction, resistances, immunities, fast healing and regeneration, then racial and class features).
- **Spellcasters:** each spellbook, with caster level, spells per day, bonus spells, spells known, save DC by level, and the spells by level.
- **Non-casters:** note lines.

### Numbers on the sheets

- Totals come straight from D35E's own calculations.
- Each weapon's attack and damage line is worked out by the module: base melee or ranged attack + enhancement or masterwork + Weapon Focus; Strength, enhancement and Weapon Specialization for damage. Situational bonuses from buffs or conditional feats aren't added there.
- Blank boxes (deflection, magic and temporary save modifiers, eyes, hair, extra weapon and armor blocks) are left for writing in by hand.

<a id="stat-block-notes"></a>
### Stat block notes

- **Attack lines** are built from the actor's attack items (natural attacks and weapon attacks): attack bonus = BAB + ability + size + the item's attack bonus (+1 for Weapon Focus). Secondary natural attacks get –5 (or –2 with Multiattack) and half Strength to damage. Iterative attacks are added for high base attack bonuses. Actors without attack items use their equipped weapons.
- **Space/Reach** follow the size table: humanoid-shaped creatures (humanoids, giants, outsiders, fey) are tall, others long.
- **Special Attacks** are picked from the actor's abilities by name (breath weapon, gaze, poison, improved grab, rend, spell-like abilities…). Everything else goes under **Special Qualities**.
- **Ecology lines** that D35E doesn't store print as blank lines to fill in.

<a id="merchants-loot-hoards-traps-and-companions"></a>
## Merchants, loot, hoards, traps and companions

These actors print in a layout of their own, from the **Print** button or the Actors sidebar menu. What a player prints is what they'd see on the sheet: no hidden items, unidentified items by the name they show, and nothing inside a closed container.

Prices, hoard values and trap lines come from [Axecleft's Shop](Axecleft's-Shop), the [Hoard Editor](Hoard-Editor) and [Traps, Poisons, and Diseases](Random-Trap-Generator) when they're active, so they match those modules. Without them, they come from the actor's own data.

<a id="merchants"></a>
### Merchants

Merchants made by the [Merchant Generator](Merchant-Generator) (on the [Axecleft's Shop](Axecleft's-Shop) sheet), or on D35E's merchant sheet.

| | What it prints |
|---|---|
| **Player** | A **price list** of what they can see on the sheet, with a tick box per item and note lines. Players need only Limited permission on a merchant to print it, as to trade. |
| **GM** | The **full stock**: true names, hidden items and trade goods marked, value, price each and the stock total. Then the shop's settings (prices, trade goods %, haggling, pickpocketing and security, lock-outs, purse) and the latest log entries. |

> 📷 **Screenshot:** a player's merchant price list beside the GM's full stock

<a id="loot"></a>
### Loot piles and party storage

Loot piles and party storage on the [Axecleft's Shop](Axecleft's-Shop#loot-containers-and-party-storage) sheet, or on D35E's loot sheet.

| | What it prints |
|---|---|
| **Player** | The coins and contents, with a "Taken by" column. A closed or locked container shows nothing inside. Party storage adds its log. |
| **GM** | Values, weights and totals, the lock, the container, the trap and the full log (secret entries included). |

<a id="hoards"></a>
### Hoards

Hoards from the [Hoard Editor](Hoard-Editor).

| | What it prints |
|---|---|
| **Player** (who can loot it) | A "treasure found" list, with lines for who takes what. |
| **GM** | The encounter level against the SRD treasure, what it sells for, its trap and where it's placed, and each item's value, sale value and weight. |

<a id="traps"></a>
### Traps

D35E trap actors have the **Print** button and the Actors sidebar entry too. A trap prints as a DMG-style trap block (with Traps, Poisons, and Diseases active, the SRD stat line), its market price, poisons and description, and **Found** / **Disabled** / **Sprung** / **Reset** boxes to tick at the table.

<a id="companions"></a>
### Companions

Familiars, animal companions and special mounts: an NPC with a master, or with D35E's Animal Companion, Wizard Familiar or Paladin Mount class. It prints as the Monster Manual stat block with:
- a box for its master;
- the SRD advancement row for the master's level;
- its special abilities;
- lines for tricks (animal companions) and notes.

The Actors sidebar menu also offers the other layouts for it.

<a id="choosing-the-layout"></a>
## Choosing the layout

In **Configure Settings → Axecleft's Printable Sheets**, choose the layout the **Print** button uses:

| Setting | Default |
|---|---|
| **Printed sheet layout** (player characters) | **Classic 3.5 sheet** |
| **Printed NPC / monster layout** (NPCs and monsters) | **Monster Manual stat block** |

Each user picks their own. The Actors sidebar right-click menu always offers every layout, whatever is set here.

## Changing how the sheets look

The sheets are HTML templates and stylesheets in the module's folder. To change them, edit:
- `templates/classic-sheet.hbs` and `templates/standard-sheet.hbs`: the Classic and eTools-style sheets;
- `styles/classic-sheet.css` and `styles/print-sheet.css`: fonts, boxes, page size and margins.

The merchant, loot, hoard and trap layouts are `templates/shop-sheet.hbs`, `templates/contents-sheet.hbs` and `templates/trap-sheet.hbs`, with `styles/ledger-sheet.css`.

Reload Foundry after editing.

## Macros

- `game.modules.get("axeclefts-printable-sheets").api.printActor(actor, "classic")` prints one actor. The layouts are `"classic"`, `"standard"` (eTools-style), `"monster"`, `"merchant"`, `"loot"`, `"hoard"`, `"trap"` and `"companion"`.
- `game.modules.get("axeclefts-printable-sheets").api.printTraps(actors, { title: "Crypt" })` prints several traps on one page.
