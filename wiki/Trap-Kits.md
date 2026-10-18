# Trap Kits and My Traps (Traps, Poisons, and Diseases)

A **trap kit** is an item that holds the parts of a ready-built mechanical trap, packed to be set up somewhere else. A character carries it, uses it to set the trap on a scene, and may pack it up again later.

> **<img width="918" height="836" alt="image" src="https://github.com/user-attachments/assets/5ce5fa9b-2b3b-4376-bb13-fbb31711dd58" />**
> **<img width="563" height="657" alt="image" src="https://github.com/user-attachments/assets/f368ede4-86e2-4bad-8ab8-0ac0aae4eb64" />**

## Getting a trap kit

- **Crafting**: a character makes one with Craft (trapmaking) on the [Crafting](Crafting-Tabs#trap-kits) window's **Trap kits** tab. The kit goes into the crafter's inventory.
- **From a trap actor (GM)**: right-click a trap actor in the Actors sidebar and choose **Make Trap Kit**. The kit is created in the **Trap Kits** Items folder; drag it to a character or a merchant.

Kits are for mechanical traps only. Magic traps come from spellcasting.

The kit's description gives the trap and its CR, how long setting it takes, and its recovery DC.

## Setting a trap

1. Open the scene where the trap goes.
2. On the character sheet, use the trap kit like any item.
3. Click where to set the trap. Right-click or Esc cancels.
4. A chat card, **Trap Kits**, says "{who} sets {trap} (CR {cr}) on {scene}" and how long it takes.
5. With **Trap kits: GM approves** on, the card waits for the GM: **Approve** or **Cancel**. Otherwise it happens at once.

When it's set:
- The kit is used up.
- A copy of the trap actor is made in the **Placed Traps** Actors folder, with its token on the scene.
- Who sees the token depends on **Trap kits: who sees a placed trap** (below).

Setting takes 1 minute per CR. The card shows the time, but game time isn't advanced.

## Recovering a trap

With **Trap kits: placed traps can be recovered** on, an active mechanical trap can be packed back into a kit. Magic traps can't: they're disabled with Disable Device instead, and My Traps doesn't offer recovery for them.

- It takes 1 minute per CR and a **Disable Device** check against the trap's Disable Device DC + 5. Disable Device is trained only.
- **Success**: the trap goes back into a kit in the character's inventory.
- **Failed by 1–4**: no harm done. The trap is still set and can be tried again.
- **Failed by 5–10**: the trap is disabled for good.
- **Failed by more than 10**: the trap is **triggered** on the character. The GM gets a **Trap triggered** card with its attacks and a button, **Target {who} and open the trap**, to resolve it.

Players recover a trap from [My Traps](#my-traps). With **Trap kits: GM approves** on, the GM approves the attempt first.

## Traps the GM places by hand

A trap the GM drags onto a scene from the Actors sidebar or a compendium is a placed trap too, with the same controls: its status on the token HUD and in Placed Traps, the eye for which players know about it, and recovery into a kit for mechanical traps. Trap tokens already on a scene are picked up when the GM opens the scene. Players only see one in My Traps once the GM marks them as knowing about it.

## Trap status

Each placed trap is **Active**, **Disabled** or **Triggered**.

- The GM changes it on the token: right-click the token and click the trap button in the token HUD (it cycles Active → Disabled → Triggered).
- Or in the **Placed Traps** window (below).
- A triggered trap stays **Triggered** until you set it Active again, for example once it resets.

## My Traps

**Where:** **Axecleft's Tools → My Traps**. Players and GM.

> **<img width="516" height="360" alt="image" src="https://github.com/user-attachments/assets/53399c3a-88e3-4419-8842-4516d5f4aef5" />**

### For players

Lists the traps on this scene that you know about: you set them, someone showed them to you, or you have them targeted.

| Column | What it shows |
|---|---|
| **Trap** | The trap's name (a crosshair if you have it targeted). |
| **CR** | Its CR. |
| **Set by** | Who set it. |
| **Status** | Active, Disabled or Triggered. |
| Buttons | **Show its marker to other players** (share icon), and **Pack it back into a kit (Disable Device DC {dc})** (box icon) for active traps. |

- **Recovering**: press the box next to the trap. You'll be asked which character if you have more than one.
- **Sharing a marker** (only with **GM only, plus a marker**): press the share icon, tick the players under **Show the marker to:**, and press **Share**. They see the trap's marker and it appears in their My Traps.
- A trap you can see can also be targeted (T) to list it here.

### For the GM: Placed Traps

The GM's window is called **Placed Traps**. It lists the traps set from trap kits on this scene.

- **Status**: change it from the list.
- **Eye**: which players know about the trap, for example after a successful Search. Tick them and press **Save**. Players only see the traps they know.
- **Show on the scene**: pans to the trap's token.

## Settings

In **Configure Settings → Axecleft's Traps, Poisons, and Diseases**.

| Setting | Default | What it does |
|---|---|---|
| **Trap kits: GM approves** | On | A player setting or recovering a trap sends a request that the GM approves on its chat card. Off: it happens at once. |
| **Trap kits: setting takes time** | On | Setting takes 1 minute per CR (shown on the card; game time isn't advanced). Off: traps are set at once. Recovering always takes 1 minute per CR. |
| **Trap kits: who sees a placed trap** | GM only, plus a marker for the player who set it | **GM only**: a hidden token. **Everyone**: a visible token (the GM decides whether creatures spot it). **GM only, plus a marker**: a hidden token, and the player who set it sees a marker they can share (My Traps). |
| **Trap kits: placed traps can be recovered** | On | Off: once placed, a trap stays until triggered or disabled. |
| **Trap kits: compendiums for crafting** | Blank | Actor compendiums whose mechanical traps can be crafted as kits, separated by commas (for example `traps-and-poisons.traps`). Blank: every compendium with trap actors. |
| **Trap kits: crafting progress** | Silver pieces (SRD) | The coin each week's Craft (trapmaking) progress is counted in: the check × the DC in **Copper pieces** (10 times slower), **Silver pieces** (SRD), **Gold pieces** (10 times faster) or **Platinum pieces** (100 times faster). The SRD's silver makes costly traps take years: a Wide-Mouth Spiked Pit Trap (7,200 gp, DC 25) takes 288 weeks for a crafter whose check is 10. |
