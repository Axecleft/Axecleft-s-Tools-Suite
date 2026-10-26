# Crafting (fabricação)

**Onde:** **Axecleft's Tools → Crafting**. Os jogadores veem-na no mesmo grupo da barra de ferramentas enquanto **Players may craft** (jogadores podem fabricar) estiver ativado.

Os personagens fabricam itens pelas regras do SRD: itens mágicos com talentos de criação de itens, e itens comuns com Ofícios. Um jogador preenche um pedido e o Mestre aprova-o. Nada é gasto nem criado até o Mestre aprovar.

O Crafting vem com Armory, Curios e Traps. Cada módulo adiciona os seus próprios separadores à janela. Veja [Separadores de fabricação](pt-PT-Separadores-de-fabricação) para cada separador.

> **[Captura de ecrã: a janela Crafting]**

## A janela

| Controlo | O que faz |
|---|---|
| **Crafter** (artesão) | O personagem que fabrica o item. Os jogadores escolhem entre os personagens que possuem; o Mestre entre todos os personagens e PNJ. |
| Separadores | Uma por tipo de item: armas e armaduras, armas mágicas específicas, pergaminhos e poções, itens maravilhosos, alquimia, itens psiónicos, kits de armadilha. Veja [Separadores de fabricação](pt-PT-Separadores-de-fabricação). |
| Resumo | O que o item exige e se o artesão tem, marcado com ✔ ou ✘: o talento, o nível de conjurador, cada magia, a tendência, a classe, o nível, as graduações de perícia, os PO e o XP. Depois o custo, o tempo e os testes. |
| **Send for approval** / **Send to the GM** (enviar para aprovação / enviar ao Mestre) | O botão de um jogador. O pedido vai ao Mestre como um cartão de chat. |
| **Approve and craft now** (aprovar e fabricar agora) | O botão do Mestre. Salta a etapa do pedido. |
| **Update the request** (atualizar o pedido) | Aparece enquanto edita um pedido a partir do cartão. |

Observações sobre a janela:
- Como Mestre, pode ignorar qualquer exigência. O cartão do pedido mostra o que falta.
- Um jogador pode enviar um pedido com exigências marcadas com ✘. O Mestre ainda pode aprová-lo, mas pergunte antes.
- O tempo é mostrado para o Mestre. Ele não é imposto, e o tempo de jogo não avança.

## Exigências

### Magias

Cada magia que o item exige precisa ser fornecida a cada dia de trabalho. O resumo mostra como o artesão a fornece:

- preparada, ou conhecida (conjuradores espontâneos);
- no grimório mas não preparada: prepare-a a cada dia de trabalho;
- **A helping caster** (um conjurador que ajuda): outro conjurador a fornece a cada dia;
- **A scroll or power stone** (um pergaminho ou uma pedra de poder): um pergaminho por dia de trabalho, gasto;
- **A wand or dorje** (uma varinha ou um dorje): uma carga por dia de trabalho;
- **A staff or psicrown** (um cajado ou uma psicoroa): as cargas do cajado a cada dia de trabalho.

Escolha a fonte na lista suspensa da magia quando o artesão não a conhece. Pergaminhos, varinhas, cajados e psicoroas vêm do inventário do artesão.

### Nível de conjurador, talento e o resto

