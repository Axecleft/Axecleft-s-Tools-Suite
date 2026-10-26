# Trap Kits e My Traps (kits de armadilha e minhas armadilhas; Traps, Poisons, and Diseases)

Um **kit de armadilha** (Trap Kit) é um item que contém as peças de uma armadilha mecânica pronta, embalada para ser montada em outro lugar. Um personagem o carrega, usa-o para montar a armadilha numa cena e pode embalá-la de novo depois.

> **[Captura de tela: um kit de armadilha numa ficha de personagem]**

## Conseguir um kit de armadilha

- **Fabricação**: um personagem faz um com Ofícios (armadilhas) na aba **Trap kits** da janela [Crafting](pt-BR-Abas-de-fabricação#trap-kits-kits-de-armadilha). O kit vai para o inventário do artesão.
- **A partir de um ator de armadilha (Mestre)**: clique com o botão direito num ator de armadilha na barra lateral Actors e escolha **Make Trap Kit** (criar kit de armadilha). O kit é criado na pasta de itens **Trap Kits**; arraste-o para um personagem ou um mercador.

Os kits são só para armadilhas mecânicas. Armadilhas mágicas vêm de magias.

A descrição do kit traz a armadilha e seu ND, quanto tempo leva para montá-la e sua CD de recuperação.

## Montar uma armadilha

1. Abra a cena onde a armadilha vai ficar.
2. Na ficha do personagem, use o kit de armadilha como qualquer item.
3. Clique onde montar a armadilha. O botão direito ou Esc cancela.
4. Um cartão de chat, **Trap Kits**, diz "{who} sets {trap} (CR {cr}) on {scene}" ({quem} monta {armadilha} (ND {nd}) em {cena}) e quanto tempo leva.
5. Com **Trap kits: GM approves** (o Mestre aprova) ativado, o cartão espera o Mestre: **Approve** (aprovar) ou **Cancel** (cancelar). Senão, acontece na hora.

Depois de montada:
- O kit é gasto.
- Uma cópia do ator de armadilha é criada na pasta de atores **Placed Traps** (armadilhas montadas), com o token dela na cena.
- Quem vê o token depende de **Trap kits: who sees a placed trap** (quem vê uma armadilha montada; veja abaixo).

Montar leva 1 minuto por ND. O cartão mostra o tempo, mas o tempo de jogo não avança.

## Recuperar uma armadilha

Com **Trap kits: placed traps can be recovered** (armadilhas montadas podem ser recuperadas) ativado, uma armadilha mecânica ativa pode ser embalada de volta num kit. Armadilhas mágicas não: elas são desativadas com Operar Mecanismo (Disable Device), e My Traps não oferece recuperá-las.

- Leva 1 minuto por ND e um teste de **Disable Device** (Operar Mecanismo) contra a CD de Operar Mecanismo da armadilha + 5. Operar Mecanismo só pode ser usado com treinamento.
- **Sucesso**: a armadilha volta a um kit no inventário do personagem.
- **Falha por 1–4**: sem problemas. A armadilha continua montada e pode-se tentar de novo.
- **Falha por 5–10**: a armadilha fica desativada para sempre.
- **Falha por mais de 10**: a armadilha **dispara** no personagem. O Mestre recebe um cartão **Trap triggered** (armadilha disparada) com os ataques dela e um botão, **Target {who} and open the trap** (mirar em {quem} e abrir a armadilha), para resolvê-la.

Os jogadores recuperam uma armadilha em [My Traps](#my-traps-minhas-armadilhas). Com **Trap kits: GM approves** ativado, o Mestre aprova a tentativa primeiro.

## Armadilhas que o Mestre coloca à mão

Uma armadilha que o Mestre arrasta para uma cena a partir da barra lateral Actors ou de um compêndio também é uma armadilha montada, com os mesmos controles: o estado dela no HUD do token e em Placed Traps, o olho para quais jogadores a conhecem, e a recuperação em kit para armadilhas mecânicas. Os tokens de armadilha que já estão numa cena são registrados quando o Mestre abre a cena. Os jogadores só a veem em My Traps depois que o Mestre os marca como conhecedores dela.

## Estado de uma armadilha

Cada armadilha montada está **Active** (ativa), **Disabled** (desativada) ou **Triggered** (disparada).

- O Mestre muda isso no token: clique com o botão direito no token e clique no botão de armadilha do HUD do token (ele alterna Active → Disabled → Triggered).
- Ou na janela **Placed Traps** (abaixo).
- Uma armadilha disparada fica **Triggered** até você colocá-la como Active de novo, por exemplo quando ela se rearma.

## My Traps (minhas armadilhas)

**Onde:** **Axecleft's Tools → My Traps**. Jogadores e Mestre.

> **[Captura de tela: My Traps]**

### Para os jogadores

Lista as armadilhas desta cena que você conhece: você as montou, alguém as mostrou a você, ou você as tem como alvo.

| Coluna | O que mostra |
|---|---|
| **Trap** (armadilha) | O nome da armadilha (uma mira se você a tiver como alvo). |
| **CR** (ND) | O ND dela. |
| **Set by** (montada por) | Quem a montou. |
| **Status** (estado) | Active, Disabled ou Triggered. |
| Botões | **Show its marker to other players** (mostrar o marcador dela a outros jogadores; ícone de compartilhar), e **Pack it back into a kit (Disable Device DC {dc})** (embalá-la de volta num kit, CD de Operar Mecanismo {cd}; ícone de caixa) para armadilhas ativas. |

- **Recuperar**: clique na caixa ao lado da armadilha. Se você tiver mais de um personagem, será perguntado qual.
- **Compartilhar um marcador** (só com **GM only, plus a marker**): clique no ícone de compartilhar, marque os jogadores em **Show the marker to:** (mostrar o marcador a) e clique em **Share** (compartilhar). Eles veem o marcador da armadilha e ela aparece no My Traps deles.
- Uma armadilha que você vê também pode ser marcada como alvo (T) para aparecer aqui.

### Para o Mestre: Placed Traps

A janela do Mestre se chama **Placed Traps** (armadilhas montadas). Ela lista as armadilhas montadas a partir de kits nesta cena.

- **Status** (estado): mude pela lista.
- **Olho**: quais jogadores conhecem a armadilha, por exemplo depois de um teste de Procurar bem-sucedido. Marque-os e clique em **Save** (salvar). Os jogadores só veem as armadilhas que conhecem.
- **Show on the scene** (mostrar na cena): centraliza a visão no token da armadilha.

## Configurações

Em **Configure Settings → Axecleft's Traps, Poisons, and Diseases**.

| Configuração | Padrão | O que faz |
|---|---|---|
| **Trap kits: GM approves** (o Mestre aprova) | Ativado | Um jogador que monta ou recupera uma armadilha envia um pedido que o Mestre aprova no cartão de chat. Desativado: acontece na hora. |
| **Trap kits: setting takes time** (montar leva tempo) | Ativado | Montar leva 1 minuto por ND (mostrado no cartão; o tempo de jogo não avança). Desativado: as armadilhas são montadas na hora. Recuperar sempre leva 1 minuto por ND. |
| **Trap kits: who sees a placed trap** (quem vê uma armadilha montada) | GM only, plus a marker for the player who set it (só o Mestre, mais um marcador para o jogador que a montou) | **GM only** (só o Mestre): um token oculto. **Everyone** (todos): um token visível (o Mestre decide se as criaturas a percebem). **GM only, plus a marker**: um token oculto, e o jogador que a montou vê um marcador que pode compartilhar (My Traps). |
| **Trap kits: placed traps can be recovered** (armadilhas montadas podem ser recuperadas) | Ativado | Desativado: depois de montada, a armadilha fica até disparar ou ser desativada. |
| **Trap kits: compendiums for crafting** (compêndios para fabricação) | Em branco | Os compêndios de atores cujas armadilhas mecânicas podem ser fabricadas como kits, separados por vírgulas (por exemplo `traps-and-poisons.traps`). Em branco: todo compêndio com atores de armadilha. |
| **Trap kits: crafting progress** (progresso da fabricação) | Silver pieces (SRD) (peças de prata) | A moeda em que é contado o progresso semanal de Ofícios (armadilhas): o teste × a CD em **Copper pieces** (peças de cobre, 10 vezes mais lento), **Silver pieces** (SRD), **Gold pieces** (peças de ouro, 10 vezes mais rápido) ou **Platinum pieces** (peças de platina, 100 vezes mais rápido). A prata do SRD faz armadilhas caras levarem anos: um Wide-Mouth Spiked Pit Trap (fosso com estacas de boca larga; 7.200 PO, CD 25) leva 288 semanas para um artesão cujo teste é 10. |
