# Premiers pas

## Ce qu'il vous faut

| | Foundry 13 ou 14 | Foundry 11 |
|---|---|---|
| Système de jeu | D35E 3.x | D35E 2.4.3 |
| Versions des modules | 1.14.x | 1.11.x |
| Objets intelligents | Oui (D35E 3.1 ou plus récent) | Non (masqués) |

Facultatif : **Babele** et un module de traduction (par exemple la traduction française de D35E) pour les mondes dans une autre langue. Voir [Langues](fr-Langues).

## Installation

1. Dans l'onglet **Modules complémentaires** de Foundry, choisissez **Installer un module** et collez l'URL du manifeste du module (depuis sa page de version sur GitHub), ou cherchez-le par son nom.
2. Installez les modules voulus. Ils ne dépendent pas les uns des autres, mais se recommandent mutuellement, car chacun enrichit les fenêtres partagées.
3. Dans votre monde, ouvrez **Paramètres du jeu → Gérer les modules**, cochez les modules et enregistrez. Foundry recharge le monde.

> **Utilisateurs de Foundry 11 :** installez les téléchargements **1.11.x**. Les versions 1.14.x demandent Foundry 13 ou 14.

## Quel module apporte quoi

| Fenêtre ou fonction | Gemmes | Armurerie | Curiosités | Pièges |
|---|:-:|:-:|:-:|:-:|
| Fenêtre du [Générateur de trésors](fr-Générateur-de-trésors) | ✔ | ✔ | ✔ | |
| Gemmes, objets d'art et bijoux | ✔ | | | |
| Armes, armures, boucliers, munitions | | ✔ | | |
| Potions, parchemins, baguettes, anneaux, sceptres, bâtons, objets merveilleux et psioniques | | | ✔ | |
| [Générateur de marchands](fr-Générateur-de-marchands) et [Étiquettes de boutique](fr-Étiquettes-de-boutique) | ✔ | ✔ | ✔ | |
| Feuille [Boutique d'Axecleft](fr-Boutique-d'Axecleft) : marchands, butin, réserve du groupe | ✔ | ✔ | ✔ | |
| Fenêtre d'[Artisanat](fr-Artisanat) | | ✔ | ✔ | ✔ |
| Onglet [Forge](fr-Forge) | | ✔ | | |
| Onglet [Atelier des Curiosités](fr-Atelier-des-Curiosités), compendium des buffs courants | | | ✔ | |
| Pièges, poisons, maladies, kits de piège | | | | ✔ |

Les autres modules fonctionnent chacun seul :

