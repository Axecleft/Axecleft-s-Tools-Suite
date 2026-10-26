# FAQ

## Général

**Où sont les outils ?**
Dans les outils du MJ de D35E, dans le groupe **Outils d'Axecleft**. Voir [Premiers pas](fr-Premiers-pas).

**De quels modules ai-je besoin ?**
N'importe lequel fonctionne seul. Chacun ajoute sa part aux outils partagés : Armurerie (armes et armures), Curiosités (potions, parchemins, baguettes, objets merveilleux), Gemmes (gemmes, art et bijoux), Pièges (pièges, poisons, maladies). Le Générateur de trésors, le Générateur de marchands et l'Artisanat viennent avec les modules qui les fournissent.

**Il manque quelque chose sous Foundry 11.**
Les objets intelligents demandent D35E 3.1 ou plus récent ; leurs options sont donc masquées sous Foundry 11.

**Le Guide d'utilisation s'ouvre en anglais.**
Il suit la langue choisie dans Foundry. Si votre langue n'a pas encore de traduction du wiki, il s'ouvre en anglais.

## Trésor

**Les objets psioniques n'apparaissent jamais.**
Activez **Psioniques** dans les [Réglages de génération](fr-Réglages-de-génération) du Générateur de trésors. Les paramètres de part psionique (Armurerie, Curiosités) décident ensuite de leur fréquence. Voir [Paramètres](fr-Paramètres).

**Les objets épiques n'apparaissent jamais.**
Activez **Objets épiques** dans les [Réglages de génération](fr-Réglages-de-génération#campagne).

**Un objet de compendium a un prix faux.**
Ajoutez une ligne à la page **Price Corrections** des [Listes de trésors](fr-Listes-de-trésors). Elle corrige le prix pour le trésor et le stock des marchands sans modifier le compendium. **Vérification des prix**, dans l'onglet Sources d'objets du Générateur de marchands, liste chaque correction.

**Je ne veux pas d'une gemme, d'une malédiction ou d'une autre entrée intégrée.**
Désactivez-la dans l'[onglet Listes](fr-Listes-de-trésors#longlet-listes) du Générateur de trésors. Elle va sur la page « Disabled Entries » et n'est jamais tirée.

**Une mise à jour de module va-t-elle effacer mes listes personnalisées ?**
Non. Elles sont gardées dans le journal **Axecleft's Treasure Lists** du monde, et aussi dans le fichier de bibliothèque partagée de votre dossier Data de Foundry (avec **Bibliothèque partagée des listes de trésors** sur Automatique). Voir [La bibliothèque partagée](fr-Listes-de-trésors#la-bibliothèque-partagée).

**Comment marchent les objets maudits ?**
Voir [Objets maudits](fr-Objets-maudits).

## Marchands

**Les joueurs ne peuvent pas acheter à mon marchand.**
Les nouveaux marchands sont créés avec les permissions réglées sur Aucun. Donnez la permission aux joueurs sur la feuille du marchand.

**Les objets de mon propre compendium n'apparaissent jamais en boutique.**
Le compendium doit faire partie de vos [Sources d'objets](fr-Générateur-de-marchands#onglet-sources-dobjets). Appuyez sur **Enregistrer et réanalyser** après l'avoir ajouté, ou sur **Réanalyser** après avoir ajouté des objets. Pour vendre un objet dans d'autres boutiques que celles de son genre, donnez-lui une [étiquette de boutique](fr-Étiquettes-de-boutique).

## Artisanat

**Mes joueurs ne voient pas l'Artisanat.**
Activez **Les joueurs peuvent fabriquer** dans les [paramètres](fr-Artisanat#paramètres).

**L'artisan a l'or et les PX, mais rien n'a été dépensé.**
Rien n'est dépensé avant que le MJ approuve la demande. Vérifiez aussi **Prélever les po** et **Prélever les PX**.

**Mon propre objet magique ne peut pas être fabriqué, ou le MJ doit décider de ce qu'il demande.**
Terminez sa description par une ligne de fabrication du SRD en anglais, comme `CL 12th; Craft Wondrous Item, fly;`. Voir [Comment les conditions sont trouvées](fr-Artisanat#comment-les-conditions-sont-trouvées).

**L'artisan ne connaît pas un sort dont l'objet a besoin.**
Choisissez une autre source dans la liste déroulante du sort : un lanceur qui aide, un parchemin, une baguette ou un bâton. Voir [Sorts](fr-Artisanat#sorts).

**Un joueur peut-il faire 20 sur un test d'Artisanat ?**
Non. Un échec coûte des matériaux, le SRD ne le permet donc pas. Lancez, ou faites 10.

## Pièges

**Un joueur ne peut pas fabriquer un piège du Générateur de pièges aléatoires.**
Les pièges générés sont dans le monde du MJ. Donnez au joueur la permission Observateur sur l'acteur piège, et il apparaît dans l'onglet **Kits de piège**.

**Un piège ne peut pas être mis en kit.**
Les kits de piège sont réservés aux pièges mécaniques ; les pièges magiques viennent des sorts. Le piège a aussi besoin d'un prix : ajoutez « Market Price - 1,000 gp » à ses notes.

**Les joueurs voient un piège qu'ils ne devraient pas voir.**
Vérifiez **Kits de piège : qui voit un piège posé** dans [Kits de piège](fr-Kits-de-piège#paramètres). Avec **MJ seulement**, le token est caché.

**Je ne peux pas récupérer un piège.**
Seuls les pièges mécaniques actifs peuvent être remis en kit, et seulement si **Kits de piège : les pièges posés peuvent être récupérés** est activé. Les pièges magiques se désactivent avec Désamorçage. Voir [Récupérer un piège](fr-Kits-de-piège#récupérer-un-piège).

## Langues

**Une partie du texte est encore en anglais.**
Elle n'est pas encore traduite. Voir [Langues](fr-Langues) pour aider.

**Mes objets français ne sont pas reconnus.**
Donnez-leur leur nom anglais (le bouton **Nom anglais** de la fiche d'objet). Voir [Langues](fr-Langues#noms-anglais-de-vos-propres-objets).
