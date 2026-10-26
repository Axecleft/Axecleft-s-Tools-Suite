# Merchant Generator (gerador de mercadores)

**Onde:** **Axecleft's Tools → Merchant Generator**.

Crie, abasteça e reabasteça mercadores do D35E. Um mercador é um ator com a ficha de mercador do D35E, com um estoque de itens e uma bolsa. Os jogadores compram e vendem pelo token dele.

A janela tem cinco abas: **Merchant** (mercador), **Shop Types** (tipos de loja), **People** (pessoas), **Item Sources** (fontes de itens) e **Shop Tags** (etiquetas de loja).

> **<img width="1004" height="982" alt="image" src="https://github.com/user-attachments/assets/2ce6e875-666f-41b8-83cd-452722d8bc28" />**

## Aba Merchant

### A loja

| Controle | O que faz |
|---|---|
| **Shop** (loja) | O tipo de loja: os tipos embutidos, **Your shop types** (seus tipos de loja; veja [Shop Types](#aba-shop-types)) e tipos adicionados por outros módulos. Uma linha abaixo mostra quais módulos e compêndios fornecem o estoque. |
| **Settlement** (povoado) | O tamanho do povoado, que define o limite em PO, quantos itens diferentes, a bolsa do mercador e as categorias de magia disponíveis. Veja a tabela abaixo. |
| **GP limit** (limite em PO) | **Nothing priced above the settlement's gp limit** (nada acima do limite em PO do povoado; SRD). Desmarque para permitir qualquer coisa. |
| **Settlement character** (caráter do povoado) | Clique para expandir. Marque os traços que combinam com o lugar (veja abaixo). |
| **Different items** (itens diferentes) | Quantos itens diferentes ter em estoque, como fórmula de dados. Em branco usa a do povoado (metade num reabastecimento). |
| **Unappraised goods** (bens não avaliados) | A % de gemas, arte e joias deixadas sem identificação, vendidas pelo valor base (10% por padrão). |

| Settlement | Limite em PO | Itens diferentes | Bolsa | Categorias de magia |
|---|---|---|---|---|
| Thorp (lugarejo) | 40 PO | 1d4+1 | 1d4×10 PO | menor |
| Hamlet (aldeia) | 100 PO | 1d6+2 | 2d6×10 PO | menor |
| Village (vila) | 200 PO | 2d4+2 | 2d4×25 PO | menor |
| Small town (vila grande) | 800 PO | 2d6+3 | 2d4×100 PO | menor |
| Large town (cidade pequena) | 3.000 PO | 3d6+4 | 3d6×100 PO | menor, médio |
| Small city (cidade) | 15.000 PO | 4d6+5 | 2d4×1.000 PO | menor, médio |
| Large city (cidade grande) | 40.000 PO | 5d6+6 | 4d6×1.000 PO | menor, médio, maior |
| Metropolis (metrópole) | 100.000 PO | 6d6+8 | 6d6×1.000 PO | menor, médio, maior |

Traços do **Settlement character** (marque os que servirem):

| Traço | Efeito |
|---|---|
| Port / harbor (porto) | Mais bens exóticos, gemas e arte |
| Mining town (cidade mineradora) | Gemas, armas e armaduras |
| Frontier / outpost (fronteira / posto avançado) | Equipamento e armas, pouca magia, preços +10% |
| Trade hub / crossroads (centro comercial / encruzilhada) | Metade a mais de estoque, preços −5% |
| Holy site / temple city (lugar sagrado / cidade-templo) | Poções, pergaminhos, água benta |
| Arcane center (centro arcano) | O dobro de magia, limite em PO dobrado |
| Wealthy (rico) | Arte e gemas, limite em PO ×1,5, preços +10% |
| Poor / war-torn (pobre / devastado pela guerra) | Menos estoque, metade do limite em PO, preços +20% |
| Remote / isolated (remoto / isolado) | Menos estoque, preços +25% |
| Lawless / thieves' haven (sem lei / refúgio de ladrões) | O dobro de bens não avaliados e de venenos, preços −10% |
| Epic campaign (campanha épica) | Itens épicos em estoque em qualquer povoado (cerca de 1 em cada 10 itens mágicos, acima do limite em PO), todas as categorias, limite em PO ×10. Exige **Epic items** ativado nas [configurações de geração](pt-BR-Configurações-de-geração#campanha). |

> **<img width="1356" height="978" alt="merchant gen" src="https://github.com/user-attachments/assets/6e7b7f4c-ed9f-4af4-a705-af468be9934c" />**

### Preços e bolsa

Clique para expandir.
- **Sells at** (vende a): % do valor que o mercador cobra (100 por padrão). O caráter do povoado pode ajustá-la.
- **Buys at** (compra a): % do valor que o mercador paga (SRD: metade, ou seja 50).
- **Purse (gp)** (bolsa, PO): uma fórmula de dados. Em branco usa a do povoado. É paga nas moedas deste mundo (veja [Moedas](pt-BR-Tesouro-por-nível#moedas)).

### Merchant (mercador)

**Make** (criar):
- **A new merchant** (um novo mercador): cria um ator na pasta de atores **Merchants**, com a ficha de mercador do D35E e permissões em None (nenhuma). Ajuste as permissões dos jogadores na ficha para que eles possam negociar.
- **Selected tokens** (tokens selecionados): abastece os tokens de mercador que você selecionou na cena.
- **A chosen actor or token** (um ator ou token escolhido): escolha um, ou arraste um ator da barra lateral Actors para a caixa.

Para um novo mercador:

| Controle | O que faz |
|---|---|
| **Race** / **Sex** (raça / sexo) | Ou **Random**. |
| **Name** (nome) | Digite um, ou clique no dado para **Roll a name** (rolar um nome). Em branco: um nome e um nome de loja aleatórios. |
| **Actor name** (nome do ator) | **Merchant (Shop)**, **Merchant** ou **Shop** (mercador, loja), por exemplo "Garrick (The Silver Anvil)". |
| **Image** (imagem) | Um retrato ou imagem de token (**Browse**, procurar). Em branco: um retrato aleatório da sua pasta de retratos que combine com a raça e o sexo (veja [People](#aba-people)). |

Para mercadores existentes:
- **Stock** (estoque): **Replace the old stock and purse** (substituir o estoque e a bolsa antigos) ou **Restock: keep the stock, add more** (reabastecer: manter o estoque e adicionar mais). Substituir só remove armas, equipamento, consumíveis e saque; talentos, classes e outros itens são mantidos.
- **Shop settings** (configurações da loja): **Use each merchant's own saved shop, settlement and traits** (usar a loja, o povoado e os traços salvos de cada mercador). Cada mercador lembra como foi criado, então reabastecer vários de uma vez mantém a loja de cada um.

Clique em **Generate Merchant** (gerar mercador).

## Aba Shop Types

> **<img width="603" height="860" alt="image" src="https://github.com/user-attachments/assets/e65118e3-ecfb-4ad6-8d88-45d99c4697d9" />**

Crie seus próprios tipos de loja.
- **New shop type** (novo tipo de loja) ou **Edit** (editar): dê um nome, por exemplo *Entalhador de osso de dragão*, e escolha um tipo em **Start from** (partir de).
- **What it sells** (o que vende): o número de cada categoria é sua parte do estoque (0 ou em branco: nunca vendido).
- Para lojas de gemas e arte: **Any** (qualquer), **Gems and art** (gemas e arte), **Art objects only** (só objetos de arte), **Jewelry only** (só joias), e **Art made by** (arte feita por): Molded / cast (moldado / fundido: metal, vidro), Carved (entalhado: madeira, osso, pedra), Cloth, fur and hide (tecido, pele e couro) ou Books and documents (livros e documentos).
- Para itens maravilhosos: opcionalmente **Only those tagged "Shop: …"** (só os etiquetados "Shop: …"; veja [Shop Tags](pt-BR-Etiquetas-de-loja)).

Clique em **Save Shop Type** (salvar tipo de loja) ou **Delete** (excluir). Os tipos de loja são salvos no mundo.

Tipos de loja embutidos: General store (armazém), Adventurer's outfitter (fornecedor de aventureiros), Trading post (entreposto), Blacksmith (ferreiro), Weaponsmith (armeiro), Armorer (fabricante de armaduras), Bowyer / fletcher (arqueiro / flecheiro), Alchemist (alquimista), Herbalist / apothecary (herbalista / boticário), Jeweler (joalheiro), Gem cutter (lapidador), Gold- and silversmith (ourives), Carver / sculptor (entalhador / escultor), Clothier / furrier (alfaiate / peleiro), Art dealer / curio shop (marchand / loja de curiosidades), Bookseller (livreiro), Scribe (escriba), Temple (templo), Wandwright / staff maker (fabricante de varinhas e cajados), Magic shop (loja de magia), Exotic goods (bens exóticos), Fence / pawnbroker (receptador / penhorista), Black market (mercado negro).

## Aba People

> **<img width="601" height="695" alt="image" src="https://github.com/user-attachments/assets/f984efa5-1acf-46f8-b161-3093a1387ec1" />**

**Names** (nomes): adicione seus próprios nomes, um por linha ou separados por vírgulas.
- **Names for** (nomes para): uma raça, ou **Any race** (qualquer raça: nomes usados para todas as raças).
- Listas: **Male first names** (nomes masculinos), **Female first names** (nomes femininos), **First names (either)** (nomes de qualquer sexo), **Surnames** (sobrenomes), **Shop names (any shop)** (nomes de loja, qualquer loja).
- **Random names use** (os nomes aleatórios usam): **Built-in names and mine** (os embutidos e os meus), **Only my names** (só os meus) ou **Only built-in names** (só os embutidos).
- **Save Names** (salvar nomes) os salva no mundo. **Show Examples** (mostrar exemplos) rola alguns.

**Portraits** (retratos):
- **Portrait folder** (pasta de retratos): uma pasta de retratos. Um novo mercador sem imagem recebe um aleatório desta pasta e das subpastas, que combine com sua raça e sexo.
- Coloque a raça e o sexo nos nomes das pastas ou dos arquivos, em inglês, por exemplo `dwarf/female/smith-01.webp` ou `elf_male_3.png`. Plurais como dwarves, elves e women funcionam, assim como m ou f.
- Imagens sem raça nem sexo no caminho servem para qualquer um. Uma imagem com o nome de outra raça ou sexo nunca é usada.
- Clique em **Save and Scan Folder** (salvar e analisar a pasta).

## Aba Item Sources

> **<img width="600" height="657" alt="image" src="https://github.com/user-attachments/assets/516ecd08-837b-4c62-9057-3e22afff5ac5" />**

Além das listas do SRD e dos módulos de Axecleft, os mercadores (e o tesouro, onde nenhum módulo cobre uma categoria) tiram itens dos seus **Item compendiums** (compêndios de itens). Cada item é classificado pelos próprios dados:
- armas, armaduras e escudos padrão, obras-primas ou mágicos;
- munição, equipamento e itens alquímicos;
- poções, pergaminhos, varinhas, anéis, bastões, cajados e itens maravilhosos.

Os itens mágicos são classificados pelo preço: menores até 4.000 PO, médios até 25.000 PO, maiores acima disso.

**Compendiums** (compêndios):
- **Automatic (matching names)** (automático, nomes correspondentes): os compêndios de itens do D35E, e qualquer compêndio com Gear, Equipment, Weapons, Ammo, Armor, Shields ou Magic Items no nome. Também Poison Consumables do Traps, Poisons, and Diseases. Compêndios traduzidos são reconhecidos pelos nomes em inglês.
- **My choice (tick below)** (minha escolha, marque abaixo): marque exatamente os compêndios a usar. Cada um mostra seu tipo (System, Module ou World: sistema, módulo ou mundo) e quantos itens tem.

Clique em **Save and Rescan** (salvar e reanalisar) depois de mudá-los, ou em **Rescan** depois de adicionar itens.

**Price corrections** (correções de preço): alguns itens de compêndio têm preços errados, por exemplo várias armas mágicas específicas do D35E. As correções dos módulos de Axecleft, e as suas na página **Price Corrections** das [listas de tesouros](pt-BR-Listas-de-tesouros), os corrigem para o tesouro e o estoque dos mercadores sem mudar o compêndio.
- **Price Check** (verificação de preços): lista cada correção, com o preço atual do compêndio, o preço corrigido e se o compêndio ainda precisa de ajuste.
- **Export CSV** (exportar CSV): baixa essa lista como planilha, por exemplo para enviar a quem mantém um compêndio.

## Aba Shop Tags

Veja [Shop Tags](pt-BR-Etiquetas-de-loja).
