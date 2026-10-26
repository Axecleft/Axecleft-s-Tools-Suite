# La Forge (Armurerie d'Axecleft)

**Où :** Générateur de trésors → onglet **Forge**.

Créez à la main des armes, armures, boucliers et munitions. Chaque choix peut être **Aléatoire** : les parties aléatoires sont tirées sur les tables du SRD pour la catégorie choisie. Les prix suivent le SRD. Les objets magiques commencent non identifiés, sauf si vous cochez **Identifié**.

> **<img width="603" height="1004" alt="image" src="https://github.com/user-attachments/assets/49cb92a4-a53f-4833-8ab6-a2813ea42136" />**

## L'objet

| Commande | Effet |
|---|---|
| **Type** | **Arme**, **Armure**, **Bouclier**, **Munitions**, ou **Aléatoire**. |
| **Objet de base** | L'arme ou l'armure de départ (épée longue, chemise de mailles, flèches…), ou **Aléatoire (tables du SRD)**. Vos propres objets de vos sources d'objets sont listés aussi. |
| **Catégorie** | **Faible**, **Moyen**, **Puissant**, ou **Épique (tables épiques du SRD)** (seulement si Objets épiques est activé). Utilisée pour toute altération ou propriété **Aléatoire**. |
| **Altération** | **Aucun**, **Aléatoire (selon la catégorie)**, **+1** à **+5**, et **+6** à **+20 (épique)** quand les objets épiques sont autorisés. |
| **Épique** | **Autoriser les objets épiques** : altération au-delà de +5 et total au-delà de +10, aux prix épiques du SRD (×10). Affiché seulement si **Objets épiques** est activé dans les [Réglages de génération](fr-Réglages-de-génération#campagne). |
| **De maître** | Le rendre de maître. Les objets magiques, et les objets en adamantium, mithral, ébénite ou peau de dragon, sont toujours de maître. |
| **Matériau** | **Aucun (ordinaire)**, **Aléatoire (un qui convient)**, ou un matériau spécial (adamantium, fer froid, argent alchimique, mithral, ébénite, peau de dragon…). Seuls les matériaux qui conviennent à l'objet de base sont permis. |
| **Taille** | **Moyenne**, **Petite** (même prix, moitié du poids), **Grande** (prix de base et poids doublés), ou **Aléatoire (réglages de génération)**. |

## Propriétés spéciales

Quatre emplacements de propriété, et un autre apparaît dès que tous sont remplis. Chacun peut être :
- **Aucun** ;
- **Aléatoire (selon la catégorie)** ;
- **Psionique aléatoire (selon la catégorie)** (seulement si Psioniques est activé) ;
- une propriété choisie.

Les listes de propriétés sont groupées : propriétés d'armes du SRD, propriétés d'armures et de boucliers du SRD, leurs versions épiques et psioniques, et **Vos altérations** tirées de vos propres compendiums.

- **Ennemi juré** : pour *tueuse*, le type de créature qu'elle hait, ou **Aléatoire (table du SRD)**.
- Chaque propriété demande au moins une altération de +1. Si le bonus plus les propriétés dépassent +10 sans que les objets épiques soient autorisés, l'aperçu vous avertit, mais l'objet peut quand même être créé, au prix de la formule normale (la limite du SRD est au MJ de l'assouplir). Le trésor aléatoire reste à +10.
- Les propriétés qui ne conviennent pas à l'objet de base sont refusées, comme *acérée* sur une masse ou *boomerang* sur une épée longue.

## Armes doubles

Chaque extrémité d'une arme double (épée à deux lames, double fléau terrible, bâton…) a son propre bonus d'altération et ses propres propriétés (SRD). Quand une arme double est choisie, une section **Autre extrémité (armes doubles)** apparaît, avec ses propres emplacements d'altération et de propriété.

- L'autre extrémité a le prix d'une arme à part entière : son prix s'ajoute à celui de l'objet, et ses propriétés comptent pour les conditions préalables et le niveau de lanceur de sort.
- Ses propriétés demandent au moins un bonus de +1 sur cette extrémité.
- D35E ne donne à un objet qu'un seul jeu d'altérations, donc le bonus et les propriétés de l'autre extrémité vont dans le nom de l'objet (*Épée à deux lames de feu +1 (autre extrémité +1 de froid)*), sa description et une note d'attaque.
- Les armes doubles magiques aléatoires suivent le SRD : une fois sur deux, l'autre extrémité a le même bonus, sinon un de moins sans propriété.

## Lumière, inscription et plus

Cliquez sur le titre pour ouvrir cette section.

| Commande | Effet |
|---|---|
| **Lumière** | **Selon les réglages de génération (aléatoire)**, **Aucun**, ou **Diffuse de la lumière**. |
| **Apparence** | **D'après ses propriétés (ou neutre)** : une arme de feu vacille en orange, une arme sainte brille d'or. Vous pouvez aussi choisir un thème par son nom, ou **Personnalisé**. |
| **Couleur**, **Animation**, **Vitesse / intensité** | Avec une apparence **Personnalisé** : la couleur de la lumière, l'animation de lumière de Foundry, et sa vitesse et son intensité (1–10). |
| **Vive / faible (pieds)** | Les rayons de la lumière. Vide : d'après les [Réglages de génération](fr-Réglages-de-génération). |
| **Intelligent** | **Selon les réglages de génération (aléatoire)**, **Non**, **Oui, tout aléatoire**, ou **Oui, choisir les caractéristiques**. Demande D35E 3.1 ou plus récent et son compendium Tables d'objets intelligents ; c'est donc masqué sous Foundry 11. |
| **Maudit** | **Non**, **Malédiction aléatoire (tables du SRD)**, un type de malédiction, ou l'une de vos malédictions personnalisées. Voir [Objets maudits](fr-Objets-maudits). |
| **Indice gravé** | **Selon les réglages de génération (aléatoire)**, **Oui** ou **Non** : un motif ou une inscription qui laisse deviner son pouvoir. |
| **Identifié** | **Commencer identifié**. Sinon, les objets magiques commencent non identifiés. |
| **Munitions** | Pour des munitions : combien de pièces. Les munitions magiques sont tarifées par 50. |
| **Objets à créer** | Combien, **pour chaque cible**. Les parties aléatoires sont tirées pour chacun. |

### Choisir les caractéristiques d'un objet intelligent

Avec **Oui, choisir les caractéristiques**, d'autres choix apparaissent :

| Commande | Effet |
|---|---|
| **Alignement** | N'importe quel alignement, ou **Aléatoire (convient à sainte, impie, axiomatique, anarchique)**. |
| **Esprit** | Son Intelligence, sa Sagesse et son Charisme. L'esprit fixe combien de pouvoirs mineurs et majeurs il a. |
| **Pouvoir mineur 1, 2…** / **Pouvoir majeur 1, 2…** | Chaque pouvoir, ou Aléatoire. |
| **Dessein spécial** | **Selon les réglages de génération**, **Aucun**, **Aléatoire**, ou un dessein choisi. |
| **Pouvoir dédié** | Avec un dessein spécial, son pouvoir dédié. |

Les prix suivent le SRD et s'ajoutent au prix de l'objet.

## Le créer

Réglez [Placer les objets dans](fr-Générateur-de-trésors#placer-les-objets-dans) et appuyez sur **Générer**. La carte de chat liste chaque objet avec son prix et, pour le MJ, tout ce qu'il a de particulier : lumière, intelligence, malédiction.
