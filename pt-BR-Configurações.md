# Configurações dos módulos

**Onde:** **Configure Settings** (configurar opções), sob o nome de cada módulo. São configurações do mundo: só o Mestre as muda.

As opções próprias do Treasure Generator (campanha, itens mágicos, gemas, moedas…) não estão aqui. Elas ficam na seção [Generation settings](pt-BR-Configurações-de-geração) dele.

Os scripts compartilhados registram suas configurações uma só vez, sob o primeiro módulo de Axecleft ativo que os inclui. Se você tem Armory, Curios e Gemstones, vai encontrar **Shared treasure lists library** sob um deles, não sob os três.

## Compartilhadas (Treasure Generator)

Incluídas pelo Armory, Curios e Gemstones.

| Configuração | Padrão | O que faz |
|---|---|---|
| **Shared treasure lists library** (biblioteca compartilhada de listas de tesouros) | Automatic | **Automatic**: suas [listas de tesouros](pt-BR-Listas-de-tesouros) são salvas num arquivo da pasta Data do Foundry sempre que você as muda, e todos os mundos as carregam ao iniciar, então elas sobrevivem às atualizações dos módulos e acompanham você entre mundos. **Manual**: só quando você clica em Save / Load na aba Lists do Treasure Generator. |
| **Shared library folder** (pasta da biblioteca compartilhada) | `axecleft-treasure` | A pasta dentro da sua pasta Data do Foundry que contém `treasure-lists.json`. |

## Compartilhadas (Crafting)

