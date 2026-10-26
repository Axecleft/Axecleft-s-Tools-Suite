# As listas de tesouros e o separador Lists

As suas próprias entradas para os módulos de Axecleft ficam num diário chamado **Axecleft's Treasure Lists**: gemas, objetos de arte, materiais e maldições personalizados, correções de preço, e as entradas embutidas que desativou. Cada lista é uma página com uma tabela. Edite as tabelas diretamente no diário, ou use o separador **Lists** (listas) do Treasure Generator.

> **<img width="964" height="805" alt="image" src="https://github.com/user-attachments/assets/357aa51d-aae2-4ce5-af94-2646a7da8357" />**

## As páginas

| Página | De | Colunas |
|---|---|---|
| **Custom Gems** (gemas personalizadas) | Gemstones | Gem, Appraises As, Base Value (gp), Image, Description |
| **Custom Art & Jewelry** (arte e joias personalizadas) | Gemstones | Object, Construction, Art or Jewelry, Weight (lb.), Image, Description |
| **Custom Materials** (materiais personalizados) | Gemstones | Material, Used For, Min Value Level, Max Value Level, Name As |
| **Custom Embellishment Gems** (gemas de adorno personalizadas) | Gemstones | Gem, Min Value Level, Max Value Level |
| **Custom Curses** (maldições personalizadas) | Treasure Generator | Curse, Table, Weight, Items, What it does, Penalties (buff). Veja [Itens amaldiçoados](pt-PT-Itens-amaldiçoados#maldições-personalizadas). |
| **Price Corrections** (correções de preço) | Treasure Generator | Item, Compendium, Price (gp), Note |
| **Disabled Entries (module)** (entradas desativadas) | cada módulo | Name, List |

### Custom Gems

- **Appraises As** (avaliada como) é o nome mostrado antes de a gema ser avaliada: uma *Dragon's Eye Opal* é avaliada como *Opal*.
- **Base Value** (valor base) é um dos valores de gema do SRD: 10, 50, 100, 500, 1.000 ou 5.000.
- **Image** (imagem) e **Description** (descrição) são opcionais.

### Custom Art & Jewelry

- **Construction** (construção) decide de quais materiais o objeto pode ser feito:
  - **Molded** (moldado): metais, vidro, cerâmica;
  - **Carved** (entalhado): madeira, osso, marfim, pedra;
  - **Clothing** (vestuário): tecido, pele, couro;
  - **Book** (livro): papel, couro, seda.
- **Art or Jewelry** (arte ou joia) decide em qual separador ele aparece.

### Custom Materials

- **Used For** (usado para) lista as construções a que serve (Molded, Carved, Clothing, Book), separadas por vírgulas.
- As jogadas aleatórias só usam um material em valores de arte entre o seu **Min** e o seu **Max Value Level** (nível de valor, de 1 a 12).
- **Name As** (nomear como) é opcional: um material "Wolf" nomeado como "Wolf Fur" dá "Wolf Fur Cloak".

### Custom Embellishment Gems

Gemas que podem adornar arte e joias ("set with ruby", "inlaid with jade"). As jogadas aleatórias usam-nas em valores de arte entre Min e Max Value Level (1 a 12).

### Price Corrections

Corrija o preço de itens de compêndio sem editar o compêndio.
- **Compendium** é o identificador do compêndio, por exemplo `D35E.magicitems`. Deixe em branco para qualquer compêndio.
- As correções valem para o tesouro gerado e o stock dos mercadores.
- Armory e Curios trazem as suas próprias correções para preços errados conhecidos nos compêndios do D35E; elas aparecem como linhas embutidas.

### Disabled Entries

Entradas embutidas que nunca devem ser usadas, uma página por módulo. **List** é a lista a que pertencem (por exemplo `gems`, `curses`), ou `any`. Uma entrada desativada nunca é lançada nem oferecida.

## O separador Lists

**Onde:** Treasure Generator → separador **Lists**.

> **<img width="595" height="1062" alt="image" src="https://github.com/user-attachments/assets/3c60ee04-825a-4a85-872b-b269ce484531" />**

- **List** (lista): escolha uma lista. Ela mostra quantas entradas adicionou e quantas embutidas desativou.
- **Add to List** (adicionar à lista): um formulário com as colunas dessa lista. Preencha e clique em **Add to [lista]**.
- **Your entries** (as suas entradas): as suas linhas, cada uma com **Remove** (remover). Listas longas mostram as primeiras entradas, "…and n more (see the journal)".
- **Switch off built-in entries** (desativar entradas embutidas): escreva o nome de uma entrada integrado, escolha **This list** (esta lista) ou **Every [module] list** (todas as listas de [módulo]), e clique em **Switch Off** (desativar). As entradas desativadas vão para a página "Disabled Entries".
- **Open Lists Journal** (abrir o diário de listas): abre o diário.

## A biblioteca partilhada

Cada alteração também é guarda num ficheiro de biblioteca, **Data/axecleft-treasure/treasure-lists.json**, na sua pasta Data do Foundry. As atualizações dos módulos nunca mexem nele, e todos os mundos do servidor o carregam ao iniciar, por isso as suas listas sobrevivem às atualizações e acompanham-no entre mundos. O carregamento só adiciona linhas (reconhecidas pelo nome); nunca apaga.

- **Save to Library** / **Load from Library** (guardar na / carregar da biblioteca): guardar ou carregar à mão.
- **Export** / **Import** (exportar / importar; *Another Foundry server*, outro servidor do Foundry): Export transfere todas as suas listas, de cada módulo ativo, como um ficheiro. Import mescla um ficheiro assim (só adiciona entradas). Ficheiros exportados pelo Gemstones 1.14 também funcionam.

Definições dos módulos (**Configure Settings**):
- **Shared treasure lists library** (biblioteca partilhada de listas de tesouros): **Automatic** (guarda a cada alteração e carrega ao iniciar) ou **Manual** (só com os botões Save / Load).
- **Shared library folder** (pasta da biblioteca partilhada): a pasta dentro da sua pasta Data do Foundry que contém `treasure-lists.json`.
