# Build a character (Adventurers and Minions)

**Where:** [Adventurers and Minions](Adventurers-and-Minions) → **Build a character**.

Make a character or NPC step by step. Random characters and edited actors use the same steps (see [Random character](AM-Random) and [Edit an actor](AM-Edit)).

A&M records your choices the way D35E's level-up window does: the actor is made with D35E's level-up progression on, and its level records (class, hit points and skill points for each level) are on the sheet. D35E then works out BAB, saves, skill totals, AC, attacks, spell slots and class features. Rules that are broken are shown, never enforced.

> 📷 **Screenshot:** the Build window on the Classes and levels step, with the step bar, the summary on the right and Back / Next / Create at the bottom.

## The window

| Part | What it does |
|---|---|
| **Steps** (along the top) | **Basics**, **Abilities**, **Classes and levels**, **Skills**, **Feats**, **Spells**, **Equipment**, **Review**. Open any of them at any time, in any order. The dot on each step shows whether it's done (green) or needs a look. |
| **Summary** (right) | The character so far: level, hit points, BAB, saves and ability scores, skill points and feats still to choose, and how many things are left to check (see them on Review). It updates as you choose. |
| **Back**, **Next** and **Create** (bottom) | Move between the steps, or create the actor from any step (Edit: **Apply changes**). |

## Basics

| Control | What it does |
|---|---|
| **Name** | The actor's name. |
| **PC** or **NPC** | A player character (character sheet, PC wealth) or an NPC (NPC sheet, NPC gear value). |
| **Race** | From your compendiums. The race's ability adjustments, size, speed, languages and bonus feat or skill points follow. |
| **Sex**, **Deity**, **Age**, **Height**, **Weight** | The character's details. |
| **Alignment** | Some classes need one (a paladin, a monk, a druid): Classes and levels warns when it doesn't fit. |
| **Languages** | The race's own languages come by themselves. Tick bonus languages, up to the Intelligence bonus. |
| **Portrait** and **token** | The actor's portrait and token images. |

## Abilities

The six ability scores before racial adjustments, and the increases every fourth level.

| Control | What it does |
|---|---|
| **Method** | **Point buy** (with its budget), the **elite** or **nonelite array**, rolled scores (4d6 drop the lowest, or 3d6), or scores typed in. |
| **Place by class** | Puts the highest scores where the first class's profile wants them (a wizard's Intelligence, a fighter's Strength). |
| Racial changes | The race's adjustments are shown beside each score. |
| **Increases** | The ability that goes up at levels 4, 8, 12… (Classes and levels adds the levels). |

<a id="classes-and-levels"></a>
## Classes and levels

One row per character level: the class taken at it, hit points, BAB, saves and what the level brings.

> 📷 **Screenshot:** the Classes and levels step of a ranger 3 / rogue 1, with the Gains column, the favored class line and the To check list.

