# Butin Token

**Où :** Générateur de trésors → onglet **Butin Token**, ou le bouton **sac** de la barre d'outils des tokens (*Tirer le butin des tokens sélectionnés*).

Donne à chaque token de PNJ son propre trésor, tiré sur la table Trésor du SRD à son **facteur de puissance**. Le SRD dit que le trésor d'une créature seule utilise son FP comme niveau de rencontre. Le tirage est ajusté par le réglage **Trésor** de la fiche du PNJ : Aucun, Standard, Double, Triple de D35E, ou un % pour les pièces, les biens précieux et les objets.

Les objets vont dans l'inventaire de ce token avec leur valeur déjà tirée, et les pièces dans sa bourse, prêts à être pillés.
- Un token **non lié** garde son butin sur cette seule créature.
- Le butin d'un token **lié** va sur son acteur.

> **<img width="985" height="842" alt="image" src="https://github.com/user-attachments/assets/86e6352d-4ca6-404f-b7c7-0ff61f301662" />**

## Tokens sélectionnés

Sélectionnez des tokens de PNJ sur la scène, puis appuyez sur **Actualiser**. Le tableau liste chaque token avec :

- **Token** : son nom, et « (non lié) » pour les tokens non liés.
- **FP** : le FP auquel il tire. Les pièges montrent leur part, par exemple « piège, ×¼ ».
- **Trésor** : le réglage Trésor de sa fiche en pourcentages, par exemple « pièces 100 %, biens précieux 100 %, objets 100 % », ou « aucun ». Un token qui a déjà du butin affiche **a du butin**.

## Tirer

- **Tirer** : cochez **Pièces**, **Biens précieux** et **Objets** pour choisir les parties à tirer.
- **Remplacer le butin tiré auparavant** : reprend les objets et les pièces que le générateur avait donnés au token la dernière fois, puis tire de nouveau.
- **Butin des pièges** : les pièges aussi peuvent avoir un butin accessoire (les ossements et les affaires de victimes précédentes). Choisissez **¼ du trésor d'une créature** ou **Le trésor complet de son FP**. Sélectionnez des tokens de piège et tirez. Les pièges n'ont jamais de butin automatique.

Boutons :
- **Tirer le butin des tokens sélectionnés** : tire le butin de chaque token sélectionné.
- **Vider le butin** : retire uniquement ce que le Générateur de trésors a mis sur les tokens sélectionnés (ses objets marqués et les pièces qu'il a ajoutées). Tout ce que vous avez donné vous-même au token reste.
- **Actualiser** : relit la sélection.

## Butin automatique

- **Tirer le butin quand un token de PNJ non lié est placé sur une scène** : chaque nouveau token de PNJ non lié reçoit son butin dès que vous le placez.
- **Tokens cachés aussi** : inclut les tokens placés cachés.
- **Publier une carte de chat (MJ uniquement) pour le butin de chaque token** : une carte chuchotée qui liste le butin de chaque token.

Le butin automatique ne s'applique qu'aux tokens de PNJ non liés. Il ne s'applique jamais aux pièges, aux personnages, aux tokens appartenant à un joueur, ni à un token qui a déjà du butin (un token copié garde le butin avec lequel il a été copié). Ces réglages sont enregistrés pour le monde.

## Règles utilisées

| FP | Tiré comme |
|---|---|
| Moins de 1 | NR 1, la chance de chaque partie étant ajustée par le FP (un FP ½ tire une fois sur deux) |
| 1–20 | Ce NR |
| 21–30 | NR 21–30 : la ligne du NR 20 plus des objets puissants supplémentaires, dont certains épiques tant que **Objets épiques** est activé |
| Plus de 30 | NR 30 |

- **Les PNJ à niveaux de classe** portent, selon le SRD, l'équipement de PNJ au lieu d'un trésor. Réglez leur Trésor sur *Aucun* si vous les équipez à la main.
- Tout le reste suit l'onglet [Trésor par niveau](fr-Trésor-par-niveau) : le paiement des pièces, et les [Réglages de génération](fr-Réglages-de-génération) pour la lumière, les poisons, les malédictions et le reste.
