# A janela Treasure Generator (gerador de tesouros)

Abra-a em **Axecleft's Tools → Treasure Generator** na barra de ferramentas à esquerda, ou pelo botão **Treasure** no topo da barra lateral **Items**.

> **<img width="999" height="713" alt="image" src="https://github.com/user-attachments/assets/9c18e923-18f8-4b33-9628-8f200a2acf70" />**

## Abas

Cada módulo adiciona suas próprias abas, então você só vê as abas dos módulos que tem:

| Aba | De | O que cria |
|---|---|---|
| **Gems**, **Art Objects**, **Jewelry** (gemas, objetos de arte, joias) | Gemstones | Gemas, objetos de arte e joias, escolhidos ou rolados. Veja [Gemas, arte e joias](pt-BR-Gemas-arte-e-joias). |
| **Forge** (forja) | Armory | Armas, armaduras, escudos e munição feitos à mão. Veja [Forja](pt-BR-Forja). |
| **Curios** | Curios | Poções, pergaminhos, varinhas, anéis, bastões, cajados, itens maravilhosos e psiônicos feitos à mão. Veja [Oficina Curios](pt-BR-Oficina-Curios). |
| **Treasure by Level** (tesouro por nível) | embutida | A tabela Tesouro do SRD para um nível de encontro. Veja [Tesouro por nível](pt-BR-Tesouro-por-nível). |
| **Token Loot** (saque de tokens) | embutida | O tesouro próprio de cada token de PdM pelo seu ND. Veja [Saque de tokens](pt-BR-Saque-de-tokens). |
| **Lists** (listas) | embutida | Suas gemas, materiais, maldições, correções de preço personalizados, e mais. Veja [Listas de tesouros](pt-BR-Listas-de-tesouros). |

Alguns módulos também adicionam botões acima das abas.

## Put items in (colocar os itens em)

Toda aba que cria tesouro termina com a caixa **Put items in**, que decide para onde vão os resultados:

| Destino | O que acontece |
|---|---|
| **Selected tokens (each gets its own roll)** (tokens selecionados, cada um com sua própria rolagem) | Selecione os tokens na cena antes. Cada token selecionado recebe seu próprio tesouro, rolado separadamente. |
| **A chosen actor or token** (um ator ou token escolhido) | Escolha um ator ou token da lista, ou arraste um ator da barra lateral Actors para a caixa. |
| **Items sidebar ("Generated Treasure" folder)** (barra lateral Items, pasta "Generated Treasure") | Os itens são criados na barra lateral Items, em uma pasta chamada Generated Treasure. |
| **Chat card only (create items later)** (só cartão de chat, criar os itens depois) | Nada é criado ainda. O cartão de chat lista os resultados, com um botão **Create Item** (criar item) para cada um. |

**Avaliação:**
- Os itens dados a um ator ou token vão direto para o inventário dele com o valor real já rolado, prontos para uma ficha de saque. As moedas vão para a bolsa. Um token não vinculado guarda o saque naquela única criatura.
- Os itens enviados à barra lateral Items ou ao cartão de chat começam **sem avaliação**. O valor real é rolado quando são soltos sobre um personagem.

> **<img width="291" height="405" alt="image" src="https://github.com/user-attachments/assets/4dd00f99-deab-485f-bbe3-61558d228082" />**

## Generate e o cartão de chat

Clique em **Generate** (gerar). Os resultados são publicados em um cartão de chat **sussurrado ao Mestre**. Ele mostra cada item com um breve resumo (preço, qualidade, maldição etc.) e links para os itens criados. Com **Chat card only**, cada linha tem um botão **Create Item**; só o Mestre o vê.

Se uma parte do tesouro precisar de um módulo que você não tem, por exemplo armas mágicas sem o Armory, o cartão de chat a lista para você resolver à mão.

## Suas escolhas ficam salvas

A janela lembra suas últimas escolhas em cada aba para a próxima vez. As configurações de geração e de moedas são salvas no mundo, então todos os Mestres do mundo as compartilham.
