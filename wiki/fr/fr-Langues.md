# Langues

Les modules d'Axecleft affichent leurs fenêtres, leurs cartes de chat et les noms des objets générés dans la langue de Foundry : la **Langue** que chaque utilisateur choisit dans les paramètres de base de Foundry (**Configurer les paramètres**). Le texte qui n'est pas encore traduit reste en anglais.

| Langue | État |
|---|---|
| Anglais | Complet |
| Français (`fr`) | Traduit : fenêtres, cartes de chat, paramètres, et noms générés (avec la grammaire française) |
| Espagnol (`es`), portugais (`pt-BR`, `pt-PT`) | Brouillons de grammaire seulement, pas encore actifs. Les traducteurs sont les bienvenus. |

Le portugais du Brésil se replie sur le portugais européen (et inversement), puis sur l'anglais.

Le bouton **Guide d'utilisation** ouvre ce wiki dans la langue de Foundry quand une traduction existe (français, espagnol, portugais), sinon en anglais.

## Mondes dans d'autres langues

### Compendiums traduits (Babele)

Les modules fonctionnent avec les compendiums traduits par Babele. Les objets gardent leur nom anglais pour la reconnaissance : une *Épée longue* française est donc toujours reconnue comme Longsword, par le nom d'origine de Babele, une étiquette `en:`, ou le fichier de traduction de Babele.

### Noms anglais de vos propres objets

Dans un monde qui n'est pas en anglais, nommer ou renommer un objet demande son **Nom anglais**. C'est facultatif : **Passer**, ou **Ne plus demander**. Les fiches d'objet reçoivent aussi un bouton **Nom anglais** dans leur en-tête.

Le nom anglais permet aux générateurs, aux marchands et à l'artisanat de reconnaître l'objet. Chaque objet créé par les modules garde aussi son nom anglais : les noms traduits ne cassent donc jamais rien.

### Ce qui reste en anglais

- Les **étiquettes de boutique** (`Shop: Scroll`), pour que tous les mondes les lisent. Voir [Étiquettes de boutique](fr-Étiquettes-de-boutique).
- Les **lignes de fabrication** dans les descriptions des objets, pour l'[artisanat](fr-Artisanat#comment-les-conditions-sont-trouvées). Les objets du SRD traduits utilisent leur ligne anglaise ; vos propres objets ont besoin de la ligne en anglais.
- Les **cases de dégâts** du [Créateur de poisons et maladies](fr-Créateur-de-poisons-et-maladies) (`1d6 Con`, `2d12 hp`).
- Les **mots-clés des malus** des [malédictions personnalisées](fr-Objets-maudits#malédictions-personnalisées) et les **mots de métamagie** (`+empower`…).

## Traduire les modules

Chaque module a un dossier `lang` avec les fichiers à traduire. Son **README.md** explique tout ; en bref :

| Fichier | Ce qu'il contient |
|---|---|
| `template.json` | Tous les textes : `"English text": "traduction"`. Copiez-le en `<code>.json` (`fr.json`, `es.json`…). |
| `<code>.grammar.json` | La grammaire de la langue : le mot pour « et », les articles, l'accord en genre, l'élision, les contractions, les majuscules. `grammar.template.json` explique chaque ligne. Le même fichier va dans chaque module. |
| `words.template.json` | Chaque mot anglais qui entre dans les noms que construit le module : propriétés, matériaux, armes de base, gemmes, objets d'art, mots des noms de boutique. Copiez-le en `<code>.words.json`. |
| `languages.json` | Les langues fournies par le module, par exemple `["fr"]`. Une langue n'est utilisée qu'une fois listée ici. |

Règles pour le fichier de textes :
- Gardez tel quel tout ce qui est entre accolades : `{n}`, `{name}`, `{gp}`. Vous pouvez les déplacer dans la phrase.
- Gardez les balises HTML comme `<strong>…</strong>` autour des mots correspondants.
- Laissez une ligne vide (`""`) pour garder l'anglais pour l'instant.
- Les lignes qui commencent par `__` indiquent seulement de quel script viennent les textes. Laissez-les vides.

Les textes partagés par plusieurs modules (Générateur de trésors, Générateur de marchands, Artisanat, Outils) apparaissent dans le modèle de chaque module. Traduisez-les une fois et copiez-les d'un fichier à l'autre.

### Noms construits à partir d'éléments

Certains textes sont des modèles pour les noms que construisent les modules, par exemple :

`{bonus} {adj} {masterwork} {material} {base}[ of {of:and}][ ({size})]` → « +1 Flaming Keen Longsword of Speed (Small) »

Mettez les éléments dans l'ordre de votre langue et traduisez les mots autour. En français : `{base:head} {masterwork} {material} {bonus} {adj}[ {of:and}][ ({size})]`.

| Élément | Sens |
|---|---|
| `{part}` | Un mot ou plusieurs. |
| `{part:and}` / `{part:or}` | Une liste : « A, B et C ». |
| `{part:a}` / `{part:the}` | Avec un article qui s'accorde avec le mot. `{part:lower}` : en minuscules. |
| `{part:head}` | Le nom avec lequel s'accordent les autres mots. |
| `[ … ]` | Un morceau facultatif, omis quand un élément qu'il contient est vide. |

### Le fichier de mots

| Écrire | Sens |
|---|---|
| `"Longsword": "Épée longue (f)"` | Le texte et son genre (`m` ou `f`). |
| `"Longsword": "(f)"` | Le genre seulement ; le nom de Babele reste. |
| `"Keen": "acéré/acérée/acérés/acérées"` | Un mot qui s'accorde avec le nom : masculin / féminin / masculin pluriel / féminin pluriel. |
| `"Flaming": "de feu (of)"` | Un mot qui va dans une autre partie du nom (`of` ou `adj`). |
| `"Shears": "Ciseaux (m, pl)"` | Les marqueurs se combinent. |

Envoyez les fichiers terminés à l'auteur par la page GitHub du module, pour qu'ils soient inclus dans la version suivante.
