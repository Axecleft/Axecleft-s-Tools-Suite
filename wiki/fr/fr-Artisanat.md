# Artisanat

**Où :** **Outils d'Axecleft → Artisanat**. Les joueurs le voient dans le même groupe de la barre d'outils tant que **Les joueurs peuvent fabriquer** est activé.

Les personnages fabriquent des objets selon les règles du SRD : objets magiques avec les dons de création d'objets, objets ordinaires avec Artisanat. Un joueur remplit une demande et le MJ l'approuve. Rien n'est dépensé ni créé avant l'approbation du MJ.

L'Artisanat est fourni avec l'Armurerie, les Curiosités et les Pièges. Chaque module ajoute ses propres onglets à la fenêtre. Voir [Onglets d'artisanat](fr-Onglets-artisanat) pour chaque onglet.

> **[Capture : la fenêtre d'Artisanat]**

## La fenêtre

| Commande | Effet |
|---|---|
| **Artisan** | Le personnage qui fabrique l'objet. Les joueurs choisissent parmi leurs personnages ; le MJ parmi tous les personnages et PNJ. |
| Onglets | Un par genre d'objet : armes et armures, armes magiques spécifiques, parchemins et potions, objets merveilleux, alchimie, objets psioniques, kits de piège. Voir [Onglets d'artisanat](fr-Onglets-artisanat). |
| Résumé | Ce que demande l'objet et si l'artisan l'a, marqué ✔ ou ✘ : le don, le niveau de lanceur de sort, chaque sort, l'alignement, la classe, le niveau, les degrés de maîtrise, les po et les PX. Puis le coût, le temps et les tests. |
| **Envoyer pour approbation** / **Envoyer au MJ** | Le bouton d'un joueur. La demande part au MJ sous forme de carte de chat. |
| **Approuver et fabriquer maintenant** | Le bouton du MJ. Saute l'étape de la demande. |
| **Mettre à jour la demande** | Affiché pendant que vous modifiez une demande depuis sa carte. |

Remarques sur la fenêtre :
- En tant que MJ, vous pouvez passer outre toute condition. La carte de demande montre ce qui manque.
- Un joueur peut envoyer une demande avec des conditions marquées ✘. Le MJ peut quand même l'approuver, mais demandez d'abord.
- Le temps est indiqué pour le MJ. Il n'est pas imposé, et le temps de jeu n'avance pas.

## Conditions

### Sorts

Chaque sort demandé par l'objet doit être fourni chaque jour de travail. Le résumé montre comment l'artisan le fournit :

- préparé, ou connu (lanceurs spontanés) ;
- dans le grimoire mais non préparé : préparez-le chaque jour de travail ;
- **Un lanceur qui aide** : un autre lanceur le fournit chaque jour ;
- **Un parchemin ou une pierre de pouvoir** : un parchemin par jour de travail, consommé ;
- **Une baguette ou un dorjé** : une charge par jour de travail ;
- **Un bâton ou une couronne psionique** : les charges du bâton chaque jour de travail.

Choisissez la source dans la liste déroulante du sort quand l'artisan ne connaît pas le sort. Les parchemins, baguettes, bâtons et couronnes psioniques viennent de l'inventaire de l'artisan.

### Niveau de lanceur de sort, don et le reste

- **Don** : le don de création d'objets. Les objets épiques demandent aussi la version épique du don, et **Objets épiques** activé dans les [Réglages de génération](fr-Réglages-de-génération#campagne).
- **Niveau de lanceur de sort** : celui de l'objet d'après sa ligne de fabrication, ou le minimum du SRD pour ses sorts.
- **Le créateur doit être…** : alignement, classe, niveau de personnage, degrés de maîtrise, niveau de lanceur de sort, d'après la ligne de fabrication de l'objet.
- **po** et **PX** : l'artisan doit les avoir. Avec **Les PX ne peuvent pas coûter un niveau** activé, l'artisan ne peut dépenser que les PX au-dessus du minimum de son niveau.

### Comment les conditions sont trouvées

Pour les objets de compendium (armes magiques spécifiques, anneaux, sceptres, bâtons, objets merveilleux), l'Artisanat lit la **ligne de fabrication du SRD** à la fin de la description de l'objet, comme en a chaque objet du SRD. Une section d'aide dans l'onglet l'explique. Pour rendre vos propres objets fabricables, terminez leur description par une ligne comme celle-ci (en anglais) :

> *Moderate evocation; CL 12th; Craft Magic Arms and Armor, fireball or flame strike, creator must be good; Price 18,315 gp; Cost 9,315 gp + 720 XP.*

- **CL 12th;** est obligatoire, suivi d'un point-virgule. *Caster Level: 12th;* fonctionne aussi, et *ML* pour les objets psioniques. *CL 11th (I), 14th (II)* donne un niveau de lanceur de sort par version.
- Les **conditions** suivent, séparées par des virgules, jusqu'au point-virgule suivant. *Prerequisites:* devant elles est accepté.
- Les **sorts et pouvoirs** doivent correspondre à un nom de vos sources de sorts ou de pouvoirs. Les majuscules n'importent pas, et « greater magic fang » trouve « Magic Fang, Greater ». **or** entre des noms signifie que l'un ou l'autre convient.
- Les **dons** sont reconnus par leur nom : les dons de création d'objets, et tout don d'un compendium appelé Feats.
- Sont aussi compris : *creator must be good* (lawful, chaotic, evil), *creator must have 5 ranks in Jump*, *creator must be 12th level*, *creator must be caster level 11th*, et *creator must be a* classe.
- Tout le reste est listé pour que le MJ le vérifie.
- **Cost 1,250 gp + 5,100 XP** n'importe où dans la description remplace le coût habituel (la moitié du prix en po, 1/25 en PX).
- **Price** est lu aussi, et utilisé quand le prix du compendium manque ou est faux.
- La ligne est lue en anglais. Les objets du SRD traduits utilisent leur ligne anglaise ; vos propres objets ont besoin de la ligne en anglais.
- Sans ligne de fabrication, l'objet peut quand même être créé, mais c'est le MJ qui décide de ce qu'il demande.

## Coût et temps

| | Objets magiques | Objets ordinaires (Artisanat) |
|---|---|---|
| **Coût** | Fournitures : ½ du prix de base, plus des PX à 1/25 de celui-ci (SRD) | Matières premières : ⅓ du prix |
| **Objets épiques** (prix au-delà de 200 000 po ou niveau de lanceur de sort au-delà de 20) | PX : prix ÷ 100 + 10 000 ; parchemins épiques : prix ÷ 25 + 1 000 (SRD) | — |
| **Temps** | 1 jour par tranche de 1 000 po de prix de base, 8 heures par jour | Semaines : chaque semaine, test × DD en pièces d'argent (estimation affichée en faisant 10). Les kits de piège peuvent le compter dans une autre pièce : voir [Kits de piège](fr-Kits-de-piège#paramètres). |
| **Temps épique** | 1 jour par tranche de 10 000 po de prix de base (règle maison) | — |

Les sorts à composante matérielle coûteuse ou à composante de PX ajoutent ce coût.

## Tests

| Objet | Test |
|---|---|
| Objets magiques | **SRD** : pas de test ; toutes les conditions préalables doivent être remplies. **Art de la magie (règle maison)** : voir le paramètre **Tests des objets magiques** ci-dessous. |
| Objets ordinaires | Artisanat (fabrication d'armes, fabrication d'armures, fabrication d'arcs, alchimie, fabrication de pièges…) contre le DD de l'objet. Un objet de maître a un second test pour sa composante de maître (DD 20). |
| Alchimie | Artisanat (alchimie). Seul un lanceur de sorts peut l'utiliser. |

- On ne peut pas faire 20 sur un test d'Artisanat, puisqu'un échec coûte des matériaux. Lancez, ou faites 10.
- L'Artisanat sans formation est permis et affiché « sans formation ».

## La carte de demande

La carte de chat suit la demande du début à la fin.

| État | Signification |
|---|---|
| **En attente du MJ** | Envoyée. Le MJ peut **Approuver**, **Modifier** ou **Refuser**. |
| **Approuvé — lancez les tests** | Payée. Le joueur de l'artisan (ou le MJ) appuie sur **Lancer {compétence} (DD)**. |
| **Terminé** | Tous les tests ont réussi. L'objet est dans l'inventaire de l'artisan. |
| **Échec** | Un test d'Art de la magie raté de 5 ou plus : les po et PX dépensés sont perdus. |
| **Matériaux gâchés** | Un test d'Artisanat raté de 5 ou plus : la moitié des matières premières est gâchée. |
| **Refusé** | Le MJ a dit non. Rien n'a été dépensé. |
| **Abandonné** | L'artisan a renoncé après un échec. |

- **Échec de 4 ou moins** : aucun progrès. Relancez ce test.
- **Échec de 5 ou plus** à l'Artisanat : **Payer {po} et relancer** achète de nouveaux matériaux, ou **Abandonner** arrête.
- **Modifier** : le MJ ouvre la demande dans la fenêtre d'Artisanat, la change, et appuie sur **Mettre à jour la demande**. La carte indique « modifié par le MJ ».
- **Tests lancés en** : changez le mode de jet sur la carte. Avec un jet aveugle, c'est le MJ qui résout le résultat.
- Si l'artisan ne peut pas payer quand le MJ approuve, la carte le dit : refusez ou modifiez la demande.

## Paramètres

Dans **Configurer les paramètres**, sous le premier module d'Axecleft actif qui fournit l'Artisanat.

| Paramètre | Par défaut | Effet |
|---|---|---|
| **Les joueurs peuvent fabriquer** | Activé | Les joueurs peuvent ouvrir la fenêtre d'Artisanat et envoyer des demandes. Rien n'est créé ni facturé avant l'approbation du MJ. |
| **Tests des objets magiques** | SRD (sans test) | **Test d'Art de la magie (règle maison)** : Art de la magie DD 5 + niveau de lanceur de sort, +5 pour chaque condition préalable manquante (autre que le don et le niveau de lanceur de sort) au lieu de bloquer. Un échec de 5 ou plus gaspille les po et les PX. |
| **Fabrication de poisons** | Règle maison | Le SRD n'a pas de règle pour fabriquer du poison. **Règle maison** : Artisanat (alchimie) contre le DD de sauvegarde du poison, matières premières à ⅓ du prix, lanceurs de sorts seulement. Aucun onglet d'artisanat n'utilise encore ce paramètre. |
| **Les tests d'artisanat sont lancés en** | Jet public | **Jet public**, **Jet privé du MJ** ou **Jet aveugle du MJ**. La valeur par défaut quand vous approuvez ; changez-la sur chaque carte. |
| **Prélever les po** | Activé | Dépense l'or de l'artisan à l'approbation. |
| **Prélever les PX** | Activé | Dépense les PX de l'artisan à l'approbation. |
| **Les PX ne peuvent pas coûter un niveau** | Activé | SRD : un personnage ne peut pas dépenser tant de PX dans un objet qu'il en perdrait un niveau. |
