# Wiki update, 3 Nov 2026

Drop these files into a clone of the wiki (`https://github.com/Axecleft/Axecleft-s-Tools-Suite.wiki.git`), keeping the folders (`fr/` pages go in `fr/`), then commit and push. Nothing was removed; every other page is unchanged.

## New English pages
- **Axecleft's-Shop**: the shop sheet (merchants, buying and selling, haggling, pickpocketing and shoplifting, security), loot containers and party storage (locks, traps, coins, sneaking things out, the log).
- **Hoard-Editor**: the Treasure Generator's Hoards tab.
- **Printable-Sheets**: layouts, the special prints (merchants, loot, hoards, traps, companions), settings.
- **Axecleft's-Tools-Suite**: rewritten as the Tool Suite module's page (it was a copy of Home).
- **Adventurers-and-Minions**, **AM-Build**, **AM-Random**, **AM-Edit**, **AM-Variants-and-Builds**.
- **VooDoo**.

## Updated English pages
Home, _Sidebar, _Footer, Getting-Started, Settings, FAQ, Languages, Merchant-Generator (now Axecleft's Shop, Security, Items by Shop tag, Only gems/art named), Shop-Tags, Treasure-Generator, Treasure-by-Level, Generation-Settings, Token-Loot, Treasure-Lists, Gems-Art-and-Jewelry, Forge (Crystals tab), Curios-Workshop, Crafting, Crafting-Tabs (Socket crystals, Magic traps), Trap-Kits, Random-Trap-Generator, Poison-and-Disease-Creator. Tours are mentioned where each window has them.

## French (drafts for Gilgalad)
In `fr/`: the new pages translated, and the existing French pages given the same changes. Labels follow the modules' fr.json.

## Screenshots
New sections have lines like `> 📷 **Screenshot:** …` (French: `Capture d'écran`) where a picture belongs. Replace them with your images, or delete them.

## Please check
- **Generation-Settings**: the labels of the new special-purpose and "Your item compendiums" percentages were taken from changelog wording; check them against the window.
- **Forge, Crystals tab**: its exact controls were inferred.
- **AM-Build / AM-Random**: a few labels couldn't be confirmed and are written without bold (the Feats "only what qualifies" box, Random's "several at once" button, Review's folder / open-sheet options).
- **VooDoo**: the Stats tab's list (abilities, HP, AC, speed, BAB, grapple) comes from the design notes.
- **Hoard-Editor**: the tips at the end are suggested uses, not features.
- **Axecleft's-Shop**: on Foundry 11, Armory and Curios need their latest v11 files (Shop 1.37) for merchants to open on the sheet; already in your v11 folder.

## For Gilgalad (French)
- A&M's fr.json says "Aventuriers et **Sbires**" in a few places (the right-click entry "Modifier avec Aventuriers et Sbires", two tour titles); the pages use "Serviteurs" like the module title. One of the two should change.
- A&M's fr.json mixes terms: Builds = "Profils de jeu" / "constructions"; Review = "Vérification" / "Récapitulatif"; ranks = "rangs" / "degrés"; "Assistant MJ" / "MJ assistant". The pages use Profils de jeu, Vérification, degrés, Assistant MJ.
- Terms translated without a source, to check: inspiré (wilder), égoïste (egoist), Convocation renforcée (Augment Summoning), École renforcée (Spell Focus), Frappe handicapante (Crippling Strike), rage suprême (mighty rage), *métal gelé* (chill metal), disciple draconien, the ranger combat style feature names, *Arcanes exhumés* (Unearthed Arcana).
- Page names use "A&S" (fr-AS-…); the text keeps "A&M" because the interface does (folder **Sauvegardes A&M**).
- Hoards = "Trésors" in fr.json, which clashes with "trésor" (treasure); the pages say **Trésors** for the tab, "Éditeur de trésors" for the editor, and "trésor amassé" where the two must be told apart. A distinct word (e.g. "Magots") might be clearer in fr.json.
- Special purpose: fr.json has **Le vôtre…** / **Votre but**, the pages say "dessein spécial" around them.
- Labels with no French string yet (shown with the English after them): *Printed sheet layout*, *Printed NPC / monster layout*, *Update notice on startup*. The nine example crystals stay in English.
