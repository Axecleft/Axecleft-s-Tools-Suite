# Definições dos módulos

**Onde:** **Configure Settings** (configurar opções), sob o nome de cada módulo. São definições do mundo: só o Mestre as muda.

As opções próprias do Treasure Generator (campanha, itens mágicos, gemas, moedas…) não estão aqui. Elas ficam na secção [Generation settings](pt-PT-Definições-de-geração) dele.

Os scripts partilhados registram as suas definições uma só vez, sob o primeiro módulo de Axecleft ativo que os inclui. Se tem Armory, Curios e Gemstones, vai encontrar **Shared treasure lists library** sob um deles, não sob os três.

## Partilhadas (Treasure Generator)

Incluídas pelo Armory, Curios e Gemstones.

| Definição | Predefinição | O que faz |
|---|---|---|
| **Shared treasure lists library** (biblioteca partilhada de listas de tesouros) | Automatic | **Automatic**: as suas [listas de tesouros](pt-PT-Listas-de-tesouros) são guardadas num ficheiro da pasta Data do Foundry sempre que as muda, e todos os mundos as carregam ao iniciar, por isso elas sobrevivem às atualizações dos módulos e acompanham-no entre mundos. **Manual**: só quando clica em Save / Load no separador Lists do Treasure Generator. |
| **Shared library folder** (pasta da biblioteca partilhada) | `axecleft-treasure` | A pasta dentro da sua pasta Data do Foundry que contém `treasure-lists.json`. |

## Partilhadas (Crafting)

