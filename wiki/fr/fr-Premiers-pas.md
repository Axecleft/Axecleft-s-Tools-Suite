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
| Fenêtre d'[Artisanat](fr-Artisanat) | | ✔ | ✔ | ✔ |
| Onglet [Forge](fr-Forge) | | ✔ | | |
| Onglet [Atelier des Curiosités](fr-Atelier-des-Curiosités), compendium des buffs courants | | | ✔ | |
| Pièges, poisons, maladies, kits de piège | | | | ✔ |

Les fenêtres partagées fonctionnent tant qu'**au moins un** module qui les fournit est actif. Avec Gemmes seul, le Générateur de trésors tire les pièces, les gemmes et l'art, et liste les objets magiques dans la carte de chat pour que vous vous en occupiez. Ajoutez l'Armurerie et les Curiosités, et ces objets sont créés pour vous.

## Ouvrir les outils

Tous les outils sont dans le groupe **Outils d'Axecleft** de la barre d'outils de gauche de Foundry, à côté des outils du MJ :

- **Générateur de trésors** : pièces, gemmes, art, bijoux et objets.
- **Artisanat** : fabriquer des objets selon le SRD (objets magiques avec les dons de création d'objets, objets ordinaires avec Artisanat).
- **Générateur de marchands** : créer, approvisionner et réapprovisionner des marchands.
- **Étiquettes de boutique** : étiqueter les objets des compendiums avec les boutiques qui les vendent.
- **Générateur de pièges aléatoires** : tirer des pièges aléatoires par FP et créer des acteurs pièges.

Le Générateur de trésors a aussi un bouton **Trésor** en haut de la barre latérale **Objets**.

> **<img width="460" height="412" alt="image" src="https://github.com/user-attachments/assets/fdf98582-71b7-4a44-8bbc-c5253b7fcb3e" />**

La plupart des outils sont réservés au MJ. Les joueurs voient **Artisanat** dans leur groupe Outils d'Axecleft tant que le paramètre **Les joueurs peuvent fabriquer** est activé (voir [Artisanat](fr-Artisanat)), **Mes pièges** (avec Pièges, poisons et maladies) et **Guide d'utilisation**.

Le dernier bouton, **Guide d'utilisation**, ouvre ce wiki dans votre navigateur, dans la langue choisie dans Foundry.

## Premiers réglages

1. **Sources d'objets.** Ouvrez le [Générateur de marchands](fr-Générateur-de-marchands) → onglet **Sources d'objets** et cochez les compendiums qui contiennent vos objets. Le Générateur de trésors et les marchands ne prennent des objets que dans ceux-ci.
2. **Options de campagne.** Dans le Générateur de trésors → **Trésor par niveau** → [Réglages de génération](fr-Réglages-de-génération), activez ou désactivez **Psioniques** et **Objets épiques** selon votre campagne.
3. **Pièces.** Dans le même onglet, choisissez comment sont payées les pièces de cuivre, d'argent, d'or et de platine du SRD (voir [Trésor par niveau](fr-Trésor-par-niveau#pièces)).
4. **Essayez.** Choisissez un niveau de rencontre, réglez **Placer les objets dans** sur **Carte de chat seulement**, et appuyez sur **Générer**.

## Mises à jour

Installez les mises à jour depuis l'onglet **Modules complémentaires** de Foundry, comme d'habitude. Vos paramètres, votre journal des listes de trésors et vos listes personnalisées sont conservés : les listes personnalisées sont aussi enregistrées dans un fichier de votre dossier Data (voir [Listes de trésors](fr-Listes-de-trésors)), elles survivent donc aux mises à jour des modules.

Après une mise à jour, redémarrez Foundry et rechargez le navigateur avec **Ctrl+F5** pour qu'il charge les nouveaux scripts.
