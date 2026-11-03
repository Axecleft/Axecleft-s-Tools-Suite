# Generation Settings

**Where:** Treasure Generator → **Treasure by Level** tab → **Generation settings** (click to expand).

These settings control the extras that Axecleft's modules add to **randomly generated** items, and some campaign-wide switches. They are saved for the world as soon as you change them. The heading shows "(SRD and Axecleft defaults)" or "(changed for this world)". **Reset to Defaults** at the bottom puts everything back.

Crafting tools (the [Forge](Forge) and the [Curios Workshop](Curios-Workshop)) can always add these extras by hand, whatever is set here.

> **<img width="609" height="659" alt="image" src="https://github.com/user-attachments/assets/ae8184e0-8f90-43c1-a868-cc2f9ebb6270" />**

## Campaign

Switches for **every** Axecleft module:

- **Psionics**: when off, psionic items, powers, power stones, psionic tattoos, dorjes and psicrowns are left out of treasure, merchants, crafting and the Forge.
- **Epic items**: when on, the Forge and Crafting can make epic items (past the SRD's +5 and +10 limits), and merchants with the *Epic campaign* settlement character can stock them. Random treasure follows the SRD up to EL 20.
- **Epic share of the extra items at EL 21+**: the percentage of the [extra major items at EL 21–30](Treasure-by-Level#encounter-level) that are epic items from the SRD epic tables (house rule; default 25%).

## Light, intelligence and inscriptions

Turn each one on or off with **Random light**, **Random intelligence** and **Inscription hints**, then set the chances per row of the table:

| Row | Sheds light | Bright / dim | Intelligent | Hint |
|---|---|---|---|---|
| Magic melee weapons | 30% | 20 / 40 ft | 1% | 15% |
| Magic ranged weapons | off | 20 / 40 ft | 1% | 15% |
| Magic armor and shields | 5% | 10 / 20 ft | 1% | — |
| Other permanent magic items | 1% | 5 / 10 ft | 1% | — |

Each cell has a tick box (on or off) and a percentage. These are the defaults:
- **SRD:** 30% of magic melee weapons shed light (like a *light* spell: 20 ft bright, 40 ft dim), and ranged weapons don't. 15% of weapons carry an inscription that hints at their power. Fewer than 1% of permanent items are intelligent (never potions, scrolls, wands or ammunition).
- **House rules:** light on armor, shields and other items.

> **Foundry 11:** the Intelligent column and options are hidden, because D35E 2.4.3 doesn't support intelligent items.

> **<img width="606" height="713" alt="image" src="https://github.com/user-attachments/assets/44fef60c-45f1-4b7e-a80d-72755fc99c0c" />**

**Special purposes (intelligent items):** the SRD gives an intelligent item a special purpose and a dedicated power *instead of* one of its powers.
- **Intelligent items can have a special purpose**: turns special purposes on.
- **% of intelligent items with greater powers** (SRD, default 100%): these trade one greater power for the purpose and its dedicated power.
- **% of those with only lesser powers** (house rule, default 0%): these trade one lesser power for it.

A purpose chosen by hand in the [Forge](Forge#choosing-an-intelligent-items-features) or the [Curios Workshop](Curios-Workshop#specific-and-random-items) is an extra, on top of the item's powers.

**Light options:**
- **Light color and animation follow the item's abilities**: a flaming sword flickers orange, a holy one glows gold, a necromantic item drifts in sickly green. Off: neutral white light.
- **Stronger items glow brighter**: brightness grows with the item's aura strength.
- **Stronger items shine farther: … ft per +1 above +2**: the radius grows with the enhancement bonus.

## Sizes of arms

**SRD:** random armor and weapons are Small 30%, Medium 60% and another size 10% (Large here).
- Small arms cost the same and weigh half.
- Large arms cost twice as much and weigh twice as much.

Untick for all Medium.

<a id="your-item-compendiums"></a>
## Your item compendiums

How much treasure and merchant stock comes from your own Item compendiums (see [Item Sources](Merchant-Generator#item-sources-tab)) where an Axecleft module also supplies that kind of item:

- **% of treasure** (default 0, the SRD tables only): [Treasure by Level](Treasure-by-Level) and [Token Loot](Token-Loot) take this share of their magic arms, potions, scrolls and other items from your Item compendiums instead of the modules' SRD tables. The item is one of the same kind and grade; when there is none, the SRD tables are used.
- **% of merchant stock** (default 50): merchants draw this share of their stock from your Item compendiums.
- Unticked: nothing comes from your compendiums where a module supplies the kind.

Kinds no module covers still come from your compendiums.

**Treasure weight tags:** give an item in your compendiums the D35E item tag `Treasure weight: 3` and it comes up three times as often as the other items it is rolled with. `Treasure weight: 0` keeps it out of random treasure and merchant stock; it can still be chosen by hand in the Forge and Crafting. Items without the tag weigh 1. It isn't a [Shop tag](Shop-Tags), so the Shop Tags tool leaves it alone.

<a id="poisons"></a>
## Poisons

**… % of mundane item rolls become a poison** from your item sources (house rule; default 1%). Raise it in campaigns where poison is common. It needs poisons in your item sources, for example the Traps, Poisons, and Diseases compendiums.

## Cursed items

Turns random curses on and sets how often they happen. See [Cursed Items](Cursed-Items) for everything about curses.

- **Cursed items** (tick box): on or off.
- **Flat rate**: one chance for every magic item (default **1%**).
- **Rate by grade**: a chance per grade: **minor 3%**, **medium 2%**, **major and epic 1%** by default.
- **Specific cursed items (SRD table)**: allow the SRD's specific cursed items (bracers of defenselessness, the –2 cursed sword…) to replace a rolled item.
- **Apply simple effects (penalties, reversed bonuses)**: turn a reversed +2 into a –2, strip a delusion item's magic, and so on.
- **Merchant stock can be cursed**: off by default, so shops sell clean items.
- **Create the curse buffs compendium**: builds the world compendium "Axecleft's Curses" (see [Cursed Items](Cursed-Items#the-curse-buffs-compendiums)).

## Tour

The Generation settings have a guided tour of their own, in **Configure Settings → Tour Management**. See [Tours](Treasure-Generator#tours).