| Module | Ce qu'il apporte |
|---|---|
| **Éditeur de trésors d'Axecleft** | L'onglet **Trésors** du Générateur de trésors (demande les Gemmes, l'Armurerie ou les Curiosités pour le Générateur de trésors). Voir [Éditeur de trésors](fr-Éditeur-de-trésors). |
| **Aventuriers et Serviteurs d'Axecleft** | Le créateur de personnages : création, aléatoire et modification. Voir [Aventuriers et Serviteurs](fr-Aventuriers-et-Serviteurs). |
| **VooDoo d'Axecleft** | Les comptes mobiles et la fenêtre du téléphone. Voir [VooDoo](fr-VooDoo). |
| **Fiches imprimables d'Axecleft** | Des boutons et des entrées de menu pour imprimer. Voir [Fiches imprimables](fr-Fiches-imprimables). |
| **Suite d'outils d'Axecleft** | Le gestionnaire de la suite : activer et désactiver les modules, vérifier les mises à jour. Voir [Suite d'outils d'Axecleft](fr-Suite-d'outils-Axecleft). |

Les fenêtres partagées fonctionnent tant qu'**au moins un** module qui les fournit est actif. Avec Gemmes seul, le Générateur de trésors tire les pièces, les gemmes et l'art, et liste les objets magiques dans la carte de chat pour que vous vous en occupiez. Ajoutez l'Armurerie et les Curiosités, et ces objets sont créés pour vous.

## Ouvrir les outils

Tous les outils sont dans le groupe **Outils d'Axecleft** de la barre d'outils de gauche de Foundry, à côté des outils du MJ :

- **Générateur de trésors** : pièces, gemmes, art, bijoux et objets.
- **Artisanat** : fabriquer des objets selon le SRD (objets magiques avec les dons de création d'objets, objets ordinaires avec Artisanat).
- **Générateur de marchands** : créer, approvisionner et réapprovisionner des marchands.
- **Étiquettes de boutique** : étiqueter les objets des compendiums avec les boutiques qui les vendent.
- **Générateur de pièges aléatoires** : tirer des pièges aléatoires par FP et créer des acteurs pièges.
- **Aventuriers et Serviteurs** : créer, tirer au hasard ou modifier des personnages et des PNJ (avec A&M).
- **Comptes mobiles** : créer les comptes de téléphone de vos joueurs (avec VooDoo).

Le Générateur de trésors a aussi un bouton **Trésor** en haut de la barre latérale **Objets**.

> **<img width="460" height="412" alt="image" src="https://github.com/user-attachments/assets/fdf98582-71b7-4a44-8bbc-c5253b7fcb3e" />**

La plupart des outils sont réservés au MJ. Les joueurs voient **Artisanat** dans leur groupe Outils d'Axecleft tant que le paramètre **Les joueurs peuvent fabriquer** est activé (voir [Artisanat](fr-Artisanat)), **Mes pièges** (avec Pièges, poisons et maladies), **Aventuriers et Serviteurs** (avec A&M : ils modifient les acteurs qu'ils possèdent et peuvent en créer de nouveaux ; voir [Qui peut l'utiliser](fr-Aventuriers-et-Serviteurs)) et **Guide d'utilisation**.

Le dernier bouton, **Guide d'utilisation**, ouvre ce wiki dans votre navigateur, dans la langue choisie dans Foundry.

## Visites guidées

La plupart des fenêtres ont des visites guidées. Ouvrez **Configurer les paramètres → Gestion des visites guidées** et regardez sous le nom du module, ou utilisez **Visite de cet onglet** dans le menu **⋮** d'une fenêtre (Foundry 13–14). Sous Foundry 11, la barre de titre de la fenêtre a un bouton **Visite** à la place. Les joueurs ont aussi des visites guidées pour les fenêtres qu'ils utilisent (la feuille de boutique, A&M, la fenêtre du téléphone VooDoo).

## Premiers réglages

1. **Sources d'objets.** Ouvrez le [Générateur de marchands](fr-Générateur-de-marchands) → onglet **Sources d'objets** et cochez les compendiums qui contiennent vos objets. Le Générateur de trésors et les marchands ne prennent des objets que dans ceux-ci.
2. **Options de campagne.** Dans le Générateur de trésors → **Trésor par niveau** → [Réglages de génération](fr-Réglages-de-génération), activez ou désactivez **Psioniques** et **Objets épiques** selon votre campagne.
3. **Pièces.** Dans le même onglet, choisissez comment sont payées les pièces de cuivre, d'argent, d'or et de platine du SRD (voir [Trésor par niveau](fr-Trésor-par-niveau#pièces)).
4. **Essayez.** Choisissez un niveau de rencontre, réglez **Placer les objets dans** sur **Carte de chat seulement**, et appuyez sur **Générer**.

## Mises à jour

Installez les mises à jour depuis l'onglet **Modules complémentaires** de Foundry, comme d'habitude. Avec la **Suite d'outils d'Axecleft** installée, un MJ est prévenu quand des mises à jour d'Axecleft sont disponibles, et sa fenêtre vérifie chaque module par rapport aux bons téléchargements pour votre version de Foundry (voir [Suite d'outils d'Axecleft](fr-Suite-d'outils-Axecleft)). Vos paramètres, votre journal des listes de trésors et vos listes personnalisées sont conservés : les listes personnalisées sont aussi enregistrées dans un fichier de votre dossier Data (voir [Listes de trésors](fr-Listes-de-trésors)), elles survivent donc aux mises à jour des modules.

Après une mise à jour, redémarrez Foundry et rechargez le navigateur avec **Ctrl+F5** pour qu'il charge les nouveaux scripts.
