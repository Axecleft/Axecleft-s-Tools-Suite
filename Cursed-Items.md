# Cursed Items

Any random magic item can be cursed, following the SRD's *Cursed Items* rules: arms and armor, rings, rods, staffs, wondrous items, potions, scrolls, wands, and psionic, epic and intelligent items. Gems, art and jewelry are never cursed.

## How often

Set in [Generation Settings](Generation-Settings#cursed-items). The SRD gives no frequency, so you choose:

- **Flat rate**: one chance for every magic item (default **1%**).
- **Rate by grade**: **minor 3%**, **medium 2%**, **major and epic 1%** by default.

Merchant stock is never cursed unless you tick **Merchant stock can be cursed**.

## What curse

The curse is rolled on the SRD tables:

| d% | Curse | What the tools do |
|---|---|---|
| 01–15 | **Delusion** | The user believes the item works, but it has no magic. *Simple effects:* the item loses its enhancement bonus, special abilities and item changes. |
| 16–35 | **Opposite effect or target** | The item does the reverse, or targets its user. *Simple effects:* a weapon or armor bonus becomes a penalty (+2 becomes –2), and the item's own changes are reversed. |
| 36–45 | **Intermittent functioning** | **Unreliable** (5% chance to fail each use), **dependent** (works only in a rolled situation, such as underwater or at night), or **uncontrolled** (activates on its own on 01–05 each day). |
| 46–60 | **Requirement** | The item works only while the user meets a condition. The SRD says the GM chooses it, so the item lists the SRD's examples (eat twice as much, swear fealty, take a new name…). |
| 61–75 | **Drawback** | Rolled on the SRD's 31-row drawback table: hair or skin color changes, paranoia, blurred vision, negative levels, daily ability damage, no spellcasting… |
| 76–90 | **Completely different effect** | The item works as something else. The tools roll another item of the same kind and name what it really does. |
| 91–100 | **Specific cursed item** | The item is replaced by one of the SRD's specific cursed items (incense of obsession, gauntlets of fumbling, the –2 cursed sword, scarab of death…). They come from D35E's magic item compendium, and the Armory makes the –2 sword. |

**Psionic items** roll either on the common table or on the SRD's **cursed psionic items** table (even odds):
- **backfire**: the power targets the user;
- **exhausting**: each use drains the user's power points;
- **subversive**: a hidden –2 on saves.

You can add your own curses and switch SRD ones off: see [Custom curses](#custom-curses).

## What the GM sees

- The item gets D35E's own **Cursed** mark. Players don't see it.
- The item sheet shows the curse in a red **GM only** box at the top, with a link to its buff.
- The chat card summary says **CURSED: …**. Treasure chat cards are whispered to the GM.
- The identified description includes a **Curse:** link to the curse's buff, so you can drag it onto a character. Players who identify the item will see that link too.
- A cursed item that sheds light glows with an **eerie light**: sickly green, bruised violet, blood red, murky smoke, witch-light or corpse-light fog.

> **[Screenshot: a cursed item sheet with the GM only box]**

## D35E's curse tick boxes

On the item sheet (GM only) D35E has three tick boxes:

| Tick box | D35E's effect | What the tools add |
|---|---|---|
| **Cursed** | Marks the item as cursed. | Ticked for you on cursed items. |
| **Curse Identified** | Shows players the curse icon. | Adds the full curse text to the item's description. |
| **Curse Active** | The holder can't unequip or drop the item. | Gives the holder the curse as a **buff** with its penalties. Unticking it, or losing the item, removes the buff. |

Curses with numbers become real penalties on the buff:

| Curse | Penalties on the buff |
|---|---|
| Blurred vision | –2 on attacks, saves, Spot and Search |
| One negative level | –1 on attacks, saves, skills and ability checks, –5 hit points |
| Two negative levels | –2 on attacks, saves, skills and ability checks, –10 hit points |
| Subversive | –2 on saves |

<a id="the-curse-buffs-compendiums"></a>
## The curse buffs compendiums

- **Common Buffs** (Curios, GM only) holds every curse in the SRD tables as a buff, in folders: Item curses, Intermittent functioning, Drawbacks, Psionic item curses. Cursed items link to these buffs.
- **Axecleft's Curses** is a world compendium made by the **Create the curse buffs compendium** button in Generation Settings. It holds the same buffs, written in your world's language, plus your [custom curses](#custom-curses). Worlds without Curios use it for the links. Press the button again after changing your custom curses.

## Making a cursed item on purpose

The [Forge](Forge) and the [Curios Workshop](Curios-Workshop) have a **Cursed** choice:
- **No**;
- **Random curse (SRD tables)**;
- one of the curse types (delusion, opposite effect…);
- one of your own custom curses, by name.

<a id="custom-curses"></a>
## Custom curses

Add your own curses on the **Custom Curses** page of the Treasure Lists journal (or the Treasure Generator's **Lists** tab). Each row has:

| Column | What to enter |
|---|---|
| **Curse** | Its name. |
| **Table** | **Curse** (a curse of its own, rolled alongside delusion, opposite effect and the others), **Drawback**, **Dependent situation** (for intermittent functioning, for example "under a full moon"), **Cursed psionic item**, or **Specific cursed item** (an item's name from your item compendiums or Items sidebar). |
| **Weight** | Its share of the d% table, on the same scale as the SRD's rows. A row rolled on 01–05 has weight 5, and "opposite effect" has 20. |
| **Items** | Which magic items can get it: arms and armor, rings, rods, staffs, wondrous items, potions, scrolls, wands. None ticked: any. |
| **What it does** | The text the GM sees, and the buff's description. |
| **Penalties (buff)** | Penalties for the curse buff while the curse is active, for example `-2 attack; -2 saves; -1 str; -4 spot; -5 hp`. |

Penalty keywords (in English, in every language): `attack`, `melee`, `ranged`, `damage`, `ac`, `saves`, `fort`, `ref`, `will`, `checks`, `skills`, `hp`, `init`, `speed`, `str`, `dex`, `con`, `int`, `wis`, `cha`, and any skill name (`spot`, `move silently`, `use magic device`…). A positive number is a bonus.

**Example:**

| Curse | Table | Weight | Items | What it does | Penalties (buff) |
|---|---|---|---|---|---|
| Rusting Hunger | Curse | 10 | Arms and armor | The item slowly rusts the wielder's other metal gear. | -1 ac; -2 spot |

**Switching off SRD curses:** every SRD curse is listed on the page as a built-in row. To stop one being rolled, add a row to the **Disabled Entries (Treasure Generator)** page with its name and **List** set to `curses`, for example *Delusion* or *Gender change* (see [Treasure Lists](Treasure-Lists)).
