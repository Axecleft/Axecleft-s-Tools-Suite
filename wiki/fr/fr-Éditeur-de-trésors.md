# Éditeur de trésors (Éditeur de trésors d'Axecleft)

**Où :** Générateur de trésors → onglet **Trésors**. Sur la feuille d'un trésor, le MJ a aussi un bouton **Éditeur de trésors** dans la barre de titre, qui ouvre cet onglet sur ce trésor. MJ seulement.

Créez, remplissez, enregistrez et partagez des trésors. Un trésor est un coffre que vos joueurs peuvent piller : un acteur PNJ dans le dossier d'Acteurs **Trésors**, ouvert sur la feuille de butin de D35E, avec une image de coffre aléatoire (tirée des icônes de Foundry) comme portrait et comme token. Placez-le sur une scène comme n'importe quel acteur.

L'onglet Trésors fait partie du [Générateur de trésors](fr-Générateur-de-trésors) : l'Éditeur de trésors demande donc que **les Gemmes, l'Armurerie ou les Curiosités d'Axecleft** (l'un d'eux suffit) soient activés. Sans eux, le MJ reçoit un avertissement au chargement du monde. Sous Foundry 13–14, utilisez la version 1.14.x ; sous Foundry 11 (D35E 2.4.3), la 1.11.x.

Recommandés avec lui : l'Armurerie et les Curiosités (armes et armures magiques et autres objets magiques pour les trésors) et Pièges, poisons et maladies d'Axecleft (des acteurs pièges pour chaque piège du SRD, pour piéger un coffre).

> 📷 **Capture d'écran :** l'onglet Trésors du Générateur de trésors avec un trésor choisi, montrant la liste des trésors, l'image du coffre et le Contenu

L'onglet comporte ces parties, de haut en bas : [Trésor](#hoard), [le nom du trésor et Les joueurs peuvent le piller](#players-can-loot-it), [Contenu](#contents), [Valeur cible](#target-value), [Rassembler le butin](#gather-loot), [Sur la scène](#on-the-scene), [Donner à un seul](#give-to-one) et [Partager entre le groupe](#share-among-the-party).

L'onglet se met à jour quand un trésor change ailleurs : sur sa feuille, dans la barre latérale des Acteurs, ou quand des trésors ou des acteurs pièges sont créés ou supprimés.

<a id="hoard"></a>
## Trésor

Choisissez, créez et gérez des trésors. Tant qu'il n'y a aucun trésor, l'onglet ne montre que cette partie : appuyez d'abord sur **Nouveau trésor**.

| Commande | Effet |
|---|---|
| **Chercher** | Avec plus de six trésors : tapez une partie d'un nom pour réduire la liste. |
| Tri | Avec plus de six trésors : **Par nom**, **Par valeur** ou **Par niveau de rencontre**. |
| **Trésor** | Le trésor affiché dans l'onglet. Tous les trésors du monde sont listés, avec leur valeur et leur niveau de rencontre, par exemple « Antre du dragon — 12 400 po · NR 9 ». |
| **Nouveau trésor** | Demande un nom (par défaut « Trésor 1 », « Trésor 2 »…) et crée un trésor vide avec un coffre aléatoire. Il prend le niveau de rencontre du trésor affiché. |
| **Charger un fichier** | Crée un trésor à partir d'un fichier enregistré avec **Enregistrer dans un fichier**, dans ce monde ou dans un autre. |
| **Ouvrir la fiche** | Ouvre la feuille de butin du trésor. |
| **Renommer** | Renomme le trésor et son token. |
| **Autre coffre** | Une autre image de coffre aléatoire pour l'acteur et son token. |
| **Dupliquer** | Crée une copie, nommée « … (copie) », avec tout son contenu. |
| **Enregistrer dans un fichier** | Télécharge le trésor sous forme de fichier, pour le garder ou le déplacer dans un autre monde. |
| **Supprimer** | Supprime le trésor et tout ce qu'il contient, après confirmation. C'est irréversible. |

