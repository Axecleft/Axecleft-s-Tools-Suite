# Gemas, objetos de arte e joias

**Onde:** Treasure Generator → separadores **Gems**, **Art Objects** e **Jewelry** (do Axecleft's Gemstones).

Cada opção pode ser escolhida à mão ou deixada em **Random** (aleatório). Cada separador termina com **How many** (quantos, *for each target*: para cada alvo) e a caixa [Put items in](pt-PT-Gerador-de-tesouros#put-items-in-colocar-os-itens-em).

## Gems (gemas)

> **<img width="606" height="710" alt="image" src="https://github.com/user-attachments/assets/b3fc91c0-c107-4322-aa87-1a6bfa25548e" />**

| Controlo | O que faz |
|---|---|
| **Gem lists** (listas de gemas) | De quais listas lançar: **SRD** (67 gemas), **Homebrew** (da casa, mais 376 variedades) e **Custom** (personalizadas: as suas, das [listas de tesouros](pt-PT-Listas-de-tesouros)). A contagem de cada uma é mostrada. |
| **Base value** (valor base) | Um dos valores de gema do SRD (10, 50, 100, 500, 1.000 ou 5.000 PO, com os dados do SRD), ou **Random (SRD odds)** (aleatório, chances do SRD). |
| **Gem** (gema) | Uma gema específica das listas marcadas, ou **Random**. A lista acompanha o valor base. |
| **Size & quality** (tamanho e qualidade) | **Use the homebrew size and quality variations** (usar as variações de tamanho e qualidade da casa): marcada, as gemas também recebem um tamanho e uma qualidade que multiplicam o valor. |
| **Size** (tamanho) | Tiny (minúscula, ×0,25), Small (pequena, ×0,5), Standard (padrão, ×1), Large (grande, ×2,5), Huge (enorme, ×5), ou **Random (5/15/60/15/5)**. |
| **Quality** (qualidade) | Flawed (defeituosa, ×0,25), Common (comum, ×0,5), Average (média, ×1), Fine (fina, ×2,5), Exceptional (excecional, ×5), ou **Random (5/15/60/15/5)**. |

A linha de prévia mostra o **valor real**: os dados × o tamanho × a qualidade. Os jogadores veem um valor aproximado, e o nome mais simples pelo qual a gema é avaliada (uma *Dragon's Eye Opal*, opala olho-de-dragão, aparece como *Opal*, opala), até que seja avaliada.

Essas listas de gemas e a escolha de tamanho e qualidade também valem para as gemas lançadas no separador [Treasure by Level](pt-PT-Tesouro-por-nível).

## Art Objects e Jewelry (objetos de arte e joias)

> **<img width="604" height="747" alt="image" src="https://github.com/user-attachments/assets/712fa48a-a89a-4091-ba2a-0d349de17388" />**

| Controlo | O que faz |
|---|---|
| **Value** (valor) | Um dos 12 valores de arte do SRD, de **1: 1d10×10 gp** a **12: 2d6×1,000 gp**, ou **Random (SRD odds)**. |
| **Object** (objeto, arte) / **Piece** (peça, joias) | O que é (uma ânfora, um símbolo sagrado, uma tiara…), ou **Random**. Cada objeto tem uma construção: Molded (moldado), Carved (entalhado), Clothing (vestuário) ou Book (livro). |
| **Material** | Do que é feito. A lista só oferece materiais que combinam com a construção do objeto, agrupados conforme combinem com o valor escolhido. **Random (suits the value)** (aleatório, adequado ao valor) escolhe um que sirva. Alguns objetos têm material próprio, mostrado como "(part of the object)" (parte do objeto). |
| **Gemstone** (gema) | Uma gema engastada ("set with ruby", engastado com rubi; "inlaid with jade", incrustado de jade), **None** (nenhuma) ou **Random**. O aleatório é mais provável em valores altos. Cada gema mostra os valores em que aparece. |
| **Quality** (qualidade) | **Use the homebrew quality variations** (usar as variações de qualidade da casa): marcada, a peça recebe um acabamento que multiplica o valor. |
| **Workmanship** (acabamento) | Junk (bugiganga, ×0,25), Common (comum, ×0,5), Average (médio, ×1), Fine (fino, ×2,5), Masterpiece (obra-prima, ×5), ou **Random (5/15/60/15/5)**. |
| **Treasure by Level** (só no separador Art Objects) | **Art rolled by level can be jewelry too** (a arte lançada por nível também pode ser joia): a arte lançada no separador Treasure by Level pode sair como joia. |

A prévia mostra a faixa de valor e quantas combinações são possíveis. A suíte tem 221 objetos, 120 materiais e 30 gemas de adorno.

### Nomes

Os nomes são montados a partir das partes, por exemplo *Fine, Silver Holy Symbol set with Topaz* (símbolo sagrado fino de prata engastado com topázio), ou *Wolf Fur Cloak* (capa de pele de lobo). A descrição diz como foi feito: "a holy symbol cast and worked in silver, set with topaz". Em outros idiomas, o nome segue a ordem das palavras daquele idioma (veja [Idiomas](pt-PT-Idiomas)).

## Adicionar os seus

As suas próprias gemas, objetos de arte, materiais e gemas de adorno vão nas páginas das [listas de tesouros](pt-PT-Listas-de-tesouros): **Custom Gems**, **Custom Art & Jewelry**, **Custom Materials** e **Custom Embellishment Gems**.

## Definições do módulo

Em **Configure Settings → Axecleft's Gemstones** (configurar opções):
- **Gem size & quality variations** (variações de tamanho e qualidade das gemas): a predefinição da caixa Size & quality.
- **Art & jewelry quality variations** (variações de qualidade da arte e das joias): a predefinição da caixa Quality dos separadores Art Objects e Jewelry.
- **Premade pieces in random art (%)** (peças prontas na arte aleatória): com que frequência a arte aleatória é uma peça pronta (5% por predefinição; 0 = nunca).
- **Full resale price for gems, jewelry and art** (preço de revenda integral para gemas, joias e arte; ativado por predefinição): gemas, joias e objetos de arte são mercadorias, por isso os mercadores compram-nos e vendem-nos pelo valor integral (o **Full Resale Price** do D35E no item). Vale para as peças geradas e para as gemas tiradas dos compêndios do módulo. Desativado: os mercadores compram-nas a metade do preço, como os outros itens.

Desative as variações para valores simples do SRD.

## Value rolls and base values (lançamentos de valor e valores base)

**Onde:** Configure Settings → Axecleft's Gemstones → **Value rolls and base values** (só o Mestre).

Cada gema, objeto de arte e joia tem um **valor base** (o que parece valer, até ser avaliado) e um **lançamento de valor** (o seu valor real, lançado quando chega a um personagem). A janela **Gem and art values** (valores de gemas e arte) lista os 6 valores de gemas (10 PO a 5.000 PO) e os 12 valores de arte, cada um com o lançamento e a base do SRD ao lado das suas próprias caixas.

- Deixe uma caixa vazia para manter a do SRD.
- Um lançamento pode usar dados e `max()`, `min()`, `floor()`, `ceil()` e `round()`: `max(10, 4d4)` nunca fica abaixo de 10.
- **A rolled value is never below the base value** (um valor lançado nunca fica abaixo do valor base): aplica isso a toda gema, objeto de arte e joia.
- As variações de tamanho e qualidade multiplicam o valor lançado.
- As gemas tiradas dos compêndios do módulo usam as mesmas fórmulas.
- **SRD values** (valores do SRD) esvazia as suas caixas. As peças já criadas mantêm os seus valores.
