# Token Loot (saque de tokens)

**Onde:** Treasure Generator → aba **Token Loot**, ou o botão do **saco** na barra de ferramentas de tokens (*Roll Loot for Selected Tokens*, rolar o saque dos tokens selecionados).

Dá a cada token de PdM seu próprio tesouro, rolado na tabela Tesouro do SRD pelo seu **Challenge Rating** (nível de desafio, ND). O SRD diz que o tesouro de uma criatura sozinha usa o ND dela como nível de encontro. A rolagem é ajustada pela configuração **Treasure** (tesouro) da ficha do PdM: None, Standard, Double, Triple do D35E (nenhum, padrão, dobro, triplo), ou uma % para moedas, bens e itens.

Os itens vão para o inventário desse token com o valor já rolado, e as moedas para a bolsa, prontos para serem saqueados.
- Um token **não vinculado** guarda o saque naquela única criatura.
- O saque de um token **vinculado** vai para o ator dele.

> **<img width="985" height="842" alt="image" src="https://github.com/user-attachments/assets/86e6352d-4ca6-404f-b7c7-0ff61f301662" />**

## Tokens selecionados

Selecione tokens de PdM na cena e clique em **Refresh** (atualizar). A tabela lista cada token com:

- **Token**: o nome, e "(unlinked)" (não vinculado) para tokens não vinculados.
- **CR** (ND): o ND com que rola. Armadilhas mostram sua parcela, por exemplo "trap, ×¼".
- **Treasure** (tesouro): a configuração Treasure da ficha em porcentagens, por exemplo "coins 100%, goods 100%, items 100%", ou "none". Um token que já tem saque mostra **has loot** (tem saque).

## Rolar

- **Roll** (rolar): marque **Coins**, **Goods** e **Items** para escolher quais partes rolar.
- **Replace loot rolled before** (substituir o saque rolado antes): recolhe os itens e moedas que o gerador deu ao token da última vez, e rola de novo.
- **Trap loot** (saque de armadilhas): armadilhas também podem ter saque incidental (os ossos e pertences de vítimas anteriores). Escolha **¼ of a creature's treasure** (¼ do tesouro de uma criatura) ou **The full treasure for its CR** (o tesouro completo do seu ND). Selecione tokens de armadilha e role. Armadilhas nunca recebem saque automaticamente.

Botões:
- **Roll Loot for Selected Tokens** (rolar o saque dos tokens selecionados): rola o saque de cada token selecionado.
- **Clear Loot** (limpar saque): remove só o que o Treasure Generator colocou nos tokens selecionados (os itens marcados por ele e as moedas que adicionou). O que você mesmo deu ao token fica.
- **Refresh**: relê a seleção.

## Saque automático

- **Roll loot when an unlinked NPC token is placed on a scene** (rolar o saque quando um token de PdM não vinculado é colocado numa cena): cada novo token de PdM não vinculado recebe seu saque assim que você o coloca.
- **Hidden tokens too** (tokens ocultos também): inclui os tokens colocados ocultos.
- **Post a chat card (GM only) for each token's loot** (publicar um cartão de chat, só o Mestre, com o saque de cada token): um cartão sussurrado listando o saque de cada token.

O saque automático só vale para tokens de PdM não vinculados. Nunca vale para armadilhas, personagens, tokens que pertençam a um jogador ou um token que já tenha saque (um token copiado mantém o saque com que foi copiado). Essas configurações são salvas no mundo.

## Regras usadas

| ND | Rolado como |
|---|---|
| Abaixo de 1 | EL 1, com a chance de cada parte ajustada pelo ND (um ND ½ rola metade das vezes) |
| 1–20 | Esse EL |
| 21–30 | EL 21–30: a linha do EL 20 mais itens maiores extras, alguns épicos enquanto **Epic items** estiver ativado |
| Acima de 30 | EL 30 |

- **PdMs com níveis de classe** carregam, pelo SRD, equipamento de PdM em vez de tesouro. Defina o Treasure deles como *None* se você os equipar à mão.
- Todo o resto segue a aba [Treasure by Level](pt-BR-Tesouro-por-nível): como as moedas são pagas, e as [configurações de geração](pt-BR-Configurações-de-geração) para luz, venenos, maldições e o resto.
