# A Forge (forja, Axecleft's Armory)

**Onde:** Treasure Generator → aba **Forge**.

Crie à mão armas, armaduras, escudos e munição. Qualquer opção pode ser **Random** (aleatória): as partes aleatórias são roladas nas tabelas do SRD para a categoria escolhida. Os preços seguem o SRD. Itens mágicos começam não identificados, a menos que você marque **Identified** (identificado).

> **<img width="603" height="1004" alt="image" src="https://github.com/user-attachments/assets/49cb92a4-a53f-4833-8ab6-a2813ea42136" />**

## O item

| Controle | O que faz |
|---|---|
| **Kind** (tipo) | **Weapon** (arma), **Armor** (armadura), **Shield** (escudo), **Ammunition** (munição) ou **Random**. |
| **Base item** (item base) | A arma ou armadura de partida (espada longa, camisão de cota de malha, flechas…), ou **Random (SRD tables)**. Seus próprios itens das suas fontes de itens também aparecem. |
| **Grade** (categoria) | **Minor** (menor), **Medium** (médio), **Major** (maior) ou **Epic (SRD epic tables)** (épico, tabelas épicas do SRD; só enquanto Epic items estiver ativado). Usada para qualquer melhoria ou habilidade **Random**. |
| **Enhancement** (melhoria) | **None** (nenhuma), **Random (by grade)** (aleatória, pela categoria), **+1** a **+5**, e **+6** a **+20 (epic)** quando itens épicos são permitidos. |
| **Epic** (épico) | **Allow epic items** (permitir itens épicos): melhoria acima de +5 e total acima de +10, a preços épicos do SRD (×10). Só aparece enquanto **Epic items** estiver ativado nas [configurações de geração](pt-BR-Configurações-de-geração#campanha). |
| **Masterwork** (obra-prima) | Torná-lo obra-prima. Itens mágicos, e os de adamante, mitral, madeira negra ou couro de dragão, sempre são. |
| **Material** | **None (ordinary)** (nenhum, comum), **Random (one that fits)** (aleatório, um que sirva) ou um material especial (adamante, ferro frio, prata alquímica, mitral, madeira negra, couro de dragão…). Só materiais adequados ao item base são permitidos. |
| **Size** (tamanho) | **Medium** (médio), **Small** (pequeno: mesmo preço, metade do peso), **Large** (grande: dobro do preço base e do peso), ou **Random (Generation settings)**. |

## Habilidades especiais

Até quatro espaços de habilidade. Cada um pode ser:
- **None**;
- **Random (by grade)**;
- **Random psionic (by grade)** (psiônica aleatória; só enquanto Psionics estiver ativado);
- uma habilidade escolhida.

As listas de habilidades são agrupadas: habilidades de armas do SRD, de armaduras e escudos do SRD, suas versões épicas e psiônicas, e **Your enhancements** (suas melhorias) dos seus próprios compêndios.

- **Bane foe** (inimigo da ruína): para *ruína*, o tipo de criatura que ela odeia, ou **Random (SRD table)**.
- Cada habilidade exige pelo menos uma melhoria +1. O bônus mais as habilidades não pode passar de +10, a menos que itens épicos sejam permitidos.
- Habilidades que não servem para o item base são recusadas, como *afiada* numa maça ou *retornável* numa espada longa.

## Luz, inscrição e mais

Clique no título para abrir esta seção.

| Controle | O que faz |
|---|---|
| **Light** (luz) | **By Generation settings (random)** (pelas configurações de geração, aleatório), **None** ou **Sheds light** (emite luz). |
| **Look** (aparência) | **From its abilities (or neutral)** (pelas suas habilidades, ou neutra): uma arma flamejante tremula em laranja, uma sagrada brilha dourada. Você também pode escolher um tema pelo nome, ou **Custom** (personalizada). |
| **Color**, **Animation**, **Speed / intensity** | Com uma aparência **Custom**: a cor da luz, a animação de luz do Foundry, e sua velocidade e intensidade (1–10). |
| **Bright / dim (ft)** (plena / penumbra, pés) | Os raios da luz. Em branco: pelas [configurações de geração](pt-BR-Configurações-de-geração). |
| **Intelligent** (inteligente) | **By Generation settings (random)**, **No**, **Yes, all features random** (sim, tudo aleatório) ou **Yes, choose the features** (sim, escolher as características). Exige D35E 3.1 ou posterior e seu compêndio Intelligent Item Tables, por isso fica oculto no Foundry 11. |
| **Cursed** (amaldiçoado) | **No**, **Random curse (SRD tables)**, um tipo de maldição, ou uma das suas maldições personalizadas. Veja [Itens amaldiçoados](pt-BR-Itens-amaldiçoados). |
| **Inscription hint** (pista inscrita) | **By Generation settings (random)**, **Yes** ou **No**: um desenho ou inscrição que dá uma pista do seu poder. |
| **Identified** (identificado) | **Start identified** (começar identificado). Se não, itens mágicos começam não identificados. |
| **Ammunition** (munição) | Com munição: quantas peças. Munição mágica tem preço por 50. |
| **Items to make** (itens a criar) | Quantos, **for each target**. As partes aleatórias são roladas para cada um. |

### Escolher as características de um item inteligente

Com **Yes, choose the features**, aparecem mais opções:

| Controle | O que faz |
|---|---|
| **Alignment** (tendência) | Qualquer tendência, ou **Random (suits holy, unholy, axiomatic, anarchic)** (aleatória, adequada a sagrada, profana, axiomática, anárquica). |
| **Mind** (mente) | Sua Inteligência, Sabedoria e Carisma. A mente define quantos poderes menores e maiores ele tem. |
| **Lesser power 1, 2…** / **Greater power 1, 2…** | Cada poder menor ou maior, ou Random. |
| **Special purpose** (propósito especial) | **By Generation settings**, **None**, **Random** ou um propósito escolhido. |
| **Dedicated power** (poder dedicado) | Com um propósito especial, seu poder dedicado. |

Os preços seguem o SRD e são somados ao preço do item.

## Criar

Ajuste [Put items in](pt-BR-Gerador-de-tesouros#put-items-in-colocar-os-itens-em) e clique em **Generate**. O cartão de chat lista cada item com o preço e, para o Mestre, tudo o que tiver de especial: luz, inteligência, maldição.