Le token d'un nouveau trésor est lié à son acteur. Les joueurs n'ont aucune permission dessus tant que vous ne cochez pas **Les joueurs peuvent le piller**.

<a id="players-can-loot-it"></a>
## Les joueurs peuvent le piller

Sous la liste, l'image du coffre et le nom du trésor, et la case **Les joueurs peuvent le piller**. Cochée, chaque joueur reçoit la permission Observateur sur le trésor : il peut ouvrir sa feuille de butin depuis son token et se servir. Laissez-la décochée pendant que vous le préparez.

<a id="contents"></a>
## Contenu

> 📷 **Capture d'écran :** la section Contenu avec des pièces, quelques objets et les totaux

### Pièces

Les pièces du trésor. Tapez un nouveau montant pour le changer.

- La première ligne est celle des pièces portées (pp, po, pa, pc, avec les noms des Noms des monnaies de D35E).
- Les pièces sans poids ont leur propre ligne, marquée *, quand le trésor en contient.
- Les monnaies personnalisées de D35E (Configuration des monnaies) ont une ligne quand le monde en a.

<a id="items"></a>
### Objets

Tout ce que contient le trésor, du plus précieux au moins précieux :

| Colonne | Effet |
|---|---|
| Case à cocher | Choisit l'objet pour [Donner à un seul](#give-to-one). Une pile a aussi une case à côté : combien en donner. Changer ce nombre coche l'objet. |
| **Objet** | Son nom : cliquez dessus pour ouvrir la feuille de l'objet. En dessous, **biens** ou **objet**, et son poids. |
| **Qté** | La quantité. Modifiez-la ici. |
| **Valeur unitaire (po)** | La valeur d'un exemplaire. Modifiez-la ici. |
| **Total** | Quantité × valeur. |
| **Id.** | Identifié. Cochez-le ou décochez-le ici. |
| Corbeille | Retire l'objet du trésor. |

Pour ajouter des objets à la main, faites-les glisser sur la case **Glissez ici des objets de la barre des objets, d'un compendium ou d'une fiche**. Une copie va dans le trésor, avec sa valeur tirée.

### Totaux

