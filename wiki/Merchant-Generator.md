# Merchant Generator

**Where:** **Axecleft's Tools → Merchant Generator**.

Create, stock and restock D35E merchants. A merchant is an NPC actor on the [Axecleft's Shop](Axecleft's-Shop) sheet, with a stock of items and a purse. Players buy and sell from its token. A GM must be connected for any trade, and players need **Limited** or **Observer** on the merchant, never Owner.

The window has five tabs: **Merchant**, **Shop Types**, **People**, **Item Sources** and **Shop Tags**.

**Tours:** each tab has a tour. Start it from the window's ⋮ menu (**Tour of this tab**), or from Configure Settings → **Tour Management**. On Foundry 11, use the **Tour** button in the title bar.

> **<img width="1004" height="982" alt="image" src="https://github.com/user-attachments/assets/2ce6e875-666f-41b8-83cd-452722d8bc28" />**

## Merchant tab

### The shop

| Control | What it does |
|---|---|
| **Shop** | The kind of shop: the built-in shop types, **Your shop types** (see [Shop Types](#shop-types-tab)), and types added by other modules. A line below shows which modules and compendiums supply its stock. |
| **Settlement** | The settlement's size, which sets its gp limit, how many different items, the merchant's purse and the magic grades on offer. See the table below. |
| **GP limit** | **Nothing priced above the settlement's gp limit** (SRD). Untick to allow anything. |
| **Settlement character** | Click to expand. Tick the traits that fit the place (see below). |
| **Security** | How well the shop is protected against pickpocketing and shoplifting. Tick any that fit (see [Security](#security)). |
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

<a id="security"></a>
### Security

How well the shop is protected against pickpocketing and shoplifting on the [Axecleft's Shop](Axecleft's-Shop#pickpocketing-and-shoplifting) sheet. Tick any that fit; their changes add up:

| Security | Effect |
|---|---|
| Careless / distracted | The merchant's Spot −4, DCs −2 |
| Crowded / busy | Spot −2 |
| Watchful owner | Spot +4 |
| Guards on duty | Spot +5 |
| Guard animal | Spot +3 |
| Goods locked away | Shoplifting DC +10 |
| Coin kept secure | Pickpocketing DC +5 |
| Magically warded | Spot +10 against shoplifting |

The security is saved with the merchant (a restock with its saved settings keeps it), shown in the chat summary, and can be changed later in the shop sheet's GM settings. The GM's pickpocketing card shows the DC and Spot with the security's share, and lists what applied.

### Prices and purse

Click to expand.
- **Sells at**: % of value the merchant charges (default 100). The settlement character may adjust it.
- **Buys at**: % of value the merchant pays (SRD: half, so 50).
- **Purse (gp)**: a dice formula. Blank uses the settlement's. It's paid in this world's coins (see [Coins](Treasure-by-Level#coins)).

Both percentages can be changed later on the merchant's sheet. Gems, art and jewelry with D35E's Full Resale Price are trade goods, bought and sold at their own % (see [Axecleft's Shop](Axecleft's-Shop#world-settings)).

### Merchant

**Make**:
- **A new merchant**: creates an actor in the **Merchants** Actors folder, on the [Axecleft's Shop](Axecleft's-Shop) sheet, with permissions set to None. To let players trade, give them **Limited** or **Observer** (never Owner): use **Open to** in the sheet's GM settings, or the actor's Ownership.
- **Selected tokens**: stocks the merchant tokens you've selected on the scene.
- **A chosen actor or token**: pick one, or drag an actor from the Actors sidebar onto the box.

Actors stocked by selected tokens or a chosen actor are put on the Axecleft's Shop sheet too. Merchants made before keep their saved sell and buy %. To switch one by hand, pick **Axecleft's Shop** in the actor's sheet settings.

For a new merchant:

| Control | What it does |
|---|---|
| **Race** / **Sex** | Or **Random**. |
| **Name** | Type one, or press the dice to **Roll a name**. Blank: a random name and shop name. |
| **Actor name** | **Merchant (Shop)**, **Merchant**, or **Shop**, for example "Garrick (The Silver Anvil)". |
| **Image** | A portrait or token image (**Browse**). Blank: a random portrait from your portrait folder that fits the race and sex (see [People](#people-tab)). |

For existing merchants:
- **Stock**: **Replace the old stock and purse**, or **Restock: keep the stock, add more**. Replacing removes weapons, equipment, consumables and loot only; feats, classes and other items are kept. A restock adds about half a new stock, stacked onto matching pieces, and half a purse.
- **Shop settings**: **Use each merchant's own saved shop, settlement and traits**. Each merchant remembers how it was made (shop type, settlement, traits, prices and security), so restocking several at once keeps each one's own shop.
- Converted or restocked actors keep their images.

Press **Generate Merchant**. A GM chat card lists the stock with prices (and the true value of unappraised pieces), the settlement character and security, and any categories not stocked.

Identical pieces are stacked. Ammunition is stocked as 2d4 × 10 pieces (bundles 1d4).

The merchant's sheet also has a **Restock** button (with its saved settings) and a **Merchant Generator** button in its GM settings.

<a id="shop-types-tab"></a>
## Shop Types tab

> **<img width="603" height="860" alt="image" src="https://github.com/user-attachments/assets/e65118e3-ecfb-4ad6-8d88-45d99c4697d9" />**

Make your own shop types.
- **New shop type** or **Edit**: name it, for example *Dragon-bone carver*, and pick a type to **Start from**.
- **What it sells**: each category's number is its share of the stock (0 or blank: never sold).
- For gem and art shops: **Any**, **Gems and art**, **Art objects only**, **Jewelry only**, and **Art made by**: Molded / cast (metal, glass), Carved (wood, bone, stone), Cloth, fur and hide, or Books and documents.
- For wondrous items: optionally **Only those tagged "Shop: …"** (see [Shop Tags](Shop-Tags)).
- **Only gems named** / **Only art objects named**: keep the shop's gems or art objects to those whose names contain one of your words (in English or the world's language). For example *diamond* for a diamond merchant (every diamond, in every size and quality), or *statue, idol* for a sculptor. Gems and art come from Axecleft's Gemstones.
- **Items by Shop tag**: sell the items in your item sources that carry a Shop tag, whatever kind of item they are. Each tag has its own share of the stock, like a category. The tags found in your item sources are listed. Tags of your own work too: tag your statues `Shop: Statue` on the [Shop Tags](Shop-Tags) tab and make a statue carver that sells them. A shop type can sell by tag only.

Press **Save Shop Type**, or **Delete**. Shop types are saved in the world.

Built-in shop types: General store, Adventurer's outfitter, Trading post, Blacksmith, Weaponsmith, Armorer, Bowyer / fletcher, Alchemist, Herbalist / apothecary, Jeweler, Gem cutter, Gold- and silversmith, Carver / sculptor, Clothier / furrier, Art dealer / curio shop, Bookseller, Scribe, Temple, Wandwright / staff maker, Magic shop, Exotic goods, Fence / pawnbroker, Black market.

- The Fence / pawnbroker and the Black market sell poisons (the Black market first of all). Alchemists don't.
- The Bowyer / fletcher sells only ranged weapons and ammunition.
- Booksellers, clothiers and jewelers also sell magic wondrous items tagged Book, Clothing or Jewelry, and jewelers sell magic rings. Until items are tagged, the shop line says "none in your item sources yet (see Shop Tags)".
- Other modules add their own shop types. Some show only while **Psionics** or **Epic items** is on, such as Curios' Psionic emporium.

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
- Words must be separate: "elf_female", not "femaleelf".
- Best fit first: race and sex; then that race with no sex given; then that sex with no race given; then images with neither. Images with no race or sex in their path fit anyone. An image named for another race or sex is never used. With no fitting image, the merchant keeps the default image.
- An image picked in the Merchant tab's **Image** field always wins.
- Press **Save and Scan Folder**. A table then shows how many images there are for each race and sex.

## Item Sources tab

> **<img width="600" height="657" alt="image" src="https://github.com/user-attachments/assets/516ecd08-837b-4c62-9057-3e22afff5ac5" />**

Besides the SRD lists and Axecleft's modules, merchants and treasure draw items from your **Item compendiums**: where no module covers a kind of item, and otherwise by the share set in [Generation Settings](Generation-Settings) (**Your item compendiums**). Each item is sorted by its own data:
- standard, masterwork or magic weapons, armor and shields;
- ammunition, gear and alchemical items;
- potions, scrolls, wands, rings, rods, staffs and wondrous items.

Magic items are graded by price: minor up to 4,000 gp, medium up to 25,000 gp, major above.

**Compendiums**:
- **Automatic (matching names)**: D35E's item compendiums, and any compendium with Gear, Equipment, Weapons, Ammo, Armor, Shields or Magic Items in its name. Also Poison Consumables from Traps, Poisons, and Diseases. Translated compendiums are matched by their English names.
- **My choice (tick below)**: tick exactly the compendiums to use. Each shows its type (System, Module or World), how many items it has, and how many prices were corrected.

**Other sources**: modules add lists of their own, such as Enhancements and Special materials (Axecleft's Armory), Spells and Psionic powers. Each has the same choice of automatic matching or your own, and shows how many items each compendium supplies.

The compendium list, each other source and the Price Check results are sections you can open and close. Closed, each heading shows what's set, for example "6 of 40 used, automatic".

Press **Save and Rescan** after changing them (it saves every list), or **Rescan** after adding items.

**Price corrections**: some compendium items have wrong prices, several of D35E's specific magic arms for example. Corrections from Axecleft's modules, and your own on the **Price Corrections** page of the [Treasure Lists](Treasure-Lists), fix them for treasure and merchant stock without changing the compendium.
- **Price Check**: lists every correction, with the compendium's current price, the corrected price, and whether the compendium still needs fixing.
- **Export CSV**: downloads that list as a spreadsheet file, for example to send to a compendium's maintainer.

## Shop Tags tab

See [Shop Tags](Shop-Tags).
