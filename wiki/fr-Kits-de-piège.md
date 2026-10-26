# Kits de piège et Mes pièges (Pièges, poisons et maladies)

Un **kit de piège** est un objet qui contient les pièces d'un piège mécanique prêt à l'emploi, emballé pour être posé ailleurs. Un personnage le transporte, s'en sert pour poser le piège sur une scène, et peut le remballer plus tard.

> **[Capture : un kit de piège sur une feuille de personnage]**

## Obtenir un kit de piège

- **Artisanat** : un personnage en fabrique un avec Artisanat (fabrication de pièges), dans l'onglet **Kits de piège** de la fenêtre d'[Artisanat](fr-Onglets-artisanat#kits-de-piège). Le kit va dans l'inventaire de l'artisan.
- **À partir d'un acteur piège (MJ)** : faites un clic droit sur un acteur piège dans la barre latérale des Acteurs et choisissez **Créer un kit de piège**. Le kit est créé dans le dossier d'Objets **Trap Kits** ; faites-le glisser sur un personnage ou un marchand.

Les kits sont réservés aux pièges mécaniques. Les pièges magiques viennent des sorts.

La description du kit donne le piège et son FP, le temps de pose, et son DD de récupération.

## Poser un piège

1. Ouvrez la scène où va le piège.
2. Sur la feuille de personnage, utilisez le kit de piège comme n'importe quel objet.
3. Cliquez là où poser le piège. Un clic droit ou Échap annule.
4. Une carte de chat, **Kits de piège**, indique « {qui} pose {piège} (FP {fp}) sur {scène} » et le temps que cela prend.
5. Avec **Kits de piège : le MJ approuve** activé, la carte attend le MJ : **Approuver** ou **Annuler**. Sinon, c'est immédiat.

Une fois posé :
- Le kit est consommé.
- Une copie de l'acteur piège est créée dans le dossier d'Acteurs **Placed Traps**, avec son token sur la scène.
- Qui voit le token dépend de **Kits de piège : qui voit un piège posé** (ci-dessous).

La pose prend 1 minute par FP. La carte montre le temps, mais le temps de jeu n'avance pas.

## Récupérer un piège

Avec **Kits de piège : les pièges posés peuvent être récupérés** activé, un piège mécanique actif peut être remis en kit. Les pièges magiques ne le peuvent pas : on les désactive avec Désamorçage, et Mes pièges ne propose pas de les récupérer.

- Cela prend 1 minute par FP et un test de **Désamorçage** contre le DD de Désamorçage du piège + 5. Désamorçage demande une formation.
- **Réussite** : le piège retourne en kit dans l'inventaire du personnage.
- **Échec de 1 à 4** : aucun mal. Le piège est toujours posé et on peut réessayer.
- **Échec de 5 à 10** : le piège est désactivé définitivement.
- **Échec de plus de 10** : le piège se **déclenche** sur le personnage. Le MJ reçoit une carte **Piège déclenché** avec ses attaques et un bouton, **Cibler {qui} et ouvrir le piège**, pour le résoudre.

Les joueurs récupèrent un piège depuis [Mes pièges](#mes-pièges). Avec **Kits de piège : le MJ approuve** activé, le MJ approuve d'abord la tentative.

## Les pièges posés à la main par le MJ

Un piège que le MJ fait glisser sur une scène depuis la barre latérale des Acteurs ou un compendium est aussi un piège posé, avec les mêmes commandes : son état dans le HUD du token et dans Pièges posés, l'œil pour les joueurs qui le connaissent, et la remise en kit pour les pièges mécaniques. Les tokens de piège déjà présents sur une scène sont pris en compte quand le MJ ouvre la scène. Les joueurs ne le voient dans Mes pièges qu'une fois que le MJ les a marqués comme le connaissant.

## État d'un piège

Chaque piège posé est **Actif**, **Désactivé** ou **Déclenché**.

- Le MJ le change sur le token : clic droit sur le token, puis le bouton piège du HUD du token (il passe d'Actif à Désactivé puis à Déclenché).
- Ou dans la fenêtre **Pièges posés** (ci-dessous).
- Un piège déclenché reste **Déclenché** jusqu'à ce que vous le remettiez Actif, par exemple une fois qu'il s'est réarmé.

## Mes pièges

**Où :** **Outils d'Axecleft → Mes pièges**. Joueurs et MJ.

> **[Capture : Mes pièges]**

### Pour les joueurs

Liste les pièges de cette scène que vous connaissez : vous les avez posés, quelqu'un vous les a montrés, ou vous les ciblez.

| Colonne | Ce qu'elle montre |
|---|---|
| **Piège** | Le nom du piège (une mire si vous le ciblez). |
| **FP** | Son FP. |
| **Posé par** | Qui l'a posé. |
| **État** | Actif, Désactivé ou Déclenché. |
| Boutons | **Montrer son repère à d'autres joueurs** (icône de partage), et **Le remettre en kit (DD de Désamorçage {dd})** (icône de boîte) pour les pièges actifs. |

- **Récupérer** : appuyez sur la boîte à côté du piège. On vous demande quel personnage si vous en avez plusieurs.
- **Partager un repère** (seulement avec **MJ seulement, plus un repère**) : appuyez sur l'icône de partage, cochez les joueurs sous **Montrer le repère à :**, et appuyez sur **Partager**. Ils voient le repère du piège et il apparaît dans leur Mes pièges.
- Un piège que vous voyez peut aussi être ciblé (T) pour qu'il soit listé ici.

### Pour le MJ : Pièges posés

La fenêtre du MJ s'appelle **Pièges posés**. Elle liste les pièges posés à partir de kits sur cette scène.

- **État** : changez-le depuis la liste.
- **Œil** : quels joueurs connaissent le piège, par exemple après une Fouille réussie. Cochez-les et appuyez sur **Enregistrer**. Les joueurs ne voient que les pièges qu'ils connaissent.
- **Montrer sur la scène** : centre la vue sur le token du piège.

## Paramètres

Dans **Configurer les paramètres → Pièges, poisons et maladies d'Axecleft**.

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Kits de piège : le MJ approuve** | Activé | Un joueur qui pose ou récupère un piège envoie une demande que le MJ approuve sur sa carte de chat. Désactivé : c'est immédiat. |
| **Kits de piège : la pose prend du temps** | Activé | La pose prend 1 minute par FP (affiché sur la carte ; le temps de jeu n'avance pas). Désactivé : les pièges sont posés immédiatement. La récupération prend toujours 1 minute par FP. |
| **Kits de piège : qui voit un piège posé** | MJ seulement, plus un repère pour le joueur qui l'a posé | **MJ seulement** : un token caché. **Tout le monde** : un token visible (le MJ décide si les créatures le repèrent). **MJ seulement, plus un repère** : un token caché, et le joueur qui l'a posé voit un repère qu'il peut partager (Mes pièges). |
| **Kits de piège : les pièges posés peuvent être récupérés** | Activé | Désactivé : une fois posé, un piège reste jusqu'à ce qu'il soit déclenché ou désactivé. |
| **Kits de piège : compendiums pour l'artisanat** | Vide | Les compendiums d'acteurs dont les pièges mécaniques peuvent être fabriqués en kits, séparés par des virgules (par exemple `traps-and-poisons.traps`). Vide : tous les compendiums qui contiennent des acteurs pièges. |
| **Kits de piège : progression de la fabrication** | Pièces d'argent (SRD) | La pièce dans laquelle est comptée la progression hebdomadaire d'Artisanat (fabrication de pièges) : le test × le DD en **Pièces de cuivre** (10 fois plus lent), **Pièces d'argent** (SRD), **Pièces d'or** (10 fois plus rapide) ou **Pièces de platine** (100 fois plus rapide). L'argent du SRD fait durer des années les pièges coûteux : une fosse hérissée à large ouverture (7 200 po, DD 25) prend 288 semaines à un artisan dont le test est de 10. |
