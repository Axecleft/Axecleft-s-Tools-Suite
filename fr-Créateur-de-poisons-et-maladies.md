# Créateur de poisons et maladies (Pièges, poisons et maladies)

**Où :** **Outils d'Axecleft → Créateur de poisons et maladies**. MJ seulement.

Créez un nouveau poison ou une nouvelle maladie. Chacun est créé sous forme de deux objets D35E :
- un objet d'**attaque**, qui lance le jet de sauvegarde et applique les effets ;
- un objet **consommable**, la fiole ou la dose qu'un personnage porte, utilise et achète.

> **<img width="973" height="952" alt="image" src="https://github.com/user-attachments/assets/ed1f0366-fd21-4a10-ad47-4640c5a9dff8" />**

## Le formulaire

| Commande | Effet |
|---|---|
| **Modèle** | Partez d'un poison ou d'une maladie existants pour remplir le formulaire, puis ne changez que ce qu'il faut. Groupés en **Poisons du module**, **Maladies du module** et **Vos poisons et maladies personnalisés**. **— Aucun (partir de zéro) —** vide le formulaire. |
| **Type** | **Poison** ou **Maladie**. Le formulaire s'adapte. |
| **Nom** | Par exemple *Venin de vipère des marais*. |
| **Mode de transmission** | **Contact**, **Ingestion**, **Inhalation** ou **Blessure**. |
| **Jet de sauvegarde** | **Vigueur**, **Réflexes** ou **Volonté**, et le DD de sauvegarde. |
| **Prix (po)** | Le prix du consommable. |
| **Notes** | Une description facultative. |
| **Ajouter aussi aux Objets** | Copie aussi les deux objets dans le dossier d'Objets **Custom Poisons & Diseases**. |

**Poison seulement :**

| Commande | Effet |
|---|---|
| **Effet initial** | À l'exposition, sur un jet de sauvegarde raté. Par exemple `1d6 Con`, `2d12 hp` ou `unconsciousness 1 minute`. |
| **Effet secondaire** | 1 minute plus tard, sur un second jet de sauvegarde raté. Par exemple `2d6 Con` ou `1d4 Con + 1d3 Wis`. |

**Maladie seulement :**

| Commande | Effet |
|---|---|
| **Incubation** | Par exemple `1d3 days`. |
| **Dégâts (chaque jour)** | Après l'incubation, chaque jour sur un jet de sauvegarde raté. |
| **Guérison** | **Deux sauvegardes réussies d'affilée** (SRD) ou **Trois sauvegardes réussies d'affilée**. |

### Ce qu'on peut taper dans les cases de dégâts

Écrivez les effets en anglais, quelle que soit la langue du monde.

| Effet | Exemple |
|---|---|
| Affaiblissement de caractéristique | `1d6 Con` |
| Diminution de caractéristique (permanente) | `1 Con drain` |
| Dégâts aux points de vie | `2d12 hp` |
| Aucun effet | `0` |
| État, avec une durée facultative | `unconsciousness 2d4 hours`, `paralysis 2d6 minutes` |
| Plusieurs effets | Reliez-les par `+` : `1d4 Con + 1d3 Wis` |

Caractéristiques : `Str` (For), `Dex`, `Con`, `Int`, `Wis` (Sag), `Cha`. États reconnus : unconsciousness (inconscience), paralysis (paralysie), stunned (étourdi), shaken (secoué), frightened (effrayé), petrified (pétrifié), prone (à terre), blindness (aveuglement), sickened (fiévreux), fatigued (fatigué), exhausted (épuisé), deafened (assourdi), dazzled (ébloui), nauseated (nauséeux). Chacun applique son état ou son buff D35E.

Tout le reste est publié dans le chat sous forme de message quand l'effet se produit.

### Effets du modèle

Un modèle peut porter des effets que le formulaire ne montre pas. Ils sont listés sous **Le modèle a aussi ces effets**, chacun avec une case **Garder**.

### L'aperçu

Le bas du formulaire montre ce qui sera créé, par exemple :
- **Créera :** *Poison, Venin de vipère des marais* (attaque) et *Venin de vipère des marais* (consommable). L'attaque d'une maladie est nommée *Maladie, …*.
- **Initial** (à l'exposition, jet de sauvegarde raté) et **Secondaire** (1 minute plus tard, second jet raté), chacun avec ses effets.
- Ensuite le poison suit son cours et prend fin. Le buff **Empoisonné** dure 10 rounds ; les états qu'il a causés durent le temps qui leur est propre.
- Pour une maladie : **Après {incubation}, chaque jour (jet de sauvegarde raté)**, les dégâts quotidiens, et la règle de guérison.

Vérifiez l'aperçu avant d'appuyer sur **Créer**.

## Où c'est enregistré

- Dans le compendium de monde **Custom Poisons & Diseases**, créé la première fois que vous utilisez le créateur. Les attaques vont dans son dossier **Poisons** ou **Diseases**, les consommables dans **Consumables**.
- Avec **Ajouter aussi aux Objets**, aussi dans le dossier **Custom Poisons & Diseases** de la barre latérale des Objets.
- Si un objet du même nom existe, on vous demande s'il faut le remplacer.
- Si le compendium est verrouillé, déverrouillez-le et réessayez.

Vos poisons et maladies personnalisés apparaissent dans la liste **Modèle** du créateur : vous pouvez donc les copier et les modifier plus tard.

## Remarques

- Un poison demande un effet initial ou secondaire. Une maladie demande ses dégâts et sa période d'incubation. Le DD de sauvegarde doit être supérieur à 0.
- Les consommables de poison des compendiums du module sont stockés par les marchands (voir [Générateur de marchands](fr-Générateur-de-marchands#onglet-sources-dobjets)).