Incluídas pelo Armory, Curios e Traps. Veja [Fabricação](pt-PT-Fabricação#definições) para os detalhes.

| Definição | Predefinição |
|---|---|
| **Players may craft** (jogadores podem fabricar) | Ativado |
| **Magic item checks** (testes de itens mágicos) | SRD (no check) |
| **Poison crafting** (fabricação de venenos) | House rule (regra da casa) |
| **Crafting checks are rolled as** (os testes de fabricação são lançados como) | Public roll (jogada pública) |
| **Charge gp** (cobrar PO) | Ativado |
| **Charge XP** (cobrar XP) | Ativado |
| **XP can't cost a level** (o XP não pode custar um nível) | Ativado |

## Axecleft's Armory

| Definição | Predefinição | O que faz |
|---|---|---|
| **Psionic share of magic arms and armor (%)** (parcela psiónica de armas e armaduras mágicas) | 10 | Regra da casa, enquanto Psionics estiver ativado (Treasure Generator → Generation settings): essa parcela das armas, armaduras e escudos mágicos aleatórios que recebem habilidades especiais as lança nas tabelas de habilidades psiónicas do SRD. 0 = nenhuma. |
| **Special material share of random magic arms (%)** (parcela de materiais especiais nas armas mágicas aleatórias) | 5 | Essa parcela das armas, munições, armaduras e escudos mágicos aleatórios é feita de um material especial adequado (adamante, ferro frio, prata alquímica, madeira escura, mithral, couro de dragão), com o preço do SRD. As regras básicas dão 96–100 no d% (5%). 0 = nenhuma. |

## Axecleft's Curios

| Definição | Predefinição | O que faz |
|---|---|---|
| **Highest potion level (GM)** (nível máximo de poções, Mestre) | 3 | SRD: poções e tatuagens psiónicas contêm magias ou poderes de 3º nível ou menos. O Mestre pode aumentar até 9 para os itens criados no [separador Curios](pt-PT-Oficina-Curios#só-o-mestre). O tesouro aleatório segue as tabelas do SRD. A fabricação dos jogadores sempre fica no 3º. |
| **Highest wand level (GM)** (nível máximo de varinhas, Mestre) | 4 | O mesmo para varinhas e dorjes (SRD: 4º). A fabricação dos jogadores sempre fica no 4º. |
| **Psionic share of potions, scrolls, wands, staffs and wondrous items (%)** (parcela psiónica de poções, pergaminhos, varinhas, cajados e itens maravilhosos) | 10 | Regra da casa, enquanto Psionics estiver ativado: essa parcela das jogadas aleatórias de poções, pergaminhos e varinhas vira tatuagens psiónicas, pedras de poder e dorjes; das de cajados, psicoroas do SRD; das de itens maravilhosos, cristais de cognição e itens psiónicos universais. 0 = nenhuma. |
| **Pearls of power for spontaneous casters (house rule)** (pérolas do poder para conjuradores espontâneos, regra da casa) | Desativado | SRD: uma pérola do poder recupera uma magia que um conjurador preparou. Ativado: feiticeiros, bardos e outros conjuradores espontâneos podem usá-la para recuperar um espaço de magia gasto do nível da pérola. |
| **Set up psicrowns** (preparar psicoroas) | Ativado | Uma psicoroa adicionada a um personagem a partir de um compêndio (Dominator, Evader… do D35E) recebe os seus pontos de poder e os seus poderes como itens separados que gastam os pontos da coroa. |
| **Prefer module compendiums** (preferir os compêndios dos módulos) | Ativado | Quando uma magia, poder ou item está tanto nos compêndios do D35E quanto nos de um módulo (como o Axecleft's Shared Data), usar a cópia do módulo. |
| **Take over hand-made linked items** (assumir itens vinculados à mão) | Ativado | Um grimório ou pergaminho que vinculou à mão no separador Links do D35E: quando é adicionado a um personagem, o Curios guarda uma cópia do conteúdo dele, para que pergaminhos usados continuem usados quando ele troca de mãos. |
| **Spellbook rule** (regra do grimório) | Desativado | Opcional: personagens cuja classe com grimório esteja na lista abaixo só podem preparar magias que estejam num grimório que carregam (Read Magic, ler magia, é sempre permitida, como no SRD). O Mestre é avisado, mas não impedido. |
| **Spellbook classes** (classes com grimório) | `Wizard` | As classes a que a regra do grimório se aplica, separadas por vírgulas. |

## Axecleft's Gemstones

| Definição | Predefinição | O que faz |
|---|---|---|
| **Gem size & quality variations** (variações de tamanho e qualidade das gemas) | Ativado | As gemas aleatórias usam os tamanhos (Tiny a Huge) e qualidades (Flawed a Exceptional) da casa. Desativado: gemas simples com valor do SRD. O gerador tem a mesma caixa para mudanças pontuais. |
| **Art & jewelry quality variations** (variações de qualidade da arte e das joias) | Ativado | A arte e as joias aleatórias usam os acabamentos da casa (Junk a Masterpiece). Desativado: valores de arte simples do SRD. |
| **Premade pieces in random art (%)** (peças prontas na arte aleatória) | 5 | Com que frequência um objeto de arte ou uma joia aleatória é uma peça pronta (a arte e os livros de Leo, e as suas da lista Custom Premade Art) em vez de ser montada a partir de um objeto, um material e uma gema. 0 = nunca; ainda podem ser escolhidas no separador Art Objects. |
| **Full resale price for gems, jewelry and art** (preço de revenda integral para gemas, joias e arte) | Ativado | Gemas, joias e objetos de arte são mercadorias: os mercadores compram-nos e vendem-nos pelo valor integral (o **Full Resale Price** do D35E). Vale para as peças geradas e para as gemas tiradas dos compêndios do módulo. Desativado: os mercadores compram-nas a metade do preço, como os outros itens. |

**Value rolls and base values** (lançamentos de valor e valores base; o botão do Mestre) abre **Gem and art values** (valores de gemas e arte): o seu próprio lançamento de valor e valor base para cada um dos 6 valores de gemas e dos 12 valores de arte, e **A rolled value is never below the base value** (um valor lançado nunca fica abaixo do valor base). Veja [Gemas, arte e joias](pt-PT-Gemas-arte-e-joias).

## Axecleft's Traps, Poisons, and Diseases

| Definição | Predefinição |
|---|---|
| **Trap kits: GM approves** | Ativado |
| **Trap kits: setting takes time** | Ativado |
| **Trap kits: who sees a placed trap** | GM only, plus a marker for the player who set it |
| **Trap kits: placed traps can be recovered** | Ativado |
| **Trap kits: compendiums for crafting** | Em branco (todo compêndio com atores de armadilha) |
| **Trap kits: crafting progress** | Silver pieces (SRD) |

Veja [Kits de armadilha](pt-PT-Kits-de-armadilha#definições) para os detalhes.

## Axecleft's Tool Suite

A secção de cada módulo de Axecleft tem um botão **Axecleft's Tool Suite** (**Tool Suite settings**, definições da suite). Ele reúne as definições que todos os módulos partilham, para todos, incluindo os jogadores:

| Definição | Predefinição | O que faz |
|---|---|---|
| **Show the welcome window when Foundry starts (everyone in this world)** (mostrar a janela de boas-vindas quando o Foundry arranca, para todos neste mundo) | Ativado | Só o Mestre. Desativado: ninguém neste mundo vê a janela de boas-vindas. |
| **Show it to me** (mostrar para mim) | Ativado | Só para si, neste navegador. A janela de boas-vindas tem a mesma caixa (**Show this when Foundry starts**, mostrar isto quando o Foundry arranca). |

A janela de boas-vindas agradece por usar a suite, tem as ligações para o [servidor do Discord do Axecleft's Tool Suite](https://discord.gg/FRhPPwDWta) (ajuda, novidades e ideias), o [Patreon de Axecleft](https://www.patreon.com/Axecleft) e este guia, e lista os módulos de Axecleft ativos no mundo. **Show the welcome window** (mostrar a janela de boas-vindas) abre-a a qualquer momento.
