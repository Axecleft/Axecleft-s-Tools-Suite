# Générateur de marchands

**Où :** **Outils d'Axecleft → Générateur de marchands**.

Créez, approvisionnez et réapprovisionnez des marchands D35E. Un marchand est un acteur PNJ sur la feuille [Boutique d'Axecleft](fr-Boutique-d'Axecleft), avec un stock d'objets et une bourse. Les joueurs achètent et vendent depuis son token. Un MJ doit être connecté pour tout échange, et les joueurs ont besoin de **Limité** ou **Observateur** sur le marchand, jamais Propriétaire.

La fenêtre a cinq onglets : **Marchand**, **Types de boutique**, **Personnes**, **Sources d'objets** et **Étiquettes de boutique**.

**Visites guidées :** chaque onglet a sa visite guidée. Lancez-la depuis le menu ⋮ de la fenêtre (**Visite de cet onglet**), ou depuis **Configurer les paramètres → Gestion des visites guidées**. Sous Foundry 11, utilisez le bouton **Visite** de la barre de titre.

> **<img width="1004" height="982" alt="image" src="https://github.com/user-attachments/assets/2ce6e875-666f-41b8-83cd-452722d8bc28" />**

## Onglet Marchand

### La boutique

| Commande | Effet |
|---|---|
| **Boutique** | Le genre de boutique : les types de boutique intégrés, **Vos types de boutique** (voir [Types de boutique](#onglet-types-de-boutique)), et les types ajoutés par d'autres modules. Une ligne en dessous montre quels modules et compendiums fournissent son stock. |
| **Communauté** | La taille de la communauté, qui fixe sa limite en po, le nombre d'objets différents, la bourse du marchand et les catégories de magie proposées. Voir le tableau ci-dessous. |
| **Limite en po** | **Rien au-dessus de la limite en po de la communauté** (SRD). Décochez pour tout permettre. |
| **Caractère de la communauté** | Cliquez pour déplier. Cochez les traits qui correspondent au lieu (voir ci-dessous). |
| **Sécurité** | La protection de la boutique contre le vol à la tire et le vol à l'étalage. Cochez tout ce qui convient (voir [Sécurité](#security)). |
| **Objets différents** | Combien d'objets différents mettre en stock, sous forme de formule de dés. Vide : celle de la communauté (la moitié pour un réapprovisionnement). |
| **Marchandises non estimées** | Le % des gemmes, objets d'art et bijoux laissés non identifiés, vendus à leur valeur de base (10 % par défaut). |

| Communauté | Limite en po | Objets différents | Bourse | Catégories de magie |
|---|---|---|---|---|
| Lieu-dit | 40 po | 1d4+1 | 1d4×10 po | faible |
| Hameau | 100 po | 1d6+2 | 2d6×10 po | faible |
| Village | 200 po | 2d4+2 | 2d4×25 po | faible |
| Petite ville | 800 po | 2d6+3 | 2d4×100 po | faible |
| Grande ville | 3 000 po | 3d6+4 | 3d6×100 po | faible, moyen |
| Petite cité | 15 000 po | 4d6+5 | 2d4×1 000 po | faible, moyen |
| Grande cité | 40 000 po | 5d6+6 | 4d6×1 000 po | faible, moyen, puissant |
| Métropole | 100 000 po | 6d6+8 | 6d6×1 000 po | faible, moyen, puissant |

Traits du **caractère de la communauté** (cochez tous ceux qui conviennent) :

| Trait | Effet |
|---|---|
| Port | Davantage de marchandises exotiques, de gemmes et d'objets d'art |
| Ville minière | Gemmes, armes et armures |
| Frontière / avant-poste | Équipement et armes, peu de magie, prix +10 % |
| Plaque tournante / carrefour | Moitié plus de stock, prix −5 % |
| Lieu saint / cité-temple | Potions, parchemins, eau bénite |
| Centre arcanique | Deux fois plus de magie, limite en po doublée |
| Prospère | Art et gemmes, limite en po ×1,5, prix +10 % |
| Pauvre / ravagé par la guerre | Moins de stock, limite en po divisée par deux, prix +20 % |
| Éloigné / isolé | Moins de stock, prix +25 % |
| Sans loi / repaire de voleurs | Deux fois plus de marchandises non estimées et de poisons, prix −10 % |
| Campagne épique | Des objets épiques en stock dans toute communauté (environ 1 objet magique sur 10, au-delà de la limite en po), toutes les catégories, limite en po ×10. Demande **Objets épiques** activé dans les [Réglages de génération](fr-Réglages-de-génération#campagne). |

> **<img width="1356" height="978" alt="merchant gen" src="https://github.com/user-attachments/assets/6e7b7f4c-ed9f-4af4-a705-af468be9934c" />**

<a id="security"></a>
### Sécurité

La protection de la boutique contre le vol à la tire et le vol à l'étalage sur la feuille [Boutique d'Axecleft](fr-Boutique-d'Axecleft#pickpocketing-and-shoplifting). Cochez tout ce qui convient ; leurs effets s'additionnent :

| Sécurité | Effet |
|---|---|
| Négligent / distrait | Détection du marchand −4, DD −2 |
| Bondé / animé | Détection −2 |
| Propriétaire vigilant | Détection +4 |
| Gardes en service | Détection +5 |
| Animal de garde | Détection +3 |
| Marchandises sous clé | DD du vol à l'étalage +10 |
| Argent en sécurité | DD du vol à la tire +5 |
| Protégé par magie | Détection +10 contre le vol à l'étalage |

La sécurité est enregistrée avec le marchand (un réapprovisionnement avec ses réglages enregistrés la conserve), affichée dans le résumé du chat, et peut être changée plus tard dans les réglages MJ de la feuille de la boutique. La carte de vol à la tire du MJ montre le DD et la Détection avec la part due à la sécurité, et liste ce qui s'est appliqué.

### Prix et bourse

Cliquez pour déplier.
- **Vend à** : le % de la valeur que demande le marchand (100 par défaut). Le caractère de la communauté peut l'ajuster.
- **Achète à** : le % de la valeur que paie le marchand (SRD : la moitié, donc 50).
- **Bourse (po)** : une formule de dés. Vide : celle de la communauté. Elle est payée dans les pièces de ce monde (voir [Pièces](fr-Trésor-par-niveau#pièces)).

Les deux pourcentages peuvent être changés plus tard sur la feuille du marchand. Les gemmes, objets d'art et bijoux avec le **Full Resale Price** de D35E sont des marchandises, achetées et vendues à leur propre % (voir [Boutique d'Axecleft](fr-Boutique-d'Axecleft#world-settings)).

### Marchand

**Créer** :
- **Un nouveau marchand** : crée un acteur dans le dossier d'Acteurs **Marchands**, sur la feuille [Boutique d'Axecleft](fr-Boutique-d'Axecleft), avec les permissions réglées sur Aucun. Pour que les joueurs puissent commercer, donnez-leur **Limité** ou **Observateur** (jamais Propriétaire) : utilisez **Ouverte à** dans les réglages MJ de la feuille, ou les Droits de l'acteur.
- **Tokens sélectionnés** : approvisionne les tokens de marchand que vous avez sélectionnés sur la scène.
- **Un acteur ou un token choisi** : choisissez-en un, ou faites glisser un acteur de la barre latérale des Acteurs sur la case.

Les acteurs approvisionnés par les tokens sélectionnés ou un acteur choisi sont aussi placés sur la feuille Boutique d'Axecleft. Les marchands créés auparavant gardent leurs % de vente et d'achat enregistrés. Pour en changer un à la main, choisissez **Boutique d'Axecleft** dans les réglages de feuille de l'acteur.

Pour un nouveau marchand :

| Commande | Effet |
|---|---|
| **Race** / **Sexe** | Ou **Aléatoire**. |
| **Nom** | Tapez-en un, ou appuyez sur le dé pour **Tirer un nom**. Vide : un nom et un nom de boutique aléatoires. |
| **Nom de l'acteur** | **Marchand (boutique)**, **Marchand**, ou **Boutique**, par exemple « Garrick (L'Enclume d'argent) ». |
| **Image** | Un portrait ou une image de token (**Parcourir**). Vide : un portrait aléatoire de votre dossier de portraits qui convient à la race et au sexe (voir [Personnes](#onglet-personnes)). |

Pour des marchands existants :
- **Stock** : **Remplacer l'ancien stock et l'ancienne bourse**, ou **Réapprovisionner : garder le stock, en ajouter**. Le remplacement ne retire que les armes, l'équipement, les consommables et le butin ; les dons, classes et autres objets sont gardés. Un réapprovisionnement ajoute environ la moitié d'un nouveau stock, empilée sur les pièces identiques, et la moitié d'une bourse.
- **Réglages de la boutique** : **Utiliser la boutique, la communauté et les traits enregistrés de chaque marchand**. Chaque marchand se souvient de la façon dont il a été créé (type de boutique, communauté, traits, prix et sécurité) : en réapprovisionner plusieurs à la fois garde la boutique de chacun.
- Les acteurs convertis ou réapprovisionnés gardent leurs images.

Appuyez sur **Générer un marchand**. Une carte de chat pour le MJ liste le stock avec les prix (et la vraie valeur des pièces non estimées), le caractère de la communauté et la sécurité, et les catégories non approvisionnées.

Les pièces identiques sont empilées. Les munitions sont stockées par 2d4 × 10 pièces (1d4 lots).

La feuille du marchand a aussi un bouton **Réapprovisionner** (avec ses réglages enregistrés) et un bouton **Générateur de marchands** dans ses réglages MJ.

## Onglet Types de boutique

> **<img width="603" height="860" alt="image" src="https://github.com/user-attachments/assets/e65118e3-ecfb-4ad6-8d88-45d99c4697d9" />**

Créez vos propres types de boutique.
- **Nouveau type de boutique** ou **Modifier** : nommez-le, par exemple *Sculpteur d'os de dragon*, et choisissez un type de départ dans **Partir de**.
- **Ce qu'il vend** : le nombre de chaque catégorie est sa part du stock (0 ou vide : jamais vendu).
- Pour les boutiques de gemmes et d'art : **Indifférent**, **Gemmes et objets d'art**, **Objets d'art uniquement**, **Bijoux uniquement**, et **Art fabriqué par** : Moulé / coulé (métal, verre), Sculpté (bois, os, pierre), Tissu, fourrure et peau, ou Livres et documents.
- Pour les objets merveilleux : en option, **Uniquement ceux étiquetés « Shop: … »** (voir [Étiquettes de boutique](fr-Étiquettes-de-boutique)).
- **Seulement les gemmes nommées** / **Seulement les objets d'art nommés** : limitent les gemmes ou objets d'art de la boutique à ceux dont le nom contient l'un de vos mots (en anglais ou dans la langue du monde). Par exemple *diamant* pour un marchand de diamants (tous les diamants, de toutes tailles et qualités), ou *statue, idole* pour un sculpteur. Les gemmes et l'art viennent des Gemmes d'Axecleft.
- **Objets par étiquette de boutique** : vend les objets de vos sources d'objets qui portent une étiquette de boutique, quel que soit leur genre. Chaque étiquette a sa propre part du stock, comme une catégorie. Les étiquettes trouvées dans vos sources d'objets sont listées. Vos propres étiquettes fonctionnent aussi : étiquetez vos statues `Shop: Statue` dans l'onglet [Étiquettes de boutique](fr-Étiquettes-de-boutique) et créez un sculpteur de statues qui les vend. Un type de boutique peut vendre uniquement par étiquette.

Appuyez sur **Enregistrer le type de boutique**, ou **Supprimer**. Les types de boutique sont enregistrés dans le monde.

Types de boutique intégrés : Bazar, Équipementier d'aventuriers, Comptoir commercial, Forgeron, Fabricant d'armes, Armurier, Facteur d'arcs / empenneur, Alchimiste, Herboriste / apothicaire, Joaillier, Lapidaire, Orfèvre, Graveur / sculpteur, Tailleur / fourreur, Marchand d'art / boutique de curiosités, Libraire, Scribe, Temple, Fabricant de baguettes et de bâtons, Boutique de magie, Marchandises exotiques, Receleur / prêteur sur gages, Marché noir.

- Le Receleur / prêteur sur gages et le Marché noir vendent des poisons (le Marché noir avant tout). Les alchimistes, non.
- Le Facteur d'arcs / empenneur ne vend que des armes à distance et des munitions.
- Les libraires, tailleurs et joailliers vendent aussi les objets merveilleux magiques étiquetés Book, Clothing ou Jewelry, et les joailliers vendent des anneaux magiques. Tant qu'aucun objet n'est étiqueté, la ligne de la boutique indique « aucun dans vos sources d'objets pour l'instant (voir Étiquettes de boutique) ».
- D'autres modules ajoutent leurs propres types de boutique. Certains n'apparaissent que si **Psioniques** ou **Objets épiques** est activé, comme le Bazar psionique des Curiosités.

## Onglet Personnes

> **<img width="601" height="695" alt="image" src="https://github.com/user-attachments/assets/f984efa5-1acf-46f8-b161-3093a1387ec1" />**

**Noms** : ajoutez vos propres noms, un par ligne ou séparés par des virgules.
- **Noms pour** : une race, ou **Toute race** (noms utilisés pour toutes les races).
- Listes : **Prénoms masculins**, **Prénoms féminins**, **Prénoms (mixtes)**, **Noms de famille**, **Noms de boutique (toute boutique)**.
- **Les noms aléatoires utilisent** : **Noms intégrés et les miens**, **Uniquement mes noms**, ou **Uniquement les noms intégrés**.
- **Enregistrer les noms** les enregistre pour le monde. **Afficher des exemples** en tire quelques-uns.

**Portraits** :
- **Dossier de portraits** : un dossier de portraits. Un nouveau marchand sans image en reçoit un au hasard dans ce dossier et ses sous-dossiers, qui convient à sa race et à son sexe.
- Mettez la race et le sexe dans les noms des dossiers ou des fichiers, en anglais, par exemple `dwarf/female/smith-01.webp` ou `elf_male_3.png`. Les pluriels comme dwarves, elves et women fonctionnent, ainsi que m ou f.
- Les mots doivent être séparés : « elf_female », pas « femaleelf ».
- La meilleure correspondance d'abord : race et sexe ; puis cette race sans sexe indiqué ; puis ce sexe sans race indiquée ; puis les images sans l'un ni l'autre. Les images sans race ni sexe dans leur chemin conviennent à tout le monde. Une image nommée pour une autre race ou un autre sexe n'est jamais utilisée. Sans image qui convient, le marchand garde l'image par défaut.
- Une image choisie dans le champ **Image** de l'onglet Marchand l'emporte toujours.
- Appuyez sur **Enregistrer et analyser le dossier**. Un tableau montre alors combien d'images il y a pour chaque race et chaque sexe.

## Onglet Sources d'objets

> **<img width="600" height="657" alt="image" src="https://github.com/user-attachments/assets/516ecd08-837b-4c62-9057-3e22afff5ac5" />**

En plus des listes du SRD et des modules d'Axecleft, les marchands et le trésor prennent des objets dans vos **Compendiums d'objets** : quand aucun module ne couvre une sorte d'objet, et sinon selon la part réglée dans les [Réglages de génération](fr-Réglages-de-génération) (**Vos compendiums d'objets**). Chaque objet est classé d'après ses propres données :
- armes, armures et boucliers standard, de maître ou magiques ;
- munitions, équipement et objets alchimiques ;
- potions, parchemins, baguettes, anneaux, sceptres, bâtons et objets merveilleux.

Les objets magiques sont classés par prix : faibles jusqu'à 4 000 po, moyens jusqu'à 25 000 po, puissants au-delà.

**Compendiums** :
- **Automatique (noms correspondants)** : les compendiums d'objets de D35E, et tout compendium dont le nom contient Gear, Equipment, Weapons, Ammo, Armor, Shields ou Magic Items. Aussi Poison Consumables de Pièges, poisons et maladies. Les compendiums traduits sont reconnus par leur nom anglais.
- **Mon choix (cochez ci-dessous)** : cochez exactement les compendiums à utiliser. Chacun montre son type (Système, Module ou Monde), son nombre d'objets, et combien de prix ont été corrigés.

**Autres sources** : des modules ajoutent leurs propres listes, comme **Propriétés spéciales** et **Matériaux spéciaux** (Armurerie d'Axecleft), les sorts et les **Facultés psioniques**. Chacune offre le même choix entre la correspondance automatique et votre propre sélection, et montre combien d'objets chaque compendium fournit.

La liste des compendiums, chacune des autres sources et les résultats de la **Vérification des prix** sont des sections que vous pouvez ouvrir et fermer. Fermée, chaque section indique dans son titre ce qui est réglé, par exemple « 6 sur 40 utilisés, automatique ».

Appuyez sur **Enregistrer et réanalyser** après les avoir changés (cela enregistre toutes les listes), ou sur **Réanalyser** après avoir ajouté des objets.

**Corrections de prix** : certains objets de compendium ont des prix faux, par exemple plusieurs armes magiques spécifiques de D35E. Les corrections des modules d'Axecleft, et les vôtres sur la page **Price Corrections** des [Listes de trésors](fr-Listes-de-trésors), les corrigent pour le trésor et le stock des marchands sans modifier le compendium.
- **Vérification des prix** : liste chaque correction, avec le prix actuel du compendium, le prix corrigé, et si le compendium doit encore être corrigé.
- **Exporter en CSV** : télécharge cette liste sous forme de tableur, par exemple pour l'envoyer au responsable d'un compendium.

## Onglet Étiquettes de boutique

Voir [Étiquettes de boutique](fr-Étiquettes-de-boutique).
