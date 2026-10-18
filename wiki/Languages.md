# Languages

Axecleft's modules show their windows, chat cards and generated item names in Foundry's language: the **Language** each user picks in **Configure Settings → Core**. Text that isn't translated yet stays in English.

| Language | Status |
|---|---|
| English | Complete |
| French (`fr`) | Translated: windows, chat cards, settings, and generated names (with French grammar) |
| Spanish (`es`), Portuguese (`pt-BR`, `pt-PT`) | Grammar drafts only, not active yet. Translators welcome. |

Brazilian Portuguese falls back to European Portuguese (and the other way round), then to English.

The **User Guide** button opens this wiki in Foundry's language when a translation exists (French, Spanish, Portuguese), otherwise in English. The Spanish and Portuguese guides are ready even though the modules themselves still show English: they give each button's English name with its translation.

## Worlds in other languages

### Translated compendiums (Babele)

The modules work with compendiums translated by Babele. Items keep their English name for matching, so a French *Épée longue* is still recognized as a Longsword: by Babele's original name, an `en:` tag, or the Babele translation file.

### English names for your own items

In a world that isn't in English, naming or renaming an item asks for its **English name**. It's optional: **Skip**, or **Don't ask again**. Item sheets also get an **English name** button in the header.

The English name lets the generators, merchants and crafting recognize the item. Every item the modules make keeps its English name too, so translated names never break anything.

### What stays in English

- **Shop tags** (`Shop: Scroll`), so every world reads them. See [Shop Tags](Shop-Tags).
- **Construction lines** in item descriptions, for [crafting](Crafting#how-requirements-are-found). Translated SRD items use their English line; your own items need the line in English.
- **Damage boxes** in the [Poison & Disease Creator](Poison-and-Disease-Creator) (`1d6 Con`, `2d12 hp`).

## Translating the modules

Each module has a `lang` folder with the files to translate. Its **README.md** explains everything; in short:

| File | What it holds |
|---|---|
| `template.json` | Every text: `"English text": "translation"`. Copy it to `<code>.json` (`fr.json`, `es.json`…). |
| `<code>.grammar.json` | The language's grammar: the word for "and", articles, gender agreement, elision, contractions, capitals. `grammar.template.json` explains every line. The same file goes in every module. |
| `words.template.json` | Every English word that goes into names the module builds: abilities, materials, base weapons, gems, art objects, shop-name words. Copy it to `<code>.words.json`. |
| `languages.json` | The languages the module ships, for example `["fr"]`. A language is only used once it's listed here. |

Rules for the text file:
- Keep anything in curly braces exactly as it is: `{n}`, `{name}`, `{gp}`. You can move them within the sentence.
- Keep HTML tags such as `<strong>…</strong>` around the matching words.
- Leave a line empty (`""`) to keep the English for now.
- Lines starting with `__` only show which script the texts come from. Leave them empty.

Texts shared by several modules (Treasure Generator, Merchant Generator, Crafting, Tools) appear in each module's template. Translate them once and copy them between files.

### Names built from parts

Some texts are patterns for the names the modules build, for example:

`{bonus} {adj} {masterwork} {material} {base}[ of {of:and}][ ({size})]` → "+1 Flaming Keen Longsword of Speed (Small)"

Put the parts in your language's order and translate the words around them. French: `{base:head} {masterwork} {material} {bonus} {adj}[ {of:and}][ ({size})]`.

| Part | Meaning |
|---|---|
| `{part}` | A word or several. |
| `{part:and}` / `{part:or}` | A list: "A, B and C". |
| `{part:a}` / `{part:the}` | With an article that agrees with the word. `{part:lower}`: lower case. |
| `{part:head}` | The noun the other words agree with. |
| `[ … ]` | An optional piece, left out when a part inside it is empty. |

### The words file

| Write | Meaning |
|---|---|
| `"Longsword": "Épée longue (f)"` | The text and its gender (`m` or `f`). |
| `"Longsword": "(f)"` | The gender only; Babele's name stays. |
| `"Keen": "acéré/acérée/acérés/acérées"` | A word that agrees with the noun: masculine / feminine / masculine plural / feminine plural. |
| `"Flaming": "de feu (of)"` | A word that moves to another part of the name (`of` or `adj`). |
| `"Shears": "Ciseaux (m, pl)"` | Markers combine. |

Send finished files to the author through the module's GitHub page, so they ship with the next release.
