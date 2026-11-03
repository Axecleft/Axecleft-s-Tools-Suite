# Suite d'outils d'Axecleft (le module)

**Où :** **Configurer les paramètres → Suite d'outils d'Axecleft → Ouvrir la suite d'outils** (*Open Tool Suite*), ou le bouton **Suite d'outils d'Axecleft** de la barre latérale des Paramètres, sous **Gérer les modules**. MJ seulement.

Une seule fenêtre pour gérer la suite : activer ou désactiver les modules d'Axecleft installés pour ce monde, et vérifier sur GitHub s'il y a de nouvelles versions. Les installations et les mises à jour se font toujours depuis l'écran de configuration de Foundry.

C'est un seul module pour Foundry 11 et Foundry 13–14. Il sait sous quel Foundry il tourne et vérifie chaque module auprès du bon dépôt : les dépôts principaux (versions 1.14.x) sous Foundry 13–14, les dépôts « -v11 » (versions 1.11.x) sous Foundry 11.

À ne pas confondre avec le bouton **Suite d'outils d'Axecleft** des paramètres de chaque module, qui regroupe les réglages de la fenêtre d'accueil (voir [Paramètres](fr-Paramètres#paramètres-de-la-suite-doutils-dans-chaque-module)).

> 📷 **Capture d'écran :** la fenêtre Suite d'outils d'Axecleft, avec un module décoché (en surbrillance), une ligne indiquant Mise à jour disponible et une Non installé.

## Installation

Installez **Suite d'outils d'Axecleft** depuis **Modules complémentaires → Installer un module** de Foundry, avec l'URL de son manifeste :

`https://github.com/Axecleft/Axecleft-s-Tools-Suite/releases/latest/download/module.json`

Il propose Pièges, poisons et maladies, l'Armurerie, les Curiosités, les Gemmes et Aventuriers et Serviteurs comme modules recommandés.

## Les modules

