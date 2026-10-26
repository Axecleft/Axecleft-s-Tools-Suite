# Generation settings (configurações de geração)

**Onde:** Treasure Generator → aba **Treasure by Level** → **Generation settings** (clique para expandir).

Estas configurações controlam os extras que os módulos de Axecleft adicionam aos itens **gerados aleatoriamente**, e algumas opções para a campanha toda. Elas são salvas no mundo assim que você as muda. O título mostra "(SRD and Axecleft defaults)" (padrões do SRD e de Axecleft) ou "(changed for this world)" (alterado para este mundo). **Reset to Defaults** (restaurar padrões), no final, volta tudo ao início.

As ferramentas de criação (a [Forge](pt-BR-Forja) e a [oficina Curios](pt-BR-Oficina-Curios)) sempre podem adicionar esses extras à mão, qualquer que seja a configuração aqui.

> **<img width="609" height="659" alt="image" src="https://github.com/user-attachments/assets/ae8184e0-8f90-43c1-a868-cc2f9ebb6270" />**

## Campanha

Opções para **todos** os módulos de Axecleft:

- **Psionics** (psiônica): desativada, itens psiônicos, poderes, pedras de poder, tatuagens psiônicas, dorjes e psicoroas ficam fora dos tesouros, dos mercadores, da fabricação e da Forge.
- **Epic items** (itens épicos): ativada, a Forge e o Crafting podem criar itens épicos (além dos limites +5 e +10 do SRD), e os mercadores com o caráter de povoado *Epic campaign* podem tê-los em estoque. O tesouro aleatório segue o SRD até o EL 20.
- **Epic share of the extra items at EL 21+** (parcela épica dos itens extras a partir do EL 21): a porcentagem dos [itens maiores extras do EL 21–30](pt-BR-Tesouro-por-nível#encounter-level-nível-de-encontro) que são itens épicos das tabelas épicas do SRD (regra da casa; 25% por padrão).

## Luz, inteligência e inscrições

Ative ou desative cada uma com **Random light** (luz aleatória), **Random intelligence** (inteligência aleatória) e **Inscription hints** (pistas inscritas), depois ajuste as chances de cada linha da tabela:

| Linha | Sheds light (emite luz) | Bright / dim (plena / penumbra) | Intelligent (inteligente) | Hint (pista) |
|---|---|---|---|---|
| Armas corpo a corpo mágicas | 30% | 20 / 40 pés | 1% | 15% |
| Armas de ataque à distância mágicas | desativado | 20 / 40 pés | 1% | 15% |
| Armaduras e escudos mágicos | 5% | 10 / 20 pés | 1% | — |
| Outros itens mágicos permanentes | 1% | 5 / 10 pés | 1% | — |

Cada célula tem uma caixa de seleção (ativada ou não) e uma porcentagem. Estes são os padrões:
- **SRD:** 30% das armas corpo a corpo mágicas emitem luz (como uma magia *luz*: 20 pés de luz plena, 40 de penumbra), e as armas de ataque à distância não. 15% das armas têm uma inscrição que dá uma pista do seu poder. Menos de 1% dos itens permanentes são inteligentes (nunca poções, pergaminhos, varinhas ou munição).
- **Regras da casa:** luz em armaduras, escudos e outros itens.

> **Foundry 11:** a coluna Intelligent e suas opções ficam ocultas, porque o D35E 2.4.3 não suporta itens inteligentes.

> **<img width="606" height="713" alt="image" src="https://github.com/user-attachments/assets/44fef60c-45f1-4b7e-a80d-72755fc99c0c" />**

**Propósitos especiais (itens inteligentes):**
- **Intelligent items can have a special purpose** (itens inteligentes podem ter um propósito especial): ativa os propósitos especiais.
- **always with greater powers** (sempre com poderes maiores): os itens mais capazes, os que têm poderes maiores, sempre têm um.
- **plus … % of the others** (mais … % dos demais): a chance para qualquer outro item inteligente.

O SRD não diz com que frequência os propósitos especiais aparecem; este é o padrão de Axecleft.

**Opções de luz:**
- **Light color and animation follow the item's abilities** (a cor e a animação da luz seguem as habilidades do item): uma espada flamejante tremula em laranja, uma sagrada brilha dourada, um item necromântico flutua em um verde doentio. Desativada: luz branca neutra.
- **Stronger items glow brighter** (itens mais poderosos brilham mais): o brilho cresce com a força da aura do item.
- **Stronger items shine farther: … ft per +1 above +2** (itens mais poderosos iluminam mais longe: … pés por +1 acima de +2): o raio cresce com o bônus de melhoria.

## Sizes of arms (tamanhos de armas e armaduras)

**SRD:** armaduras e armas aleatórias são Pequenas em 30%, Médias em 60% e de outro tamanho em 10% (aqui, Grandes).
- Armas e armaduras Pequenas custam o mesmo e pesam metade.
- As Grandes custam o dobro e pesam o dobro.

Desmarque para que tudo seja Médio.

## Venenos

**… % of mundane item rolls become a poison** (… % das rolagens de itens comuns viram um veneno) tirado das suas fontes de itens (regra da casa; 1% por padrão). Aumente em campanhas onde veneno é comum. Precisa de venenos nas suas fontes de itens, por exemplo os compêndios do Traps, Poisons, and Diseases.

## Itens amaldiçoados

Ativa as maldições aleatórias e ajusta a frequência. Veja [Itens amaldiçoados](pt-BR-Itens-amaldiçoados) para tudo sobre maldições.

- **Cursed items** (itens amaldiçoados, caixa de seleção): ativado ou não.
- **Flat rate** (taxa fixa): uma única chance para cada item mágico (**1%** por padrão).
- **Rate by grade** (taxa por categoria): uma chance por categoria: **menor 3%**, **médio 2%**, **maior e épico 1%** por padrão.
- **Specific cursed items (SRD table)** (itens amaldiçoados específicos, tabela do SRD): permite que os itens amaldiçoados específicos do SRD (braçadeiras da vulnerabilidade, a espada amaldiçoada –2…) substituam um item rolado.
- **Apply simple effects (penalties, reversed bonuses)** (aplicar efeitos simples: penalidades, bônus invertidos): transforma um +2 invertido em –2, tira a magia de um item de ilusão, e assim por diante.
- **Merchant stock can be cursed** (o estoque dos mercadores pode ser amaldiçoado): desativado por padrão, para que as lojas vendam itens limpos.
- **Create the curse buffs compendium** (criar o compêndio de buffs de maldição): monta o compêndio de mundo "Axecleft's Curses" (veja [Itens amaldiçoados](pt-BR-Itens-amaldiçoados#os-compêndios-de-buffs-de-maldição)).
