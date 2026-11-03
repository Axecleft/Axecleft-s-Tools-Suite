# Réglages de génération

**Où :** Générateur de trésors → onglet **Trésor par niveau** → **Réglages de génération** (cliquez pour déplier).

Ces réglages contrôlent les ajouts que les modules d'Axecleft font aux objets **générés aléatoirement**, ainsi que quelques options valables pour toute la campagne. Ils sont enregistrés pour le monde dès que vous les changez. Le titre indique « (Valeurs par défaut du SRD et d'Axecleft) » ou « (modifié pour ce monde) ». **Rétablir les valeurs par défaut**, en bas, remet tout comme au départ.

Les outils de création (la [Forge](fr-Forge) et l'[Atelier des Curiosités](fr-Atelier-des-Curiosités)) peuvent toujours ajouter ces options à la main, quel que soit le réglage ici.

> **<img width="609" height="659" alt="image" src="https://github.com/user-attachments/assets/ae8184e0-8f90-43c1-a868-cc2f9ebb6270" />**

## Campagne

Options valables pour **tous** les modules d'Axecleft :

- **Psioniques** : désactivé, les objets psioniques, pouvoirs, pierres psioniques, tatouages psioniques, dorjés et couronnes psioniques sont exclus des trésors, des marchands, de l'artisanat et de la Forge.
- **Objets épiques** : activé, la Forge et l'Artisanat peuvent créer des objets épiques (au-delà des limites +5 et +10 du SRD), et les marchands au caractère de communauté *Campagne épique* peuvent en avoir en stock. Le trésor aléatoire suit le SRD jusqu'au NR 20.
- **Part épique des objets supplémentaires à partir du NR 21** : le pourcentage des [objets puissants supplémentaires aux NR 21–30](fr-Trésor-par-niveau#niveau-de-rencontre) qui sont des objets épiques tirés des tables épiques du SRD (règle maison ; 25 % par défaut).

## Lumière, intelligence et inscriptions

Activez ou désactivez chacune avec **Lumière aléatoire**, **Intelligence aléatoire** et **Indices gravés**, puis réglez les chances pour chaque ligne du tableau :

| Ligne | Diffuse de la lumière | Vive / faible | Intelligent | Indice |
|---|---|---|---|---|
| Armes de corps à corps magiques | 30 % | 6 / 12 m (20 / 40 pieds) | 1 % | 15 % |
| Armes à distance magiques | désactivé | 6 / 12 m (20 / 40 pieds) | 1 % | 15 % |
| Armures et boucliers magiques | 5 % | 3 / 6 m (10 / 20 pieds) | 1 % | — |
| Autres objets magiques permanents | 1 % | 1,5 / 3 m (5 / 10 pieds) | 1 % | — |

Chaque case a une case à cocher (activé ou non) et un pourcentage. Voici les valeurs par défaut :
- **SRD :** 30 % des armes de corps à corps magiques diffusent de la lumière (comme un sort de *lumière* : 6 m de lumière vive, 12 m de lumière faible), les armes à distance non. 15 % des armes portent une inscription qui laisse deviner leur pouvoir. Moins de 1 % des objets permanents sont intelligents (jamais les potions, parchemins, baguettes ou munitions).
- **Règles maison :** la lumière sur les armures, boucliers et autres objets.

Les distances sont saisies en pieds, l'unité de D35E.

> **Foundry 11 :** la colonne Intelligent et ses options sont masquées, car D35E 2.4.3 ne gère pas les objets intelligents.

> **<img width="606" height="713" alt="image" src="https://github.com/user-attachments/assets/44fef60c-45f1-4b7e-a80d-72755fc99c0c" />**

**Desseins spéciaux (objets intelligents) :** le SRD donne à un objet intelligent un dessein spécial et un pouvoir dédié *à la place* de l'un de ses pouvoirs.
- **Les objets intelligents peuvent avoir un dessein spécial** : active les desseins spéciaux.
- **% des objets intelligents dotés de pouvoirs majeurs** (SRD, 100 % par défaut) : ceux-ci échangent un pouvoir majeur contre le dessein et son pouvoir dédié.
- **% de ceux qui n'ont que des pouvoirs mineurs** (règle maison, 0 % par défaut) : ceux-ci échangent un pouvoir mineur contre lui.

Un dessein choisi à la main dans la [Forge](fr-Forge#choisir-les-caractéristiques-dun-objet-intelligent) ou dans l'[Atelier des Curiosités](fr-Atelier-des-Curiosités#objets-précis-et-aléatoires) s'ajoute aux pouvoirs de l'objet.

**Options de lumière :**
- **La couleur et l'animation de la lumière suivent les propriétés de l'objet** : une épée de feu vacille en orange, une arme sainte brille d'or, un objet nécromantique flotte dans un vert maladif. Désactivé : lumière blanche neutre.
- **Les objets plus puissants brillent plus fort** : l'intensité croît avec la puissance de l'aura de l'objet.
- **Les objets plus puissants éclairent plus loin : … pieds par +1 au-delà de +2** : le rayon croît avec le bonus d'altération.

## Tailles des armes et armures

**SRD :** les armures et armes aléatoires sont de taille Petite à 30 %, Moyenne à 60 % et d'une autre taille à 10 % (ici, Grande).
- Les armes et armures Petites coûtent autant et pèsent moitié moins.
- Les Grandes coûtent deux fois plus et pèsent deux fois plus.

Décochez pour que tout soit de taille Moyenne.

<a id="your-item-compendiums"></a>
## Vos compendiums d'objets

La part des trésors et du stock des marchands qui vient de vos propres compendiums d'objets (voir [Sources d'objets](fr-Générateur-de-marchands#onglet-sources-dobjets)) là où un module d'Axecleft fournit aussi ce genre d'objet :

- **% des trésors** (0 par défaut, seulement les tables du SRD) : le [Trésor par niveau](fr-Trésor-par-niveau) et le [Butin Token](fr-Butin-Token) prennent cette part de leurs armes et armures magiques, potions, parchemins et autres objets dans vos compendiums d'objets au lieu des tables du SRD des modules. L'objet est du même genre et de la même catégorie ; s'il n'y en a aucun, les tables du SRD sont utilisées.
- **% du stock des marchands** (50 par défaut) : les marchands tirent cette part de leur stock de vos compendiums d'objets.
- Décoché : rien ne vient de vos compendiums là où un module fournit le genre d'objet.

Les genres qu'aucun module ne couvre viennent toujours de vos compendiums.

**Étiquettes de poids de trésor :** donnez à un objet de vos compendiums l'étiquette d'objet D35E `Treasure weight: 3` et il sort trois fois plus souvent que les autres objets avec lesquels il est tiré. `Treasure weight: 0` le tient à l'écart du trésor aléatoire et du stock des marchands ; on peut toujours le choisir à la main dans la Forge et l'Artisanat. Les objets sans l'étiquette pèsent 1. Ce n'est pas une [étiquette de boutique](fr-Étiquettes-de-boutique) : l'outil Étiquettes de boutique n'y touche donc pas.

## Poisons

**… % des tirages d'objets ordinaires deviennent un poison** pris dans vos sources d'objets (règle maison ; 1 % par défaut). Augmentez-le dans les campagnes où le poison est courant. Il faut des poisons dans vos sources d'objets, par exemple les compendiums de Pièges, poisons et maladies.

## Objets maudits

Active les malédictions aléatoires et règle leur fréquence. Voir [Objets maudits](fr-Objets-maudits) pour tout savoir sur les malédictions.

- **Objets maudits** (case à cocher) : activé ou non.
- **Taux fixe** : une seule chance pour chaque objet magique (**1 %** par défaut).
- **Taux par puissance** : une chance par catégorie : **faible 3 %**, **moyen 2 %**, **puissant et épique 1 %** par défaut.
- **Objets maudits spécifiques (table du SRD)** : permet aux objets maudits spécifiques du SRD (bracelets de vulnérabilité, l'épée maudite –2…) de remplacer un objet tiré.
- **Appliquer les effets simples (malus, bonus inversés)** : transforme un +2 inversé en –2, retire la magie d'un objet d'illusion trompeuse, etc.
- **Le stock des marchands peut être maudit** : désactivé par défaut, pour que les boutiques vendent des objets sains.
- **Créer le compendium des buffs de malédiction** : construit le compendium de monde « Malédictions d'Axecleft » (voir [Objets maudits](fr-Objets-maudits#les-compendiums-des-buffs-de-malédiction)).

## Visite guidée

Les Réglages de génération ont leur propre visite guidée, dans **Configurer les paramètres → Gestion des visites guidées**. Voir [Visites guidées](fr-Générateur-de-trésors#tours).
