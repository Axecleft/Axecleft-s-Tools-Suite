# Crafting

**Where:** **Axecleft's Tools → Crafting**. Players see it in the same toolbar group while **Players may craft** is on.

Characters make items by the SRD rules: magic items with item creation feats, and mundane items with Craft. A player fills in a request and the GM approves it. Nothing is spent or made until the GM approves.

Crafting comes with Armory, Curios and Traps. Each module adds its own tabs to the window. See [Crafting Tabs](Crafting-Tabs) for each tab.

> **<img width="1026" height="1002" alt="image" src="https://github.com/user-attachments/assets/6c2e1414-68fd-47b9-8353-be2b3562cec2" />**
> **<img width="614" height="431" alt="image" src="https://github.com/user-attachments/assets/d8db4da2-f630-4ee9-9451-2c0704f7181b" />**

## The window

| Control | What it does |
|---|---|
| **Crafter** | The character who makes the item. Players pick from the characters they own; the GM from every character and NPC. |
| Tabs | One per kind of item: arms and armor, specific magic arms, scrolls and potions, wondrous items, alchemy, psionic items, trap kits. See [Crafting Tabs](Crafting-Tabs). |
| Summary | What the item needs and whether the crafter has it, marked ✔ or ✘: the feat, caster level, each spell, alignment, class, level, skill ranks, gp and XP. Then the cost, the time and the checks. |
| **Send for approval** / **Send to the GM** | A player's button. The request goes to the GM as a chat card. |
| **Approve and craft now** | The GM's button. Skips the request step. |
| **Update the request** | Shown while you're editing a request from its card. |

Notes on the window:
- As GM you can override any requirement. The request card shows what's missing.
- A player can send a request with requirements marked ✘. The GM can still approve it, but ask first.
- Time is shown for the GM. It isn't enforced, and game time isn't advanced.

## Requirements

### Spells

Each spell the item needs must be provided every day of work. The summary shows how the crafter provides it:

- prepared, or known (spontaneous casters);
- in the spellbook but not prepared: prepare it each day of work;
- **A helping caster**: another caster provides it each day;
- **A scroll or power stone**: one scroll each day of work, used up;
- **A wand or dorje**: one charge each day of work;
- **A staff or psicrown**: the staff's charges each day of work.

Pick the source in the spell's drop-down when the crafter doesn't know the spell. Scrolls, wands, staffs and psicrowns come from the crafter's inventory.

### Caster level, feat and the rest

- **Feat**: the item creation feat. Epic items need the feat's epic version too, and **Epic items** on in [Generation Settings](Generation-Settings#campaign).
- **Caster level**: the item's caster level from its construction line, or the SRD minimum for its spells.
- **Creator must be…**: alignment, class, character level, skill ranks, caster level, from the item's construction line.
- **gp** and **XP**: the crafter must have them. With **XP can't cost a level** on, the crafter can only spend the XP above their level's minimum.

### How requirements are found

For compendium items (specific magic arms, rings, rods, staffs, wondrous items), Crafting reads the **SRD construction line** at the end of the item's description, as every SRD item has. A help section in the tab explains it. To make your own items craftable, end their description with a line like this:

> *Moderate evocation; CL 12th; Craft Magic Arms and Armor, fireball or flame strike, creator must be good; Price 18,315 gp; Cost 9,315 gp + 720 XP.*

- **CL 12th;** is required, followed by a semicolon. *Caster Level: 12th;* works too, and *ML* for psionic items. *CL 11th (I), 14th (II)* gives one caster level per version.
- **Requirements** follow, separated by commas, up to the next semicolon. *Prerequisites:* in front of them is fine.
- **Spells and powers** must match a name in your Spell or Power sources. Capitals don't matter, and "greater magic fang" finds "Magic Fang, Greater". **or** between names means either will do.
- **Feats** are matched by name: the item creation feats, and any feat in a compendium called Feats.
- Also understood: *creator must be good* (lawful, chaotic, evil), *creator must have 5 ranks in Jump*, *creator must be 12th level*, *creator must be caster level 11th*, and *creator must be a* class.
- Anything else is listed for the GM to check.
- **Cost 1,250 gp + 5,100 XP** anywhere in the description replaces the usual cost (half the price in gp, 1/25 in XP).
- **Price** is read too, and used when the compendium's price is missing or wrong.
- The line is read in English. Translated SRD items use their English line; your own items need the line in English.
- Without a construction line, the item can still be made, but the GM decides what it needs.

