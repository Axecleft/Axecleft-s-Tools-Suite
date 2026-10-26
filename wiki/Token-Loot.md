# Token Loot

**Where:** Treasure Generator → **Token Loot** tab, or the **sack** button on the token toolbar (*Roll Loot for Selected Tokens*).

Gives each NPC token its own treasure, rolled on the SRD Treasure table at its **Challenge Rating**. The SRD says a lone creature's treasure uses its CR as the encounter level. The roll is scaled by the **Treasure** setting on the NPC's sheet: D35E's None, Standard, Double, Triple, or a % for coins, goods and items.

Items go into that token's inventory with their value already rolled, and coins into its purse, ready to loot.
- An **unlinked** token keeps its loot on that one creature.
- A **linked** token's loot goes on its actor.

> **<img width="985" height="842" alt="image" src="https://github.com/user-attachments/assets/86e6352d-4ca6-404f-b7c7-0ff61f301662" />**

## Selected tokens

Select NPC tokens on the scene, then press **Refresh**. The table lists each token with:

- **Token**: its name, and "(unlinked)" for unlinked tokens.
- **CR**: the CR it rolls at. Traps show their share, for example "trap, ×¼".
- **Treasure**: its sheet's Treasure setting as percentages, for example "coins 100%, goods 100%, items 100%", or "none". A token that already has loot shows **has loot**.

## Rolling

- **Roll**: tick **Coins**, **Goods** and **Items** to choose which parts to roll.
- **Replace loot rolled before**: takes back the items and coins the generator gave the token last time, then rolls again.
- **Trap loot**: traps can get incidental loot too (the bones and belongings of earlier victims). Choose **¼ of a creature's treasure** or **The full treasure for its CR**. Select trap tokens and roll. Traps never get loot automatically.

Buttons:
- **Roll Loot for Selected Tokens**: rolls each selected token's loot.
- **Clear Loot**: removes only what the Treasure Generator put on the selected tokens (its marked items and the coins it added). Anything you gave the token yourself stays.
- **Refresh**: re-reads the selection.

## Automatic loot

- **Roll loot when an unlinked NPC token is placed on a scene**: every new unlinked NPC token gets its loot as soon as you place it.
- **Hidden tokens too**: include tokens placed hidden.
- **Post a chat card (GM only) for each token's loot**: a whispered card listing each token's loot.

Automatic loot only applies to unlinked NPC tokens. It never applies to traps, characters, tokens a player owns, or a token that already has loot (a copied token keeps the loot it was copied with). These settings are saved for the world.

## Rules used

| CR | Rolled as |
|---|---|
| Below 1 | EL 1, with each part's chance scaled by the CR (CR ½ rolls half the time) |
| 1–20 | That EL |
| 21–30 | EL 21–30: the EL 20 row plus extra major items, some of them epic while **Epic items** is on |
| Above 30 | EL 30 |

- **NPCs with class levels** carry NPC gear in the SRD instead of treasure. Set their Treasure to *None* if you equip them by hand.
- Everything else follows the [Treasure by Level](Treasure-by-Level) tab: how coins are paid, and the [Generation Settings](Generation-Settings) for light, poisons, curses and the rest.