| Module | À quoi il sert | Foundry 13–14 | Foundry 11 |
|---|---|---|---|
| Suite d'outils d'Axecleft | Cette fenêtre. | [Axecleft-s-Tools-Suite](https://github.com/Axecleft/Axecleft-s-Tools-Suite) | (le même) |
| Pièges, poisons et maladies d'Axecleft | Pièges, poisons et maladies : acteurs pièges, poisons consommables et générateurs. | [Traps-and-Poisons](https://github.com/Axecleft/Traps-and-Poisons) | [Traps-and-Poisons-v11](https://github.com/Axecleft/Traps-and-Poisons-v11) |
| Armurerie d'Axecleft | Génération et fabrication d'armes et d'armures. | [Armory](https://github.com/Axecleft/Armory) | [Armory-v11](https://github.com/Axecleft/Armory-v11) |
| Curiosités d'Axecleft | Objets magiques, consommables, grimoires et psioniques. | [Curios](https://github.com/Axecleft/Curios) | [Curios-v11](https://github.com/Axecleft/Curios-v11) |
| Gemmes d'Axecleft | Gemmes, bijoux et objets d'art avec le Générateur de trésors. | [Axeclefts-Gemstones](https://github.com/Axecleft/Axeclefts-Gemstones) | [Axeclefts-Gemstones-v11](https://github.com/Axecleft/Axeclefts-Gemstones-v11) |
| Aventuriers et Serviteurs d'Axecleft | Personnages et PNJ complets : création, aléatoires et modification. Voir [Aventuriers et Serviteurs](fr-Aventuriers-et-Serviteurs). | [Axeclefts-Adventurers-Minions](https://github.com/Axecleft/Axeclefts-Adventurers-Minions) | [Axeclefts-Adventurers-Minions-v11](https://github.com/Axecleft/Axeclefts-Adventurers-Minions-v11) |
| Éditeur de trésors d'Axecleft | Trésors : créer, remplir, placer et partager. | [Axeclefts-Hoard-Editor](https://github.com/Axecleft/Axeclefts-Hoard-Editor) | [Axeclefts-Hoard-Editor-v11](https://github.com/Axecleft/Axeclefts-Hoard-Editor-v11) |
| VooDoo d'Axecleft | Une feuille de personnage mobile pour les téléphones des joueurs. Voir [VooDoo](fr-VooDoo). | [Axeclefts-VooDoo](https://github.com/Axecleft/Axeclefts-VooDoo) | [Axeclefts-VooDoo-v11](https://github.com/Axecleft/Axeclefts-VooDoo-v11) |
| Fiches imprimables d'Axecleft | Feuilles de personnage papier, blocs de statistiques, marchands, butin, trésors et pièges. | [Axeclefts-Printable-Sheets](https://github.com/Axecleft/Axeclefts-Printable-Sheets) | [Axeclefts-Printable-Sheets-v11](https://github.com/Axecleft/Axeclefts-Printable-Sheets-v11) |

## La fenêtre

### En haut

**Activez ou désactivez les modules de la suite pour ce monde et vérifiez sur GitHub s'il y a de nouvelles versions** (*Turn suite modules on or off for this world and check GitHub for new versions*), et des liens vers le **Guide d'utilisation** (ce wiki), **Discord** et **Patreon**.

### Le tableau

Une ligne pour chaque module ci-dessus.

| Colonne | Ce qu'elle montre |
|---|---|
| **Activé** (*Enabled*) | Cochez ou décochez un module installé pour l'activer ou le désactiver dans ce monde. Les lignes modifiées sont en surbrillance jusqu'à ce que vous appliquiez les changements. La Suite d'outils elle-même montre un cadenas (**Le gestionnaire de la Suite d'outils reste activé pendant que vous l'utilisez.** — *The Tool Suite manager stays enabled while you use it.*). Un module non installé affiche —. |
| **Module** | Le nom du module et ce à quoi il sert. |
| **Installée** (*Installed*) | La version installée, ou — quand il n'est pas installé. |
| **Dernière** (*Latest*) | La dernière version trouvée sur GitHub, ou — avant une vérification. |
| **État** (*Status*) | Voir ci-dessous. |
| Bouton journal des modifications | **Journal des modifications / notes de version** (*Changelog / release notes*) : ouvre les notes de version du module ou sa page GitHub. |
| Bouton copier | Seulement pour un module non installé : **Copier l'URL du manifeste** (*Copy manifest URL*) à coller dans l'écran de configuration → **Modules complémentaires → Installer un module**. |

| État | Signification |
|---|---|
| **À jour** (*Up to date*) | La version installée est la dernière. |
| **Mise à jour disponible** (*Update available*) | Une version plus récente est sur GitHub. |
| **Version de développement** (*Development build*) | La version installée est plus récente que la dernière publiée. |
| **Non vérifié** (*Not checked*) | Aucune version trouvée pour l'instant : appuyez sur **Rechercher des mises à jour**. |
| **Non installé** (*Not installed*) | Le module n'est pas installé. |

Sous le tableau : **Les mises à jour et les nouvelles installations se font depuis l'écran de configuration de Foundry : Modules complémentaires → Tout mettre à jour met à jour chaque module de la suite installé.** (*Updates and new installs are done from Foundry's Setup screen: Add-on Modules → Update All updates every installed suite module.*)

### En bas

| Commande | Effet |
|---|---|
| **Dernière vérification :** (*Last checked:*) | Quand les mises à jour ont été vérifiées pour la dernière fois dans ce navigateur, ou **Mises à jour pas encore vérifiées.** (*Updates not checked yet.*) |
| **Rechercher des mises à jour** (*Check for Updates*) | Vérifie sur GitHub maintenant et indique combien de mises à jour il y a, ou **Tous les modules d'Axecleft installés sont à jour.** (*All installed Axecleft modules are up to date.*) |
| **Appliquer et recharger** (*Apply & Reload*) | Seulement quand vous avez changé une case. Ouvre **Appliquer les changements de modules** (*Apply Module Changes*), qui liste les modules à activer (✔) ou à désactiver (✖) et les **Modules requis également activés** (*Required modules also enabled*). Confirmez, et le monde se recharge. |

Si un module que vous activez demande un module qui n'est pas installé, rien ne change et une erreur le nomme (**Impossible d'activer — module requis non installé : …** — *Can't enable — required module not installed: …*).

## Comment les mises à jour sont vérifiées

- Un module installé est vérifié d'après son propre manifeste : une version pour Foundry 11 vérifie son dépôt « -v11 » et une version 1.14.x son dépôt principal.
- Un module non installé est vérifié auprès du dépôt correspondant à la version de Foundry que vous utilisez.
- La dernière version vient de la dernière publication (*release*) du module sur GitHub.
- Les résultats sont gardés dans ce navigateur pendant 6 heures. **Rechercher des mises à jour** vérifie toujours à nouveau.

## Paramètre

**Configurer les paramètres → Suite d'outils d'Axecleft.**

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Avis de mise à jour au démarrage** (*Update notice on startup*) | Activé | Quand un MJ charge le monde, vérifie les mises à jour des modules d'Axecleft (au plus toutes les 6 heures) et affiche un avis : **Suite d'outils d'Axecleft : N mise(s) à jour disponible(s). Installez-les depuis l'écran de configuration (Tout mettre à jour).** (*Axecleft's Tool Suite: N update(s) available. Install them from the Setup screen (Update All).*) Un réglage par navigateur. |
