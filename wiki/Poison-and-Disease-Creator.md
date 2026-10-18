# Poison & Disease Creator (Traps, Poisons, and Diseases)

**Where:** **Axecleft's Tools → Poison & Disease Creator**. GM only.

Create a new poison or disease. Each one is made as two D35E items:
- an **attack** item, which rolls the save and applies the effects;
- a **consumable** item, the vial or dose a character carries, uses and buys.

> **<img width="973" height="952" alt="image" src="https://github.com/user-attachments/assets/ed1f0366-fd21-4a10-ad47-4640c5a9dff8" />**

## The form

| Control | What it does |
|---|---|
| **Template** | Start from an existing poison or disease to fill in the form, then change only what you need. Grouped as **Module poisons**, **Module diseases** and **Your custom poisons & diseases**. **— None (start blank) —** clears it. |
| **Type** | **Poison** or **Disease**. The form changes to fit. |
| **Name** | For example *Swamp Adder Venom*. |
| **Delivery** | **Contact**, **Ingested**, **Inhaled** or **Injury**. |
| **Saving throw** | **Fortitude**, **Reflex** or **Will**, and the save DC. |
| **Price (gp)** | The consumable's price. |
| **Notes** | An optional description. |
| **Also add to Items** | Copies both items into the **Custom Poisons & Diseases** Items folder too. |

**Poison only:**

| Control | What it does |
|---|---|
| **Initial damage** | On exposure, on a failed save. For example `1d6 Con`, `2d12 hp`, or `unconsciousness 1 minute`. |
| **Secondary damage** | 1 minute later, on a second failed save. For example `2d6 Con` or `1d4 Con + 1d3 Wis`. |

**Disease only:**

| Control | What it does |
|---|---|
| **Incubation** | For example `1d3 days`. |
| **Damage (each day)** | After the incubation, each day on a failed save. |
| **Recovery** | **Two successful saves in a row** (SRD) or **Three successful saves in a row**. |

### What you can type in the damage boxes

Write the effects in English, whatever the world's language.

| Effect | Example |
|---|---|
| Ability damage | `1d6 Con` |
| Ability drain (permanent) | `1 Con drain` |
| Hit point damage | `2d12 hp` |
| No effect | `0` |
| Condition, with an optional duration | `unconsciousness 2d4 hours`, `paralysis 2d6 minutes` |
| Several effects | Join them with `+`: `1d4 Con + 1d3 Wis` |

Conditions it knows: unconsciousness, paralysis, stunned, shaken, frightened, petrified, prone, blindness, sickened, fatigued, exhausted, deafened, dazzled, nauseated. Each applies its D35E condition or buff.

Anything else is posted to chat as a message when the effect happens.

### Template effects

A template may carry effects the form doesn't show. They're listed under **The template also has these effects**, each with a **Keep** box.

### The preview

The bottom of the form shows what will be made, for example:
- **Will create:** *Poison, Swamp Adder Venom* (attack) and *Swamp Adder Venom* (consumable). A disease's attack is named *Disease, …*.
- **Initial** (on exposure, failed save) and **Secondary** (1 minute later, second failed save), each with its effects.
- Then the poison runs its course and ends. The **Poisoned** buff lasts 10 rounds; conditions it caused last their own duration.
- For a disease: **After {incubation}, each day (failed save)**, the daily damage, and the recovery rule.

Check the preview before you press **Create**.

## Where it's saved

- In the world compendium **Custom Poisons & Diseases**, created the first time you use the creator. Attacks go in its **Poisons** or **Diseases** folder, consumables in **Consumables**.
- With **Also add to Items**, also in the **Custom Poisons & Diseases** folder of the Items sidebar.
- If an item of the same name exists, you're asked whether to replace it.
- If the compendium is locked, unlock it and try again.

Your custom poisons and diseases appear in the creator's **Template** list, so you can copy and change them later.

## Notes

- A poison needs an initial or a secondary effect. A disease needs its damage and its incubation period. The save DC must be above 0.
- Poison consumables from the module's compendiums are stocked by merchants (see [Merchant Generator](Merchant-Generator#item-sources-tab)).
