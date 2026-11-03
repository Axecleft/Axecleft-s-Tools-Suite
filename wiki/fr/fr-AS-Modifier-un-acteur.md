# Modifier un acteur (Aventuriers et Serviteurs)

**Où :** [Aventuriers et Serviteurs](fr-Aventuriers-et-Serviteurs) → **Modifier un acteur** ; **Modifier avec Aventuriers et Serviteurs** dans le menu du clic droit d'un acteur dans la barre latérale des Acteurs ; la fiche d'un acteur (le menu **⋮** sous Foundry 13–14, le bouton A&M de la barre de titre sous Foundry 11) ; ou le bouton **Aventuriers et Serviteurs** de la barre d'outils des tokens, pour l'acteur du token sélectionné si vous en êtes propriétaire.

Relisez un acteur existant dans les étapes, ajoutez des niveaux ou changez des classes, et n'appliquez que ce qui a changé. Une copie de l'acteur est gardée d'abord. Les joueurs peuvent modifier les acteurs dont ils sont propriétaires.

> 📷 **Capture d'écran :** la page Modifier un acteur avec un acteur choisi, et le bouton Ouvrir.

## Choisir l'acteur

| Commande | Effet |
|---|---|
| Acteur | Choisissez l'un de vos acteurs, ou celui d'un token sélectionné, ou déposez un acteur sur la fenêtre. |
| **Ouvrir** | Relit l'acteur dans les étapes. |

## Comment l'acteur est relu

- **Les acteurs créés par A&M** se rouvrent exactement comme ils ont été créés : leur plan est gardé sur l'acteur.
- **Les autres acteurs** sont relus d'après ce qu'ils ont : les objets de race et de classe, les enregistrements de niveau de D35E, les dons (placés dans leurs emplacements) et les sorts (selon la classe de leur livre de sorts).
- Un acteur qui n'utilise pas la progression par niveaux de D35E est relu d'après les niveaux de ses objets de classe. L'ordre des classes, les points de vie de chaque niveau et l'endroit où les degrés de compétence ont été achetés sont alors la meilleure estimation d'A&M.
- Ce qu'A&M a deviné ou n'a pas pu placer est listé en haut de **Classes et niveaux** et de **Vérification**.
- Tout ce qu'A&M ne connaît pas (un don maison, une classe absente de vos compendiums, les sorts à l'intérieur des objets grimoires des Curiosités) reste sur l'acteur sans être touché.

## Le changer

Changez n'importe quoi dans les étapes (voir [Créer un personnage](fr-AS-Créer-un-personnage)) :
- ajouter des niveaux de n'importe quelle classe, changer la classe d'un niveau, retirer des niveaux ;
- changer les valeurs de caractéristiques, les compétences, les dons ou les sorts ;
- changer les domaines, les écoles de spécialisation, les variantes d'aptitudes de classe et le style de combat du rôdeur. Changer le style de combat échange ses aptitudes et ses dons.

Dans **Sorts**, **Ajouter les sorts des nouveaux niveaux** ajoute ce qu'apportent les nouveaux niveaux et garde les sorts de l'acteur.

<a id="gear"></a>
## Équipement (reprise)

Dans **Équipement**, chaque objet de l'acteur peut être :

| Choix | Effet |
|---|---|
| Garder | Le choix par défaut. |
| Déséquiper | Dans le sac, ce qui libère sa place pour l'équipement ou le trésor des nouveaux niveaux. |
| Vendre | Il quitte l'acteur, et sa valeur de reprise s'ajoute à la richesse qu'apportent les nouveaux niveaux, pour acheter mieux. |

- La valeur de reprise est le paramètre **Valeur de reprise** (SRD : la moitié, 50 %). Les gemmes, l'art et les marchandises comptent à leur pleine valeur.
- Seul un MJ vend, sauf si **Les joueurs peuvent revendre de l'équipement** est activé. Les joueurs peuvent toujours garder ou déséquiper.
- L'équipement ajouté à l'étape est ajouté à l'acteur. Du trésor peut être tiré pour la richesse qu'apportent les nouveaux niveaux (des armes seulement là où rien n'est équipé).
- Vérification liste ce qui est déséquipé et vendu. La copie de sauvegarde garde tout.

<a id="review"></a>
## Vérification

| Commande | Effet |
|---|---|
| **Compléter ce qui manque** | Remplit, selon les profils de classe : les compétences des niveaux qui ont encore des points, les emplacements de don vides, les dons dont les conditions ne sont plus remplies (un don dont l'emplacement a disparu avec une classe changée passe dans un emplacement libre ou est retiré), les augmentations de caractéristique, et les sorts qu'apportent les nouveaux niveaux. Ce que vous avez choisi reste. |
| **Modifications** | Liste tout ce qui va changer. |
| Copie avant une modification | Faire ou non la copie de sauvegarde (paramètre **Copie avant une modification**, activé par défaut). |
| **Appliquer les modifications** | N'écrit que ce qui a changé. |

**Appliquer les modifications** écrit les objets de classe et les enregistrements de niveau de D35E, les valeurs de caractéristiques, les degrés de compétence, les dons et sorts ajoutés ou retirés, et le nombre de préparations. L'équipement, les effets, les aptitudes de classe et tout le reste ne bougent pas. L'XP d'un personnage est portée au nouveau niveau, et des points de vie pleins restent pleins.

## Sauvegardes

Avant d'appliquer, A&M fait une copie de l'acteur dans le dossier **Sauvegardes A&M** (paramètre **Copie avant une modification**). Pour un joueur qui ne peut pas créer d'acteurs, la copie est créée par le Foundry d'un MJ et appartient au joueur (voir [Qui peut s'en servir](fr-Aventuriers-et-Serviteurs#who-can-use-it)).