## Cost and time

| | Magic items | Mundane items (Craft) |
|---|---|---|
| **Cost** | Supplies: ½ of the base price, plus XP 1/25 of it (SRD) | Raw materials: ⅓ of the price |
| **Epic items** (price above 200,000 gp or caster level above 20) | XP: market price ÷ 100 + 10,000; epic scrolls: market price ÷ 25 + 1,000 (SRD) | — |
| **Time** | 1 day per 1,000 gp of base price, 8 hours a day | Weeks: each week's check × DC in silver pieces (estimate shown taking 10). Trap kits can count it in another coin: see [Trap Kits](Trap-Kits#settings). |
| **Epic time** | 1 day per 10,000 gp of base price (house rule) | — |

Spells with a costly material component or an XP component add that cost.

## Checks

| Item | Check |
|---|---|
| Magic items | **SRD**: no check; every prerequisite must be met. **Spellcraft (house rule)**: see the **Magic item checks** setting below. |
| Mundane items | Craft (weaponsmithing, armorsmithing, bowmaking, alchemy, trapmaking…) against the item's DC. A masterwork item has a second check for its masterwork component (DC 20). |
| Alchemy | Craft (alchemy). Only a spellcaster can use it. |

- You can't take 20 on a Craft check, since failing costs materials. Roll, or take 10.
- Untrained Craft is allowed and shown as "untrained".

## The request card

The chat card follows the request from start to finish.

| Status | Meaning |
|---|---|
| **Waiting for the GM** | Sent. The GM can **Approve**, **Edit** or **Reject** it. |
| **Approved — roll the checks** | Paid for. The crafter's player (or the GM) presses **Roll {skill} (DC)**. |
| **Finished** | Every check succeeded. The item is in the crafter's inventory. |
| **Failed** | A Spellcraft check failed by 5 or more: the gp and XP spent are lost. |
| **Materials ruined** | A Craft check failed by 5 or more: half the raw materials are ruined. |
| **Rejected** | The GM said no. Nothing was spent. |
| **Abandoned** | The crafter gave up after a failure. |

- **Failing by 4 or less**: no progress. Roll that check again.
- **Failing by 5 or more** on Craft: **Pay {gp} and roll again** buys new materials, or **Abandon** stops.
- **Edit**: the GM opens the request in the Crafting window, changes it, and presses **Update the request**. The card says "edited by the GM".
- **Checks rolled as**: change the roll mode on the card. With a blind roll, the GM resolves the result.
- If the crafter can't pay when the GM approves, the card says so: reject or edit the request.

## Settings

In **Configure Settings**, under the first active Axecleft module that ships Crafting.

| Setting | Default | What it does |
|---|---|---|
| **Players may craft** | On | Players can open the Crafting window and send requests. Nothing is made or charged until the GM approves. |
| **Magic item checks** | SRD (no check) | **Spellcraft check (house rule)**: Spellcraft DC 5 + caster level, +5 for each missing prerequisite (other than the feat and caster level) instead of blocking. Failing by 5 or more wastes the gp and XP. |
| **Poison crafting** | House rule | The SRD has no rule for making poison. **House rule**: Craft (alchemy) against the poison's save DC, raw materials ⅓ of the price, spellcasters only. No crafting tab uses this setting yet. |
| **Crafting checks are rolled as** | Public roll | **Public roll**, **Private GM roll** or **Blind GM roll**. The default when you approve; change it on each card. |
| **Charge gp** | On | Spend the crafter's gold on approval. |
| **Charge XP** | On | Spend the crafter's XP on approval. |
| **XP can't cost a level** | On | SRD: a character can't spend so much XP on an item that they lose a level. |
