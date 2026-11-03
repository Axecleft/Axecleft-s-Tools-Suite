# Les listes de trésors et l'onglet Listes

Vos propres entrées pour les modules d'Axecleft se trouvent dans un journal nommé **Axecleft's Treasure Lists** : gemmes, objets d'art, matériaux et malédictions personnalisés, corrections de prix, et les entrées intégrées que vous avez désactivées. Chaque liste est une page avec un tableau. Modifiez les tableaux directement dans le journal, ou utilisez l'onglet **Listes** du Générateur de trésors.

Les noms des pages et des colonnes sont donnés ci-dessous en anglais, avec leur traduction entre parenthèses ; dans votre monde, le journal les affiche dans sa langue.

> **<img width="964" height="805" alt="image" src="https://github.com/user-attachments/assets/357aa51d-aae2-4ce5-af94-2646a7da8357" />**

## Les pages

| Page | Module | Colonnes |
|---|---|---|
| **Custom Gems** (Gemmes personnalisées) | Gemmes | Gem, Appraises As, Base Value (gp), Image, Description |
| **Custom Art & Jewelry** (Art et bijoux personnalisés) | Gemmes | Object, Construction, Art or Jewelry, Weight (lb.), Image, Description |
| **Custom Materials** (Matériaux personnalisés) | Gemmes | Material, Used For, Min Value Level, Max Value Level, Name As |
| **Custom Embellishment Gems** (Gemmes d'ornement personnalisées) | Gemmes | Gem, Min Value Level, Max Value Level |
| **Custom Premade Art** (Art tout fait personnalisé) | Gemmes | Vos propres objets d'art et livres tout faits, générés exactement tels qu'ils sont écrits. Voir [ci-dessous](#custom-premade-art). |
| **Custom Curses** (Malédictions personnalisées) | Générateur de trésors | Curse, Table, Weight, Items, What it does, Penalties (buff). Voir [Objets maudits](fr-Objets-maudits#malédictions-personnalisées). |
| **Price Corrections** (Corrections de prix) | Générateur de trésors | Item, Compendium, Price (gp), Note |
| **Disabled Entries (module)** (Entrées désactivées) | chaque module | Name, List |

Le journal est écrit dans la langue de votre monde, noms des pages compris. Chaque page explique ses colonnes, une par ligne, et se termine par une ligne d'exemple dans un tableau séparé qui n'est jamais lu. Gardez les en-têtes de colonnes tels quels : les modules relisent les tableaux grâce à eux. Quand la langue du monde change, les pages sont réécrites la prochaine fois que le MJ charge le monde, en gardant vos lignes ; une page dont les en-têtes de colonnes ont été modifiés à la main est laissée telle quelle.

### Gemmes personnalisées

- **Appraises As** (S'estime comme) est le nom affiché avant que la gemme soit estimée : une *opale œil-de-dragon* s'estime comme *opale*.
- **Base Value** (Valeur de base) est l'une des valeurs de gemmes du SRD : 10, 50, 100, 500, 1 000 ou 5 000.
- **Image** et **Description** sont facultatives.

### Art et bijoux personnalisés

- **Construction** (Fabrication) décide en quels matériaux l'objet peut être fait :
  - **Molded** (Moulé / coulé) : métaux, verre, céramique ;
  - **Carved** (Sculpté) : bois, os, ivoire, pierre ;
  - **Clothing** (Vêtements) : tissu, fourrure, cuir brut ;
  - **Book** (Livre) : papier, cuir, soie.
- **Art or Jewelry** (Art ou bijou) décide dans quel onglet il apparaît.

### Matériaux personnalisés

- **Used For** (Utilisé pour) liste les fabrications qui lui conviennent (Molded, Carved, Clothing, Book), séparées par des virgules.
- Les tirages aléatoires n'utilisent un matériau qu'aux valeurs d'art comprises entre son **Min** et son **Max Value Level** (niveau de valeur, de 1 à 12). Les niveaux de valeur sont les 12 lignes de la table Objets d'art du SRD, les mêmes que la liste **Valeur** des onglets [Objets d'art et Bijoux](fr-Gemmes-art-et-bijoux#objets-dart-et-bijoux).
- **Name As** (Nommé) est facultatif : un matériau « Loup » nommé « fourrure de loup » donne « Cape en fourrure de loup ».

### Gemmes d'ornement personnalisées

Les gemmes qui peuvent orner l'art et les bijoux (« serti de rubis », « incrusté de jade »). Les tirages aléatoires les utilisent aux valeurs d'art comprises entre Min et Max Value Level (1 à 12).

<a id="custom-premade-art"></a>
### Art tout fait personnalisé

Des pièces toutes faites, comme le trésor d'un livre que vous possédez, générées exactement telles que vous les écrivez, sans matériau, gemme ni qualité ajoutés. Donnez à chacune sa valeur en dés ou en nombre, et si vous voulez son créateur et sa source. L'art aléatoire inclut des pièces toutes faites aussi souvent que le dit le paramètre **Pièces toutes faites dans l'art aléatoire (%)** (voir [Gemmes, art et bijoux](fr-Gemmes-art-et-bijoux#module-settings)).

### Corrections de prix

Corrigez le prix d'objets de compendium sans modifier le compendium.
- **Compendium** est l'identifiant du compendium, par exemple `D35E.magicitems`. Laissez vide pour n'importe quel compendium.
- Les corrections s'appliquent aux trésors générés et au stock des marchands.
- L'Armurerie et les Curiosités fournissent leurs propres corrections pour des prix erronés connus des compendiums de D35E ; elles sont listées comme lignes intégrées.

### Entrées désactivées

Les entrées intégrées qui ne doivent jamais servir, une page par module. **List** est la liste à laquelle elles appartiennent (par exemple `gems`, `curses`), ou `any`. Une entrée désactivée n'est jamais tirée ni proposée.

## L'onglet Listes

**Où :** Générateur de trésors → onglet **Listes**.

> **<img width="595" height="1062" alt="image" src="https://github.com/user-attachments/assets/3c60ee04-825a-4a85-872b-b269ce484531" />**

- **Liste** : choisissez une liste. Elle montre combien d'entrées vous avez ajoutées et combien d'entrées intégrées vous avez désactivées.
- **Ajouter à la liste** : un formulaire avec les colonnes de cette liste. Survolez l'étiquette d'une colonne pour voir ce qu'elle contient ; les notes de la liste s'affichent sous les champs. Remplissez-le et appuyez sur **Ajouter à [liste]**.
- **Vos entrées** : vos lignes, chacune avec **Retirer**. Les longues listes montrent les premières entrées, « …et n de plus (voir le journal) ».
- **Désactiver des entrées intégrées** : tapez le nom d'une entrée intégrée, choisissez **Cette liste** ou **Toutes les listes de [module]**, et appuyez sur **Désactiver**. Les entrées désactivées vont sur la page « Disabled Entries ».
- **Ouvrir le journal des listes** : ouvre le journal.

Une visite guidée de l'onglet Listes se trouve dans le menu **⋮** de la fenêtre (**Visite de cet onglet**). Voir [Visites guidées](fr-Générateur-de-trésors#tours).

## La bibliothèque partagée

Chaque modification est aussi enregistrée dans un fichier de bibliothèque, **Data/axecleft-treasure/treasure-lists.json**, dans votre dossier Data de Foundry. Les mises à jour des modules n'y touchent jamais, et chaque monde du serveur le charge au démarrage : vos listes survivent donc aux mises à jour et vous suivent d'un monde à l'autre. Le chargement ne fait qu'ajouter des lignes (reconnues par leur nom) ; il ne supprime jamais rien.

- **Enregistrer dans la bibliothèque** / **Charger depuis la bibliothèque** : enregistrer ou charger à la main.
- **Exporter** / **Importer** (*Un autre serveur Foundry*) : Exporter télécharge toutes vos listes, pour chaque module actif, dans un fichier. Importer fusionne un tel fichier (il ne fait qu'ajouter des entrées). Les fichiers exportés par Gemmes 1.14 fonctionnent aussi.

Paramètres des modules (**Configurer les paramètres**) :
- **Bibliothèque partagée des listes de trésors** : **Automatique** (enregistre à chaque modification et charge au démarrage) ou **Manuel** (seulement avec les boutons Enregistrer / Charger).
- **Dossier de la bibliothèque partagée** : le dossier de votre dossier Data de Foundry qui contient `treasure-lists.json`.