Incluídas pelo Armory, Curios e Traps. Veja [Fabricação](pt-BR-Fabricação#configurações) para os detalhes.

| Configuração | Padrão |
|---|---|
| **Players may craft** (jogadores podem fabricar) | Ativado |
| **Magic item checks** (testes de itens mágicos) | SRD (no check) |
| **Poison crafting** (fabricação de venenos) | House rule (regra da casa) |
| **Crafting checks are rolled as** (os testes de fabricação são rolados como) | Public roll (rolagem pública) |
| **Charge gp** (cobrar PO) | Ativado |
| **Charge XP** (cobrar XP) | Ativado |
| **XP can't cost a level** (o XP não pode custar um nível) | Ativado |

## Axecleft's Armory

| Configuração | Padrão | O que faz |
|---|---|---|
| **Psionic share of magic arms and armor (%)** (parcela psiônica de armas e armaduras mágicas) | 10 | Regra da casa, enquanto Psionics estiver ativado (Treasure Generator → Generation settings): essa parcela das armas, armaduras e escudos mágicos aleatórios que recebem habilidades especiais as rola nas tabelas de habilidades psiônicas do SRD. 0 = nenhuma. |
| **Special material share of random magic arms (%)** (parcela de materiais especiais nas armas mágicas aleatórias) | 5 | Essa parcela das armas, munições, armaduras e escudos mágicos aleatórios é feita de um material especial adequado (adamante, ferro frio, prata alquímica, madeira escura, mithral, couro de dragão), com o preço do SRD. As regras básicas dão 96–100 no d% (5%). 0 = nenhuma. |

## Axecleft's Curios

| Configuração | Padrão | O que faz |
|---|---|---|
| **Highest potion level (GM)** (nível máximo de poções, Mestre) | 3 | SRD: poções e tatuagens psiônicas contêm magias ou poderes de 3º nível ou menos. O Mestre pode aumentar até 9 para os itens criados na [aba Curios](pt-BR-Oficina-Curios#só-o-mestre). O tesouro aleatório segue as tabelas do SRD. A fabricação dos jogadores sempre fica no 3º. |
| **Highest wand level (GM)** (nível máximo de varinhas, Mestre) | 4 | O mesmo para varinhas e dorjes (SRD: 4º). A fabricação dos jogadores sempre fica no 4º. |
| **Psionic share of potions, scrolls, wands, staffs and wondrous items (%)** (parcela psiônica de poções, pergaminhos, varinhas, cajados e itens maravilhosos) | 10 | Regra da casa, enquanto Psionics estiver ativado: essa parcela das rolagens aleatórias de poções, pergaminhos e varinhas vira tatuagens psiônicas, pedras de poder e dorjes; das de cajados, psicoroas do SRD; das de itens maravilhosos, cristais de cognição e itens psiônicos universais. 0 = nenhuma. |
| **Pearls of power for spontaneous casters (house rule)** (pérolas do poder para conjuradores espontâneos, regra da casa) | Desativado | SRD: uma pérola do poder recupera uma magia que um conjurador preparou. Ativado: feiticeiros, bardos e outros conjuradores espontâneos podem usá-la para recuperar um espaço de magia gasto do nível da pérola. |
| **Set up psicrowns** (preparar psicoroas) | Ativado | Uma psicoroa adicionada a um personagem a partir de um compêndio (Dominator, Evader… do D35E) recebe seus pontos de poder e seus poderes como itens separados que gastam os pontos da coroa. |
| **Prefer module compendiums** (preferir os compêndios dos módulos) | Ativado | Quando uma magia, poder ou item está tanto nos compêndios do D35E quanto nos de um módulo (como o Axecleft's Shared Data), usar a cópia do módulo. |
| **Take over hand-made linked items** (assumir itens vinculados à mão) | Ativado | Um grimório ou pergaminho que você vinculou à mão na aba Links do D35E: quando é adicionado a um personagem, o Curios guarda uma cópia do conteúdo dele, para que pergaminhos usados continuem usados quando ele troca de mãos. |
| **Spellbook rule** (regra do grimório) | Desativado | Opcional: personagens cuja classe com grimório esteja na lista abaixo só podem preparar magias que estejam num grimório que carregam (Read Magic, ler magia, é sempre permitida, como no SRD). O Mestre é avisado, mas não impedido. |
| **Spellbook classes** (classes com grimório) | `Wizard` | As classes a que a regra do grimório se aplica, separadas por vírgulas. |

## Axecleft's Gemstones

| Configuração | Padrão | O que faz |
|---|---|---|
| **Gem size & quality variations** (variações de tamanho e qualidade das gemas) | Ativado | As gemas aleatórias usam os tamanhos (Tiny a Huge) e qualidades (Flawed a Exceptional) da casa. Desativado: gemas simples com valor do SRD. O gerador tem a mesma caixa para mudanças pontuais. |
| **Art & jewelry quality variations** (variações de qualidade da arte e das joias) | Ativado | A arte e as joias aleatórias usam os acabamentos da casa (Junk a Masterpiece). Desativado: valores de arte simples do SRD. |
| **Premade pieces in random art (%)** (peças prontas na arte aleatória) | 5 | Com que frequência um objeto de arte ou uma joia aleatória é uma peça pronta (a arte e os livros de Leo, e as suas da lista Custom Premade Art) em vez de ser montada a partir de um objeto, um material e uma gema. 0 = nunca; ainda podem ser escolhidas na aba Art Objects. |
| **Full resale price for gems, jewelry and art** (preço de revenda integral para gemas, joias e arte) | Ativado | Gemas, joias e objetos de arte são mercadorias: os mercadores os compram e vendem pelo valor integral (o **Full Resale Price** do D35E). Vale para as peças geradas e para as gemas tiradas dos compêndios do módulo. Desativado: os mercadores as compram pela metade do preço, como os outros itens. |

**Value rolls and base values** (rolagems de valor e valores base; o botão do Mestre) abre **Gem and art values** (valores de gemas e arte): a sua própria rolagem de valor e valor base para cada um dos 6 valores de gemas e dos 12 valores de arte, e **A rolled value is never below the base value** (um valor rolado nunca fica abaixo do valor base). Veja [Gemas, arte e joias](pt-BR-Gemas-arte-e-joias).

## Axecleft's Traps, Poisons, and Diseases

| Configuração | Padrão |
|---|---|
| **Trap kits: GM approves** | Ativado |
| **Trap kits: setting takes time** | Ativado |
| **Trap kits: who sees a placed trap** | GM only, plus a marker for the player who set it |
| **Trap kits: placed traps can be recovered** | Ativado |
| **Trap kits: compendiums for crafting** | Em branco (todo compêndio com atores de armadilha) |
| **Trap kits: crafting progress** | Silver pieces (SRD) |

Veja [Kits de armadilha](pt-BR-Kits-de-armadilha#configurações) para os detalhes.

## Axecleft's Tool Suite

A seção de cada módulo de Axecleft tem um botão **Axecleft's Tool Suite** (**Tool Suite settings**, configurações da suite). Ele reúne as configurações que todos os módulos compartilham, para todos, inclusive os jogadores:

| Configuração | Padrão | O que faz |
|---|---|---|
| **Show the welcome window when Foundry starts (everyone in this world)** (mostrar a janela de boas-vindas quando o Foundry inicia, para todos neste mundo) | Ativado | Só o Mestre. Desativado: ninguém neste mundo vê a janela de boas-vindas. |
| **Show it to me** (mostrar para mim) | Ativado | Só para você, neste navegador. A janela de boas-vindas tem a mesma caixa (**Show this when Foundry starts**, mostrar isto quando o Foundry inicia). |

A janela de boas-vindas agradece por usar a suite, tem os links para o [servidor do Discord do Axecleft's Tool Suite](https://discord.gg/FRhPPwDWta) (ajuda, novidades e ideias), o [Patreon de Axecleft](https://www.patreon.com/Axecleft) e este guia, e lista os módulos de Axecleft ativos no mundo. **Show the welcome window** (mostrar a janela de boas-vindas) a abre a qualquer momento.
