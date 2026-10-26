# Primeiros passos

## Do que você precisa

| | Foundry 13 ou 14 | Foundry 11 |
|---|---|---|
| Sistema de jogo | D35E 3.x | D35E 2.4.3 |
| Versões dos módulos | 1.14.x | 1.11.x |
| Itens inteligentes | Sim (D35E 3.1 ou posterior) | Não (ocultos) |

Opcional: **Babele** e um módulo de tradução (por exemplo, a tradução francesa do D35E) para mundos em outro idioma. Veja [Idiomas](pt-BR-Idiomas).

## Instalação

1. Na aba **Add-on Modules** (módulos complementares) do Foundry, escolha **Install Module** (instalar módulo) e cole a URL do manifesto do módulo (da página de versões no GitHub), ou procure pelo nome.
2. Instale os módulos que quiser. Eles não dependem uns dos outros, mas se recomendam mutuamente, porque cada um amplia as janelas compartilhadas.
3. No seu mundo, abra **Game Settings → Manage Modules** (configurações do jogo → gerenciar módulos), marque os módulos e salve. O Foundry recarrega o mundo.

> **Usuários do Foundry 11:** instalem os downloads **1.11.x**. As versões 1.14.x exigem o Foundry 13 ou 14.

## O que cada módulo traz

| Janela ou recurso | Gemstones | Armory | Curios | Traps |
|---|:-:|:-:|:-:|:-:|
| Janela [Treasure Generator](pt-BR-Gerador-de-tesouros) | ✔ | ✔ | ✔ | |
| Gemas, objetos de arte e joias | ✔ | | | |
| Armas, armaduras, escudos, munição | | ✔ | | |
| Poções, pergaminhos, varinhas, anéis, bastões, cajados, itens maravilhosos e psiônicos | | | ✔ | |
| [Merchant Generator](pt-BR-Gerador-de-mercadores) e [Shop Tags](pt-BR-Etiquetas-de-loja) | ✔ | ✔ | ✔ | |
| Janela [Crafting](pt-BR-Fabricação) (fabricação) | | ✔ | ✔ | ✔ |
| Aba [Forge](pt-BR-Forja) (forja) | | ✔ | | |
| Aba [Curios](pt-BR-Oficina-Curios), compêndio Common Buffs | | | ✔ | |
| Armadilhas, venenos, doenças, kits de armadilha | | | | ✔ |

As janelas compartilhadas funcionam enquanto **qualquer** módulo que as inclua estiver ativo. Só com o Gemstones, o Treasure Generator rola moedas, gemas e arte, e lista os itens mágicos no cartão de chat para você resolver. Adicione Armory e Curios e esses itens são criados para você.

## Abrir as ferramentas

Todas as ferramentas ficam no grupo **Axecleft's Tools** (ferramentas de Axecleft) da barra de ferramentas à esquerda do Foundry, ao lado das ferramentas do Mestre:

- **Treasure Generator** (gerador de tesouros): moedas, gemas, arte, joias e itens.
- **Crafting** (fabricação): fabricar itens segundo o SRD (itens mágicos com talentos de criação de itens, itens comuns com Ofícios).
- **Merchant Generator** (gerador de mercadores): criar, abastecer e reabastecer mercadores.
- **Shop Tags** (etiquetas de loja): etiquetar os itens dos compêndios com as lojas que os vendem.
- **Random Trap Generator** (gerador de armadilhas aleatórias): rolar armadilhas aleatórias por ND e criar atores de armadilha.

O Treasure Generator também tem um botão **Treasure** (tesouro) no topo da barra lateral **Items** (itens).

> **<img width="460" height="412" alt="image" src="https://github.com/user-attachments/assets/fdf98582-71b7-4a44-8bbc-c5253b7fcb3e" />**

A maioria das ferramentas é para o Mestre. Os jogadores veem **Crafting** no grupo Axecleft's Tools enquanto a configuração **Players may craft** (jogadores podem fabricar) estiver ativada (veja [Fabricação](pt-BR-Fabricação)), **My Traps** (minhas armadilhas, com Traps, Poisons, and Diseases) e **User Guide** (guia do usuário).

O último botão, **User Guide**, abre este wiki no seu navegador, no idioma escolhido no Foundry.

## Primeiros ajustes

1. **Fontes de itens.** Abra o [Merchant Generator](pt-BR-Gerador-de-mercadores) → aba **Item Sources** (fontes de itens) e marque os compêndios que contêm seus itens. O Treasure Generator e os mercadores só pegam itens desses compêndios.
2. **Opções da campanha.** No Treasure Generator → **Treasure by Level** (tesouro por nível) → [Generation settings](pt-BR-Configurações-de-geração) (configurações de geração), ative ou desative **Psionics** (psiônica) e **Epic items** (itens épicos) conforme sua campanha.
3. **Moedas.** Na mesma aba, escolha como são pagos o cobre, a prata, o ouro e a platina do SRD (veja [Tesouro por nível](pt-BR-Tesouro-por-nível#moedas)).
4. **Experimente.** Escolha um nível de encontro, ajuste **Put items in** (colocar os itens em) para **Chat card only** (só cartão de chat) e clique em **Generate** (gerar).

## Atualizações

Instale as atualizações pela aba **Add-on Modules** do Foundry, como de costume. Suas configurações, seu diário Treasure Lists e suas listas personalizadas são mantidos: as listas personalizadas também são salvas em um arquivo na sua pasta Data (veja [Listas de tesouros](pt-BR-Listas-de-tesouros)), então sobrevivem às atualizações dos módulos.

Depois de uma atualização, reinicie o Foundry e recarregue o navegador com **Ctrl+F5** para que ele carregue os novos scripts.
