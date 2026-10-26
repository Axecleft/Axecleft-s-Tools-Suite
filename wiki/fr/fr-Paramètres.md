# Paramètres

**Où :** **Configurer les paramètres**, sous le nom de chaque module. Ce sont des paramètres de monde : seul le MJ les change.

Les options propres au Générateur de trésors (campagne, objets magiques, gemmes, pièces…) ne sont pas ici. Elles sont dans sa section [Réglages de génération](fr-Réglages-de-génération).

Les scripts partagés enregistrent leurs paramètres une seule fois, sous le premier module d'Axecleft actif qui les fournit. Si vous avez l'Armurerie, les Curiosités et les Gemmes, vous trouverez **Bibliothèque partagée des listes de trésors** sous l'un d'eux, pas sous les trois.

## Partagés (Générateur de trésors)

Fournis par l'Armurerie, les Curiosités et les Gemmes.

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Bibliothèque partagée des listes de trésors** | Automatique | **Automatique** : vos [Listes de trésors](fr-Listes-de-trésors) sont enregistrées dans un fichier du dossier Data de Foundry à chaque modification, et chaque monde les charge au démarrage : elles survivent donc aux mises à jour des modules et vous suivent d'un monde à l'autre. **Manuel** : seulement quand vous appuyez sur Enregistrer / Charger dans l'onglet Listes du Générateur de trésors. |
| **Dossier de la bibliothèque partagée** | `axecleft-treasure` | Le dossier de votre dossier Data de Foundry qui contient `treasure-lists.json`. |

## Partagés (Artisanat)

Fournis par l'Armurerie, les Curiosités et les Pièges. Voir [Artisanat](fr-Artisanat#paramètres) pour le détail.

| Paramètre | Par défaut |
|---|---|
| **Les joueurs peuvent fabriquer** | Activé |
| **Tests des objets magiques** | SRD (sans test) |
| **Fabrication de poisons** | Règle maison |
| **Les tests d'artisanat sont lancés en** | Jet public |
| **Prélever les po** | Activé |
| **Prélever les PX** | Activé |
| **Les PX ne peuvent pas coûter un niveau** | Activé |

## Armurerie d'Axecleft

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Part psionique des armes et armures magiques (%)** | 10 | Règle maison, tant que Psioniques est activé (Générateur de trésors → Réglages de génération) : cette part des armes, armures et boucliers magiques aléatoires qui reçoivent des propriétés spéciales les tire sur les tables de propriétés psioniques du SRD. 0 = aucune. |
| **Part de matériaux spéciaux des armes magiques aléatoires (%)** | 5 | Cette part des armes, munitions, armures et boucliers magiques aléatoires est faite d'un matériau spécial qui leur convient (adamantium, fer froid, argent alchimique, ébénite, mithral, peau de dragon), au prix du SRD. Les règles de base donnent 96–100 sur d% (5 %). 0 = aucun. |

## Curiosités d'Axecleft

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Niveau maximal des potions (MJ)** | 3 | SRD : les potions et tatouages psioniques contiennent des sorts ou pouvoirs de niveau 3 ou moins. Le MJ peut le monter jusqu'à 9 pour les objets créés dans l'[onglet Curiosités](fr-Atelier-des-Curiosités#mj-seulement). Le trésor aléatoire suit les tables du SRD. L'artisanat des joueurs reste toujours au niveau 3. |
| **Niveau maximal des baguettes (MJ)** | 4 | De même pour les baguettes et les dorjés (SRD : niveau 4). L'artisanat des joueurs reste toujours au niveau 4. |
| **Part psionique des potions, parchemins, baguettes, bâtons et objets merveilleux (%)** | 10 | Règle maison, tant que Psioniques est activé : cette part des tirages aléatoires de potions, parchemins et baguettes devient des tatouages psioniques, pierres psioniques et dorjés ; des tirages de bâtons, des couronnes psioniques du SRD ; des tirages d'objets merveilleux, des cristaux condensateurs et des objets psioniques universels. 0 = aucune. |
| **Perles de thaumaturgie pour les lanceurs spontanés (règle maison)** | Désactivé | SRD : une perle de thaumaturgie rappelle un sort qu'un lanceur a préparé. Activé : les ensorceleurs, bardes et autres lanceurs spontanés peuvent s'en servir pour regagner un emplacement de sort utilisé du niveau de la perle. |
| **Préparer les couronnes psioniques** | Activé | Une couronne psionique ajoutée à un personnage depuis un compendium (Dominateur, Évadé… de D35E) reçoit ses points psi et ses pouvoirs sous forme d'objets séparés qui dépensent les points de la couronne. |
| **Préférer les compendiums des modules** | Activé | Quand un sort, un pouvoir ou un objet est à la fois dans les compendiums de D35E et dans ceux d'un module (comme Axecleft's Shared Data), utiliser la copie du module. |
| **Reprendre les objets liés à la main** | Activé | Un grimoire ou un parchemin que vous avez lié à la main dans l'onglet Liens de D35E : quand il est ajouté à un personnage, les Curiosités gardent une copie de son contenu, pour que les parchemins utilisés restent utilisés quand il change de mains. |
| **Règle du grimoire** | Désactivé | Facultatif : les personnages dont la classe à grimoire est listée ci-dessous ne peuvent préparer que des sorts trouvés dans un grimoire qu'ils portent (Lecture de la magie est toujours permise, comme dans le SRD). Le MJ est averti mais pas bloqué. |
| **Classes à grimoire** | `Wizard` | Les classes auxquelles s'applique la règle du grimoire, séparées par des virgules. |

