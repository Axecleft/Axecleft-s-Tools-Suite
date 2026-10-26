# A Forge (forja, Axecleft's Armory)

**Onde:** Treasure Generator → separador **Forge**.

Crie à mão armas, armaduras, escudos e munição. Qualquer opção pode ser **Random** (aleatória): as partes aleatórias são lançadas nas tabelas do SRD para a categoria escolhida. Os preços seguem o SRD. Itens mágicos começam não identificados, a menos que marque **Identified** (identificado).

> **<img width="603" height="1004" alt="image" src="https://github.com/user-attachments/assets/49cb92a4-a53f-4833-8ab6-a2813ea42136" />**

## O item

| Controlo | O que faz |
|---|---|
| **Kind** (tipo) | **Weapon** (arma), **Armor** (armadura), **Shield** (escudo), **Ammunition** (munição) ou **Random**. |
| **Base item** (item base) | A arma ou armadura de partida (espada longa, camisão de cota de malha, flechas…), ou **Random (SRD tables)**. Os seus próprios itens das suas fontes de itens também aparecem. |
| **Grade** (categoria) | **Minor** (menor), **Medium** (médio), **Major** (maior) ou **Epic (SRD epic tables)** (épico, tabelas épicas do SRD; só enquanto Epic items estiver ativado). Usada para qualquer melhoria ou habilidade **Random**. |
| **Enhancement** (melhoria) | **None** (nenhuma), **Random (by grade)** (aleatória, pela categoria), **+1** a **+5**, e **+6** a **+20 (epic)** quando itens épicos são permitidos. |
| **Epic** (épico) | **Allow epic items** (permitir itens épicos): melhoria acima de +5 e total acima de +10, a preços épicos do SRD (×10). Só aparece enquanto **Epic items** estiver ativado nas [definições de geração](pt-PT-Definições-de-geração#campanha). |
| **Masterwork** (obra-prima) | Torná-lo obra-prima. Itens mágicos, e os de adamante, mitral, madeira negra ou couro de dragão, sempre são. |
| **Material** | **None (ordinary)** (nenhum, comum), **Random (one that fits)** (aleatório, um que sirva) ou um material especial (adamante, ferro frio, prata alquímica, mitral, madeira negra, couro de dragão…). Só materiais adequados ao item base são permitidos. |
| **Size** (tamanho) | **Medium** (médio), **Small** (pequeno: mesmo preço, metade do peso), **Large** (grande: dobro do preço base e do peso), ou **Random (Generation settings)**. |

## Habilidades especiais

Quatro espaços de habilidade, e aparece outro sempre que todos estão preenchidos. Cada um pode ser:
- **None**;
- **Random (by grade)**;
- **Random psionic (by grade)** (psiónica aleatória; só enquanto Psionics estiver ativado);
- uma habilidade escolhida.

As listas de habilidades são agrupadas: habilidades de armas do SRD, de armaduras e escudos do SRD, as suas versões épicas e psiónicas, e **Your enhancements** (as suas melhorias) dos seus próprios compêndios.

- **Bane foe** (inimigo da ruína): para *ruína*, o tipo de criatura que ela odeia, ou **Random (SRD table)**.
- Cada habilidade exige pelo menos uma melhoria +1. Se o bónus mais as habilidades passarem de +10 sem itens épicos permitidos, a pré-visualização avisa, mas o item ainda pode ser criado, com o preço da fórmula normal (o limite do SRD é do Mestre flexibilizar). O tesouro aleatório fica em +10.
- Habilidades que não servem para o item base são recusadas, como *afiada* numa maça ou *retornável* numa espada longa.

## Armas duplas

Cada ponta de uma arma dupla (espada de duas lâminas, mangual duplo atroz, bordão…) tem o seu próprio bónus de melhoria e as suas próprias habilidades (SRD). Com uma arma dupla escolhida aparece uma secção **Other end (double weapons)** (a outra ponta, armas duplas) com os seus próprios espaços de melhoria e habilidade.

- A outra ponta tem o preço de uma arma própria: o seu preço soma-se ao do item, e as suas habilidades contam para os pré-requisitos e o nível de conjurador.
- As suas habilidades exigem pelo menos um bónus +1 nessa ponta.
- O D35E dá a um item um só conjunto de melhorias, por isso o bónus e as habilidades da outra ponta vão no nome do item (*+1 Flaming Two-Bladed Sword (other end +1 frost)*), na sua descrição e numa nota de ataque.
- As armas duplas mágicas aleatórias seguem o SRD: metade das vezes a outra ponta tem o mesmo bónus, senão um a menos e sem habilidades.

## Luz, inscrição e mais

Clique no título para abrir esta secção.

| Controlo | O que faz |
|---|---|
| **Light** (luz) | **By Generation settings (random)** (pelas definições de geração, aleatório), **None** ou **Sheds light** (emite luz). |
| **Look** (aparência) | **From its abilities (or neutral)** (pelas suas habilidades, ou neutra): uma arma flamejante tremula em laranja, uma sagrada brilha dourada. Também pode escolher um tema pelo nome, ou **Custom** (personalizada). |
| **Color**, **Animation**, **Speed / intensity** | Com uma aparência **Custom**: a cor da luz, a animação de luz do Foundry, e a sua velocidade e intensidade (1–10). |
| **Bright / dim (ft)** (plena / penumbra, pés) | Os raios da luz. Em branco: pelas [definições de geração](pt-PT-Definições-de-geração). |
| **Intelligent** (inteligente) | **By Generation settings (random)**, **No**, **Yes, all features random** (sim, tudo aleatório) ou **Yes, choose the features** (sim, escolher as características). Exige D35E 3.1 ou posterior e o seu compêndio Intelligent Item Tables, por isso fica oculto no Foundry 11. |
| **Cursed** (amaldiçoado) | **No**, **Random curse (SRD tables)**, um tipo de maldição, ou uma das suas maldições personalizadas. Veja [Itens amaldiçoados](pt-PT-Itens-amaldiçoados). |
| **Inscription hint** (pista inscrita) | **By Generation settings (random)**, **Yes** ou **No**: um desenho ou inscrição que dá uma pista do seu poder. |
| **Identified** (identificado) | **Start identified** (começar identificado). Se não, itens mágicos começam não identificados. |
| **Ammunition** (munição) | Com munição: quantas peças. Munição mágica tem preço por 50. |
| **Items to make** (itens a criar) | Quantos, **for each target**. As partes aleatórias são lançadas para cada um. |

### Escolher as características de um item inteligente

Com **Yes, choose the features**, aparecem mais opções:

| Controlo | O que faz |
|---|---|
| **Alignment** (tendência) | Qualquer tendência, ou **Random (suits holy, unholy, axiomatic, anarchic)** (aleatória, adequada a sagrada, profana, axiomática, anárquica). |
| **Mind** (mente) | A sua Inteligência, Sabedoria e Carisma. A mente define quantos poderes menores e maiores ele tem. |
| **Lesser power 1, 2…** / **Greater power 1, 2…** | Cada poder menor ou maior, ou Random. |
| **Special purpose** (propósito especial) | **By Generation settings**, **None**, **Random** ou um propósito escolhido. |
| **Dedicated power** (poder dedicado) | Com um propósito especial, o seu poder dedicado. |

Os preços seguem o SRD e são somados ao preço do item.

## Criar

Ajuste [Put items in](pt-PT-Gerador-de-tesouros#put-items-in-colocar-os-itens-em) e clique em **Generate**. O cartão de chat lista cada item com o preço e, para o Mestre, tudo o que tiver de especial: luz, inteligência, maldição.
