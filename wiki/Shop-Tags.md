# Shop Tags

**Where:** **Axecleft's Tools → Shop Tags**, or the Merchant Generator's **Shop Tags** tab.

Sort your compendium items into the shops that sell them. An item is already sold by the shops that stock its own kind (a magic tome is a wondrous item, so magic shops sell it). A **Shop tag** lets other shops sell it too: tag the tome *Scroll* and scribes stock it, tag it *Book* and booksellers do.

> **<img width="599" height="535" alt="image" src="https://github.com/user-attachments/assets/38eb2460-4af8-42ff-8db7-f6a3ae13c2a2" />**

## How Shop tags work

Shop tags are ordinary D35E item tags, written as `Shop: Scroll`, `Shop: Book` and so on. This tool writes them for you, and you can also add or remove them by hand in an item's tags.

- **Category tags** add the item to that category as well as its own: `Shop: Gem`, `Shop: Art object`, `Shop: Tools and gear`, `Shop: Alchemical item`, `Shop: Poison`, `Shop: Weapon`, `Shop: Armor`, `Shop: Shield`, `Shop: Ammunition`, `Shop: Masterwork weapon`, `Shop: Masterwork armor`, `Shop: Magic weapon`, `Shop: Magic armor`, `Shop: Potion`, `Shop: Scroll`, `Shop: Wand`, `Shop: Ring`, `Shop: Rod`, `Shop: Staff`, `Shop: Wondrous item`.
- **Specialty tags** pick a specialty shop's wondrous items: **Book** (booksellers), **Clothing** (clothiers), **Jewelry** (jewelers). Your own [shop types](Merchant-Generator#shop-types-tab) can use them too. Until items are tagged, those shops' line says "none in your item sources yet (see Shop Tags)", and the rest of the shop stocks as before.
- **Tags of your own**: any `Shop: …` tag you make up. Tag your statues `Shop: Statue`, then make a shop type that sells **Items by Shop tag** (see [Shop Types](Merchant-Generator#shop-types-tab)): a statue carver. A shop type selling by tag takes the tagged items in your item sources whatever kind of item they are, each tag with its own share of the stock.
- Shop tags are always written in English (`Shop: Scroll`), whatever the world's language, so every world reads them.

## Tagging a compendium

> **<img width="597" height="822" alt="image" src="https://github.com/user-attachments/assets/b5ce8d90-dd1b-4e0d-a5db-2000df7d07e1" />**

1. **Compendium**: choose an Item compendium, and press **Scan**.
   - Suggestions come from item names and folder names: a "Books" folder, or "Libram" in the name, suggests Scroll and Book; "Clothing" suggests Clothing; "Gems and Jewelry", amulets and brooches suggest Jewelry; elixirs and oils suggest Potion.
   - If the compendium isn't one of your item sources, a note says so, with a button to add it.
2. **Show**: All items, Items with Shop tags, Items without Shop tags, Rows with new suggestions, or Ticked rows.
3. **Filter by name, folder or tag** to narrow the rows. Long lists show 600 rows at a time; filter to see the rest.
4. Each row shows the **Item**, what it's **Sold as** now, and its **Shop tags**. Edit a row's tags directly, separated by commas.
5. Tick the rows to change. The tick box in the header ticks or unticks every row shown.
6. To change many rows at once:
   - **Add**: add a tag to every ticked row.
   - **Remove**: remove a tag from every ticked row.
   - **Clear**: clear the tags of every ticked row.
   - **Reset**: go back to the current tags plus suggestions.
7. Press **Write Tags to Ticked Items**, and confirm. A ticked row with no tags has its Shop tags removed. Only Shop tags change; an item's other tags are kept.

## Notes

- This tab has a tour: the window's ⋮ menu → **Tour of this tab**, or Configure Settings → **Tour Management** (on Foundry 11, the **Tour** button in the title bar).
- Only compendiums in your [Item Sources](Merchant-Generator#item-sources-tab) stock merchants.
- Locked compendiums are unlocked for the write and locked again.
- Write tags in **your own** compendiums. System and module compendiums are replaced when they update, and the tags would be lost.
