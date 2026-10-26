# Treasure Lists and the Lists tab

Your own entries for Axecleft's modules live in a journal named **Axecleft's Treasure Lists**: custom gems, art objects, materials, curses, price corrections, and the built-in entries you've switched off. Each list is a page with a table. Edit the tables in the journal directly, or use the Treasure Generator's **Lists** tab.

> **<img width="964" height="805" alt="image" src="https://github.com/user-attachments/assets/357aa51d-aae2-4ce5-af94-2646a7da8357" />**

## The pages

| Page | From | Columns |
|---|---|---|
| **Custom Gems** | Gemstones | Gem, Appraises As, Base Value (gp), Image, Description |
| **Custom Art & Jewelry** | Gemstones | Object, Construction, Art or Jewelry, Weight (lb.), Image, Description |
| **Custom Materials** | Gemstones | Material, Used For, Min Value Level, Max Value Level, Name As |
| **Custom Embellishment Gems** | Gemstones | Gem, Min Value Level, Max Value Level |
| **Custom Curses** | Treasure Generator | Curse, Table, Weight, Items, What it does, Penalties (buff). See [Cursed Items](Cursed-Items#custom-curses). |
| **Price Corrections** | Treasure Generator | Item, Compendium, Price (gp), Note |
| **Disabled Entries (module)** | each module | Name, List |

### Custom Gems

- **Appraises As** is the name shown before the gem is appraised: a *Dragon's Eye Opal* appraises as *Opal*.
- **Base Value** is one of the SRD gem values: 10, 50, 100, 500, 1,000 or 5,000.
- **Image** and **Description** are optional.

### Custom Art & Jewelry

- **Construction** decides which materials the object can be made of:
  - **Molded**: metals, glass, ceramic;
  - **Carved**: wood, bone, ivory, stone;
  - **Clothing**: cloth, fur, hide;
  - **Book**: paper, leather, silk.
- **Art or Jewelry** decides which tab it appears on.

### Custom Materials

- **Used For** lists the constructions it suits (Molded, Carved, Clothing, Book), separated by commas.
- Random rolls only use a material at art values between its **Min** and **Max Value Level** (1 to 12).
- **Name As** is optional: a "Wolf" material named as "Wolf Fur" gives "Wolf Fur Cloak".

### Custom Embellishment Gems

Gemstones that can decorate art and jewelry ("set with ruby", "inlaid with jade"). Random rolls use them at art values between Min and Max Value Level (1 to 12).

### Price Corrections

Fix the price of compendium items without editing the compendium.
- **Compendium** is the compendium's id, for example `D35E.magicitems`. Leave it blank for any compendium.
- Corrections apply to generated treasure and merchant stock.
- Armory and Curios ship their own corrections for known wrong prices in D35E's compendiums; they're listed as built-in rows.

### Disabled Entries

Built-in entries that should never be used, one page per module. **List** is the list they belong to (for example `gems`, `curses`), or `any`. A switched-off entry is never rolled or offered.

## The Lists tab

**Where:** Treasure Generator → **Lists** tab.

> **<img width="595" height="1062" alt="image" src="https://github.com/user-attachments/assets/3c60ee04-825a-4a85-872b-b269ce484531" />**

- **List**: pick a list. It shows how many entries you've added and how many built-ins you've switched off.
- **Add to List**: a form with that list's columns. Fill it in and press **Add to [list]**.
- **Your entries**: your rows, each with **Remove**. Long lists show the first entries, "…and n more (see the journal)".
- **Switch off built-in entries**: type a built-in entry's name, choose **This list** or **Every [module] list**, and press **Switch Off**. Switched-off entries go on the "Disabled Entries" page.
- **Open Lists Journal**: opens the journal.

## The shared library

Every change is also saved to a library file, **Data/axecleft-treasure/treasure-lists.json** in your Foundry Data folder. Module updates never touch it, and every world on the server loads it at start-up, so your lists survive updates and follow you between worlds. Loading only ever adds rows (matched by name); it never deletes.

- **Save to Library** / **Load from Library**: save or load by hand.
- **Export** / **Import** (*Another Foundry server*): Export downloads all your lists, for every active module, as a file. Import merges such a file in (it only adds entries). Files exported by Gemstones 1.14 work too.

Module settings (**Configure Settings**):
- **Shared treasure lists library**: **Automatic** (save on every change and load at start-up) or **Manual** (only with the Save / Load buttons).
- **Shared library folder**: the folder inside your Foundry Data folder that holds `treasure-lists.json`.
