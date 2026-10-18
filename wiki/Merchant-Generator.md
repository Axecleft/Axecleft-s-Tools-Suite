# Merchant Generator

**Where:** **Axecleft's Tools → Merchant Generator**.

Create, stock and restock D35E merchants. A merchant is an actor on D35E's merchant sheet, with a stock of items and a purse. Players buy and sell from its token.

The window has five tabs: **Merchant**, **Shop Types**, **People**, **Item Sources** and **Shop Tags**.

> **<img width="1004" height="982" alt="image" src="https://github.com/user-attachments/assets/2ce6e875-666f-41b8-83cd-452722d8bc28" />**

## Merchant tab

### The shop

| Control | What it does |
|---|---|
| **Shop** | The kind of shop: the built-in shop types, **Your shop types** (see [Shop Types](#shop-types-tab)), and types added by other modules. A line below shows which modules and compendiums supply its stock. |
| **Settlement** | The settlement's size, which sets its gp limit, how many different items, the merchant's purse and the magic grades on offer. See the table below. |
| **GP limit** | **Nothing priced above the settlement's gp limit** (SRD). Untick to allow anything. |
| **Settlement character** | Click to expand. Tick the traits that fit the place (see below). |
| **Different items** | How many different items to stock, as a dice formula. Blank uses the settlement's (half for a restock). |
| **Unappraised goods** | The % of gems, art and jewelry left unidentified, sold at base value (default 10%). |

| Settlement | GP limit | Different items | Purse | Magic grades |
|---|---|---|---|---|
| Thorp | 40 gp | 1d4+1 | 1d4×10 gp | minor |
| Hamlet | 100 gp | 1d6+2 | 2d6×10 gp | minor |
| Village | 200 gp | 2d4+2 | 2d4×25 gp | minor |
| Small town | 800 gp | 2d6+3 | 2d4×100 gp | minor |
| Large town | 3,000 gp | 3d6+4 | 3d6×100 gp | minor, medium |
| Small city | 15,000 gp | 4d6+5 | 2d4×1,000 gp | minor, medium |
| Large city | 40,000 gp | 5d6+6 | 4d6×1,000 gp | minor, medium, major |
| Metropolis | 100,000 gp | 6d6+8 | 6d6×1,000 gp | minor, medium, major |

**Settlement character** traits (tick any that fit):

| Trait | Effect |
|---|---|
| Port / harbor | More exotic goods, gems and art |
| Mining town | Gems, weapons and armor |
| Frontier / outpost | Gear and arms, little magic, prices +10% |
| Trade hub / crossroads | Half again the stock, prices −5% |
| Holy site / temple city | Potions, scrolls, holy water |
| Arcane center | Twice the magic, double gp limit |
| Wealthy | Art and gems, gp limit ×1.5, prices +10% |
| Poor / war-torn | Less stock, half gp limit, prices +20% |
| Remote / isolated | Less stock, prices +25% |
| Lawless / thieves' haven | Twice the unappraised goods and poisons, prices −10% |
| Epic campaign | Epic items in stock in any settlement (about 1 in 10 magic items, past the gp limit), every grade, gp limit ×10. Needs **Epic items** on in [Generation Settings](Generation-Settings#campaign). |

> **<img width="1356" height="978" alt="merchant gen" src="https://github.com/user-attachments/assets/6e7b7f4c-ed9f-4af4-a705-af468be9934c" />**

### Prices and purse

Click to expand.
- **Sells at**: % of value the merchant charges (default 100). The settlement character may adjust it.
- **Buys at**: % of value the merchant pays (SRD: half, so 50).
- **Purse (gp)**: a dice formula. Blank uses the settlement's. It's paid in this world's coins (see [Coins](Treasure-by-Level#coins)).

### Merchant

**Make**:
- **A new merchant**: creates an actor in the **Merchants** Actors folder, on D35E's merchant sheet, with permissions set to None. Set player permissions on the sheet so players can trade.
- **Selected tokens**: stocks the merchant tokens you've selected on the scene.
- **A chosen actor or token**: pick one, or drag an actor from the Actors sidebar onto the box.

For a new merchant:

| Control | What it does |
|---|---|
| **Race** / **Sex** | Or **Random**. |
| **Name** | Type one, or press the dice to **Roll a name**. Blank: a random name and shop name. |
| **Actor name** | **Merchant (Shop)**, **Merchant**, or **Shop**, for example "Garrick (The Silver Anvil)". |
| **Image** | A portrait or token image (**Browse**). Blank: a random portrait from your portrait folder that fits the race and sex (see [People](#people-tab)). |

For existing merchants:
- **Stock**: **Replace the old stock and purse**, or **Restock: keep the stock, add more**. Replacing removes weapons, equipment, consumables and loot only; feats, classes and other items are kept.
- **Shop settings**: **Use each merchant's own saved shop, settlement and traits**. Each merchant remembers how it was made, so restocking several at once keeps each one's own shop.

Press **Generate Merchant**.

<a id="shop-types-tab"></a>
## Shop Types tab

> **<img width="603" height="860" alt="image" src="https://github.com/user-attachments/assets/e65118e3-ecfb-4ad6-8d88-45d99c4697d9" />**

Make your own shop types.
- **New shop type** or **Edit**: name it, for example *Dragon-bone carver*, and pick a type to **Start from**.
- **What it sells**: each category's number is its share of the stock (0 or blank: never sold).
- For gem and art shops: **Any**, **Gems and art**, **Art objects only**, **Jewelry only**, and **Art made by**: Molded / cast (metal, glass), Carved (wood, bone, stone), Cloth, fur and hide, or Books and documents.
- For wondrous items: optionally **Only those tagged "Shop: …"** (see [Shop Tags](Shop-Tags)).

Press **Save Shop Type**, or **Delete**. Shop types are saved in the world.

Built-in shop types: General store, Adventurer's outfitter, Trading post, Blacksmith, Weaponsmith, Armorer, Bowyer / fletcher, Alchemist, Herbalist / apothecary, Jeweler, Gem cutter, Gold- and silversmith, Carver / sculptor, Clothier / furrier, Art dealer / curio shop, Bookseller, Scribe, Temple, Wandwright / staff maker, Magic shop, Exotic goods, Fence / pawnbroker, Black market.

<a id="people-tab"></a>
## People tab

> **<img width="601" height="695" alt="image" src="https://github.com/user-attachments/assets/f984efa5-1acf-46f8-b161-3093a1387ec1" />**

**Names**: add your own names, one per line or separated by commas.
- **Names for**: a race, or **Any race** (names used for every race).
- Lists: **Male first names**, **Female first names**, **First names (either)**, **Surnames**, **Shop names (any shop)**.
- **Random names use**: **Built-in names and mine**, **Only my names**, or **Only built-in names**.
- **Save Names** saves them for the world. **Show Examples** rolls a few.

**Portraits**:
- **Portrait folder**: a folder of portraits. A new merchant with no image gets a random one from this folder and its subfolders that fits its race and sex.
- Put the race and sex in folder or file names, for example `dwarf/female/smith-01.webp` or `elf_male_3.png`. Plurals such as dwarves, elves and women work, and so do m or f.
- Images with no race or sex in their path fit anyone. An image named for another race or sex is never used.
- Press **Save and Scan Folder**.

## Item Sources tab

> **<img width="600" height="657" alt="image" src="https://github.com/user-attachments/assets/516ecd08-837b-4c62-9057-3e22afff5ac5" />**

Besides the SRD lists and Axecleft's modules, merchants (and treasure, where no module covers a category) draw items from your **Item compendiums**. Each item is sorted by its own data:
- standard, masterwork or magic weapons, armor and shields;
- ammunition, gear and alchemical items;
- potions, scrolls, wands, rings, rods, staffs and wondrous items.

Magic items are graded by price: minor up to 4,000 gp, medium up to 25,000 gp, major above.

**Compendiums**:
- **Automatic (matching names)**: D35E's item compendiums, and any compendium with Gear, Equipment, Weapons, Ammo, Armor, Shields or Magic Items in its name. Also Poison Consumables from Traps, Poisons, and Diseases. Translated compendiums are matched by their English names.
- **My choice (tick below)**: tick exactly the compendiums to use. Each shows its type (System, Module or World) and how many items it has.

Press **Save and Rescan** after changing them, or **Rescan** after adding items.

**Price corrections**: some compendium items have wrong prices, several of D35E's specific magic arms for example. Corrections from Axecleft's modules, and your own on the **Price Corrections** page of the [Treasure Lists](Treasure-Lists), fix them for treasure and merchant stock without changing the compendium.
- **Price Check**: lists every correction, with the compendium's current price, the corrected price, and whether the compendium still needs fixing.
- **Export CSV**: downloads that list as a spreadsheet file, for example to send to a compendium's maintainer.

## Shop Tags tab

See [Shop Tags](Shop-Tags).
