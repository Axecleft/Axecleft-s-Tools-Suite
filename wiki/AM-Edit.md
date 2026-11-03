# Edit an actor (Adventurers and Minions)

**Where:** [Adventurers and Minions](Adventurers-and-Minions) → **Edit an actor**; **Edit with Adventurers and Minions** in an actor's right-click menu in the Actors directory; an actor's sheet (the **⋮** menu on Foundry 13–14, the A&M button in the title bar on Foundry 11); or the **Adventurers and Minions** button in the token controls, for the selected token's actor when you own it.

Read an existing actor back into the steps, add levels or change classes, and apply only what changed. A copy of the actor is kept first. Players can edit the actors they own.

> 📷 **Screenshot:** the Edit an actor page with an actor picked, and the Open button.

## Choosing the actor

| Control | What it does |
|---|---|
| Actor | Pick one of your actors, or a selected token's, or drop an actor on the window. |
| **Open** | Reads the actor into the steps. |

## How the actor is read

- **Actors A&M made** reopen exactly as they were built: their plan is kept on the actor.
- **Other actors** are read from what they have: the race and class items, D35E's level records, feats (placed in their slots) and spells (by their spellbook's class).
- An actor that doesn't use D35E's level-up progression is read from its class items' levels. The order of the classes, the hit points of each level and where skill ranks were bought are then A&M's best guess.
- What A&M guessed or couldn't place is listed at the top of **Classes and levels** and **Review**.
- Anything A&M doesn't know (a homebrew feat, a class not in your compendiums, spells inside Curios' spellbook items) stays on the actor untouched.

## Changing it

Change anything on the steps (see [Build a character](AM-Build)):
- add levels of any class, change a level's class, remove levels;
- change ability scores, skills, feats or spells;
- change domains, specialist schools, class feature variants and the ranger's combat style. Changing the combat style swaps its features and feats.

On **Spells**, **Add spells for new levels** adds what the new levels bring and keeps the actor's spells.

<a id="gear"></a>
## Gear (trade-in)

On **Equipment**, each item the actor has can be:

| Choice | What it does |
|---|---|
| Keep | The default. |
| Unequip | Into the pack, freeing its place for the new levels' gear or treasure. |
| Sell | It leaves the actor, and its trade-in value adds to the wealth the new levels bring, to buy the upgrade. |

- The trade-in value is the setting **Trade-in value** (SRD: half, 50%). Gems, art and trade goods count at full value.
- Only a GM sells, unless **Players can trade in gear** is on. Players can always keep or unequip.
- Gear added on the step is added to the actor. Treasure can be rolled for the wealth the new levels bring (arms only where nothing is equipped).
- Review lists what's unequipped and sold. The backup copy keeps everything.

<a id="review"></a>
## Review

| Control | What it does |
|---|---|
| **Fill in what's missing** | Fills, by the class profiles: the skills of levels with points left, empty feat slots, feats whose prerequisites aren't met any more (a feat whose slot went with a changed class moves to a free slot or goes), ability increases, and the spells new levels bring. What you chose stays. |
| **Changes** | Lists everything that will change. |
| Copy before an edit | Whether to make the backup copy (setting **Copy before an edit**, on by default). |
| **Apply changes** | Writes only what changed. |

**Apply changes** writes the class items and D35E's level records, ability scores, skill ranks, the feats and spells added or removed, and prepared counts. Gear, effects, class features and everything else stay. A character's XP is moved into the new level, and full hit points stay full.

## Backups

Before applying, A&M makes a copy of the actor in the folder **A&M backups** (setting **Copy before an edit**). For a player who can't create actors, the copy is made by a GM's Foundry and is owned by the player (see [Who can use it](Adventurers-and-Minions#who-can-use-it)).
