# Gems, Art Objects and Jewelry

**Where:** Treasure Generator → **Gems**, **Art Objects** and **Jewelry** tabs (from Axecleft's Gemstones).

Every choice can be set by hand or left on **Random**. Each tab ends with **How many** (*for each target*) and the [Put items in](Treasure-Generator#put-items-in) box.

## Gems

> **<img width="606" height="710" alt="image" src="https://github.com/user-attachments/assets/b3fc91c0-c107-4322-aa87-1a6bfa25548e" />**

| Control | What it does |
|---|---|
| **Gem lists** | Which gem lists to roll from: **SRD** (67 gems), **Homebrew** (376 more varieties) and **Custom** (your own, from the [Treasure Lists](Treasure-Lists)). The count of each is shown. |
| **Base value** | One of the SRD gem values (10, 50, 100, 500, 1,000 or 5,000 gp, with the SRD's dice), or **Random (SRD odds)**. |
| **Gem** | A specific gem from the ticked lists, or **Random**. The list follows the base value. |
| **Size & quality** | **Use the homebrew size and quality variations**: when ticked, gems also get a size and a quality that multiply their value. |
| **Size** | Tiny (×0.25), Small (×0.5), Standard (×1), Large (×2.5), Huge (×5), or **Random (5/15/60/15/5)**. |
| **Quality** | Flawed (×0.25), Common (×0.5), Average (×1), Fine (×2.5), Exceptional (×5), or **Random (5/15/60/15/5)**. |

The preview line shows the **true value**: the dice × size × quality. Players see a rough value, and the gem's simpler "appraises as" name (a *Dragon's Eye Opal* shows as *Opal*), until it's appraised.

These gem lists and the size/quality choice are also used for gems rolled on the [Treasure by Level](Treasure-by-Level) tab.

## Art Objects and Jewelry

> **<img width="604" height="747" alt="image" src="https://github.com/user-attachments/assets/712fa48a-a89a-4091-ba2a-0d349de17388" />**

| Control | What it does |
|---|---|
| **Value** | One of the SRD's 12 art values, from **1: 1d10×10 gp** to **12: 2d6×1,000 gp**, or **Random (SRD odds)**. |
| **Object** (Art) / **Piece** (Jewelry) | What it is (an amphora, a holy symbol, a tiara…), or **Random**. Each object has a construction: Molded, Carved, Clothing or Book. |
| **Material** | What it's made of. The list only offers materials that suit the object's construction, grouped by whether they suit the chosen value. **Random (suits the value)** picks a fitting one. Some objects have their own material, shown as "(part of the object)". |
| **Gemstone** | A gem set into it ("set with ruby", "inlaid with jade"), **None**, or **Random**. Random is more likely at higher values. Each gem shows the values it appears at. |
| **Quality** | **Use the homebrew quality variations**: when ticked, the piece gets a workmanship that multiplies its value. |
| **Workmanship** | Junk (×0.25), Common (×0.5), Average (×1), Fine (×2.5), Masterpiece (×5), or **Random (5/15/60/15/5)**. |
| **Treasure by Level** (Art tab only) | **Art rolled by level can be jewelry too**: art rolled on the Treasure by Level tab can come out as jewelry. |

The preview shows the value range and how many combinations are possible. The suite has 221 objects, 120 materials and 30 embellishment gems.

### Names

Names are built from the parts, for example *Fine, Silver Holy Symbol set with Topaz*, or *Wolf Fur Cloak*. The description says how it was made: "a holy symbol cast and worked in silver, set with topaz". In other languages the name follows that language's word order (see [Languages](Languages)).

## Adding your own

Your own gems, art objects, materials and embellishment gems go on the [Treasure Lists](Treasure-Lists) pages: **Custom Gems**, **Custom Art & Jewelry**, **Custom Materials** and **Custom Embellishment Gems**.

## Module settings

In **Configure Settings → Axecleft's Gemstones**:
- **Gem size & quality variations**: the default for the Size & quality tick box.
- **Art & jewelry quality variations**: the default for the Quality tick box on the Art Objects and Jewelry tabs.
- **Premade pieces in random art (%)**: how often random art is a premade piece (5% by default; 0 = never).
- **Full resale price for gems, jewelry and art** (on by default): gems, jewelry and art objects are trade goods, so merchants buy and sell them at their full value (D35E's **Full Resale Price** on the item). It applies to generated pieces and to gems taken from the module's compendiums. Off: merchants buy them at half price, like other items.

Turn the variations off for plain SRD values.

## Value rolls and base values

**Where:** Configure Settings → Axecleft's Gemstones → **Value rolls and base values** (GM only).

Each gem, art object and piece of jewelry has a **base value** (what it looks to be worth, until it is appraised) and a **value roll** (its true value, rolled when it reaches a character). The **Gem and art values** window lists the 6 gem values (10 gp to 5,000 gp) and the 12 art values, each with the SRD's roll and base beside your own boxes.

- Leave a box blank to keep the SRD's.
- A roll can use dice and `max()`, `min()`, `floor()`, `ceil()` and `round()`: `max(10, 4d4)` is never below 10.
- **A rolled value is never below the base value**: applies that to every gem, art object and piece of jewelry.
- Size and quality variations multiply the value rolled.
- Gems taken from the module's compendiums roll with the same formulas.
- **SRD values** clears your boxes. Pieces already made keep their values.
