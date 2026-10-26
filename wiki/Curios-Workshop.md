# The Curios Workshop (Axecleft's Curios)

**Where:** Treasure Generator → **Curios** tab.

Make potions, scrolls, wands and spellbooks from any spell in your spell sources, and psionic tattoos, power stones and dorjes from your power sources. You can also make specific rings, rods, staffs and wondrous items, or roll random ones. Prices follow the SRD. Treasure starts unidentified.

> **<img width="596" height="1072" alt="image" src="https://github.com/user-attachments/assets/8962409c-1cf8-4a43-bcdb-50a92cdc6fbb" />**

## Make

Choose what to make. The rest of the tab changes to fit.

| Make | Notes |
|---|---|
| **Potion or oil** | One spell, 3rd level or lower (SRD). No spells with a range of personal. |
| **Scroll (one spell)** | One spell. |
| **Scroll (several spells)** | One master scroll holding several spells. |
| **Wand** | One spell, 4th level or lower (SRD), 50 charges. |
| **Spellbook** | The spells you list, or random spells. |
| **Psionic tattoo**, **Power stone (one power)**, **Power stone (several powers)**, **Dorje** | The psionic versions (only while Psionics is on). |
| **Cognizance crystal** | A crystal that stores power points. |
| **Psicrown** | An SRD psicrown, or your own. |
| **Specific ring, rod, staff or wondrous item** | Any such item from your item sources. |
| **Random item (SRD tables)** | A random item from the category and grade you choose. |

## Spells and powers

| Control | What it does |
|---|---|
| **Spells** (or **Powers**) | One per line. Add **@** and a caster level to raise it, and **+** for metamagic: `Fireball @10 +empower`. Names can be in your world's language. Or use the spell picker below. |
| **Scroll type** | **Arcane if the spell is arcane, else divine**, **Arcane**, or **Divine**. |
| **Caster level** | Blank: the lowest caster level that can cast it. A higher caster level raises the price, as the SRD's formula does. |
| **SRD limits** | **Ignore them (GM)**: allows any spell level, area spells in potions, and personal spells. For your own house-ruled items. |

A line under the controls checks your spells as you type, and says what will be made or what's wrong.

Metamagic words: `+empower`, `+enlarge`, `+extend`, `+heighten N` (to level N), `+maximize`, `+quicken`, `+silent`, `+still`, `+widen`. Each raises the spell's effective level, and so the item's price and its minimum caster level. The item's level limits count the metamagic.

### The spell picker

> **[Screenshot: the spell picker]**

| Control | What it does |
|---|---|
| **Search** | Narrows the list as you type. |
| List | Where the levels come from: the item's own rule (**Lowest level (SRD prices)**, **By the scroll type** for scrolls, **The spellbook class** for spellbooks), **Arcane**, **Divine**, or one class. |
| Groups | Every spell in your Spell sources (powers for psionic items), by level. Click a level to open or close it, and click a spell to choose it. Only spells the item can hold are listed: potions up to 3rd level with no personal or area spells, wands up to 4th, and so on (all of them with **SRD limits: Ignore them**). |
| **Caster level** | For the chosen spell. Its minimum is shown; blank uses the minimum. |
| **Metamagic** | Tick the feats to apply. **Heighten to** takes the level. |
| **Add to item** | Puts the spell in the **Spells** box as a line (`Fireball @12 +empower`). A potion, wand or one-spell scroll holds one spell, so adding replaces it; scrolls with several spells and spellbooks add a line. |
| **In the item** | The spells in the box, each with ✕ to remove it. |

The picker and the box work together: what you add appears in the box, and what you type appears in the list.

For a spellbook, choosing a class in the list also sets **Spellbook class**, so the spells go into that class's spellbook. Typing another class in **Spellbook class** sets the list back to **The spellbook class**.

## Spellbooks

> **<img width="602" height="1011" alt="image" src="https://github.com/user-attachments/assets/72c44ce0-3b3c-4eca-982f-d722d16f1e17" />**

| Control | What it does |
|---|---|
| **Spells** | **The spells I list** (in the Spells box) or **Random spells**. |
| **Highest spell level** | With random spells: 0 (cantrips only) to 9. |
| **Number of spells** | With random spells: random levels from 0 to the highest, with no duplicates. It stops early if the book is full (100 pages). |
| **Spellbook class** | The class whose spellbook the spells go into when the owner learns them (default Wizard). |

## Psionic items

> **<img width="600" height="841" alt="image" src="https://github.com/user-attachments/assets/c6b143dd-bc7f-44b1-b2b1-9f2d43657c88" />**

| Control | What it does |
|---|---|
| **Capacity** (cognizance crystal) | 1 to 17 power points, with its price. **Charged**: the crystal starts full. |
| **Psicrown** | An SRD psicrown, with its power points, manifester level and price, or **Custom: the powers I list** (type the powers in the Powers box). |

## Specific and random items

| Control | What it does |
|---|---|
| **Item** | Type to search your item sources for a ring, rod, staff or wondrous item. |
| **Category** and grade | For **Random item**: the category (potion, ring, rod, scroll, staff, wand, wondrous item) and **Minor**, **Medium** or **Major**. |
| **Sheds light** | **By Generation settings (random)**, **No** or **Yes**. Rings, rods, staffs and wondrous items only. The look follows the item's school of magic. |
| **Intelligent** | **By Generation settings (random)**, **No**, or **Yes (roll its mind and powers)**. Needs D35E 3.1 or later, so it's hidden on Foundry 11. |
| **Cursed** | **No**, **Random curse (SRD tables)**, a curse type, or one of your custom curses. See [Cursed Items](Cursed-Items). |

## How many

**How many** to make (1–20). **Unidentified**: the items start unidentified (players see "Potion", "Scroll", "Wand"…).

## GM only

> **<img width="603" height="400" alt="image" src="https://github.com/user-attachments/assets/8fd72efc-470a-44cd-9dc7-48dbd3a5aff1" />**

| Control | What it does |
|---|---|
| **Highest potion level** | SRD: 3rd. Raise it to let the GM make potions and tattoos of higher-level spells and powers here. Players' crafting always stays at 3rd. |
| **Highest wand level** | SRD: 4th. Raise it for wands and dorjes in the same way. Players' crafting always stays at 4th. |

Set [Put items in](Treasure-Generator#put-items-in) and press **Generate**.
