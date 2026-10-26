# Primeiros passos

## Do que precisa

| | Foundry 13 ou 14 | Foundry 11 |
|---|---|---|
| Sistema de jogo | D35E 3.x | D35E 2.4.3 |
| Versões dos módulos | 1.14.x | 1.11.x |
| Itens inteligentes | Sim (D35E 3.1 ou posterior) | Não (ocultos) |

Opcional: **Babele** e um módulo de tradução (por exemplo, a tradução francesa do D35E) para mundos em outro idioma. Veja [Idiomas](pt-PT-Idiomas).

## Instalação

1. No separador **Add-on Modules** (módulos complementares) do Foundry, escolha **Install Module** (instalar módulo) e cole a URL do manifesto do módulo (da página de versões no GitHub), ou procure pelo nome.
2. Instale os módulos que quiser. Eles não dependem uns dos outros, mas recomendam-se mutuamente, porque cada um amplia as janelas partilhadas.
3. No seu mundo, abra **Game Settings → Manage Modules** (definições do jogo → gerir módulos), marque os módulos e guarde. O Foundry recarrega o mundo.

> **Utilizadores do Foundry 11:** instalem as transferências **1.11.x**. As versões 1.14.x exigem o Foundry 13 ou 14.

## O que cada módulo traz

| Janela ou recurso | Gemstones | Armory | Curios | Traps |
|---|:-:|:-:|:-:|:-:|
| Janela [Treasure Generator](pt-PT-Gerador-de-tesouros) | ✔ | ✔ | ✔ | |
| Gemas, objetos de arte e joias | ✔ | | | |
| Armas, armaduras, escudos, munição | | ✔ | | |
| Poções, pergaminhos, varinhas, anéis, bastões, cajados, itens maravilhosos e psiónicos | | | ✔ | |
| [Merchant Generator](pt-PT-Gerador-de-mercadores) e [Shop Tags](pt-PT-Etiquetas-de-loja) | ✔ | ✔ | ✔ | |
| Janela [Crafting](pt-PT-Fabricação) (fabricação) | | ✔ | ✔ | ✔ |
| Separador [Forge](pt-PT-Forja) (forja) | | ✔ | | |
| Separador [Curios](pt-PT-Oficina-Curios), compêndio Common Buffs | | | ✔ | |
| Armadilhas, venenos, doenças, kits de armadilha | | | | ✔ |

As janelas partilhadas funcionam enquanto **qualquer** módulo que as inclua estiver ativo. Só com o Gemstones, o Treasure Generator lança moedas, gemas e arte, e lista os itens mágicos no cartão de chat para resolver. Adicione Armory e Curios e esses itens são criados automaticamente.

## Abrir as ferramentas

Todas as ferramentas ficam no grupo **Axecleft's Tools** (ferramentas de Axecleft) da barra de ferramentas à esquerda do Foundry, ao lado das ferramentas do Mestre:

- **Treasure Generator** (gerador de tesouros): moedas, gemas, arte, joias e itens.
- **Crafting** (fabricação): fabricar itens segundo o SRD (itens mágicos com talentos de criação de itens, itens comuns com Ofícios).
- **Merchant Generator** (gerador de mercadores): criar, abastecer e reabastecer mercadores.
- **Shop Tags** (etiquetas de loja): etiquetar os itens dos compêndios com as lojas que os vendem.
- **Random Trap Generator** (gerador de armadilhas aleatórias): lançar armadilhas aleatórias por ND e criar atores de armadilha.

O Treasure Generator também tem um botão **Treasure** (tesouro) no topo da barra lateral **Items** (itens).

> **<img width="460" height="412" alt="image" src="https://github.com/user-attachments/assets/fdf98582-71b7-4a44-8bbc-c5253b7fcb3e" />**

A maioria das ferramentas é para o Mestre. Os jogadores veem **Crafting** no grupo Axecleft's Tools enquanto a definição **Players may craft** (jogadores podem fabricar) estiver ativada (veja [Fabricação](pt-PT-Fabricação)), **My Traps** (minhas armadilhas, com Traps, Poisons, and Diseases) e **User Guide** (guia do utilizador).

O último botão, **User Guide**, abre este wiki no seu navegador, no idioma escolhido no Foundry.

## Primeiros ajustes

1. **Fontes de itens.** Abra o [Merchant Generator](pt-PT-Gerador-de-mercadores) → separador **Item Sources** (fontes de itens) e marque os compêndios que contêm os seus itens. O Treasure Generator e os mercadores só vão buscar itens a esses compêndios.
2. **Opções da campanha.** No Treasure Generator → **Treasure by Level** (tesouro por nível) → [Generation settings](pt-PT-Definições-de-geração) (definições de geração), ative ou desative **Psionics** (psiónica) e **Epic items** (itens épicos) conforme a sua campanha.
3. **Moedas.** No mesmo separador, escolha como são pagos o cobre, a prata, o ouro e a platina do SRD (veja [Tesouro por nível](pt-PT-Tesouro-por-nível#moedas)).
4. **Experimente.** Escolha um nível de encontro, ajuste **Put items in** (colocar os itens em) para **Chat card only** (só cartão de chat) e clique em **Generate** (gerar).

## Atualizações

Instale as atualizações pelo separador **Add-on Modules** do Foundry, como de costume. As suas definições, o seu diário Treasure Lists e as suas listas personalizadas são mantidos: as listas personalizadas também são guardadas num ficheiro na sua pasta Data (veja [Listas de tesouros](pt-PT-Listas-de-tesouros)), por isso sobrevivem às atualizações dos módulos.

Depois de uma atualização, reinicie o Foundry e recarregue o navegador com **Ctrl+F5** para que ele carregue os novos scripts.
