# Boutique d'Axecleft

**Où :** double-cliquez sur le token d'un marchand, d'un contenant de butin ou de la réserve du groupe, ou ouvrez l'acteur depuis la barre latérale des Acteurs. Le [Générateur de marchands](fr-Générateur-de-marchands) place ses marchands sur cette feuille. Pour créer un contenant de butin ou la réserve du groupe, faites un clic droit sur un acteur PNJ dans la barre latérale des Acteurs (voir [Contenants de butin et réserve du groupe](#loot-containers-and-party-storage)).

La Boutique d'Axecleft est une feuille d'acteur pour les acteurs PNJ, utilisée de trois façons : un **marchand** à qui les joueurs achètent et vendent, un tas de **butin**, et la **réserve du groupe**. Elle est fournie avec les Gemmes, l'Armurerie et les Curiosités d'Axecleft ; un seul de ces modules suffit. La feuille utilise le parchemin de D35E, comme les feuilles d'acteur de D35E. Vous pouvez aussi choisir **Boutique d'Axecleft** dans les réglages de feuille de n'importe quel acteur PNJ.

> 📷 **Capture d'écran :** la feuille Boutique d'Axecleft d'un marchand, telle qu'un joueur la voit, sur l'onglet Acheter.

## Avant de commencer

- **Un MJ doit être connecté.** Chaque achat, vente, prise et tentative sur une serrure est envoyé au jeu du MJ, qui la vérifie (le joueur possède le personnage, l'objet est toujours là et n'est pas caché, l'argent est là) et déplace les pièces et les objets. Sans MJ connecté, aucun échange n'est possible (« Aucun MJ n'est en jeu : acheter et vendre nécessitent un MJ connecté. »).
- **Les joueurs ont besoin de Limité ou Observateur** sur le marchand ou le contenant, **jamais Propriétaire**. Réglez-le avec **Ouverte à** dans les réglages MJ de la feuille, ou dans les Droits de l'acteur. Un joueur qui ne l'a pas voit « Cette boutique ne vous est pas ouverte. »
- Les joueurs commercent et pillent avec leurs propres personnages : leur personnage assigné, ou tout personnage qu'ils possèdent.
- Les marchands créés avant cette feuille fonctionnent toujours : la feuille lit leurs % de vente et d'achat enregistrés.

<a id="world-settings"></a>
## Paramètres du monde

Dans **Configurer les paramètres**, dans les paramètres du module :

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Marchandises : les marchands vendent à (%)** | 100 | Gemmes, objets d'art et bijoux (le **Full Resale Price** de D35E) : ce que demandent les marchands de la Boutique d'Axecleft, en % de leur valeur. SRD : 100. Une boutique peut fixer le sien sur sa feuille. |
| **Marchandises : les marchands achètent à (%)** | 100 | Ce que paient les marchands de la Boutique d'Axecleft pour les marchandises, en % de leur valeur. SRD : 100. Une boutique peut fixer le sien sur sa feuille. |
| **Vol à la tire et vol à l'étalage** | Activé | Les joueurs peuvent tenter de faire les poches (le bouton main des commandes de token, sur un token ciblé) et voler à l'étalage chez les marchands de la Boutique d'Axecleft. Vous décidez de chaque tentative sur une carte dans le chat. Les personnages que possèdent des joueurs ne peuvent pas être volés. Chaque boutique peut aussi le désactiver. |

Le fait que les gemmes, bijoux et objets d'art comptent comme des marchandises est réglé par **Prix de revente complet pour les gemmes, bijoux et objets d'art** dans les [paramètres des Gemmes](fr-Paramètres#gemmes-daxecleft).

## Visites guidées

La feuille a quatre visites guidées : **Boutique d'Axecleft : le marchand (MJ)**, **Boutique d'Axecleft : acheter et vendre**, **Boutique d'Axecleft : butin et réserve du groupe (MJ)** et **Boutique d'Axecleft : butin et réserve du groupe**.
- Lancez-les depuis **Configurer les paramètres → Gestion des visites guidées**, ou depuis le menu ⋮ de la feuille : **Visite de cette fenêtre** lance la visite du MJ pour un MJ et celle des joueurs pour les joueurs, pour le genre de feuille ouvert. Sous Foundry 11, utilisez le bouton **Visite** de la barre de titre.
- Une visite ouvre une feuille de son genre quand aucune n'est ouverte.
- Pendant une visite, la feuille montre un exemple des parties qu'elle désigne et qui ne sont pas encore là, marqué « (exemple) » : les boutons de marchandage et **Faire les poches**, un panier, les boutons de serrure d'un contenant fermé, un journal vide. Leurs boutons ne fonctionnent pas, et ils disparaissent à la fin de la visite.

## Marchand : côté MJ

Le haut de la feuille montre le nom du marchand et sa boutique, et « Vend à … %, achète à … % » (et « marchande » quand les joueurs peuvent marchander).

**Fiche de personnage** (en haut à droite, MJ seulement) : ouvre le marchand sur la feuille de PNJ de D35E, à côté de la boutique, pour lancer ses caractéristiques, compétences, jets de sauvegarde et attaques. La boutique reste la feuille de l'acteur.

> 📷 **Capture d'écran :** la feuille d'un marchand telle que le MJ la voit, avec **MJ : réglages de la boutique** ouvert.

### MJ : réglages de la boutique

Cliquez sur **MJ : réglages de la boutique** pour l'ouvrir ou le fermer. Les joueurs ne le voient pas.

| Commande | Effet |
|---|---|
| **Fiche** | **Marchand**, **Butin** ou **Réserve du groupe**. Change la feuille en tas de butin ou en réserve du groupe. |
| **Vend à** / **Achète à** | Ce que la boutique demande et paie, en % de la valeur d'un objet. |
| **Marchandises : vend à** / **Marchandises : achète à** | Le % propre à la boutique pour les marchandises : gemmes, objets d'art et bijoux (le **Full Resale Price** de D35E). Vide : la règle maison du monde (voir [Paramètres du monde](#world-settings)). |
| **Ouverte à** | **Joueurs définis dans Propriété**, ou **Tous les joueurs**. |
| **Échanges dans le chat** | **Pour tout le monde**, **MJ seulement**, ou **Non affiché**. |
| **Les joueurs peuvent marchander (vous approuvez chaque tentative), avec :** | Cochez pour permettre le marchandage, et cochez les compétences que les joueurs peuvent utiliser : **Diplomatie**, **Intimidation**, **Bluff**. Les personnages qui ont marchandé sont listés, avec leur résultat. **Réinitialiser le marchandage** efface tous les résultats, pour qu'ils puissent marchander à nouveau. |
| **Les joueurs peuvent tenter le vol à la tire et à l'étalage ici (vous décidez à chaque fois)** | Activé par défaut. Demande aussi que le paramètre du monde **Vol à la tire et vol à l'étalage** soit activé. |
| **Sécurité** | La protection de la boutique contre le vol à la tire et le vol à l'étalage. Cochez tout ce qui convient (voir ci-dessous). |
| **Interdits :** | Les personnages avec qui cette boutique ne traite pas. Le cadenas ouvert à côté d'un nom (**Les laisser commercer à nouveau**) lève l'interdiction. |
| **Bourse** | Les pièces du marchand (pp, po, pa, pc, avec les noms de pièces du monde), et leur total. Le marchand paie ce qu'il achète avec cette bourse. |
| **Réapprovisionner** | Un nouveau stock selon les réglages du Générateur de marchands enregistrés pour ce marchand : la moitié d'un nouveau stock et la moitié d'une bourse. Réinitialise aussi le marchandage. |
| **Générateur de marchands** | Ouvre le [Générateur de marchands](fr-Générateur-de-marchands). |
| **Journal** | Chaque vente et achat, marchandage, tentative de vol à la tire et de vol à l'étalage (avec les jets et le résultat) et interdiction, avec la date et l'heure, du plus récent au plus ancien. **Effacer le journal** le vide. |

**Sécurité** (les effets de chaque option s'additionnent) :

| Sécurité | Effet |
|---|---|
| Négligent / distrait | Détection −4, DD −2 |
| Bondé / animé | Détection −2 |
| Propriétaire vigilant | Détection +4 |
| Gardes en service | Détection +5 |
| Animal de garde | Détection +3 |
| Marchandises sous clé | DD du vol à l'étalage +10 (vitrines, chaînes, derrière le comptoir) |
| Argent en sécurité | DD du vol à la tire +5 (l'essentiel de l'argent dans un coffre-fort) |
| Protégé par magie | vol à l'étalage : Détection +10 (protections d'alarme sur le stock) |

La section [Sécurité](fr-Générateur-de-marchands#security) du Générateur de marchands règle la même liste quand il crée un marchand. Une modification faite ici est gardée avec les réglages enregistrés du marchand : un réapprovisionnement la conserve.

### Le stock

Le MJ voit tous les objets, avec des commandes à côté de chacun :

| Commande | Effet |
|---|---|
| Œil | **Cacher aux joueurs**. Un objet caché est grisé pour vous, et les joueurs ne le voient pas. Cliquez à nouveau (**Caché aux joueurs : afficher**) pour le montrer. |
| − / + | **Un de moins** / **Un de plus**. Un de moins sur la dernière pièce retire l'objet. |
| Crayon | **Modifier** : ouvre la feuille de l'objet. |
| Corbeille | **Retirer** l'objet du stock (demande d'abord). |

- **Ajouter du stock :** déposez des objets sur la feuille. Une boutique stocke des armes, des armures et de l'équipement, des consommables et des marchandises.
- **Objets non identifiés :** le MJ voit le vrai nom, avec « (affiché comme …) », le nom que voient les joueurs. Les joueurs voient le nom et la description non identifiés, et un objet non identifié est vendu à son prix non identifié (règle de D35E).

<a id="buying-and-selling"></a>
## Marchand : côté joueur

Double-cliquez sur le token du marchand pour ouvrir sa boutique.

| Commande | Effet |
|---|---|
| **Commerce en tant que** | Le personnage qui achète et vend : votre personnage assigné d'abord, puis tout autre que vous possédez. **Bourse** montre les pièces qu'il porte. |
| **Diplomatie**, **Intimidation**, **Bluff** | Quand la boutique accepte de marchander : faites un jet pour obtenir de meilleurs prix (voir [Marchandage](#haggling)). |
| **Faire les poches** | Quand le MJ le permet : tentez de faire les poches du marchand (voir [Vol à la tire et vol à l'étalage](#pickpocketing-and-shoplifting)). |
| **Acheter** / **Vendre** | Les deux onglets. |

Si la boutique ne veut pas traiter avec un personnage, la feuille le dit (« … ne veut pas traiter avec … ») et ce personnage ne peut pas y commercer.

### Acheter

Ce que la boutique propose, par genre (**Armes**, **Armures et équipement**, **Consommables**, **Marchandises et butin**), avec **Qté** et **Prix unitaire**.
- **Acheter** : demande **Combien ?** (quand il y en a plus d'un), puis vous demande de confirmer. Les piles partielles fonctionnent.
- Le **chariot** en ajoute un au panier, dans la limite du stock.
- La **main** à côté d'un objet le vole à l'étalage, quand le MJ le permet.

**Panier** (au-dessus de la liste, dès qu'il contient quelque chose) : chaque objet et sa quantité, **−** pour en retirer un, le **Total** (en rouge quand le personnage n'a pas les moyens), **Tout acheter** pour tout payer d'un coup, et **Vider**.

**Payer :** le prix est la valeur de l'objet × le % **Vend à** de la boutique (les marchandises au % des marchandises), moins tout marchandage. Le personnage paie avec les plus grosses pièces qui conviennent et reçoit la monnaie. La bourse du marchand reçoit l'argent.

### Vendre

**Objets de …** : les armes, armures, équipement, consommables et marchandises du personnage (pas ceux qui sont dans un contenant), avec **Qté** et l'**Offre unitaire** de la boutique. Des notes indiquent quand un objet est « équipé », et quand c'est une marchandise (« marchandises à … % »).
- **Vendre** : demande **Combien ?**, puis vous demande de confirmer (et avertit si l'objet est équipé).
- Ou déposez un objet de votre personnage sur la feuille pour le vendre.
- L'offre est la valeur de l'objet × le % **Achète à** de la boutique (les marchandises au % des marchandises), plus tout marchandage, jamais plus que la valeur de l'objet. « aucune offre » signifie que la boutique n'en donnera rien.
- Le marchand paie avec sa bourse : un marchand ne peut pas acheter ce qu'il n'a pas les moyens de payer.

### Descriptions des objets

Laissez le pointeur sur le nom d'un objet pour faire apparaître sa description. Cliquez sur le nom pour garder la description ouverte sous l'objet, et cliquez à nouveau pour la fermer. Cela fonctionne dans les listes Acheter et Vendre et dans le butin. Un objet non identifié montre aux joueurs sa description non identifiée ; le MJ voit les deux.

<a id="haggling"></a>
### Marchandage

Quand le MJ le permet, appuyez sur **Diplomatie**, **Intimidation** ou **Bluff** (les compétences que le MJ a cochées). Le jet va dans le chat et le MJ reçoit une fenêtre **Marchandage** :
- la modification suggérée : des prix meilleurs de 2 % pour chaque tranche de 5 points au-dessus de 10, pires de 2 % pour chaque tranche de 5 en dessous, jusqu'à 10 % ;
- **Prix meilleurs de** … % : le MJ peut changer le chiffre ;
- **Approuver** ou **Refuser**.

Pour l'Intimidation, le MJ se voit rappeler que, selon le SRD, un marchand intimidé coopère pendant 1d6 × 10 minutes, puis devient inamical. Pour le Bluff, que le MJ peut réinitialiser le résultat si le marchand apprend plus tard la vérité.

Le résultat s'applique à ce que ce personnage achète et vend dans cette boutique jusqu'à ce que le MJ réinitialise le marchandage ou réapprovisionne. Chaque personnage marchande une fois par boutique. La feuille affiche ensuite « Marchandé : prix meilleurs de … % », « … pires de … % », « inchangés » ou « Marchandage sans succès. »

<a id="pickpocketing-and-shoplifting"></a>
### Vol à la tire et vol à l'étalage

Demande que le paramètre du monde **Vol à la tire et vol à l'étalage** soit activé, ainsi que la case propre à la boutique (pour une boutique).

- **Faire les poches** sur la feuille du marchand : fait les poches du marchand.
- La **main** à côté d'un objet de la liste Acheter : le vole à l'étalage.
- Le bouton **main** des commandes de token (**Faire les poches (ciblez d'abord le jeton)**) : fait les poches du token que vous ciblez (T). Cela fonctionne sur n'importe qui, sauf les personnages que possède un joueur. Les acteurs de personnage sans propriétaire (un PNJ avec un familier, par exemple) peuvent être volés.

Le joueur choisit le **Personnage**, ce qu'il veut **Viser** (**Pièces** ou **Un petit objet**, pour les poches) et une **Note pour le MJ** facultative, puis appuie sur **Tenter**. Son Escamotage est lancé :
- faire les poches : DD 20 (SRD) ;
- vol à l'étalage : DD 10 pour un objet de 1 lb ou moins, DD 20 au-delà ;
- la sécurité de la boutique modifie le DD, et la Détection de la cible est lancée contre le résultat du joueur.

Personne d'autre ne voit rien. Le MJ reçoit une carte dans le chat avec les jets, la sécurité appliquée et un résultat suggéré :

| Commande | Effet |
|---|---|
| **Résultat** | **Réussi, sans être vu**, **Réussi, mais repéré**, **Raté, sans être vu** ou **Raté et pris**. |
| **Prend** | Ce qui est pris et en quelle quantité : un type de pièces ou un objet que la cible ne porte pas sur elle ou n'a pas en main (une poignée de pièces ou un petit objet est suggéré). Pour le vol à l'étalage, l'objet. |
| **Décider** | Déplace ce qui a été pris et donne le résultat au joueur. |
| **Suspendre …** | Plus aucune tentative de ce joueur pendant **10 minutes**, **30 minutes**, **1 heure**, **4 heures** ou **1 jour**. **Lever la suspension** y met fin. |
| **Interdire … à …** | La boutique ne commerce plus avec ce personnage jusqu'à ce que vous le laissiez revenir (ici, ou dans la liste **Interdits :** de la feuille). |
| **Réaction de …** | Tapez la réaction de la cible et appuyez sur **Publier en tant que …**. Cochez **Seulement à …** pour ne la montrer qu'à ce joueur. |

<a id="loot-containers-and-party-storage"></a>
## Contenants de butin et réserve du groupe

La même feuille sert à un tas de butin (un coffre, un corps à fouiller) et à la réserve du groupe. Les deux fonctionnent de la même façon, sauf que les joueurs peuvent lire le journal de la réserve du groupe.

**En créer un :** faites un clic droit sur un acteur PNJ dans la barre latérale des Acteurs et choisissez **En faire un contenant de butin** ou **En faire la réserve du groupe** (MJ seulement). Ou choisissez **Butin** ou **Réserve du groupe** comme **Fiche** dans ses réglages MJ. Ouvrez ensuite sa feuille pour le configurer.

Un contenant est déverrouillé, sans piège et ouvert tant que vous ne lui donnez pas de serrure ou de piège.

> 📷 **Capture d'écran :** la feuille d'un contenant de butin telle que le MJ la voit, avec **MJ : réglages** ouvert (lignes de la serrure, du contenant et du piège).

## Butin : côté MJ

Le haut de la feuille montre « Butin » ou « Réserve du groupe », son état (ouvert, fermé, verrouillé ou brisé), et « piégé » (pour le MJ) quand un piège est armé. Le MJ voit toujours l'intérieur, avec une note sur ce que voient les joueurs (« Les joueurs le voient verrouillé ; vous voyez l'intérieur. »). Les objets ont les mêmes commandes œil, crayon et corbeille que le stock d'un marchand, et **Fiche de personnage** est en haut à droite.

### MJ : réglages

| Commande | Effet |
|---|---|
| **Fiche** | **Marchand**, **Butin** ou **Réserve du groupe**. |
| **Ouverte à** | **Joueurs définis dans Propriété**, ou **Tous les joueurs**. |
| **Prises et dépôts, dans le chat** | **Pour tout le monde**, **MJ seulement**, ou **Non affiché**. |
| **Les joueurs peuvent partager les pièces** | Permet aux joueurs d'utiliser **Partager entre le groupe**. Le MJ le peut toujours. |
| **Pièces** | Ce qu'il y a à l'intérieur, par type de pièce. |
| **Serrure** | **Verrouillé** ; la qualité de la serrure : **Serrure très simple** (DD 20), **Serrure moyenne** (DD 25), **Bonne serrure** (DD 30), **Serrure exceptionnelle** (DD 40) (SRD) ou **Autre DD** ; le **DD de Crochetage** ; **Verrou du mage (+10)** ; et une **Clé** : le nom de l'objet clé qui l'ouvre. |
| **Contenant** | **Petit coffre** (solidité 5, 1 pr, DD 17 pour briser), **Coffre au trésor** (solidité 5, 15 pr, DD 23 pour briser) (SRD), ou **Autre (réglé ci-dessous)** ; puis **Solidité**, **Points de résistance** et **DD pour briser**, pour le forcer ou le briser. « brisé » s'affiche une fois qu'il a été brisé. |
| **Piège** | **Armé**, et soit **Piège simple (réglé ci-dessous)**, soit **Acteur piège : …** (un acteur piège du monde, par exemple un piège du [Générateur de pièges aléatoires](fr-Générateur-de-pièges-aléatoires)). Les personnages qui ont trouvé le piège sont listés. |
| **Le fermer (les joueurs doivent le rouvrir)** / **L'ouvrir pour les joueurs** | Ferme ou ouvre le contenant. |

**Un piège simple :** **Nom**, **DD de Fouille**, **DD de Désamorçage**, un jet de sauvegarde (**Réflexes**, **Vigueur**, **Volonté** ou **Pas de jet**) et son **DD**, **Dégâts** (une formule de dés), **Moitié si réussi (sinon aucun)**, et **Poison** (une ligne de texte, par exemple « Huile de sang vert, Vig DD 13, 1 Con / 1d2 Con »).

**Un acteur piège :** les DD de Fouille et de Désamorçage viennent de l'acteur piège. Quand il se déclenche, sa carte ouvre la feuille du piège avec la victime ciblée, pour lancer ses attaques.

**Ce qui passe par vous :**
- Le verrouiller ou armer un piège le ferme.
- Crocheter la serrure, les clés, *déblocage*, l'ouvrir, et trouver ou désamorcer un piège se font d'eux-mêmes ; vous en êtes prévenu par un message privé.
- Le forcer, le briser, un piège qui se déclenche et un objet subtilisé vous arrivent sur une carte dans le chat (voir ci-dessous).

**Les cartes du MJ :**

| Carte | Boutons |
|---|---|
| Le forcer (Force contre le DD pour briser) | **Il s'ouvre** ou **Il résiste**, avec une suggestion. |
| Le briser (dégâts moins la solidité, et les points de résistance restants) | **Appliquer les dégâts** (ou **Appliquer : il cède** quand ses points de résistance arrivent à 0) ou **Aucun effet**. |
| Un piège simple se déclenche | Le jet de sauvegarde de la victime et les dégâts sont déjà lancés : **Appliquer … dégâts**, **Appliquer … (complets)**, ou **Aucun dégât**. Le texte du poison est affiché. |
| Un acteur piège se déclenche | **Ouvrir … et cibler …** (la feuille du piège, avec la victime ciblée) et **Terminé**. |
| Un objet subtilisé | Les jets de Détection des autres personnages. **Le dire à …** ceux qui ont remarqué, ou **Garder le secret**. |

Un piège qui se déclenche n'est plus armé, et le contenant s'ouvre.

### Le journal

Chaque prise, dépôt, partage de pièces, piège désamorcé ou déclenché, et le contenant forcé ou brisé, avec la date et l'heure, du plus récent au plus ancien. Ce qui a été subtilisé est marqué secret : seul le MJ le voit. **Effacer le journal** le vide. Les joueurs voient le journal de la réserve du groupe, mais pas celui d'un tas de butin.

## Butin : côté joueur

Choisissez le **Personnage** qui prend et dépose des choses. **Bourse** montre ses pièces.

### Un contenant fermé ou verrouillé

| Bouton | Effet |
|---|---|
| **L'ouvrir** | Ouvre un contenant fermé. S'il a un piège armé, le piège se déclenche. |
| **Utiliser la clé** | Affiché quand la serrure a une clé. Fonctionne si le personnage porte un objet qui porte le nom de la clé. |
| **Crocheter la serrure** | Crochetage contre le DD de la serrure (+10 avec *verrou du mage*). Choisissez **Tirer**, **Faire 10** ou **Faire 20** (quand on a le temps), et **Outils de voleur**, **Outils de maître (+2)** ou **Sans outils (−2)**. |
| **Le forcer** | Un test de Force contre son DD pour briser (+10 avec *verrou du mage*). Bruyant : le MJ décide. |
| **Le briser** | Saisissez les **Dégâts infligés (lancés sur la fiche du personnage)**. Ils sont réduits par la solidité. Bruyant : le MJ décide. |
| **Déblocage / carillon d'ouverture** | Ouvre la serrure par magie. |
| **Chercher des pièges** | Fouille contre le DD du piège. Seuls les personnages qui ont la recherche des pièges trouvent les pièges de DD supérieur à 20 (SRD). |
| **Désamorcer le piège** | Affiché une fois que ce personnage a trouvé le piège. Désamorçage contre son DD, avec le même choix d'outils. Un échec de 5 ou plus le déclenche. |

Un piège que vous ne trouvez pas se déclenche quand vous ouvrez le contenant.

### Un contenant ouvert

- **Pièces** : **Prendre** des pièces, ou **Déposer** une partie de celles du personnage. La fenêtre des pièces a **Tout**, **OK** et **Annuler**.
- **Partager entre le groupe** (quand le MJ le permet) : choisissez les personnages qui partagent. Chacun reçoit une part égale de chaque type de pièce ; ce qui ne peut pas être partagé reste dans le contenant.
- **Objets** : **Prendre** un objet (une partie d'une pile aussi). Laissez le pointeur sur un nom pour le lire.
- **Déposer des choses** : déposez un objet de votre personnage sur la feuille.
- **Le subtiliser** : la **main** à côté de **Prendre** (pour un objet ou les pièces) le fait disparaître à l'insu des autres. Votre Escamotage est lancé contre la Détection des personnages des autres joueurs (ceux des joueurs actifs à qui le contenant est ouvert). Seul le MJ est prévenu, sur une carte, et il décide s'il le dit à ceux qui ont remarqué. Ce n'est pas dans le journal que voient les joueurs.