- **Talento**: o talento de criação de itens. Itens épicos também exigem a versão épica do talento, e **Epic items** ativado nas [definições de geração](pt-PT-Definições-de-geração#campanha).
- **Nível de conjurador**: o do item, pela sua linha de construção, ou o mínimo do SRD para as suas magias.
- **O criador deve ser…**: tendência, classe, nível de personagem, graduações de perícia, nível de conjurador, pela linha de construção do item.
- **PO** e **XP**: o artesão precisa tê-los. Com **XP can't cost a level** (o XP não pode custar um nível) ativado, o artesão só pode gastar o XP acima do mínimo do seu nível.

### Como as exigências são encontradas

Para itens de compêndio (armas mágicas específicas, anéis, bastões, cajados, itens maravilhosos), o Crafting lê a **linha de construção do SRD** no fim da descrição do item, como todo item do SRD tem. Uma secção de ajuda no separador explica isso. Para que os seus próprios itens possam ser fabricados, termine a descrição deles com uma linha como esta (em inglês):

> *Moderate evocation; CL 12th; Craft Magic Arms and Armor, fireball or flame strike, creator must be good; Price 18,315 gp; Cost 9,315 gp + 720 XP.*

- **CL 12th;** é obrigatório, seguido de ponto e vírgula. *Caster Level: 12th;* também funciona, e *ML* para itens psiónicos. *CL 11th (I), 14th (II)* dá um nível de conjurador por versão.
- As **exigências** vêm em seguida, separadas por vírgulas, até o próximo ponto e vírgula. *Prerequisites:* antes delas é aceito.
- **Magias e poderes** precisam corresponder a um nome nas suas fontes de magias ou de poderes. Maiúsculas não importam, e "greater magic fang" encontra "Magic Fang, Greater". **or** entre nomes significa que qualquer um serve.
- **Talentos** são reconhecidos pelo nome: os talentos de criação de itens e qualquer talento de um compêndio chamado Feats.
- Também são entendidos: *creator must be good* (lawful, chaotic, evil), *creator must have 5 ranks in Jump*, *creator must be 12th level*, *creator must be caster level 11th* e *creator must be a* classe.
- Todo o resto é listado para o Mestre verificar.
- **Cost 1,250 gp + 5,100 XP** em qualquer ponto da descrição substitui o custo normal (metade do preço em PO, 1/25 em XP).
- **Price** também é lido, e usado quando o preço do compêndio está em falta ou errado.
- A linha é lida em inglês. Itens do SRD traduzidos usam a linha em inglês; os seus próprios itens precisam da linha em inglês.
- Sem linha de construção, o item ainda pode ser criado, mas o Mestre decide o que ele exige.

## Custo e tempo

| | Itens mágicos | Itens comuns (Ofícios) |
|---|---|---|
| **Custo** | Materiais: ½ do preço base, mais XP de 1/25 dele (SRD) | Matérias-primas: ⅓ do preço |
| **Itens épicos** (preço acima de 200.000 PO ou nível de conjurador acima de 20) | XP: preço de mercado ÷ 100 + 10.000; pergaminhos épicos: preço de mercado ÷ 25 + 1.000 (SRD) | — |
| **Tempo** | 1 dia por 1.000 PO de preço base, 8 horas por dia | Semanas: a cada semana, teste × CD em peças de prata (estimativa mostrada escolhendo 10). Os kits de armadilha podem contar isso em outra moeda: veja [Kits de armadilha](pt-PT-Kits-de-armadilha#definições). |
| **Tempo épico** | 1 dia por 10.000 PO de preço base (regra da casa) | — |

Magias com componente material caro ou componente de XP somam esse custo.

## Testes

| Item | Teste |
|---|---|
| Itens mágicos | **SRD**: sem teste; todo pré-requisito precisa ser cumprido. **Spellcraft (house rule)** (Identificar Magia, regra da casa): veja a definição **Magic item checks** abaixo. |
| Itens comuns | Ofícios (armeiro, armaduras, arcos, alquimia, armadilhas…) contra a CD do item. Um item obra-prima tem um segundo teste para o seu componente obra-prima (CD 20). |
| Alquimia | Ofícios (alquimia). Só um conjurador pode usá-lo. |

- Não é possível escolher 20 num teste de Ofícios, porque falhar custa materiais. Lance, ou escolha 10.
- Ofícios sem treino é permitido e aparece como "untrained" (sem treino).

## O cartão do pedido

O cartão de chat acompanha o pedido do início ao fim.

| Estado | Significado |
|---|---|
| **Waiting for the GM** (a aguardar o Mestre) | Enviado. O Mestre pode **Approve** (aprovar), **Edit** (editar) ou **Reject** (rejeitar). |
| **Approved — roll the checks** (aprovado: lance os testes) | Pago. O jogador do artesão (ou o Mestre) clica em **Roll {skill} (DC)** (lançar {perícia}, CD). |
| **Finished** (concluído) | Todos os testes tiveram sucesso. O item está no inventário do artesão. |
| **Failed** (falhou) | Um teste de Identificar Magia falhou por 5 ou mais: os PO e o XP gastos estão perdidos. |
| **Materials ruined** (materiais arruinados) | Um teste de Ofícios falhou por 5 ou mais: metade das matérias-primas está arruinada. |
| **Rejected** (rejeitado) | O Mestre disse não. Nada foi gasto. |
| **Abandoned** (abandonado) | O artesão desistiu depois de uma falha. |

- **Falhar por 4 ou menos**: nenhum progresso. Lance esse teste de novo.
- **Falhar por 5 ou mais** em Ofícios: **Pay {gp} and roll again** (pagar {PO} e lançar de novo) compra materiais novos, ou **Abandon** (abandonar) encerra.
- **Edit**: o Mestre abre o pedido na janela Crafting, muda-o e clica em **Update the request**. O cartão diz "edited by the GM" (editado pelo Mestre).
- **Checks rolled as** (testes lançados como): mude o modo de jogada no cartão. Com uma jogada cega, o Mestre resolve o resultado.
- Se o artesão não puder pagar quando o Mestre aprovar, o cartão avisa: rejeite ou edite o pedido.

## Definições

Em **Configure Settings**, sob o primeiro módulo de Axecleft ativo que inclui o Crafting.

| Definição | Predefinição | O que faz |
|---|---|---|
| **Players may craft** (jogadores podem fabricar) | Ativado | Os jogadores podem abrir a janela Crafting e enviar pedidos. Nada é criado nem cobrado até o Mestre aprovar. |
| **Magic item checks** (testes de itens mágicos) | SRD (no check: sem teste) | **Spellcraft check (house rule)** (teste de Identificar Magia, regra da casa): Identificar Magia CD 5 + nível de conjurador, +5 para cada pré-requisito em falta (além do talento e do nível de conjurador) em vez de bloquear. Falhar por 5 ou mais desperdiça os PO e o XP. |
| **Poison crafting** (fabricação de venenos) | House rule (regra da casa) | O SRD não tem regra para fabricar veneno. **House rule**: Ofícios (alquimia) contra a CD de resistência do veneno, matérias-primas a ⅓ do preço, só conjuradores. Nenhum separador de fabricação usa esta definição ainda. |
| **Crafting checks are rolled as** (os testes de fabricação são lançados como) | Public roll (jogada pública) | **Public roll**, **Private GM roll** (jogada privada do Mestre) ou **Blind GM roll** (jogada cega do Mestre). A predefinição ao aprovar; mude em cada cartão. |
| **Charge gp** (cobrar PO) | Ativado | Gasta o ouro do artesão na aprovação. |
| **Charge XP** (cobrar XP) | Ativado | Gasta o XP do artesão na aprovação. |
| **XP can't cost a level** (o XP não pode custar um nível) | Ativado | SRD: um personagem não pode gastar tanto XP num item a ponto de perder um nível. |
