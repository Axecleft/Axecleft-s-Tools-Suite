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

## Partagés (Boutique d'Axecleft)

Fournis par l'Armurerie, les Curiosités et les Gemmes. Voir [Boutique d'Axecleft](fr-Boutique-d'Axecleft).

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Marchandises : les marchands vendent à (%)** | 100 | Les gemmes, l'art et les bijoux (le **Full Resale Price** de D35E) : ce que demandent les marchands de la Boutique d'Axecleft, en % de leur valeur. SRD : 100. Une boutique peut fixer le sien sur sa feuille. |
| **Marchandises : les marchands achètent à (%)** | 100 | Ce que les marchands en paient, en % de leur valeur. SRD : 100. Une boutique peut fixer le sien sur sa feuille. |
| **Vol à la tire et vol à l'étalage** | Activé | Les joueurs peuvent tenter de faire les poches (le bouton en forme de main dans les commandes du token, sur un token ciblé) et de voler à l'étalage chez les marchands ; vous décidez de chaque tentative sur une carte de chat. Les personnages que possèdent des joueurs ne peuvent pas être volés. Chaque boutique peut aussi le désactiver sur sa feuille. |

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

## Aventuriers et Serviteurs d'Axecleft

Voir [Aventuriers et Serviteurs](fr-Aventuriers-et-Serviteurs).

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Valeurs de caractéristiques** | Achat de points | Comment les nouveaux personnages obtiennent leurs valeurs de caractéristiques : Achat de points, Série élite, Série non-élite, Tirer, ou Taper les valeurs (chacune peut être modifiée). |
| **Points d'achat** | 25 | Points pour l'achat de points (25 standard, 28 plus difficile, 32 héroïque). |
| **Points de vie par niveau** | Moyenne (arrondie au supérieur) | Les points de vie de chaque niveau après le premier : Moyenne (arrondie au supérieur), Maximum ou Tirer. Le premier niveau est au maximum, sauf si c'est décoché dans la fenêtre. |
| **Sorts hors SRD par niveau de lanceur** | 1 | Les prêtres, druides, paladins, rôdeurs et adeptes reçoivent tous les sorts du SRD qu'ils peuvent lancer, plus ce nombre de sorts d'autres compendiums par niveau de lanceur, à chaque niveau de sort qu'ils peuvent lancer. Au-dessus de 0, les grimoires et les sorts connus reçoivent aussi quelques sorts hors SRD. 0 : sorts du SRD seulement. |
| **Copie avant une modification** | Activé | Modifier un acteur en fait d'abord une copie, dans le dossier **Sauvegardes A&M** (désactivable dans **Vérification** pour une modification). |
| **Les joueurs créent par l'intermédiaire du MJ** | Activé | Les joueurs peuvent ouvrir A&M et modifier les acteurs qu'ils possèdent. Pour créer un nouvel acteur sans la permission **Créer de nouveaux acteurs** de Foundry, A&M demande à un MJ connecté de le créer, possédé par ce joueur. Désactivé : seuls les utilisateurs qui ont cette permission créent des acteurs. |
| **Valeur de reprise** | 50 | En modifiant un acteur : ce que vaut un objet vendu pour l'équipement des nouveaux niveaux, en % de sa valeur (SRD : la moitié). Les gemmes, l'art et les marchandises comptent à leur pleine valeur. |
| **Les joueurs peuvent revendre de l'équipement** | Désactivé | En modifiant un acteur : les joueurs peuvent vendre les objets de l'acteur pour l'équipement des nouveaux niveaux. Désactivé : les joueurs peuvent garder ou déséquiper des objets ; seul un MJ les vend. |
| **Incantation spontanée** | Désactivé | Tous les lanceurs de sorts lancent leurs sorts spontanément (Unearthed Arcana). Voir [Variantes et profils](fr-AS-Variantes-et-profils). Rechargez races, classes et dons sur la page d'accueil après un changement. |
| **Classes variantes** | Activé | Proposer les classes variantes d'Unearthed Arcana avec les classes standard. Rechargez races, classes et dons sur la page d'accueil après un changement. |
| **Malus d'XP multiclassé** | Activé | Un personnage dont les classes donnent un malus d'XP multiclassé (SRD : −20 % pour chaque classe à plus d'un niveau en dessous de la plus haute ; la classe de prédilection ne compte pas) reçoit un trait **Malus d'XP multiclassé**, et les PX qu'il gagne sont réduits d'autant. Désactivé : pas de trait, les PX tels que donnés. |

## Armurerie d'Axecleft

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Part psionique des armes et armures magiques (%)** | 10 | Règle maison, tant que Psioniques est activé (Générateur de trésors → Réglages de génération) : cette part des armes, armures et boucliers magiques aléatoires qui reçoivent des propriétés spéciales les tire sur les tables de propriétés psioniques du SRD. 0 = aucune. |
| **Cristaux de sertissage** | Désactivé | Les armes, armures et boucliers que porte un personnage reçoivent un bouton **Cristal de sertissage** : sertir dans l'objet un cristal de l'inventaire (un par objet) et l'en retirer. Foundry recharge quand vous le changez. Voir [Forge](fr-Forge#crystals-tab). |
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

## Fiches imprimables d'Axecleft

Ce sont des paramètres client : chaque utilisateur choisit les siens. Voir [Fiches imprimables](fr-Fiches-imprimables).

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Mise en page de la fiche imprimée** (*Printed sheet layout*) | Fiche 3.5 classique | La mise en page qu'utilise le bouton **Imprimer** pour les personnages joueurs. Le menu du clic droit de la barre latérale des Acteurs propose toutes les mises en page. |
| **Mise en page imprimée des PNJ / monstres** (*Printed NPC / monster layout*) | Bloc de statistiques du Manuel des Monstres | La mise en page qu'utilise le bouton **Imprimer** pour les PNJ et les monstres. |

## Pièges, poisons et maladies d'Axecleft

| Paramètre | Par défaut |
|---|---|
| **Kits de piège : le MJ approuve** | Activé |
| **Kits de piège : la pose prend du temps** | Activé |
| **Kits de piège : qui voit un piège posé** | MJ seulement, plus un repère pour le joueur qui l'a posé |
| **Kits de piège : les pièges posés peuvent être récupérés** | Activé |
| **Kits de piège : compendiums pour l'artisanat** | Vide (tous les compendiums qui contiennent des acteurs pièges) |
| **Kits de piège : progression de la fabrication** | Pièces d'argent (SRD) |
| **Kits de piège : Artisanat (fabrication de pièges) requis** | Activé |
| **Pièges magiques : transportables** | Désactivé |

Voir [Kits de piège](fr-Kits-de-piège#paramètres) pour le détail.

## VooDoo d'Axecleft

Voir [VooDoo](fr-VooDoo).

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Comptes mobiles** (bouton : **Créer des comptes mobiles**) | | Ouvre la fenêtre Comptes mobiles : choisissez des joueurs et créez un compte mobile lié pour chacun. |
| **Masquer les comptes mobiles dans la liste des joueurs** | Désactivé | Désactivé : les comptes mobiles apparaissent dans la liste des joueurs avec une icône de téléphone. Activé : ils n'y figurent pas. |

## Suite d'outils d'Axecleft (module)

Voir [Suite d'outils d'Axecleft](fr-Suite-d'outils-Axecleft).

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Avis de mise à jour au démarrage** (*Update notice on startup*) | Activé | Votre propre paramètre, dans ce navigateur. Quand un MJ charge le monde, vérifier les mises à jour des modules d'Axecleft (au plus toutes les 6 heures) et afficher un avis. |

## Paramètres de la suite d'outils dans chaque module

La section de chaque module d'Axecleft a un bouton **Suite d'outils d'Axecleft** (**Paramètres de la suite**). Il regroupe les paramètres partagés par tous les modules, pour tout le monde, joueurs compris :

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Afficher la fenêtre d'accueil au démarrage de Foundry (tout le monde dans ce monde)** | Activé | MJ seulement. Désactivé : personne dans ce monde ne voit la fenêtre d'accueil. |
| **Me l'afficher** | Activé | Pour vous seul, dans ce navigateur. La fenêtre d'accueil a la même case (**Afficher ceci au démarrage de Foundry**). |

La fenêtre d'accueil vous remercie d'utiliser la suite, donne les liens vers le [serveur Discord de la suite d'outils d'Axecleft](https://discord.gg/FRhPPwDWta) (aide, nouvelles et idées), le [Patreon d'Axecleft](https://www.patreon.com/Axecleft) et ce guide, et liste les modules d'Axecleft actifs dans le monde. **Afficher la fenêtre d'accueil** l'ouvre à tout moment.