| Control | What it does |
|---|---|
| **Gestalt** | Two classes at every level (Unearthed Arcana). See [Gestalt](AM-Variants-and-Builds#gestalt). |
| **Add levels** | Choose a class (two for gestalt) and how many levels, then **Add levels**. Add another class the same way to multiclass. Any class can be added: base, prestige, racial hit dice and minion classes. Variant classes have their own group in the list (see [Variant classes](AM-Variants-and-Builds#variant-classes)). |
| Level rows | Each level's class and class level (change a level's class in its row), hit die, hit points rolled (roll one again with the dice), BAB and saves before ability modifiers, and its **Gains**: feats, class bonus feats, ability increases and the class features it brings (Sneak Attack +2d6, Evasion, Trap Sense +2…; click one to read it). Levels can be removed. |
| **Build** | For a class with several builds (a ranger's archer or two-weapon, a cleric's battle cleric or healer…): the build A&M follows when it chooses for this class (Choose for me, Fill in, Standard gear, Roll again). See [Builds](AM-Variants-and-Builds#builds). |
| Combat style | A ranger's combat style, **Archery** or **Two-Weapon Combat**. Left unchosen, the build's is used. See below. |
| Class feature variants | Unearthed Arcana's swaps for a class feature. Point at one to read what it gives. See [Class feature variants](AM-Variants-and-Builds#class-feature-variants). |
| **Hit points** | How new levels roll their hit points (maximum at 1st level, then average, maximum or rolled), and buttons to redo every level. |
| **To check** | What breaks the rules here: an alignment the class doesn't allow, a class past its last level, hit points out of range, a prestige class the character doesn't qualify for, a gestalt level with one class. |

Class features come from D35E itself (its Class Abilities by class and level, and the class's own notes), so they match what D35E puts on the sheet. D35E still adds them.

### Prestige classes

Each prestige class's requirements are checked against the character as it is before the class's first level: the SRD's 15 core prestige classes and the psionic SRD's 9, or your own (see [Prestige requirements](AM-Variants-and-Builds#prestige-requirements)).
- In the class lists, a prestige class the character doesn't qualify for at that level is marked **✘**. Point at it to see what's missing. It can still be chosen.
- Taking it anyway is a rule broken on Classes and levels and Review, listing what's missing, for example "Level 6: Arcane Trickster needs Escape Artist 7 ranks, sneak attack +2d6."
- A requirement A&M can't check (the assassin's kill) is shown as a reminder.

### Favored class and multiclass XP penalty

With two base classes, the race's favored class and any multiclass XP penalty show under the table (SRD: −20% for each class more than one level below the highest). The favored class doesn't count (a human's or half-elf's is its highest-level class), nor do prestige classes and racial hit dice. Gestalt characters have no penalty.

While the setting **Multiclass XP penalty** is on, a character with a penalty gets a **Multiclass XP Penalty** trait on the actor, and the XP it gains is reduced by that much (from the sheet, a GM's award or a macro), with a note saying so ("+500 XP becomes +400"). The trait follows the classes: when an A&M character gains or changes classes (Edit, or D35E's level-up), the percentage is worked out again, and the trait leaves when the penalty does.

### Ranger combat style

On the actor, A&M puts the style's features in place of D35E's description-only ones, named after the style ("Combat Style (Archery)", "Improved Combat Style (Archery)", "Combat Style Mastery (Archery)"). Each links its feat, so D35E adds Rapid Shot, Manyshot and Improved Precise Shot (or Two-Weapon Fighting, Improved and Greater Two-Weapon Fighting) at 2nd, 6th and 11th level.
- These feats count for other feats' prerequisites and for prestige classes, aren't offered again, and are listed on the Feats step.
- Medium or heavy armor in the ranger's gear is a warning: the style works only in light or no armor.

## Skills

Skill points are spent level by level, as D35E's level records keep them: each level's points by its class.

| Control | What it does |
|---|---|
| **Level** | The level whose points you're spending. Its colour shows points left (or overspent). |
| **+** and **−** | Spend points. A class skill point is a rank, a cross-class point half a rank. Maximum ranks follow the character level. |
| **Same as before** | Copy the previous level's spending. |
| **Fill** | Put every point in class skills, up to the maximum. |
| **Clear** | Clear the level. |
| Craft, Perform, Profession | Name a sub-skill (Craft: Weaponsmithing) to spend points on it. |

## Feats

Every feat slot of the character, level by level: a feat every third level, the human bonus feat, and class bonus feats (fighter, wizard, monk, psionic classes; both classes' in gestalt) from the class's own list.

| Control | What it does |
|---|---|
| Only feats that qualify | Lists only the feats whose prerequisites the character meets at that level. A class bonus feat lists its class's choices. |
| A slot | Type or pick a feat. Prerequisites are checked at that level. A feat with a choice (Weapon Focus, Skill Focus, Spell Focus…) asks for it beside. |
| Rogue special ability | At rogue levels 10, 13, 16 and 19 the slot lists the rogue's **Special abilities** (Crippling Strike, Defensive Roll, Improved Evasion, Opportunist, Skill Mastery, Slippery Mind), then **Or a feat instead**. Each ability can be taken once, except Skill Mastery, which asks for its skills (3 + the Intelligence modifier) and is named after them on the actor. |
| Feats given by class features | Feats a class feature gives (a ranger's combat style, a conjurer's Augment Summoning) are listed, counted for other feats and prestige classes, and not offered again. |

<a id="spells"></a>
## Spells

One block per spellcasting or psionic class (both classes of a gestalt character). Spells and Equipment are filled in on your first visit, or when the actor is created without visiting them.

> 📷 **Screenshot:** the Spells step of a cleric 2 / wizard 2, with the domains, the specialist school and the spells by level.

| Control | What it does |
|---|---|
| **Choose for me** | Fills every caster class by its profile's favourite spells or powers, then at random. Edit: **Add spells for new levels** adds what the new levels bring and keeps the actor's spells. |
| **Domains** | A cleric's two domains (alignment domains only for a cleric of that alignment, SRD). Their spells join the list, tagged **domain**, and each spell level from 1st gets **+1 domain slot**. |
| **Specialist school** | A wizard's school, and the schools given up (two, or one for a diviner): their spells are never learned, and any already chosen are taken off. Each spell level from 1st gets **+1 specialty slot** for a spell of the school. The list also offers the arcane domains (see [Domain wizard](AM-Variants-and-Builds#domain-wizard)). |
| **slot** | The spell prepared in that level's domain or specialty slot (D35E's special slot on the actor). |
| Spells by level | Each spell level: how many are known or in the spellbook, prepared against the day's slots, and the spells. Add one by name, remove one, or change how many times it's prepared. Non-SRD spells are marked. |

What each class gets:
- **Clerics, druids, paladins, rangers and adepts** get their whole class list: every SRD spell of the levels they can cast, plus random non-SRD spells from your other compendiums (setting **Non-SRD spells per caster level**). Some are prepared to fill their slots.
- **Wizards** get a spellbook: every SRD 0-level spell, 3 + Intelligence modifier 1st-level spells, 2 new spells a level, and spells found adventuring (at each spell level 1, plus 1 for every 2 levels since they gained it, mostly SRD). They're prepared to fill their slots.
- **Sorcerers and bards** get their table's spells known, mostly SRD.
- Each class takes its profile's favourite spells first.
- **Psions, wilders and psychic warriors** get their powers known by the class tables, from D35E's Powers compendium. A psion's list is the psion/wilder list plus its discipline's (Psion (Egoist): egoist powers). The step shows powers known against the table, the highest power level and about how many power points a day. D35E works out the power points, and a new character starts with them full.
- **Curios' spellbook rule:** while it's on, the classes it lists (Wizard by default) get their spells written in spellbook items (100 pages each), and prepare from them. The step says so.
- **Spontaneous casting:** with the world setting on, or a Spontaneous variant class, clerics, druids, paladins and rangers know a few spells of each level and cast without preparing, and a wizard casts any spell in its spellbook. Nothing is prepared then. See [Spontaneous casting](AM-Variants-and-Builds#spontaneous-casting).

The actor gets the domain or school feats, so D35E's sheet marks domain, school and prohibited spells.

<a id="equipment"></a>
## Equipment

Gear by the DMG: an NPC's gear value, or a PC's wealth for its level.

> 📷 **Screenshot:** the Equipment step, with Standard gear, the Add row, the load line and the treasure for the rest.

| Control | What it does |
|---|---|
| **Standard gear** | The DMG's NPC gear for the main class at the character's level (a gestalt character's two classes combined), with the weapon the character has Weapon Focus in. Axecleft's Armory makes the masterwork and magic arms and armor when it's active. |
| **Add** | Add any weapon, armor, shield, ammunition or item by name, with a quantity (ammunition 20 when blank), masterwork or a bonus, and (with Axecleft's Armory) a special material and special abilities, commas between. The Armory checks them (a slashing-only ability on a mace, a material that can't be used for it) and prices them. Its price counts against the wealth. |
| Item rows | Each item's quantity (a box on item and ammunition rows) and weight. |
| **Adventuring kit** | On for PCs, off for NPCs (tick it). See below. |
| Starting gold | A 1st-level PC has its class's SRD starting gold instead of the wealth table (fighter 6d4 × 10 gp, wizard 3d4 × 10 gp…): the average, or **Roll** it. |
| Treasure for the rest | What the gear leaves of the wealth is rolled as treasure. See below. |
| The actor's own gear | Edit only: keep, unequip or sell each item. See [Edit an actor](AM-Edit#gear). |

**Load and worn slots:** the gear's weight is shown against the character's carrying capacity (Strength and size; coins aren't counted). A medium or heavy load is a warning, more than a heavy load a rule broken. Two items for one worn slot (two amulets, two cloaks, three rings, two suits of armor) is a warning. The warnings show on Equipment, in its step dot and on Review.

**Small characters** get Small arms, armor and shields: the same price, half the weight, and D35E scales a Small weapon's damage.

**Adventuring kit:** the class kits of Pathfinder's *Ultimate Equipment* (Open Game Content), made of D35E's own items: backpack, bedroll, belt pouch, flint and steel, iron pot, trail rations, soap, torches, waterskin, and each class's own tools (holy symbol, spell component pouch, holly and mistletoe, thieves' tools, musical instrument…). A wizard's spellbook is free. A multiclass or gestalt character gets the kit of its main class plus the other classes' tools. Kit items are carried, not equipped.

**Wealth and treasure:**
- NPCs have the DMG's NPC gear value, PCs the character wealth by level.
- What the gear doesn't use is rolled on the SRD Treasure table at the character's level by the Treasure Generator (with Armory, Curios or Gemstones): gems, art and magic items, no coins, each kept while it fits. What's left is platinum (gold for anything under 10 gp).
- Treasure armor, shields and weapons are kept only when the character can use them (class, race and feat proficiencies; druids no metal; no shield with a two-handed weapon) and when they beat what it has: one armor, one shield, one melee and one ranged weapon. Better means a higher effective bonus (enhancement plus special abilities), then special abilities, then price; the Weapon Focus weapon counts +1. The item replaced goes back into the wealth. Magic ammunition only for a bow, crossbow or sling the character has.
- Nothing whose alignment clashes with the character's: intelligent items (SRD alignment rules), and holy, unholy, axiomatic and anarchic arms.
- Psionic items only for characters with a psionic class.
- Arms and armor A&M places are equipped on the actor.

## Review

Everything the character will have, what still breaks the rules, and the button that makes it.

| Control | What it does |
|---|---|
| **Roll again** | Random characters: roll any part again (name, abilities, hit points, skills, feats, spells, equipment, or everything). Rolling the abilities redoes skills and feats too. |
| **To check** | What isn't right yet, by step. Click a step to go there. Nothing stops you creating the actor. |
| Class features | Each class's features with the class level they come at, class feature variants included. |
| **Owner** | GM only: a player who will own the new actor (the GM always does). |
| Folder | The folder for the new actor. |
| Open its sheet | Whether to open the new actor's sheet. |
| **Create actor** | Makes the actor. |

Edit shows **Fill in what's missing**, **Changes** and **Apply changes** here instead: see [Edit an actor](AM-Edit#review).
