# Axecleft's Shop

**Where:** double-click the token of a merchant, a loot container or party storage, or open the actor from the Actors sidebar. The [Merchant Generator](Merchant-Generator) puts its merchants on this sheet. To make a loot container or party storage, right-click an NPC actor in the Actors sidebar (see [Loot containers and party storage](#loot-containers-and-party-storage)).

Axecleft's Shop is an actor sheet for NPC actors, used three ways: a **merchant** that players buy from and sell to, a **loot** pile, and **party storage**. It comes with Axecleft's Gemstones, Armory and Curios; any one of them is enough. The sheet is on D35E's parchment, like D35E's own actor sheets. You can also pick **Axecleft's Shop** in any NPC actor's sheet settings.

> 📷 **Screenshot:** a merchant's Axecleft's Shop sheet as a player sees it, on the Buy tab.

## Before you start

- **A GM must be connected.** Every purchase, sale, take and lock attempt is sent to the GM's game, which checks it (the player owns the character, the item is still there and not hidden, the money is there) and moves the coins and items. Without a GM connected, nothing can be traded ("No GM is in the game: buying and selling need a GM connected.").
- **Players need Limited or Observer** on the merchant or container, **never Owner**. Set it with **Open to** in the sheet's GM settings, or in the actor's Ownership. A player without it sees "This shop isn't open to you."
- Players trade and loot with their own characters: their assigned character, or any character they own.
- Merchants made before this sheet keep working: the sheet reads their saved sell and buy %.

<a id="world-settings"></a>
## World settings

In Configure Settings, in the module settings:

| Setting | Default | What it does |
|---|---|---|
| **Trade goods: merchants sell at (%)** | 100 | Gems, art and jewelry (D35E's Full Resale Price): what Axecleft's Shop merchants charge, as a % of their value. SRD: 100. A shop can set its own on its sheet. |
| **Trade goods: merchants buy at (%)** | 100 | What Axecleft's Shop merchants pay for trade goods, as a % of their value. SRD: 100. A shop can set its own on its sheet. |
| **Pickpocketing and shoplifting** | On | Players can try to pick pockets (the hand button on the token controls, on a targeted token) and shoplift at Axecleft's Shop merchants. You decide each attempt on a card in chat. Characters players own can't be robbed. Each shop can also turn it off. |

Whether gems, jewelry and art count as trade goods is set by **Full resale price for gems, jewelry and art** in [Gemstones' settings](Settings#axeclefts-gemstones).

## Tours

The sheet has four tours: **Axecleft's Shop: the merchant (GM)**, **Axecleft's Shop: buying and selling**, **Axecleft's Shop: loot and party storage (GM)** and **Axecleft's Shop: loot and party storage**.
- Start them from Configure Settings → **Tour Management**, or from the sheet's ⋮ menu: **Tour of this window** starts the GM's tour for a GM and the players' tour for players, for the kind of sheet that is open. On Foundry 11, use the **Tour** button in the title bar.
- A tour opens a sheet of its kind when none is open.
- While a tour runs, the sheet shows an example of the parts it points at that aren't there yet, marked "(example)": the haggling buttons and **Pick a pocket**, a basket, a closed container's lock buttons, an empty log. Their buttons don't work, and they go when the tour ends.

## Merchant: GM side

The top of the sheet shows the merchant's name and shop, and "Sells at …%, buys at …%" (and "haggles" when players may haggle).

**Character sheet** (top right, GM only): opens the merchant on D35E's own NPC sheet, beside the shop, to roll its stats, skills, saves and attacks. The shop stays the actor's sheet.

> 📷 **Screenshot:** a merchant's sheet as the GM sees it, with **GM: shop settings** open.

### GM: shop settings

Click **GM: shop settings** to open or close it. Players don't see it.

| Control | What it does |
|---|---|
| **Sheet** | **Merchant**, **Loot** or **Party storage**. Changes the sheet to a loot pile or party storage. |
| **Sells at** / **Buys at** | What the shop charges and pays, as a % of an item's value. |
| **Trade goods: sells at** / **Trade goods: buys at** | The shop's own % for trade goods: gems, art and jewelry (D35E's Full Resale Price). Empty: the world's house rule (see [World settings](#world-settings)). |
| **Open to** | **Players set in Ownership**, or **All players**. |
| **Trades in chat** | **For everyone**, **GM only**, or **Not shown**. |
| **Players can haggle (you approve each one), with:** | Tick to allow haggling, and tick the skills players may use: **Diplomacy**, **Intimidate**, **Bluff**. Characters who have haggled are listed, with their result. **Reset haggling** clears every result, so they can haggle again. |
| **Players can try pickpocketing and shoplifting here (you decide each one)** | On by default. Needs the world setting **Pickpocketing and shoplifting** on too. |
| **Security** | How well the shop is protected against pickpocketing and shoplifting. Tick any that fit (see below). |
| **Locked out:** | Characters this shop won't deal with. The open lock beside a name (**Let them trade again**) lifts the lock-out. |
| **Purse** | The merchant's coins (pp, gp, sp, cp in the world's coin names), and their total. The merchant pays for what it buys from this purse. |
| **Restock** | New stock by the merchant's saved Merchant Generator settings: half a new stock and half a purse. It also resets haggling. |
| **Merchant Generator** | Opens the [Merchant Generator](Merchant-Generator). |
| **Log** | Every sale and purchase, haggle, pickpocketing and shoplifting attempt (with the rolls and outcome) and lock-out, with the date and time, newest first. **Clear the log** empties it. |

**Security** (each one's changes add up):

| Security | Effect |
|---|---|
| Careless / distracted | Spot −4, DCs −2 |
| Crowded / busy | Spot −2 |
| Watchful owner | Spot +4 |
| Guards on duty | Spot +5 |
| Guard animal | Spot +3 |
| Goods locked away | shoplifting DC +10 (cases, chains, behind the counter) |
| Coin kept secure | pickpocketing DC +5 (most coin in a strongbox) |
| Magically warded | shoplifting: Spot +10 (alarm wards on the stock) |

The Merchant Generator's [Security](Merchant-Generator#security) section sets the same list when it makes a merchant. A change here is kept with the merchant's saved settings, so a restock keeps it.

### The stock

The GM sees every item, with controls beside each one:

| Control | What it does |
|---|---|
| Eye | **Hide from players**. A hidden item is dimmed for you, and players don't see it. Click again (**Hidden from players: show**) to show it. |
| − / + | **One fewer** / **One more**. One fewer on the last piece removes the item. |
| Pen | **Edit**: opens the item's sheet. |
| Bin | **Remove** the item from the stock (asks first). |

- **Add stock:** drop items on the sheet. A shop stocks weapons, armor and gear, consumables and goods.
- **Unidentified items:** the GM sees the real name, with "(shown as …)", the name players see. Players see the unidentified name and description, and an unidentified item is priced at its unidentified price (D35E's rule).

<a id="buying-and-selling"></a>
## Merchant: player side

Double-click the merchant's token to open its shop.

| Control | What it does |
|---|---|
| **Trading as** | The character who buys and sells: your assigned character first, then any other you own. **Purse** shows the coins they carry. |
| **Diplomacy**, **Intimidate**, **Bluff** | When the shop haggles: roll for better prices (see [Haggling](#haggling)). |
| **Pick a pocket** | When the GM allows it: try to pick the merchant's pocket (see [Pickpocketing and shoplifting](#pickpocketing-and-shoplifting)). |
| **Buy** / **Sell** | The two tabs. |

If the shop won't deal with a character, the sheet says so ("… won't deal with …") and that character can't trade there.

### Buy

What the shop has, by kind (**Weapons**, **Armor and gear**, **Consumables**, **Goods and loot**), with **Qty** and **Price each**.
- **Buy**: asks **How many?** (when there's more than one), then asks you to confirm. Partial stacks work.
- The **cart** adds one to the basket, up to what's in stock.
- The **hand** beside an item shoplifts it, when the GM allows it.

**Basket** (above the list, once something is in it): each item and how many, **−** to take one off, the **Total** (red when the character can't afford it), **Buy all** to pay for everything at once, and **Empty**.

**Paying:** the price is the item's value × the shop's **Sells at** % (trade goods at the trade goods %), less any haggling. The character pays with the biggest coins that fit and gets change. The merchant's purse gets the money.

### Sell

**…'s items**: the character's weapons, armor, gear, consumables and goods (not those inside a container), with **Qty** and the shop's **Offer each**. Notes show when an item is "equipped", and when it is trade goods ("trade goods at …%").
- **Sell**: asks **How many?**, then asks you to confirm (and warns if it's equipped).
- Or drop an item from your character on the sheet to sell it.
- The offer is the item's value × the shop's **Buys at** % (trade goods at the trade goods %), plus any haggling, never more than the item's value. "no offer" means the shop won't pay anything for it.
- The merchant pays from its purse: a merchant can't buy what it can't afford.

### Item descriptions

Rest the pointer on an item's name for a pop-up of its description. Click the name to keep the description open under the item, and click again to close it. This works on the Buy and Sell lists and in loot. An unidentified item shows players its unidentified description; the GM sees both.

<a id="haggling"></a>
### Haggling

When the GM allows it, press **Diplomacy**, **Intimidate** or **Bluff** (the skills the GM ticked). The roll goes to chat and the GM gets a **Haggling** window:
- the suggested change: 2% better prices for every 5 points over 10, 2% worse for every 5 under, up to 10%;
- **Better prices by** … %: the GM can change the figure;
- **Approve** or **Refuse**.

For Intimidate the GM is reminded that, by the SRD, an intimidated merchant cooperates for 1d6 × 10 minutes, then turns unfriendly. For Bluff, that the GM can reset it if the merchant later learns the truth.

The result applies to what that character buys and sells at this shop until the GM resets haggling or restocks. Each character haggles once per shop. The sheet then shows "Haggled: prices …% better", "…% worse", "unchanged" or "Haggled without success."

<a id="pickpocketing-and-shoplifting"></a>
### Pickpocketing and shoplifting

Needs the world setting **Pickpocketing and shoplifting** on, and the shop's own tick box (for a shop).

- **Pick a pocket** on the merchant's sheet: picks the merchant's pockets.
- The **hand** beside an item on the Buy list: shoplifts it.
- The **hand** button in the token controls (**Pick a pocket (target the token first)**): picks the pockets of the one token you target (T). This works on anyone except characters a player owns. Unowned character actors (an NPC with a familiar, say) can be robbed.

The player chooses the **Character**, what to **Go for** (**Coins** or **Something small**, for pockets) and an optional **Note for the GM**, then presses **Try it**. Their Sleight of Hand is rolled:
- picking a pocket: DC 20 (SRD);
- shoplifting: DC 10 for something of 1 lb or less, DC 20 for more;
- the shop's security changes the DC, and the target's Spot is rolled against the player's result.

Nobody else sees anything. The GM gets a card in chat with the rolls, the security that applied, and a suggested outcome:

| Control | What it does |
|---|---|
| **Outcome** | **Got it, unnoticed**, **Got it, but noticed**, **Missed, unnoticed** or **Missed and caught**. |
| **Takes** | What is taken and how many: a kind of coin or an item the target isn't wearing or wielding (a handful of coins or a small item is suggested). For shoplifting, the item. |
| **Decide** | Moves what was taken and tells the player the result. |
| **Time out …** | No more attempts from that player for **10 minutes**, **30 minutes**, **1 hour**, **4 hours** or **1 day**. **Lift the time-out** ends it. |
| **Lock … out of …** | The shop won't trade with that character until you let them back (here, or on the sheet's **Locked out:** list). |
| **…'s reaction…** | Type the target's reaction and press **Post as …**. Tick **Only to …** to show it to that player only. |

## Loot containers and party storage

The same sheet serves a loot pile (a chest, a body to search) and the party's stash. Both work the same way, except that players can read party storage's log.

**Making one:** right-click an NPC actor in the Actors sidebar and choose **Make it a loot container** or **Make it party storage** (GM only). Or pick **Loot** or **Party storage** as the **Sheet** in its GM settings. Then open its sheet to set it up.

A container is unlocked, untrapped and open until you set a lock or a trap.

> 📷 **Screenshot:** a loot container's sheet as the GM sees it, with **GM: settings** open (lock, container and trap rows).

## Loot: GM side

The top of the sheet shows "Loot" or "Party storage", its state (open, closed, locked or broken open), and "trapped" (to the GM) when a trap is armed. The GM always sees inside, with a note of what players see ("Players see it locked; you see inside."). Items have the same eye, pen and bin controls as a merchant's stock, and **Character sheet** is at the top right.

### GM: settings

| Control | What it does |
|---|---|
| **Sheet** | **Merchant**, **Loot** or **Party storage**. |
| **Open to** | **Players set in Ownership**, or **All players**. |
| **Taken and put in, in chat** | **For everyone**, **GM only**, or **Not shown**. |
| **Players can split the coins** | Lets players use **Split among the party**. The GM always can. |
| **Coins** | What's inside, by coin. |
| **Lock** | **Locked**; the lock's quality: **Very simple lock (DC 20)**, **Average lock (DC 25)**, **Good lock (DC 30)**, **Amazing lock (DC 40)** (SRD) or **Other DC**; the **Open Lock DC**; **Arcane lock (+10)**; and a **Key**: the name of the key item that opens it. |
| **Container** | **Small chest (hardness 5, 1 hp, Break DC 17)**, **Treasure chest (hardness 5, 15 hp, Break DC 23)** (SRD), or **Other (set below)**; then **Hardness**, **Hit points** and **Break DC**, for forcing or breaking it open. "broken" shows once it has been broken open. |
| **Trap** | **Armed**, and either **Simple trap (set below)** or **Trap actor: …** (a trap actor in the world, such as one from the [Random Trap Generator](Random-Trap-Generator)). Characters who have found the trap are listed. |
| **Close it (players must open it again)** / **Open it for the players** | Closes or opens the container. |

**A simple trap:** **Name**, **Search DC**, **Disable DC**, a save (**Reflex**, **Fortitude**, **Will** or **No save**) and its **DC**, **Damage** (a dice formula), **Half on a save (else none)**, and **Poison** (a line of text, for example "Greenblood oil, Fort DC 13, 1 Con / 1d2 Con").

**A trap actor:** the Search and Disable Device DCs come from the trap actor. When it goes off, its card opens the trap's sheet with the victim targeted, to roll its attacks.

**What needs you:**
- Locking it or arming a trap closes it.
- Picking the lock, keys, *knock*, opening it, and finding or disabling a trap go ahead on their own; you're told in a whisper.
- Forcing it, breaking it, a trap going off and something sneaked out come to you on a card in chat (see below).

**The GM's cards:**

| Card | Buttons |
|---|---|
| Forcing it (Strength against the Break DC) | **It opens** or **It holds**, with a suggestion. |
| Breaking it (damage less hardness, and the hit points left) | **Apply the damage** (or **Apply: it breaks open** when its hit points reach 0) or **No effect**. |
| A simple trap goes off | The victim's save and the damage are already rolled: **Apply … damage**, **Apply … (full)**, or **No damage**. The poison text is shown. |
| A trap actor goes off | **Open … and target …** (the trap's sheet, with the victim targeted) and **Done**. |
| Something sneaked out | The other characters' Spot rolls. **Tell …** the ones who noticed, or **Keep it secret**. |

A trap that goes off is no longer armed, and the container opens.

### The log

Every take, put in, coin split, trap disabled or set off, and the container forced or broken open, with the date and time, newest first. Things sneaked out are marked secret: only the GM sees them. **Clear the log** empties it. Players see the log of party storage, but not of a loot pile.

## Loot: player side

Choose the **Character** who takes and puts in things. **Purse** shows their coins.

### A closed or locked container

| Button | What it does |
|---|---|
| **Open it** | Opens a closed container. If it has an armed trap, the trap goes off. |
| **Use the key** | Shown when the lock has a key. Works if the character carries an item with the key's name. |
| **Pick the lock** | Open Lock against the lock's DC (+10 with *arcane lock*). Choose **Roll**, **Take 10** or **Take 20** (when there's time), and **Thieves' tools**, **Masterwork tools (+2)** or **No tools (−2)**. |
| **Force it open** | A Strength check against its Break DC (+10 with *arcane lock*). Noisy: the GM decides. |
| **Break it** | Enter the **Damage dealt (rolled on the character's sheet)**. It's reduced by the hardness. Noisy: the GM decides. |
| **Knock / chime of opening** | Opens the lock by magic. |
| **Search for traps** | Search against the trap's DC. Only characters with trapfinding find traps over DC 20 (SRD). |
| **Disable the trap** | Shown once this character has found the trap. Disable Device against its DC, with the same tools choice. Failing by 5 or more sets it off. |

A trap you don't find goes off when you open the container.

### An open container

- **Coins**: **Take** coins, or **Put in** some of the character's. The coins window has **All**, **OK** and **Cancel**.
- **Split among the party** (when the GM allows it): choose the characters who share. Each gets an equal share of each kind of coin; what can't be shared stays in the container.
- **Items**: **Take** an item (part of a stack too). Rest the pointer on a name to read it.
- **Put things in**: drop an item from your character on the sheet.
- **Sneak it out**: the **hand** beside **Take** (for an item or the coins) slips it away without the others knowing. Your Sleight of Hand is rolled against the Spot of the other players' characters (those of active players the container is open to). Only the GM is told, on a card, and the GM decides whether to tell those who noticed. It's not in the log players see.
