# L'Atelier des Curiosités (Curiosités d'Axecleft)

**Où :** Générateur de trésors → onglet **Curiosités**.

Créez des potions, parchemins, baguettes et grimoires à partir de n'importe quel sort de vos sources de sorts, et des tatouages psioniques, pierres psioniques et dorjés à partir de vos sources de pouvoirs. Vous pouvez aussi créer des anneaux, sceptres, bâtons et objets merveilleux précis, ou en tirer au hasard. Les prix suivent le SRD. Le trésor commence non identifié.

> **<img width="596" height="1072" alt="image" src="https://github.com/user-attachments/assets/8962409c-1cf8-4a43-bcdb-50a92cdc6fbb" />**

## Créer

Choisissez ce que vous créez. Le reste de l'onglet s'adapte.

| Créer | Remarques |
|---|---|
| **Potion ou huile** | Un sort, de niveau 3 ou moins (SRD). Pas de sorts de portée personnelle. |
| **Parchemin (un sort)** | Un sort. |
| **Parchemin (plusieurs sorts)** | Un seul parchemin qui contient plusieurs sorts. |
| **Baguette** | Un sort, de niveau 4 ou moins (SRD), 50 charges. |
| **Grimoire** | Les sorts que vous listez, ou des sorts aléatoires. |
| **Tatouage psionique**, **Pierre psionique (un pouvoir)**, **Pierre psionique (plusieurs pouvoirs)**, **Dorjé** | Les versions psioniques (seulement si Psioniques est activé). |
| **Cristal condensateur** | Un cristal qui stocke des points psi. |
| **Couronne psionique** | Une couronne psionique du SRD, ou la vôtre. |
| **Anneau, sceptre, bâton ou objet merveilleux précis** | N'importe quel objet de ce genre de vos sources d'objets. |
| **Objet aléatoire (tables du SRD)** | Un objet aléatoire de la catégorie et de la puissance choisies. |

## Sorts et pouvoirs

| Commande | Effet |
|---|---|
| **Sorts** (ou **Pouvoirs**) | Un par ligne. Ajoutez **@** et un niveau de lanceur de sort pour l'augmenter, et **+** pour la métamagie : `Boule de feu @10 +empower`. Les noms peuvent être dans la langue de votre monde. Ou utilisez le choix des sorts ci-dessous. |
| **Type de parchemin** | **Profane si le sort est profane, sinon divin**, **Profane**, ou **Divin**. |
| **Niveau de lanceur de sort** | Vide : le niveau de lanceur de sort le plus bas qui puisse le lancer. Un niveau plus élevé augmente le prix, comme le fait la formule du SRD. |
| **Limites du SRD** | **Les ignorer (MJ)** : permet tout niveau de sort, les sorts de zone en potions, et les sorts personnels. Pour vos propres objets en règle maison. |

Une ligne sous les commandes vérifie vos sorts pendant la saisie, et dit ce qui sera créé ou ce qui ne va pas.

