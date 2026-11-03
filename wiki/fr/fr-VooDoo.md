# VooDoo (feuille de personnage mobile)

**Où :** MJ : **Configurer les paramètres → Axecleft's VooDoo → Créer des comptes mobiles**, ou **Outils d'Axecleft → Comptes mobiles**. Joueurs : connectez-vous avec un compte mobile depuis le navigateur d'un téléphone.

Votre feuille de personnage D35E sur votre téléphone. Le MJ donne à chaque joueur un **compte mobile** ; s'y connecter depuis un téléphone ouvre une fenêtre plein écran pensée pour le tactile, avec la feuille de personnage, le groupe, les messages et le combat, et une carte facultative pour cibler des tokens, placer des zones de sorts et déplacer vos propres tokens. Un compte mobile a toujours les mêmes personnages que le compte principal du joueur.

Son nom vient de la poupée vaudou : depuis le téléphone que vous tenez en main, vous faites bouger votre personnage dans le monde du jeu.

Sous Foundry 11 (D35E 2.4.3), c'est **Axecleft's VooDoo for Foundry v11**, version **1.11.x**, qui fonctionne de la même façon.

## Créer les comptes mobiles (MJ)

> 📷 **Capture d'écran :** la fenêtre Comptes mobiles, avec un joueur coché, un mot de passe tapé et Carte cochée, et un joueur qui a déjà un compte mobile.

| Commande | Effet |
|---|---|
| Case du joueur | Cochez chaque joueur qui a besoin d'un compte mobile. Les comptes MJ sont listés aussi (voir [Le téléphone du MJ](#gm-phone)). |
| Mot de passe | Le mot de passe du compte mobile. Les joueurs le tapent sur leur téléphone : faites simple. VooDoo ne le lit ni ne le garde jamais : Foundry le conserve comme celui de tout autre compte, et vous pouvez le changer dans Configurer les joueurs. |
| **Carte** | Coché : le téléphone a une vue **Carte** pour cibler des tokens, déplacer ses propres tokens et placer des zones de sorts au toucher. Décoché : pas de carte, le téléphone se charge donc plus vite et économise la batterie. Les joueurs peuvent la changer eux-mêmes dans les réglages du téléphone. |
| Comptes déjà créés | Un joueur qui a déjà un compte mobile l'affiche (avec une icône de téléphone) à la place d'une case. Seule sa case **Carte** peut être changée. |
| **Enregistrer** | Crée les comptes cochés et enregistre les cases Carte. |

- Chaque nouveau compte s'appelle **« Nom (Mobile) »** et est lié au compte du joueur. Il reçoit les mêmes droits de propriété sur chaque personnage, et les garde quand vous changez ensuite les droits ou créez de nouveaux acteurs. Il commence sur le personnage attribué au joueur ; ensuite, le téléphone change de personnage de lui-même.
- Le joueur ouvre l'adresse de votre Foundry sur le téléphone, choisit **« Nom (Mobile) »** et se connecte avec ce mot de passe.
- Les comptes mobiles apparaissent dans la liste des joueurs avec une icône de téléphone. Le paramètre **Masquer les comptes mobiles dans la liste des joueurs** les en retire.
- Pour en supprimer un, supprimez-le dans **Configurer les joueurs**. VooDoo le délie du joueur, et la fenêtre propose de nouveau ce joueur.
- La visite guidée **VooDoo : comptes mobiles** (Configurer les paramètres → Gestion des visites guidées) présente la fenêtre.

## La fenêtre du téléphone

Un compte mobile se connecte directement dans la fenêtre VooDoo. La carte de Foundry est désactivée sur ce téléphone (le paramètre de Foundry propre à chaque navigateur), sauf si **Carte** est activé pour le compte. Si le même navigateur se connecte plus tard avec un compte normal, la carte est réactivée.

> 📷 **Capture d'écran :** la fenêtre du téléphone dans la vue Personnage, onglet Caractéristiques, avec la barre du haut et la barre du bas.

**Touchez pour lancer, appuyez longuement pour les options.** Une touche lance une caractéristique, une sauvegarde, une compétence ou une attaque, lance un sort ou utilise un objet tout de suite. Un appui long ouvre les options de jet de D35E (bonus de circonstance, Faire 10 / Faire 20, Attaque en puissance et autres dons optionnels, mode de jet) dans un panneau à la taille du téléphone. Touchez un nom marqué **ⓘ** pour lire sa description.

Le téléphone utilise la fiche ; il ne la change pas. Les valeurs de caractéristiques, les compétences, les dons et les objets se changent sur un ordinateur. Les notes peuvent être modifiées sur le téléphone.

### Haut de la fenêtre

