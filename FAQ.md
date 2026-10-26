# FAQ

## General

**Where are the tools?**
In D35E's Game Master Tools, in the **Axecleft's Tools** group. See [Getting Started](Getting-Started).

**Which modules do I need?**
Any one of them works alone. Each adds its part to the shared tools: Armory (weapons and armor), Curios (potions, scrolls, wands, wondrous items), Gemstones (gems, art and jewelry), Traps (traps, poisons, diseases). The Treasure Generator, Merchant Generator and Crafting come with whichever modules ship them.

**Something is missing on Foundry 11.**
Intelligent items need D35E 3.1 or later, so their options are hidden on Foundry 11.

**The User Guide opens in English.**
It follows the language chosen in Foundry. If the wiki has no translation for your language yet, it opens in English.

## Treasure

**Psionic items never show up.**
Turn on **Psionics** in the Treasure Generator's [Generation Settings](Generation-Settings). The psionic share settings (Armory, Curios) then decide how often they appear. See [Settings](Settings).

**Epic items never show up.**
Turn on **Epic items** in [Generation Settings](Generation-Settings#campaign).

**A compendium item has the wrong price.**
Add a row to the **Price Corrections** page of the [Treasure Lists](Treasure-Lists). It fixes the price for treasure and merchant stock without changing the compendium. **Price Check** on the Merchant Generator's Item Sources tab lists every correction.

**I don't want a built-in gem, curse or other entry.**
Switch it off on the Treasure Generator's [Lists tab](Treasure-Lists#the-lists-tab). It goes on the "Disabled Entries" page and is never rolled.

**Will a module update erase my custom lists?**
No. They're kept in the world's **Axecleft's Treasure Lists** journal, and also in the shared library file in your Foundry Data folder (with **Shared treasure lists library** on Automatic). See [The shared library](Treasure-Lists#the-shared-library).

**How do cursed items work?**
See [Cursed Items](Cursed-Items).

## Merchants

**Players can't buy from my merchant.**
New merchants are made with permissions set to None. Give the players permission on the merchant's sheet.

**My own compendium items never appear in shops.**
The compendium must be in your [Item Sources](Merchant-Generator#item-sources-tab). Press **Save and Rescan** after adding it, or **Rescan** after adding items. To sell an item in shops other than its own kind, give it a [Shop tag](Shop-Tags).

## Crafting

**My players don't see Crafting.**
Turn on **Players may craft** in [Settings](Crafting#settings).

**The crafter has the gold and XP, but nothing was spent.**
Nothing is spent until the GM approves the request. Check **Charge gp** and **Charge XP** too.

**My own magic item can't be crafted, or the GM has to decide what it needs.**
End its description with an SRD construction line in English, such as `CL 12th; Craft Wondrous Item, fly;`. See [How requirements are found](Crafting#how-requirements-are-found).

**The crafter doesn't know a spell the item needs.**
Pick another source in the spell's drop-down: a helping caster, a scroll, a wand or a staff. See [Spells](Crafting#spells).

**Can a player take 20 on a Craft check?**
No. Failing costs materials, so the SRD doesn't allow it. Roll, or take 10.

## Traps

**A player can't craft a trap from the Random Trap Generator.**
Generated traps are in the GM's world. Give the player Observer permission on the trap actor, and it appears on the **Trap kits** tab.

**A trap can't be made into a kit.**
Trap kits are for mechanical traps only; magic traps come from spellcasting. The trap also needs a price: add "Market Price - 1,000 gp" to its notes.

**Players can see a trap they shouldn't.**
Check **Trap kits: who sees a placed trap** in [Trap Kits](Trap-Kits#settings). With **GM only**, the token is hidden.

**I can't recover a trap.**
Only active mechanical traps can be packed back into a kit, and only while **Trap kits: placed traps can be recovered** is on. Magic traps are disabled with Disable Device instead. See [Recovering a trap](Trap-Kits#recovering-a-trap).

## Languages

**Some text is still in English.**
It isn't translated yet. See [Languages](Languages) to help.

**My French items aren't recognized.**
Give them their English name (the **English name** button on the item sheet). See [Languages](Languages#english-names-for-your-own-items).
