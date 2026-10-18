# Idiomas

Os módulos de Axecleft mostram suas janelas, cartões de chat e nomes de itens gerados no idioma do Foundry: o **Language** (idioma) que cada usuário escolhe em **Configure Settings → Core** (configurar opções → núcleo). O texto ainda não traduzido fica em inglês.

| Idioma | Estado |
|---|---|
| Inglês | Completo |
| Francês (`fr`) | Traduzido: janelas, cartões de chat, configurações e nomes gerados (com gramática francesa) |
| Espanhol (`es`), português (`pt-BR`, `pt-PT`) | Só rascunhos de gramática, ainda não ativos. Tradutores são bem-vindos. |

O português do Brasil recorre ao português europeu (e vice-versa), depois ao inglês.

O botão **User Guide** abre este wiki no idioma do Foundry quando existe tradução (francês, espanhol, português) e, se não, em inglês. Este guia em português já está disponível, mesmo com os módulos ainda em inglês.

## Mundos em outros idiomas

### Compêndios traduzidos (Babele)

Os módulos funcionam com compêndios traduzidos pelo Babele. Os itens mantêm o nome em inglês para serem reconhecidos, então uma *Espada longa* traduzida continua sendo reconhecida como Longsword: pelo nome original do Babele, uma etiqueta `en:` ou o arquivo de tradução do Babele.

### Nomes em inglês para seus próprios itens

Num mundo que não está em inglês, nomear ou renomear um item pede seu **English name** (nome em inglês). É opcional: **Skip** (pular) ou **Don't ask again** (não perguntar de novo). As fichas de item também ganham um botão **English name** no cabeçalho.

O nome em inglês permite que os geradores, os mercadores e a fabricação reconheçam o item. Todo item que os módulos criam também mantém o nome em inglês, então nomes traduzidos nunca quebram nada.

### O que fica em inglês

- As **etiquetas de loja** (`Shop: Scroll`), para que todos os mundos as leiam. Veja [Shop Tags](pt-BR-Etiquetas-de-loja).
- As **linhas de construção** nas descrições dos itens, para a [fabricação](pt-BR-Fabricação#como-as-exigências-são-encontradas). Itens do SRD traduzidos usam a linha em inglês; seus próprios itens precisam da linha em inglês.
- As **caixas de dano** do [Poison & Disease Creator](pt-BR-Criador-de-venenos-e-doenças) (`1d6 Con`, `2d12 hp`).
- As **palavras-chave de penalidades** das [maldições personalizadas](pt-BR-Itens-amaldiçoados#maldições-personalizadas) e as **palavras de metamágica** (`+empower`…).

## Traduzir os módulos

Cada módulo tem uma pasta `lang` com os arquivos a traduzir. O **README.md** dela explica tudo; em resumo:

| Arquivo | O que contém |
|---|---|
| `template.json` | Todos os textos: `"English text": "tradução"`. Copie como `<código>.json` (`fr.json`, `es.json`…). |
| `<código>.grammar.json` | A gramática do idioma: a palavra para "e", os artigos, a concordância de gênero, a elisão, as contrações, as maiúsculas. `grammar.template.json` explica cada linha. O mesmo arquivo vai em todos os módulos. |
| `words.template.json` | Cada palavra em inglês que entra nos nomes que o módulo monta: habilidades, materiais, armas base, gemas, objetos de arte, palavras de nomes de loja. Copie como `<código>.words.json`. |
| `languages.json` | Os idiomas que o módulo inclui, por exemplo `["fr"]`. Um idioma só é usado depois de listado aqui. |

Regras para o arquivo de textos:
- Mantenha exatamente como está o que estiver entre chaves: `{n}`, `{name}`, `{gp}`. Você pode movê-los dentro da frase.
- Mantenha tags HTML como `<strong>…</strong>` em volta das palavras correspondentes.
- Deixe uma linha vazia (`""`) para manter o inglês por enquanto.
- Linhas que começam com `__` só indicam de qual script vêm os textos. Deixe-as vazias.

Textos compartilhados por vários módulos (Treasure Generator, Merchant Generator, Crafting, Tools) aparecem no modelo de cada módulo. Traduza-os uma vez e copie entre os arquivos.

### Nomes montados a partir de partes

Alguns textos são padrões para os nomes que os módulos montam, por exemplo:

`{bonus} {adj} {masterwork} {material} {base}[ of {of:and}][ ({size})]` → "+1 Flaming Keen Longsword of Speed (Small)"

Coloque as partes na ordem do seu idioma e traduza as palavras em volta delas. Em francês: `{base:head} {masterwork} {material} {bonus} {adj}[ {of:and}][ ({size})]`.

| Parte | Significado |
|---|---|
| `{part}` | Uma palavra ou várias. |
| `{part:and}` / `{part:or}` | Uma lista: "A, B e C". |
| `{part:a}` / `{part:the}` | Com um artigo que concorda com a palavra. `{part:lower}`: em minúsculas. |
| `{part:head}` | O substantivo com que as outras palavras concordam. |
| `[ … ]` | Um trecho opcional, omitido quando uma parte dentro dele está vazia. |

### O arquivo de palavras

| Escreva | Significado |
|---|---|
| `"Longsword": "Espada longa (f)"` | O texto e seu gênero (`m` ou `f`). |
| `"Longsword": "(f)"` | Só o gênero; o nome do Babele fica. |
| `"Keen": "afiado/afiada/afiados/afiadas"` | Uma palavra que concorda com o substantivo: masculino / feminino / masculino plural / feminino plural. |
| `"Flaming": "flamejante (adj)"` | Uma palavra que vai para outra parte do nome (`of` ou `adj`). |
| `"Shears": "Tesouras (f, pl)"` | Os marcadores se combinam. |

Envie os arquivos prontos ao autor pela página do módulo no GitHub, para que entrem na próxima versão.
