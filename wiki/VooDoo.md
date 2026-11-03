# VooDoo (mobile character sheet)

**Where:** GM: **Configure Settings → Axecleft's VooDoo → Create mobile accounts**, or **Axecleft's Tools → Mobile accounts**. Players: log in with a mobile account from a phone's browser.

Your D35E character sheet on your phone. The GM gives each player a **mobile account**; logging in with it from a phone opens a full-screen window built for touch, with the character sheet, the party, chat and combat, and an optional map to target tokens, place spell areas and move your own tokens. A mobile account always has the same characters as the player's main account.

Named after the voodoo doll: from the phone in your hand, you move your character in the game world.

On Foundry 11 (D35E 2.4.3) it's **Axecleft's VooDoo for Foundry v11**, version **1.11.x**, and works the same.

## Setting up mobile accounts (GM)

> 📷 **Screenshot:** the Mobile accounts pop-up, with a player ticked, a password typed and Map ticked, and a player who already has a mobile account.

| Control | What it does |
|---|---|
| Player tick box | Tick each player who needs a mobile account. GM accounts are listed too (see [The GM's phone](#gm-phone)). |
| Password | The password the mobile account logs in with. Players type it on their phone, so keep it simple. VooDoo never reads or keeps it: Foundry keeps it like any other account's, and you can change it in Configure Players. |
| **Map** | Ticked: the phone gets a **Map** view to target tokens, move its own tokens and place spell areas by touch. Unticked: no map, so the phone loads faster and saves battery. Players can switch it themselves in the phone's settings. |
| Accounts already made | A player who already has a mobile account shows it (with a phone icon) instead of a tick box. Only its **Map** box can be changed. |
| **Save** | Creates the ticked accounts and saves the Map boxes. |

- Each new account is **"Name (Mobile)"**, linked to the player's account. It gets the same ownership of every character, and keeps it as you change ownership later or create new actors. It starts on the player's assigned character; after that, the phone switches characters on its own.
- The player opens your Foundry address on the phone, picks **"Name (Mobile)"**, and logs in with that password.
- Mobile accounts show in the player list with a phone icon. The setting **Hide mobile accounts in the player list** leaves them out.
- To remove one, delete it in **Configure Players**. VooDoo unlinks it from the player, so the pop-up offers that player again.
- The tour **VooDoo: Mobile accounts** (Configure Settings → Tour Management) walks through the pop-up.

## The phone window

A mobile account logs in straight into the VooDoo window. Foundry's map is switched off on that phone (Foundry's own per-browser setting), unless **Map** is on for the account. If the same browser later logs in with a normal account, the map is switched back on.

> 📷 **Screenshot:** the phone window on the Character view, Stats tab, with the top bar and the bottom bar.

**Tap to roll, press and hold for options.** A tap rolls an ability, save, skill or attack, casts a spell or uses an item straight away. Pressing and holding opens D35E's own roll options (situational bonus, Take 10 / Take 20, Power Attack and other optional feats, roll mode) in a phone-sized panel. Tap a name with an **ⓘ** to read its description.

The phone uses the sheet; it doesn't change it. Ability scores, skills, feats and items are changed on a computer. Notes can be edited on the phone.

### Top of the window

| Control | What it does |
|---|---|
| Character name | The character shown. Tap it to switch characters if you have more than one; chat cards then show the new one. On a GM's phone: choose any creature (see [The GM's phone](#gm-phone)). |
| Scene line | Under the name: the scene, and whether your character is on it (in red: "isn't here", or the scene it's on). A change of scene shows "Now on: …". Without the map, the scene is the one your main account is viewing (when it's logged in), else the active scene. |
| **☰** Menu | See [Menu](#menu). |
| Keep the screen on | The phone button beside the menu. Stops the phone going to sleep while you play; lit while it's on. Browsers only allow it when Foundry is opened over `https://`. |
| Settings (gear button) | **Map** on or off (the page reloads), **Roll mode** (who sees this phone's rolls: Foundry's own roll mode for this device), and **Take a tour of this window**. |

The first time a phone opens the window, a note says where the tour is.

### Bottom bar

**Character**, **Party**, **Chat**, **Combat**, and **Map** when the map is on. The Combat button lights up during a combat and pulses on your turn. A number on Chat counts the messages you haven't seen.

### Character

The tabs across the top scroll sideways; you can also swipe the page left or right to move between them.

| Tab | What it shows |
|---|---|
| **Stats** | Abilities, hit points, AC, speed, BAB, grapple. |
| **Saves** | The saving throws. Tap to roll. |
| **Skills** | The skills. Tap to roll. |
| **Attacks** | Tap to attack. With targets on the map, D35E's attack uses them. |
| **Spells** | Prepared counts and slots left. Tap to cast; D35E marks the slot or use spent. |
| **Inventory** | Coins, an equip switch for each item, and usable items (D35E takes the charge or quantity). |
| **Feats & Features** | The character's feats and class features. |
| **Buffs & Conditions** | Switches to turn them on and off. |
| **Notes** | Plain text. The phone can edit them. |

### Party

D35E's Party HUD on the phone: every character marked **Party Member** (in D35E's actor settings), whatever your permission on it, your own first.
- Each shows its portrait (or token image, by D35E's Party HUD setting), a hit point bar and its active buffs. Hit point numbers show only on characters you can observe; below 0, Dying or Dead.
- Tap one of your own to play it; tap another to list its buffs.

### Chat

| Control | What it does |
|---|---|
| **All**, **Rolls**, **Damage/Healing**, **Whispers** | Filters. GM whispers are under Whispers. |
| Send box | Type a message and send it. Chat commands work too: `/roll 1d20+5`, `/w GM …`. |

Your own rolls also show a short result at the top while you're on another view.

### Combat

The initiative order, with the current turn marked.

| Control | What it does |
|---|---|
| **Roll initiative** | For your characters that haven't rolled. |
| **End turn** | On your turn. |

The GM's phone has more buttons: see [The GM's phone](#gm-phone).

<a id="map"></a>
### Map

Foundry's own map, made for touch. Only when **Map** is on for the account.

> 📷 **Screenshot:** the Map view on a phone, with a targeted token, the target chips under the map and the help line.

| Touch or control | What it does |
|---|---|
| Drag | Moves the map. |
| Pinch, or **+** and **−** | Zoom. |
| **My character** | Finds your token. |
| **Tap a token** | Targets it; tap again to untarget. Everyone sees your targets, and D35E's attacks and spells use them. |
| Targets (under the map) | Your targets. Tap one to drop it. **Clear targets** drops them all. |
| **Press and hold your token, then drag** | Moves it: keep holding, drag it where it goes, and let go. It lands on the grid space under your finger. Players move only their own tokens, and walls stop them, as Foundry's movement rules do (a paused game too). Holding your own token also makes it the character you play. |
| **Press and hold another token** | Opens its sheet when it's open to you: a merchant's shop, a loot pile, another character you may look at. |
| The eye button | The map sees as your character (darkvision, low-light vision, its light), as when you select your token on a computer. Tap it to see through all your tokens instead (the GM: the whole map). |
| Help line | **Tap: target · Hold: open or move**. The **?** beside it shows the full instructions; **×** folds them again. |

**Spell areas:** when a spell asks where its area goes, the window switches to the map by itself. Tap or drag where it goes, turn it with the arrow buttons (cones, lines), then **Place** or **Cancel**. D35E places it and finds its targets as on a computer.

The map stops drawing while another view is showing, to save the battery.

<a id="menu"></a>
### Menu (☰)

| Section | What it does |
|---|---|
| **Shops and loot** | The merchants and loot piles on the scene, and party storage, that are open to you. Tap one to open its sheet (no map needed). |
| **Tools** | The one-click buttons a player may use: Axecleft's Tools (My Traps, Crafting and the rest) and other modules' buttons. Buttons that work by clicking on the map are left out. |
| **Sidebar** | Journal, Items, Compendiums and Roll Tables, opened at the phone's width. |
| **Hotbar** | Your macros, page by page (1 to 5). Tap one to run it. |

Every window opened on the phone keeps to the screen's width and height. A journal's page list starts folded: tap its button to open it.

### Good to know

- **Lost connection:** the window shows *Reconnecting…* and reloads once the server answers again, also after the phone was asleep.
- **Home screen:** add the page to the phone's home screen to open it like an app.
- **Shared phone:** each account keeps its own phone choices (last tab and view, picked creature, map eye), so several mobile accounts can share one phone.
- **Tour:** **Settings → Take a tour of this window** walks through the window (**VooDoo: The phone window**).

<a id="gm-phone"></a>
## The GM's phone

The Mobile accounts pop-up lists GM accounts too. A GM's mobile account is an **Assistant GM**: it sees and runs every actor, but never takes over from your own GM account while that one is logged in (Foundry picks the logged-in user with the highest role).

On a GM's phone the window runs creatures and NPCs:

| Control | What it does |
|---|---|
| **Choose a creature** (tap the name at the top) | The combat's combatants, the tokens on the scene (an unlinked creature is its own token's creature), the player characters, and a search of every actor. |
| Everything a player can do | Rolls, attacks, spells, items, buffs, the map's targets and spell areas, for the creature picked. |
| **Damage** / **Heal** | Type an amount under the hit point bar. Damage takes temporary hit points first; Heal goes up to the maximum. |
| Combat tab | Tap a combatant to play it. **Roll NPCs** (initiative for the creatures no player owns), **Begin combat**, **Next turn**, **Previous turn**. |
| Map: press and hold a token | Plays it (it becomes the creature picked and the selected token). Keep holding and drag to move any token; it lands on the grid space under your finger, and walls don't stop the GM. Holding a merchant or loot token and letting go opens it. A tap still targets. |
| **Roll mode** (Settings) | Who sees the phone's rolls. |