Mots de métamagie (en anglais, quelle que soit la langue) : `+empower` (Extension d'effet), `+enlarge` (Extension de portée), `+extend` (Extension de durée), `+heighten N` (Augmentation d'intensité, au niveau N), `+maximize` (Quintessence des sorts), `+quicken` (Incantation rapide), `+silent` (Incantation silencieuse), `+still` (Incantation statique), `+widen` (Extension de zone d'effet). Chacun augmente le niveau effectif du sort, donc le prix de l'objet et son niveau de lanceur de sort minimal. Les limites de niveau de l'objet comptent la métamagie.

### Le choix des sorts

> **[Capture : le choix des sorts]**

| Commande | Effet |
|---|---|
| **Rechercher** | Réduit la liste pendant la saisie. |
| Liste | D'où viennent les niveaux : la règle propre à l'objet (**Niveau le plus bas (prix du SRD)**, **Selon le type de parchemin** pour les parchemins, **La classe du grimoire** pour les grimoires), **Profane**, **Divin**, ou une classe. |
| Groupes | Tous les sorts de vos sources de sorts (les pouvoirs pour les objets psioniques), par niveau. Cliquez sur un niveau pour l'ouvrir ou le fermer, et sur un sort pour le choisir. Seuls les sorts que l'objet peut contenir sont listés : potions jusqu'au niveau 3 sans sorts personnels ni de zone, baguettes jusqu'au niveau 4, etc. (tous avec **Limites du SRD : Les ignorer**). |
| **Niveau de lanceur de sort** | Pour le sort choisi. Son minimum est affiché ; vide, c'est le minimum. |
| **Métamagie** | Cochez les dons à appliquer. **Intensifier au niveau** prend le niveau. |
| **Ajouter à l'objet** | Met le sort dans la case **Sorts** sous forme de ligne (`Boule de feu @12 +empower`). Une potion, une baguette ou un parchemin à un sort contient un seul sort : l'ajout le remplace ; les parchemins à plusieurs sorts et les grimoires ajoutent une ligne. |
| **Dans l'objet** | Les sorts de la case, chacun avec ✕ pour le retirer. |

Le choix des sorts et la case travaillent ensemble : ce que vous ajoutez apparaît dans la case, et ce que vous tapez apparaît dans la liste.

Pour un grimoire, choisir une classe dans la liste règle aussi **Classe du grimoire**, pour que les sorts aillent dans le grimoire de cette classe. Taper une autre classe dans **Classe du grimoire** remet la liste sur **La classe du grimoire**.

## Grimoires

> **<img width="602" height="1011" alt="image" src="https://github.com/user-attachments/assets/72c44ce0-3b3c-4eca-982f-d722d16f1e17" />**

| Commande | Effet |
|---|---|
| **Sorts** | **Les sorts que j'indique** (dans la case Sorts) ou **Sorts aléatoires**. |
| **Niveau de sort maximal** | Avec des sorts aléatoires : de 0 (tours de magie seulement) à 9. |
| **Nombre de sorts** | Avec des sorts aléatoires : niveaux aléatoires de 0 au maximum, sans doublons. S'arrête plus tôt si le livre est plein (100 pages). |
| **Classe du grimoire** | La classe dans le grimoire de laquelle vont les sorts quand le propriétaire les apprend (Magicien par défaut). |

## Objets psioniques

> **<img width="600" height="841" alt="image" src="https://github.com/user-attachments/assets/c6b143dd-bc7f-44b1-b2b1-9f2d43657c88" />**

| Commande | Effet |
|---|---|
| **Capacité** (cristal condensateur) | De 1 à 17 points psi, avec son prix. **Chargé** : le cristal commence plein. |
| **Couronne psionique** | Une couronne psionique du SRD, avec ses points psi, son niveau de manifestation et son prix, ou **Personnalisée : les pouvoirs que j'indique** (tapez les pouvoirs dans la case Pouvoirs). |

## Objets précis et aléatoires

| Commande | Effet |
|---|---|
| **Objet** | Tapez pour chercher dans vos sources d'objets un anneau, un sceptre, un bâton ou un objet merveilleux. |
| **Catégorie** et puissance | Pour **Objet aléatoire** : la catégorie (potion, anneau, sceptre, parchemin, bâton, baguette, objet merveilleux) et **Faible**, **Moyen** ou **Puissant**. |
| **Diffuse de la lumière** | **Selon les réglages de génération (aléatoire)**, **Non** ou **Oui**. Anneaux, sceptres, bâtons et objets merveilleux uniquement. L'apparence suit l'école de magie de l'objet. |
| **Intelligent** | **Selon les réglages de génération (aléatoire)**, **Non**, ou **Oui (tirer son esprit et ses pouvoirs)**. Demande D35E 3.1 ou plus récent ; c'est donc masqué sous Foundry 11. |
| **Maudit** | **Non**, **Malédiction aléatoire (tables du SRD)**, un type de malédiction, ou l'une de vos malédictions personnalisées. Voir [Objets maudits](fr-Objets-maudits). |

## Combien

**Combien** en créer (1–20). **Non identifié** : les objets commencent non identifiés (les joueurs voient « Potion », « Parchemin », « Baguette »…).

## MJ seulement

> **<img width="603" height="400" alt="image" src="https://github.com/user-attachments/assets/8fd72efc-470a-44cd-9dc7-48dbd3a5aff1" />**

| Commande | Effet |
|---|---|
| **Niveau maximal des potions** | SRD : niveau 3. Augmentez-le pour que le MJ puisse créer ici des potions et tatouages de sorts et pouvoirs de plus haut niveau. L'artisanat des joueurs reste toujours au niveau 3. |
| **Niveau maximal des baguettes** | SRD : niveau 4. Augmentez-le de la même façon pour les baguettes et les dorjés. L'artisanat des joueurs reste toujours au niveau 4. |

Réglez [Placer les objets dans](fr-Générateur-de-trésors#placer-les-objets-dans) et appuyez sur **Générer**.
