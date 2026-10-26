# Perguntas frequentes

## Geral

**Onde ficam as ferramentas?**
Nas ferramentas do Mestre do D35E, no grupo **Axecleft's Tools**. Veja [Primeiros passos](pt-BR-Primeiros-passos).

**De quais módulos eu preciso?**
Qualquer um funciona sozinho. Cada um adiciona sua parte às ferramentas compartilhadas: Armory (armas e armaduras), Curios (poções, pergaminhos, varinhas, itens maravilhosos), Gemstones (gemas, arte e joias), Traps (armadilhas, venenos, doenças). O Treasure Generator, o Merchant Generator e o Crafting vêm com os módulos que os incluem.

**Falta alguma coisa no Foundry 11.**
Itens inteligentes exigem D35E 3.1 ou posterior, por isso as opções deles ficam ocultas no Foundry 11.

**Os módulos aparecem em inglês.**
Eles ainda não estão traduzidos para o português. Este guia traz a tradução de cada botão entre parênteses. Veja [Idiomas](pt-BR-Idiomas) se quiser ajudar a traduzi-los.

## Tesouro

**Itens psiônicos nunca aparecem.**
Ative **Psionics** nas [configurações de geração](pt-BR-Configurações-de-geração) do Treasure Generator. As configurações de parcela psiônica (Armory, Curios) decidem depois com que frequência aparecem. Veja [Configurações](pt-BR-Configurações).

**Itens épicos nunca aparecem.**
Ative **Epic items** nas [configurações de geração](pt-BR-Configurações-de-geração#campanha).

**Um item de compêndio tem o preço errado.**
Adicione uma linha à página **Price Corrections** das [listas de tesouros](pt-BR-Listas-de-tesouros). Ela corrige o preço para o tesouro e o estoque dos mercadores sem mudar o compêndio. **Price Check**, na aba Item Sources do Merchant Generator, lista cada correção.

**Não quero uma gema, maldição ou outra entrada embutida.**
Desative-a na [aba Lists](pt-BR-Listas-de-tesouros#a-aba-lists) do Treasure Generator. Ela vai para a página "Disabled Entries" e nunca é rolada.

**Uma atualização de módulo vai apagar minhas listas personalizadas?**
Não. Elas ficam no diário **Axecleft's Treasure Lists** do mundo, e também no arquivo da biblioteca compartilhada na sua pasta Data do Foundry (com **Shared treasure lists library** em Automatic). Veja [A biblioteca compartilhada](pt-BR-Listas-de-tesouros#a-biblioteca-compartilhada).

**Como funcionam os itens amaldiçoados?**
Veja [Itens amaldiçoados](pt-BR-Itens-amaldiçoados).

## Mercadores

**Os jogadores não conseguem comprar do meu mercador.**
Mercadores novos são criados com permissões em None. Dê permissão aos jogadores na ficha do mercador.

**Os itens do meu próprio compêndio nunca aparecem nas lojas.**
O compêndio precisa estar nas suas [fontes de itens](pt-BR-Gerador-de-mercadores#aba-item-sources). Clique em **Save and Rescan** depois de adicioná-lo, ou em **Rescan** depois de adicionar itens. Para vender um item em lojas que não sejam do tipo dele, dê a ele uma [etiqueta de loja](pt-BR-Etiquetas-de-loja).

## Fabricação

**Meus jogadores não veem o Crafting.**
Ative **Players may craft** nas [configurações](pt-BR-Fabricação#configurações).

**O artesão tem o ouro e o XP, mas nada foi gasto.**
Nada é gasto até o Mestre aprovar o pedido. Confira também **Charge gp** e **Charge XP**.

**Meu próprio item mágico não pode ser fabricado, ou o Mestre precisa decidir o que ele exige.**
Termine a descrição dele com uma linha de construção do SRD em inglês, como `CL 12th; Craft Wondrous Item, fly;`. Veja [Como as exigências são encontradas](pt-BR-Fabricação#como-as-exigências-são-encontradas).

**O artesão não conhece uma magia que o item exige.**
Escolha outra fonte na lista suspensa da magia: um conjurador que ajuda, um pergaminho, uma varinha ou um cajado. Veja [Magias](pt-BR-Fabricação#magias).

**Um jogador pode escolher 20 num teste de Ofícios?**
Não. Falhar custa materiais, então o SRD não permite. Role, ou escolha 10.

## Armadilhas

**Um jogador não consegue fabricar uma armadilha do Random Trap Generator.**
As armadilhas geradas estão no mundo do Mestre. Dê ao jogador a permissão Observer no ator de armadilha, e ela aparece na aba **Trap kits**.

**Uma armadilha não pode virar kit.**
Os kits de armadilha são só para armadilhas mecânicas; armadilhas mágicas vêm de magias. A armadilha também precisa de um preço: adicione "Market Price - 1,000 gp" às notas dela.

**Os jogadores veem uma armadilha que não deveriam.**
Confira **Trap kits: who sees a placed trap** em [Kits de armadilha](pt-BR-Kits-de-armadilha#configurações). Com **GM only**, o token fica oculto.

**Não consigo recuperar uma armadilha.**
Só armadilhas mecânicas ativas podem voltar a um kit, e só com **Trap kits: placed traps can be recovered** ativado. Armadilhas mágicas são desativadas com Operar Mecanismo. Veja [Recuperar uma armadilha](pt-BR-Kits-de-armadilha#recuperar-uma-armadilha).

## Idiomas

**Parte do texto ainda está em inglês.**
Ainda não foi traduzida. Veja [Idiomas](pt-BR-Idiomas) para ajudar.

**Meus itens traduzidos não são reconhecidos.**
Dê a eles o nome em inglês (o botão **English name** na ficha do item). Veja [Idiomas](pt-BR-Idiomas#nomes-em-inglês-para-seus-próprios-itens).
