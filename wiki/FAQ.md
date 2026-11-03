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
Merchants are on the [Axecleft's Shop](Axecleft's-Shop) sheet. Players need **Limited** or **Observer** permission on the merchant (never Owner): new merchants are made with permissions set to None. A GM must also be logged in: the GM's game carries out every trade. Check the shop's GM settings too: it can be open to all players or only to those set in the actor's Ownership.

**A player has been locked out of a shop.**
A lock-out from a pickpocketing or shoplifting card lasts until you let the character back, in the shop sheet's GM settings, where locked-out characters are listed.

**My own compendium items never appear in shops.**
The compendium must be in your [Item Sources](Merchant-Generator#item-sources-tab). Press **Save and Rescan** after adding it, or **Rescan** after adding items. To sell an item in shops other than its own kind, give it a [Shop tag](Shop-Tags).

## Hoards

**Where is the Hoard Editor?**
It's the **Hoards** tab of the Treasure Generator, and the **Hoard Editor** button on a hoard's sheet. See [Hoard Editor](Hoard-Editor).

## Adventurers and Minions

**A player can't create a character.**
Without Foundry's **Create New Actors** permission, A&M asks a logged-in GM to create it. A GM must be logged in, and **Players build through the GM** must be on. See [Adventurers and Minions](Adventurers-and-Minions).

**I added classes or feats to a compendium and A&M doesn't show them.**
A&M reads races, classes and feats once a session. Press **Reload races, classes and feats** on its start page.

## VooDoo

**The phone shows Foundry's warning about a small screen.**
Mobile accounts don't show it. Log in with the player's **(Mobile)** account, not their main one.

**The phone has no map.**
The map is off unless you tick **Map** for that account in the Mobile accounts pop-up, or the player turns it on in the phone window's settings. See [VooDoo](VooDoo).

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