| Commande | Effet |
|---|---|
| Nom du personnage | Le personnage affiché. Touchez-le pour changer de personnage si vous en avez plusieurs ; les cartes de chat montrent alors le nouveau. Sur le téléphone d'un MJ : choisir n'importe quelle créature (voir [Le téléphone du MJ](#gm-phone)). |
| Ligne de la scène | Sous le nom : la scène, et si votre personnage s'y trouve (en rouge : « n'est pas ici », ou la scène où il est). Un changement de scène affiche « Maintenant sur : … ». Sans la carte, la scène est celle que regarde votre compte principal (quand il est connecté), sinon la scène active. |
| **☰** Menu | Voir [Menu](#menu). |
| Garder l'écran allumé | Le bouton téléphone à côté du menu. Empêche le téléphone de se mettre en veille pendant que vous jouez ; allumé quand il est actif. Les navigateurs ne le permettent que si Foundry est ouvert en `https://`. |
| Réglages (bouton engrenage) | **Carte** activée ou non (la page se recharge), **Mode de jet** (qui voit les jets de ce téléphone : le mode de jet de Foundry pour cet appareil), et **Visite guidée de cette fenêtre**. |

La première fois qu'un téléphone ouvre la fenêtre, une note indique où se trouve la visite guidée.

### Barre du bas

**Personnage**, **Groupe**, **Messages**, **Combat**, et **Carte** quand la carte est activée. Le bouton Combat s'allume pendant un combat et clignote à votre tour. Un nombre sur Messages compte les messages que vous n'avez pas vus.

### Personnage

Les onglets en haut défilent sur le côté ; vous pouvez aussi balayer la page vers la gauche ou la droite pour passer de l'un à l'autre.

| Onglet | Contenu |
|---|---|
| **Caractéristiques** | Caractéristiques, points de vie, CA, vitesse, BBA, lutte. |
| **Sauvegardes** | Les jets de sauvegarde. Touchez pour lancer. |
| **Compétences** | Les compétences. Touchez pour lancer. |
| **Attaques** | Touchez pour attaquer. S'il y a des cibles sur la carte, l'attaque de D35E les utilise. |
| **Sorts** | Les nombres de préparations et les emplacements restants. Touchez pour lancer le sort ; D35E marque l'emplacement ou l'utilisation dépensés. |
| **Inventaire** | Les pièces, un interrupteur pour équiper chaque objet, et les objets utilisables (D35E retire la charge ou la quantité). |
| **Dons et aptitudes** | Les dons et aptitudes de classe du personnage. |
| **Effets et états** | Des interrupteurs pour les activer et les désactiver. |
| **Notes** | Du texte simple. Le téléphone peut les modifier. |

### Groupe

Le HUD de groupe (*Party HUD*) de D35E sur le téléphone : chaque personnage marqué **Membre du groupe** (dans les réglages d'acteur de D35E), quelle que soit votre permission sur lui, les vôtres en premier.
- Chacun montre son portrait (ou l'image de son token, selon le réglage du HUD de groupe de D35E), une barre de points de vie et ses effets actifs. Les points de vie en chiffres ne s'affichent que pour les personnages que vous pouvez observer ; en dessous de 0, Mourant ou Mort.
- Touchez l'un des vôtres pour le jouer ; touchez-en un autre pour lister ses effets.

### Messages

| Commande | Effet |
|---|---|
| **Tout**, **Jets**, **Dégâts/Soins**, **Chuchotements** | Filtres. Les chuchotements du MJ sont sous Chuchotements. |
| Zone d'envoi | Tapez un message et envoyez-le. Les commandes de chat fonctionnent aussi : `/roll 1d20+5`, `/w GM …`. |

Vos propres jets affichent aussi un court résultat en haut quand vous êtes dans une autre vue.

### Combat

L'ordre d'initiative, avec le tour en cours marqué.

| Commande | Effet |
|---|---|
| **Lancer l'initiative** | Pour vos personnages qui ne l'ont pas encore lancée. |
| **Fin du tour** | À votre tour. |

Le téléphone du MJ a plus de boutons : voir [Le téléphone du MJ](#gm-phone).

<a id="map"></a>
### Carte

La carte de Foundry elle-même, adaptée au tactile. Seulement quand **Carte** est activé pour le compte.

> 📷 **Capture d'écran :** la vue Carte sur un téléphone, avec un token ciblé, les pastilles des cibles sous la carte et la ligne d'aide.

| Geste ou commande | Effet |
|---|---|
| Faire glisser | Déplace la carte. |
| Pincer, ou **+** et **−** | Zoom. |
| **Mon personnage** | Trouve votre token. |
| **Toucher un token** | Le cible ; touchez-le encore pour ne plus le cibler. Tout le monde voit vos cibles, et les attaques et sorts de D35E les utilisent. |
| Cibles (sous la carte) | Vos cibles. Touchez-en une pour la retirer. **Effacer les cibles** les retire toutes. |
| **Appui long sur votre token, puis glisser** | Le déplace : gardez le doigt appuyé, faites-le glisser là où il doit aller, et relâchez. Il se pose sur la case de la grille sous votre doigt. Les joueurs ne déplacent que leurs propres tokens, et les murs les arrêtent, comme le font les règles de déplacement de Foundry (une partie en pause aussi). Un appui long sur votre propre token en fait aussi le personnage que vous jouez. |
| **Appui long sur un autre token** | Ouvre sa fiche quand elle vous est ouverte : la boutique d'un marchand, un tas de butin, un autre personnage que vous pouvez consulter. |
| Le bouton œil | La carte voit comme votre personnage (vision dans le noir, vision nocturne, sa lumière), comme quand vous sélectionnez votre token sur un ordinateur. Touchez-le pour voir plutôt par tous vos tokens (le MJ : toute la carte). |
| Ligne d'aide | **Toucher : cibler · Maintenir : ouvrir ou déplacer**. Le **?** à côté affiche les instructions complètes ; **×** les replie. |

**Zones de sorts :** quand un sort demande où placer sa zone, la fenêtre passe d'elle-même à la carte. Touchez ou faites glisser là où elle doit aller, tournez-la avec les boutons flèches (cônes, lignes), puis **Placer** ou **Annuler**. D35E la place et trouve ses cibles comme sur un ordinateur.

La carte cesse de s'afficher pendant qu'une autre vue est affichée, pour économiser la batterie.

<a id="menu"></a>
### Menu (☰)

| Section | Effet |
|---|---|
| **Boutiques et butin** | Les marchands et tas de butin de la scène, et la réserve du groupe, qui vous sont ouverts. Touchez-en un pour ouvrir sa fiche (pas besoin de carte). |
| **Outils** | Les boutons en un clic qu'un joueur peut utiliser : les Outils d'Axecleft (Mes pièges, Artisanat et le reste) et les boutons d'autres modules. Les boutons qui fonctionnent en cliquant sur la carte sont laissés de côté. |
| **Barre latérale** | Journal, Objets, Compendiums et Tables aléatoires, ouverts à la largeur du téléphone. |
| **Barre de macros** | Vos macros, page par page (1 à 5). Touchez-en une pour la lancer. |

Chaque fenêtre ouverte sur le téléphone tient dans la largeur et la hauteur de l'écran. La liste des pages d'un journal commence repliée : touchez son bouton pour l'ouvrir.

### Bon à savoir

- **Connexion perdue :** la fenêtre affiche *Reconnexion…* et se recharge dès que le serveur répond de nouveau, y compris après une mise en veille du téléphone.
- **Écran d'accueil :** ajoutez la page à l'écran d'accueil du téléphone pour l'ouvrir comme une application.
- **Téléphone partagé :** chaque compte garde ses propres choix sur le téléphone (dernier onglet et dernière vue, créature choisie, œil de la carte), donc plusieurs comptes mobiles peuvent partager un téléphone.
- **Visite guidée :** **Réglages → Visite guidée de cette fenêtre** présente la fenêtre (**VooDoo : la fenêtre du téléphone**).

<a id="gm-phone"></a>
## Le téléphone du MJ

La fenêtre Comptes mobiles liste aussi les comptes MJ. Le compte mobile d'un MJ est un **Assistant MJ** : il voit et fait agir tous les acteurs, mais ne prend jamais la main sur votre propre compte MJ tant que celui-ci est connecté (Foundry choisit l'utilisateur connecté qui a le rôle le plus élevé).

Sur le téléphone d'un MJ, la fenêtre fait agir les créatures et les PNJ :

| Commande | Effet |
|---|---|
| **Choisir une créature** (touchez le nom en haut) | Les combattants du combat, les tokens de la scène (une créature non liée est la créature de son propre token), les personnages joueurs, et une recherche parmi tous les acteurs. |
| Tout ce qu'un joueur peut faire | Jets, attaques, sorts, objets, effets, cibles de la carte et zones de sorts, pour la créature choisie. |
| **Dégâts** / **Soigner** | Tapez un montant sous la barre de points de vie. Les dégâts retirent d'abord les points de vie temporaires ; les soins montent jusqu'au maximum. |
| Onglet Combat | Touchez un combattant pour le jouer. **Lancer pour les PNJ** (l'initiative des créatures qu'aucun joueur ne possède), **Commencer le combat**, **Tour suivant**, **Tour précédent**. |
| Carte : appui long sur un token | Le joue (il devient la créature choisie et le token sélectionné). Gardez le doigt appuyé et faites glisser pour déplacer n'importe quel token ; il se pose sur la case de la grille sous votre doigt, et les murs n'arrêtent pas le MJ. Un appui long sur un token de marchand ou de butin suivi d'un relâchement l'ouvre. Une touche cible toujours. |
| **Mode de jet** (Réglages) | Qui voit les jets du téléphone. |
