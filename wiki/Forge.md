# The Forge (Axecleft's Armory)

**Where:** Treasure Generator → **Forge** tab.

Make weapons, armor, shields and ammunition by hand. Any choice can be **Random**: random parts are rolled on the SRD tables for the grade you pick. Prices follow the SRD. Magic items start unidentified unless you tick **Identified**.

> **<img width="603" height="1004" alt="image" src="https://github.com/user-attachments/assets/49cb92a4-a53f-4833-8ab6-a2813ea42136" />**

## The item

| Control | What it does |
|---|---|
| **Kind** | **Weapon**, **Armor**, **Shield**, **Ammunition**, or **Random**. |
| **Base item** | The weapon or armor to start from (longsword, chain shirt, arrows…), or **Random (SRD tables)**. Your own items from your item sources are listed too. |
| **Grade** | **Minor**, **Medium**, **Major**, or **Epic (SRD epic tables)** (only while Epic items is on). Used for any **Random** enhancement or ability. |
| **Enhancement** | **None**, **Random (by grade)**, **+1** to **+5**, and **+6** to **+20 (epic)** when epic items are allowed. |
| **Epic** | **Allow epic items**: enhancement past +5 and a total past +10, at SRD epic prices (×10). Only shown while **Epic items** is on in [Generation Settings](Generation-Settings#campaign). |
| **Masterwork** | Make it masterwork. Magic items, and items of adamantine, mithral, darkwood or dragonhide, are always masterwork. |
| **Material** | **None (ordinary)**, **Random (one that fits)**, or a special material (adamantine, cold iron, alchemical silver, mithral, darkwood, dragonhide…). Only materials that suit the base item are allowed. |
| **Size** | **Medium**, **Small** (same price, half the weight), **Large** (twice the base price and weight), or **Random (Generation settings)**. |

## Special abilities

Four ability slots, and another appears whenever every slot is filled. Each slot can be:
- **None**;
- **Random (by grade)**;
- **Random psionic (by grade)** (only while Psionics is on);
- a chosen ability.

The ability lists are grouped: SRD weapon abilities, SRD armor and shield abilities, their epic and psionic versions, and **Your enhancements** from your own compendiums.

- **Bane foe**: for *bane*, the creature type it hates, or **Random (SRD table)**.
- Each ability needs at least a +1 enhancement. If the bonus plus the abilities pass +10 without epic items allowed, the preview warns you, but the item can still be made, priced by the normal formula (the SRD's limit is the GM's to bend). Random treasure keeps to +10.
- Abilities that don't fit the base item are refused, such as *keen* on a mace or *returning* on a longsword.

## Double weapons

Each end of a double weapon (two-bladed sword, dire flail, quarterstaff…) has its own enhancement bonus and abilities (SRD). With a double weapon chosen, an **Other end (double weapons)** section appears with its own enhancement and ability slots.

- The other end is priced like a weapon of its own: its price is added to the item's, and its abilities count for prerequisites and caster level.
- Its abilities need at least a +1 bonus on that end.
- D35E gives an item one set of enhancements, so the other end's bonus and abilities go in the item's name (*+1 Flaming Two-Bladed Sword (other end +1 frost)*), its description and an attack note.
- Random magic double weapons follow the SRD: half the time the other end has the same bonus, else one less with no abilities.

## Light, inscription and more

Click the heading to open this section.

| Control | What it does |
|---|---|
| **Light** | **By Generation settings (random)**, **None**, or **Sheds light**. |
| **Look** | **From its abilities (or neutral)**: a flaming weapon flickers orange, a holy one glows gold. You can also pick a theme by name, or **Custom**. |
| **Color**, **Animation**, **Speed / intensity** | With a **Custom** look: the light's color, Foundry light animation, and its speed and intensity (1–10). |
| **Bright / dim (ft)** | The light's radii. Blank: from [Generation Settings](Generation-Settings). |
| **Intelligent** | **By Generation settings (random)**, **No**, **Yes, all features random**, or **Yes, choose the features**. Needs D35E 3.1 or later and its Intelligent Item Tables compendium, so it's hidden on Foundry 11. |
| **Cursed** | **No**, **Random curse (SRD tables)**, a curse type, or one of your custom curses. See [Cursed Items](Cursed-Items). |
| **Inscription hint** | **By Generation settings (random)**, **Yes** or **No**: a design or inscription that hints at its power. |
| **Identified** | **Start identified**. Otherwise magic items start unidentified. |
| **Ammunition** | With ammunition: how many pieces. Magic ammunition is priced per 50. |
| **Items to make** | How many, **for each target**. Random parts are rolled for each one. |

### Choosing an intelligent item's features

With **Yes, choose the features**, more choices appear:

| Control | What it does |
|---|---|
| **Alignment** | Any alignment, or **Random (suits holy, unholy, axiomatic, anarchic)**. |
| **Mind** | Its Intelligence, Wisdom and Charisma. The mind sets how many lesser and greater powers it has. |
| **Lesser power 1, 2…** / **Greater power 1, 2…** | Each power, or Random. |
| **Special purpose** | **By Generation settings**, **None**, **Random**, a chosen purpose, or **Your own…**. |
| **Your purpose** | With **Your own…**: the purpose in your own words. They also replace *A purpose of the GM's choice* when a roll lands on that result. |
| **Dedicated power** | With a special purpose, its dedicated power. |

Prices follow the SRD and are added to the item's price. A random purpose by Generation settings takes the place of a power (see [Generation Settings](Generation-Settings#light-intelligence-and-inscriptions)); a purpose you choose here comes on top of the item's powers.

## Making it

Set [Put items in](Treasure-Generator#put-items-in) and press **Generate**. The chat card lists each item with its price and, for the GM, anything special: light, intelligence, curse.

A guided tour of the Forge tab is in the window's **⋮** menu (**Tour of this tab**). See [Tours](Treasure-Generator#tours).

<a id="crystals-tab"></a>
## Crystals tab (socket crystals)

**Where:** Treasure Generator → **Crystals** tab. Only while **Configure Settings → Axecleft's Armory → Socket crystals** is on (off by default; Foundry reloads when you change it).

Make socket crystals, random or chosen. The list holds the Armory's nine example crystals (three each for weapons, armor and shields, one of each rank: Cinder Shard, Stormglass Prism, Huntsman's Eye; Hushstone, Hearthfire Garnet, Ironheart Opal; Warden's Pebble, Mirror Mica, Aegis Beryl), and the crystals in your item compendiums, such as augment crystals in Axecleft's Shared Data. Your compendiums are read each time the window opens. A crystal from a compendium is a copy of the compendium item.

Set [Put items in](Treasure-Generator#put-items-in) and press **Generate**. The tab has its own tour.

### Using a crystal

While the setting is on, a weapon, armor or shield a character carries has a **Socket crystal** button on its sheet. Pick a crystal from the character's inventory and it's set into the item (one crystal per item). A **Crystal** button on the item then takes it out and puts it back in the inventory. A crystal's own sheet has a **Set into…** button.

- The crystal adds its bonuses, energy resistance, damage reduction and extra weapon damage to the item the way D35E applies the item's other enhancements, and its notes to the item's notes. Taking it out removes exactly those. The item's price and name don't change.
- It must fit: the right kind of item; masterwork or magic for a least crystal, an enhancement bonus of +1 for a lesser one and +3 for a greater one (special abilities don't count); and any melee-only or armor-category limit the crystal has.
- Only items on a character are changed; compendium and sidebar items never are.
- Switching the setting off hides the buttons and the Crystals tab. Items that already hold a crystal keep it, and still show the button to take it out.

Characters can craft socket crystals too: see [Crafting Tabs](Crafting-Tabs#socket-crystals).
