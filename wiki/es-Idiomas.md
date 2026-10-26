# Idiomas

Los módulos de Axecleft muestran sus ventanas, tarjetas de chat y nombres de objetos generados en el idioma de Foundry: el **Language** (idioma) que cada usuario elige en **Configure Settings → Core** (configurar ajustes → núcleo). El texto que aún no está traducido se queda en inglés.

| Idioma | Estado |
|---|---|
| Inglés | Completo |
| Francés (`fr`) | Traducido: ventanas, tarjetas de chat, ajustes y nombres generados (con gramática francesa) |
| Español (`es`), portugués (`pt-BR`, `pt-PT`) | Solo borradores de gramática, aún no activos. Se agradecen traductores. |

El portugués de Brasil recurre al portugués europeo (y al revés), y después al inglés.

El botón **User Guide** abre este wiki en el idioma de Foundry cuando hay traducción (francés, español, portugués) y, si no, en inglés. Esta guía en español ya está disponible aunque los módulos todavía se muestren en inglés.

## Mundos en otros idiomas

### Compendios traducidos (Babele)

Los módulos funcionan con compendios traducidos por Babele. Los objetos conservan su nombre en inglés para reconocerlos, así que una *Espada larga* traducida se sigue reconociendo como Longsword: por el nombre original de Babele, una etiqueta `en:` o el archivo de traducción de Babele.

### Nombres en inglés para tus propios objetos

En un mundo que no está en inglés, al nombrar o renombrar un objeto se pide su **English name** (nombre en inglés). Es opcional: **Skip** (omitir) o **Don't ask again** (no volver a preguntar). Las hojas de objeto también reciben un botón **English name** en la cabecera.

El nombre en inglés permite que los generadores, los mercaderes y la fabricación reconozcan el objeto. Todo objeto que crean los módulos conserva también su nombre en inglés, así que los nombres traducidos nunca rompen nada.

### Qué se queda en inglés

- Las **etiquetas de tienda** (`Shop: Scroll`), para que todos los mundos las lean. Consulta [Shop Tags](es-Etiquetas-de-tienda).
- Las **líneas de construcción** de las descripciones de objetos, para la [fabricación](es-Fabricación#cómo-se-encuentran-los-requisitos). Los objetos del SRD traducidos usan su línea en inglés; tus propios objetos necesitan la línea en inglés.
- Los **cuadros de daño** del [Poison & Disease Creator](es-Creador-de-venenos-y-enfermedades) (`1d6 Con`, `2d12 hp`).
- Las **palabras clave de penalizadores** de las [maldiciones personalizadas](es-Objetos-malditos#maldiciones-personalizadas) y las **palabras de metamagia** (`+empower`…).

## Traducir los módulos

Cada módulo tiene una carpeta `lang` con los archivos que traducir. Su **README.md** lo explica todo; en resumen:

| Archivo | Qué contiene |
|---|---|
| `template.json` | Todos los textos: `"English text": "traducción"`. Cópialo como `<código>.json` (`fr.json`, `es.json`…). |
| `<código>.grammar.json` | La gramática del idioma: la palabra para "y", los artículos, la concordancia de género, la elisión, las contracciones, las mayúsculas. `grammar.template.json` explica cada línea. El mismo archivo va en todos los módulos. |
| `words.template.json` | Cada palabra inglesa que entra en los nombres que construye el módulo: aptitudes, materiales, armas base, gemas, objetos de arte, palabras de nombres de tienda. Cópialo como `<código>.words.json`. |
| `languages.json` | Los idiomas que incluye el módulo, por ejemplo `["fr"]`. Un idioma solo se usa una vez que aparece aquí. |

Reglas para el archivo de textos:
- Deja exactamente igual lo que va entre llaves: `{n}`, `{name}`, `{gp}`. Puedes moverlo dentro de la frase.
- Conserva las etiquetas HTML como `<strong>…</strong>` alrededor de las palabras correspondientes.
- Deja una línea vacía (`""`) para conservar el inglés por ahora.
- Las líneas que empiezan por `__` solo indican de qué script vienen los textos. Déjalas vacías.

Los textos que comparten varios módulos (Treasure Generator, Merchant Generator, Crafting, Tools) aparecen en la plantilla de cada módulo. Tradúcelos una vez y cópialos entre archivos.

### Nombres construidos a partir de partes

Algunos textos son patrones para los nombres que construyen los módulos, por ejemplo:

`{bonus} {adj} {masterwork} {material} {base}[ of {of:and}][ ({size})]` → "+1 Flaming Keen Longsword of Speed (Small)"

Pon las partes en el orden de tu idioma y traduce las palabras que las rodean. En francés: `{base:head} {masterwork} {material} {bonus} {adj}[ {of:and}][ ({size})]`.

| Parte | Significado |
|---|---|
| `{part}` | Una palabra o varias. |
| `{part:and}` / `{part:or}` | Una lista: "A, B y C". |
| `{part:a}` / `{part:the}` | Con un artículo que concuerda con la palabra. `{part:lower}`: en minúsculas. |
| `{part:head}` | El sustantivo con el que concuerdan las demás palabras. |
| `[ … ]` | Un fragmento opcional, que se omite cuando una parte de su interior está vacía. |

### El archivo de palabras

| Escribe | Significado |
|---|---|
| `"Longsword": "Espada larga (f)"` | El texto y su género (`m` o `f`). |
| `"Longsword": "(f)"` | Solo el género; se queda el nombre de Babele. |
| `"Keen": "afilado/afilada/afilados/afiladas"` | Una palabra que concuerda con el sustantivo: masculino / femenino / masculino plural / femenino plural. |
| `"Flaming": "flamígera (adj)"` | Una palabra que va a otra parte del nombre (`of` o `adj`). |
| `"Shears": "Tijeras (f, pl)"` | Los marcadores se combinan. |

Envía los archivos terminados al autor a través de la página de GitHub del módulo, para que se incluyan en la siguiente versión.