## Gemmes d'Axecleft

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Variations de taille et de qualité des gemmes** | Activé | Les gemmes aléatoires utilisent les tailles (Minuscule à Énorme) et qualités (Défectueux à Exceptionnel) maison. Désactivé : des gemmes simples à la valeur du SRD. Le générateur a la même case pour des changements ponctuels. |
| **Variations de qualité de l'art et des bijoux** | Activé | L'art et les bijoux aléatoires utilisent les factures maison (Camelote à Chef-d'œuvre). Désactivé : les valeurs simples du SRD. |
| **Pièces toutes faites dans l'art aléatoire (%)** | 5 | La fréquence à laquelle un objet d'art ou un bijou aléatoire est une pièce toute faite (l'art et les livres de Leo, et les vôtres sur la liste Custom Premade Art) au lieu d'être construit à partir d'un objet, d'un matériau et d'une gemme. 0 = jamais ; on peut toujours les choisir dans l'onglet Objets d'art. |
| **Prix de revente complet pour les gemmes, bijoux et objets d'art** | Activé | Les gemmes, bijoux et objets d'art sont des marchandises : les marchands les achètent et les vendent à leur pleine valeur (le **Full Resale Price** de D35E). S'applique aux pièces générées et aux gemmes prises dans les compendiums du module. Désactivé : les marchands les achètent à moitié prix, comme les autres objets. |

**Jets de valeur et valeurs de base** (le bouton du MJ) ouvre **Valeurs des gemmes et de l'art** : votre propre jet de valeur et valeur de base pour chacune des 6 valeurs de gemmes et des 12 valeurs d'art, et **Une valeur tirée n'est jamais inférieure à la valeur de base**. Voir [Gemmes, art et bijoux](fr-Gemmes-art-et-bijoux#jets-de-valeur-et-valeurs-de-base).

## Pièges, poisons et maladies d'Axecleft

| Paramètre | Par défaut |
|---|---|
| **Kits de piège : le MJ approuve** | Activé |
| **Kits de piège : la pose prend du temps** | Activé |
| **Kits de piège : qui voit un piège posé** | MJ seulement, plus un repère pour le joueur qui l'a posé |
| **Kits de piège : les pièges posés peuvent être récupérés** | Activé |
| **Kits de piège : compendiums pour l'artisanat** | Vide (tous les compendiums qui contiennent des acteurs pièges) |
| **Kits de piège : progression de la fabrication** | Pièces d'argent (SRD) |

Voir [Kits de piège](fr-Kits-de-piège#paramètres) pour le détail.

## Suite d'outils d'Axecleft

La section de chaque module d'Axecleft a un bouton **Suite d'outils d'Axecleft** (**Paramètres de la suite**). Il regroupe les paramètres partagés par tous les modules, pour tout le monde, joueurs compris :

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Afficher la fenêtre d'accueil au démarrage de Foundry (tout le monde dans ce monde)** | Activé | MJ seulement. Désactivé : personne dans ce monde ne voit la fenêtre d'accueil. |
| **Me l'afficher** | Activé | Pour vous seul, dans ce navigateur. La fenêtre d'accueil a la même case (**Afficher ceci au démarrage de Foundry**). |

La fenêtre d'accueil vous remercie d'utiliser la suite, donne les liens vers le [serveur Discord de la suite d'outils d'Axecleft](https://discord.gg/FRhPPwDWta) (aide, nouvelles et idées), le [Patreon d'Axecleft](https://www.patreon.com/Axecleft) et ce guide, et liste les modules d'Axecleft actifs dans le monde. **Afficher la fenêtre d'accueil** l'ouvre à tout moment.