| Ligne | Ce qu'elle montre |
|---|---|
| **Pièces** | La valeur des pièces en po : portées, sans poids et monnaies personnalisées (selon leur valeur en po). |
| **Biens (gemmes, objets d'art, bijoux)** | Gemmes, objets d'art, bijoux et livres : les pièces des Gemmes, et les objets qui sont des gemmes, des marchandises, ou qui ont une étiquette de gemme, d'objet d'art, de bijou ou de livre. |
| **Objets** | Tout le reste. |
| **Total** | La valeur du trésor. |
| **Se vend** | Ce que le trésor rapporte chez un marchand (SRD) : les pièces telles quelles, les gemmes, objets d'art et marchandises à pleine valeur, les autres objets à moitié prix. Changez la case **objets à … %** (0 à 200) pour ce trésor ; elle est enregistrée avec le trésor. |
| **Poids** | Pièces et objets, dans les unités de D35E (lb ou kg). Les pièces portées pèsent 50 à la livre, les monnaies personnalisées leur propre poids, les pièces sans poids rien. |

Les valeurs sont les vraies valeurs, quelle que soit l'estimation des joueurs.

<a id="target-value"></a>
## Valeur cible

Comparez le trésor au trésor par rencontre du SRD, et remplissez-le.

| Commande | Effet |
|---|---|
| **Niveau de rencontre** | Le niveau de rencontre visé par le trésor, avec le trésor par rencontre du SRD à ce niveau (**NR 1 : 300 po** à **NR 20 : 80 000 po**). Enregistré avec le trésor. |
| Barre | À quel point le trésor approche de cette valeur. La ligne en dessous donne les deux, par exemple « Trésor par rencontre du SRD au NR 5 : 1 600 po. Ce trésor : 1 200 po (75 %). » |
| **Tirer le trésor du NR dans le trésor** | Tire une fois la table Trésor du SRD pour le niveau de rencontre et met les pièces, les biens et les objets dans le trésor. |
| **Remplir jusqu'à la cible** | Tire la table encore et encore jusqu'à ce que le trésor atteigne la valeur du SRD pour son niveau de rencontre (25 tirages au plus). Un message donne le total et le nombre de tirages. |
| **Y envoyer les autres onglets** | Règle [Placer les objets dans](fr-Générateur-de-trésors#placer-les-objets-dans) sur ce trésor, pour que les onglets Gemmes, Objets d'art, Bijoux, Forge, Curiosités et les autres créent leur trésor directement dedans. Pratique pour un trésor à thème : les gemmes d'un dragon, les parchemins d'un magicien. |

Les tirages suivent les réglages de l'onglet [Trésor par niveau](fr-Trésor-par-niveau) : la façon dont les pièces sont payées ([Pièces](fr-Trésor-par-niveau#pièces)), vos sources d'objets et les [Réglages de génération](fr-Réglages-de-génération). Une carte de chat, chuchotée au MJ, liste ce qui a été ajouté et le nouveau total du trésor. Les objets qui demandent un module inactif sont ignorés, et la carte dit combien.

<a id="gather-loot"></a>
## Rassembler le butin

Après un combat, ramassez ce que portent les vaincus dans le trésor, puis partagez-le d'ici.

| Commande | Effet |
|---|---|
| **Tout ce qu'elles portent** | Décochée : seulement le [butin de token](fr-Butin-Token) que leur a donné le Générateur de trésors, et les pièces qu'il a tirées. Cochée : tout leur équipement et toutes leurs pièces en plus. Les attaques naturelles, les dons et les sorts restent. |
| **Rassembler le butin dans le trésor** | Le prend sur les tokens sélectionnés ou, si aucun n'est sélectionné, sur toutes les créatures de la scène vaincues (dans le suivi de combat), mortes ou à 0 pv ou moins. |

- Les trésors, les personnages joueurs et les tokens que possède un joueur ne sont jamais dépouillés.
- Une fenêtre montre les pièces et les objets de chaque créature avant que quoi que ce soit ne bouge. Appuyez sur **Oui** pour rassembler.
- Une fois rassemblé, le butin de token n'est plus marqué comme venant du générateur : **Vider le butin** dans l'onglet Butin Token ne le cherchera donc pas.

<a id="on-the-scene"></a>
## Sur la scène

Piégez le coffre et placez-le sur une scène.

| Commande | Effet |
|---|---|
| **Piège** | **Aucun piège**, ou n'importe quel acteur piège du monde. Un piège déposé depuis un compendium est affiché avec « (compendium) ». L'icône à côté ouvre la feuille du piège. Enregistré avec le trésor. |
| Case de dépôt du piège | **Ou glissez ici un acteur piège depuis la barre latérale Acteurs ou un compendium.** [Pièges, poisons et maladies d'Axecleft](fr-Générateur-de-pièges-aléatoires) en a un pour chaque piège du SRD. |
| **Caché jusqu'à révélation** | Cochée, le token du coffre est caché : seul le MJ le voit jusqu'à ce que vous le révéliez (menu du clic droit sur le token). |
| **Placer sur la scène** | La fenêtre se réduit. Cliquez sur la scène à l'endroit du coffre (le clic droit ou Échap annule). |

- Le coffre va sur la scène actuelle, aligné sur la grille. Ouvrez d'abord la scène.
- Son piège va sur la même case, toujours caché.
- Un piège venant d'un compendium est copié dans le monde quand le coffre est placé, et cette copie devient le piège du trésor.

<a id="give-to-one"></a>
## Donner à un seul

Pour le roublard qui ouvre le coffre le premier, ou un objet qu'un seul personnage peut utiliser. Cette partie n'apparaît que s'il y a des membres du groupe (voir ci-dessous).

| Commande | Effet |
|---|---|
| **Personnage** | Qui le reçoit, parmi le groupe. |
| Cases des pièces | Les pièces à donner : une case par pièce standard (prises d'abord sur les pièces portées, puis sur les pièces sans poids), et une par monnaie personnalisée. |
| **Donner les objets cochés et les pièces** | Donne à ce personnage les objets cochés dans la liste [Contenu](#items) (autant de chaque pile que vous l'avez réglé) et les pièces. |

Une fenêtre montre ce qui part, et son poids, avant que quoi que ce soit ne bouge. Partagez le reste ensuite.

<a id="share-among-the-party"></a>
## Partager entre le groupe

Partagez équitablement le trésor entre le groupe.

Le groupe, c'est :
1. les personnages marqués **Membre du groupe** (réglages d'acteur de D35E) qui ont un token sur cette scène ;
2. à défaut, tous les membres du groupe du monde ;
3. si personne n'est marqué, les personnages que possèdent les joueurs.

Une ligne indique lequel de ces cas vous voyez. S'il n'y a personne du tout, l'onglet vous dit de cocher **Membre du groupe** dans les réglages d'acteur d'un personnage, ou de donner un personnage à un joueur. Peu importe qu'un joueur les possède ou soit en ligne.

| Commande | Effet |
|---|---|
| Cases des personnages | Qui reçoit une part. Décochez ceux qui ne sont pas là. |
| **Pièces** / **Objets** | Ce qu'il faut partager : les pièces, les objets, ou les deux. |
| **Partager…** | Calcule les parts et les montre avant que quoi que ce soit ne bouge. |

- Les **pièces** sont divisées également, type par type, monnaies personnalisées comprises. Ce qui ne se divise pas reste dans le trésor.
- Les **objets** sont distribués du plus précieux au moins précieux, chacun à celui qui a le moins jusque-là. Une pile de 50 au plus est partagée objet par objet ; une pile plus grande part d'un bloc.
- La fenêtre liste les pièces, les objets, la valeur et le poids de chaque personnage, et les pièces qui restent dans le trésor. Appuyez sur **Oui** pour partager.

> 📷 **Capture d'écran :** la fenêtre Partager avec les pièces, les objets, la valeur et le poids de chaque personnage

## Visites guidées

Quatre visites guidées de l'onglet Trésors (MJ seulement), chacune menant à la suivante :
- **Éditeur de trésors : trésors** : créer, charger, enregistrer et modifier un trésor ;
- **Éditeur de trésors : remplir un trésor** : niveau de rencontre, tirer et remplir jusqu'à la valeur du SRD, y envoyer le trésor des autres onglets, rassembler le butin ;
- **Éditeur de trésors : sur la scène** : piéger le coffre et le placer ;
- **Éditeur de trésors : partage** : donner à un seul personnage, partager entre le groupe.

Lancez-les dans **Configurer les paramètres → Gestion des visites guidées**, ou depuis le menu **⋮** du Générateur de trésors (**Visite de cet onglet**) quand l'onglet Trésors est ouvert.

## Imprimer un trésor

Avec les [Fiches imprimables d'Axecleft](fr-Fiches-imprimables), un trésor s'imprime sous forme de liste de contenu : l'exemplaire du MJ avec les valeurs, la valeur de vente, les poids, son piège et l'endroit où il est placé ; celui d'un joueur sous forme de liste « trésor trouvé ». Voir [Fiches imprimables](fr-Fiches-imprimables#hoards).

## Astuces

- **Le trésor d'un donjon à l'avance** : créez un trésor par salle, choisissez le niveau de rencontre de chacun et appuyez sur **Remplir jusqu'à la cible**. Enregistrez-les dans des fichiers pour les réutiliser.
- **Un trésor à thème** : appuyez sur **Y envoyer les autres onglets**, puis créez des gemmes dans l'onglet Gemmes ou des parchemins dans l'onglet Curiosités.
- **Après un combat** : **Rassembler le butin dans le trésor**, donnez la baguette au magicien avec **Donner à un seul**, puis **Partager…** le reste.
