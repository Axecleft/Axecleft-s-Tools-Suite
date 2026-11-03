# Hoard Editor (Axecleft's Hoard Editor)

**Where:** Treasure Generator → **Hoards** tab. On a hoard's sheet, the GM also has a **Hoard Editor** button in the title bar, which opens this tab on that hoard. GM only.

Build, fill, save and share out treasure hoards. A hoard is a chest your players can loot: an NPC actor in the **Hoards** Actors folder, opened on D35E's loot sheet, with a random chest picture (from Foundry's own icons) as its portrait and token. Place it on a scene like any actor.

The Hoards tab lives in the [Treasure Generator](Treasure-Generator), so the Hoard Editor needs **Axecleft's Gemstones, Armory or Curios** (any one of them) active. Without one, the GM gets a warning when the world loads. On Foundry 13–14 use version 1.14.x; on Foundry 11 (D35E 2.4.3), 1.11.x.

Recommended with it: Armory and Curios (magic arms and other magic items for hoards) and Axecleft's Traps, Poisons, and Diseases (trap actors for every SRD trap, to trap a chest).

> 📷 **Screenshot:** the Treasure Generator's Hoards tab with a hoard chosen, showing the hoard list, the chest picture and Contents

The tab has these parts, from top to bottom: [Hoard](#hoard), [the hoard's name and Players can loot it](#players-can-loot-it), [Contents](#contents), [Target value](#target-value), [Gather loot](#gather-loot), [On the scene](#on-the-scene), [Give to one](#give-to-one) and [Share among the party](#share-among-the-party).

The tab keeps up when a hoard changes elsewhere: on its sheet, in the Actors sidebar, or when hoards or trap actors are made or deleted.

<a id="hoard"></a>
## Hoard

Pick, make and manage hoards. With no hoard yet, the tab only shows this part: press **New Hoard** first.

| Control | What it does |
|---|---|
| **Find** | With more than six hoards: type part of a name to narrow the list. |
| Sort | With more than six hoards: **By name**, **By value** or **By encounter level**. |
| **Hoard** | The hoard shown on the tab. Every hoard in the world is listed, with its value and encounter level, for example "Dragon's Lair — 12,400 gp · EL 9". |
| **New Hoard** | Asks for a name (default "Hoard 1", "Hoard 2"…) and makes an empty hoard with a random chest. It takes the encounter level of the hoard shown. |
| **Load from File** | Makes a hoard from a file saved with **Save to File**, in this world or another. |
| **Open Sheet** | Opens the hoard's loot sheet. |
| **Rename** | Renames the hoard and its token. |
| **New Chest** | Another random chest picture for the actor and its token. |
| **Duplicate** | Makes a copy, named "… (copy)", with everything in it. |
| **Save to File** | Downloads the hoard as a file, to keep it or move it to another world. |
| **Delete** | Deletes the hoard and everything in it, after asking. This can't be undone. |

A new hoard's token is linked to its actor. Players have no permission on it until you tick **Players can loot it**.

<a id="players-can-loot-it"></a>
## Players can loot it

Under the list, the hoard's chest picture and name, and the **Players can loot it** tick box. Ticked, every player gets Observer permission on the hoard, so they can open its loot sheet from its token and take things. Leave it unticked while you prepare it.

<a id="contents"></a>
## Contents

> 📷 **Screenshot:** the Contents section with coins, a few items and the totals

### Coins

The coins in the hoard. Type a new amount to change it.

- The first row is the carried coins (pp, gp, sp, cp, by the names in D35E's Currency names).
- Weightless coins get a row of their own, marked *, when the hoard has any.
- D35E's custom currencies (Currency Configuration) get a row when the world has some.

### Items

Everything in the hoard, most valuable first:

| Column | What it does |
|---|---|
| Tick box | Picks the item for [Give to one](#give-to-one). A stack also has a box beside it: how many of it to give. Changing that number ticks the item. |
| **Item** | Its name: click it to open the item's sheet. Below it, **goods** or **item**, and its weight. |
| **Qty** | The quantity. Change it here. |
| **Value each (gp)** | The value of one. Change it here. |
| **Total** | Quantity × value. |
| **Id.** | Identified. Tick or untick it here. |
| Bin | Removes the item from the hoard. |

To add items by hand, drag them onto the box **Drag items here from the Items sidebar, a compendium or a sheet**. A copy goes in the hoard, with its value rolled.

### Totals

| Row | What it shows |
|---|---|
| **Coins** | The coins' value in gp: carried, weightless and custom currencies (by their gp value). |
| **Goods (gems, art, jewelry)** | Gems, art objects, jewelry and books: Gemstones' pieces, and items that are gems, trade goods or tagged as gems, art, jewelry or books. |
| **Items** | Everything else. |
| **Total** | The hoard's value. |
| **Sells for** | What the hoard fetches from a merchant (SRD): coins as they are, gems, art and trade goods at full value, other items at half. Change the **items at …%** box (0 to 200) for this hoard; it's saved with the hoard. |
| **Weight** | Coins and items, in D35E's units (lb or kg). Carried coins weigh 50 to the pound, custom currencies their own weight, weightless coins nothing. |

Values are the true values, whatever the players have appraised.

<a id="target-value"></a>
## Target value

Compare the hoard with the SRD's treasure per encounter, and fill it.

| Control | What it does |
|---|---|
| **Encounter level** | The encounter level the hoard is for, with the SRD treasure per encounter at that level (**EL 1: 300 gp** to **EL 20: 80,000 gp**). Saved with the hoard. |
| Bar | How close the hoard is to that value. The line below gives both, for example "SRD treasure per encounter at EL 5: 1,600 gp. This hoard: 1,200 gp (75%)." |
| **Roll EL Treasure into Hoard** | Rolls the SRD Treasure table once for the encounter level and puts the coins, goods and items in the hoard. |
| **Fill to Target** | Keeps rolling the table until the hoard reaches the SRD value for its encounter level (at most 25 rolls). A message gives the total and the number of rolls. |
| **Send Other Tabs Here** | Sets [Put items in](Treasure-Generator#put-items-in) to this hoard, so the Gems, Art Objects, Jewelry, Forge, Curios and other tabs make their treasure straight into it. Handy for a hoard with a theme: a dragon's gems, a wizard's scrolls. |

Rolls follow the [Treasure by Level](Treasure-by-Level) tab's settings: how coins are paid ([Coins](Treasure-by-Level#coins)), your item sources and the [Generation Settings](Generation-Settings). A chat card, whispered to the GM, lists what went in and the hoard's new total. Items that need a module that isn't active are skipped, and the card says how many.

<a id="gather-loot"></a>
## Gather loot

After a fight, sweep the fallen into the hoard, then share it out from here.

| Control | What it does |
|---|---|
| **Everything they carry** | Unticked: only the [token loot](Token-Loot) the Treasure Generator gave them, and the coins it rolled. Ticked: all their gear and coins as well. Natural attacks, feats and spells stay. |
| **Gather Loot into Hoard** | Takes it from the selected tokens or, with none selected, from every creature on the scene that is defeated (in the combat tracker), dead or at 0 hp or less. |

- Hoards, player characters and tokens a player owns are never gathered from.
- A window shows each creature's coins and items before anything moves. Press **Yes** to gather.
- Once gathered, the token loot is no longer marked as the generator's, so **Clear Loot** on the Token Loot tab won't look for it.

<a id="on-the-scene"></a>
## On the scene

Trap the chest and put it on a scene.

| Control | What it does |
|---|---|
| **Trap** | **No trap**, or any trap actor in the world. A trap dropped from a compendium is shown with "(compendium)". The icon beside it opens the trap's sheet. Saved with the hoard. |
| Trap drop box | **Or drag a trap actor here from the Actors sidebar or a compendium.** [Axecleft's Traps, Poisons, and Diseases](Random-Trap-Generator) has one for every SRD trap. |
| **Hidden until revealed** | Ticked, the chest's token is hidden: only the GM sees it until you reveal it (the token's right-click menu). |
| **Place on Scene** | The window shrinks. Click the scene where the chest goes (right-click or Esc cancels). |

- The chest goes on the current scene, snapped to the grid. Open the scene first.
- Its trap goes on the same square, always hidden.
- A trap from a compendium is copied into the world when the chest is placed, and that copy becomes the hoard's trap.

<a id="give-to-one"></a>
## Give to one

For the rogue who opens the chest first, or an item only one character can use. This part only shows when there are party members (see below).

| Control | What it does |
|---|---|
| **Character** | Who gets it, from the party. |
| Coin boxes | Coins to give: one box per standard coin (taken from the carried coins first, then the weightless ones), and one per custom currency. |
| **Give Ticked Items and Coins** | Gives the items ticked in the [Contents](#items) list (as many of each stack as you set) and the coins to that character. |

A window shows what goes, and its weight, before anything moves. Share out the rest afterwards.

<a id="share-among-the-party"></a>
## Share among the party

Share the hoard fairly among the party.

The party is:
1. the characters marked **Party Member** (D35E's actor settings) with a token on this scene;
2. if none, every party member in the world;
3. if no one is marked, the characters players own.

A line says which of these you're seeing. With none at all, the tab says to tick **Party Member** in a character's actor settings, or give a player a character. Whether a player owns them or is online doesn't matter.

| Control | What it does |
|---|---|
| Character tick boxes | Who gets a share. Untick anyone who isn't there. |
| **Coins** / **Items** | What to share out: the coins, the items, or both. |
| **Share Out…** | Works out the shares and shows them before anything moves. |

- **Coins** are divided evenly, type by type, custom currencies included. What doesn't divide stays in the hoard.
- **Items** go out most valuable first, each to whoever has the least so far. A stack of up to 50 is shared item by item; a bigger stack goes as one.
- The window lists each character's coins, items, value and weight, and the coins left in the hoard. Press **Yes** to share out.

> 📷 **Screenshot:** the Share Out window with each character's coins, items, value and weight

## Tours

Four guided tours of the Hoards tab (GM only), each leading to the next:
- **Hoard Editor: Hoards**: making, loading, saving and editing a hoard;
- **Hoard Editor: Filling a hoard**: encounter level, rolling and filling to the SRD value, sending other tabs' treasure in, gathering loot;
- **Hoard Editor: On the scene**: trapping the chest and placing it;
- **Hoard Editor: Sharing out**: giving to one character, sharing among the party.

Start them in **Configure Settings → Tour Management**, or from the Treasure Generator's **⋮** menu (**Tour of this tab**) while the Hoards tab is open.

## Printing a hoard

With [Axecleft's Printable Sheets](Printable-Sheets), a hoard prints as a contents list: the GM's copy with values, sale value, weights, its trap and where it's placed; a player's as a "treasure found" list. See [Printable Sheets](Printable-Sheets#hoards).

## Tips

- **A dungeon's treasure in advance**: make a hoard per room, choose each one's encounter level and press **Fill to Target**. Save them to files to use again.
- **A themed hoard**: press **Send Other Tabs Here**, then make gems on the Gems tab or scrolls on the Curios tab.
- **After a fight**: **Gather Loot into Hoard**, give the wand to the wizard with **Give to one**, then **Share Out…** the rest.
