# El taller Curios (Axecleft's Curios)

**Dónde:** Treasure Generator → pestaña **Curios**.

Crea pociones, pergaminos, varitas y libros de conjuros a partir de cualquier conjuro de tus fuentes de conjuros, y tatuajes psiónicos, piedras de poder y dorjes a partir de tus fuentes de poderes. También puedes crear anillos, cetros, bastones y objetos maravillosos concretos, o tirarlos al azar. Los precios siguen el SRD. El tesoro empieza sin identificar.

> **<img width="596" height="1072" alt="image" src="https://github.com/user-attachments/assets/8962409c-1cf8-4a43-bcdb-50a92cdc6fbb" />**

## Make (crear)

Elige qué crear. El resto de la pestaña se adapta.

| Make | Notas |
|---|---|
| **Potion or oil** (poción o aceite) | Un conjuro, de nivel 3 o inferior (SRD). Sin conjuros de alcance personal. |
| **Scroll (one spell)** (pergamino, un conjuro) | Un conjuro. |
| **Scroll (several spells)** (pergamino, varios conjuros) | Un único pergamino con varios conjuros. |
| **Wand** (varita) | Un conjuro, de nivel 4 o inferior (SRD), 50 cargas. |
| **Spellbook** (libro de conjuros) | Los conjuros que indiques, o conjuros aleatorios. |
| **Psionic tattoo** (tatuaje psiónico), **Power stone (one power)** (piedra de poder, un poder), **Power stone (several powers)** (varios poderes), **Dorje** | Las versiones psiónicas (solo mientras Psionics esté activado). |
| **Cognizance crystal** (cristal de cognición) | Un cristal que almacena puntos de poder. |
| **Psicrown** (psicorona) | Una psicorona del SRD, o la tuya. |
| **Specific ring, rod, staff or wondrous item** (anillo, cetro, bastón u objeto maravilloso concreto) | Cualquier objeto así de tus fuentes de objetos. |
| **Random item (SRD tables)** (objeto aleatorio, tablas del SRD) | Un objeto aleatorio de la categoría y el grado que elijas. |

## Conjuros y poderes

| Control | Qué hace |
|---|---|
| **Spells** (conjuros) o **Powers** (poderes) | Uno por línea. Añade **@** y un nivel de lanzador para subirlo, y **+** para la metamagia: `Fireball @10 +empower`. Los nombres pueden estar en el idioma de tu mundo. O usa el selector de conjuros de abajo. |
| **Scroll type** (tipo de pergamino) | **Arcane if the spell is arcane, else divine** (arcano si el conjuro es arcano, si no divino), **Arcane** (arcano) o **Divine** (divino). |
| **Caster level** (nivel de lanzador) | En blanco: el nivel de lanzador más bajo que puede lanzarlo. Un nivel más alto sube el precio, como hace la fórmula del SRD. |
| **SRD limits** (límites del SRD) | **Ignore them (GM)** (ignorarlos, DJ): permite cualquier nivel de conjuro, conjuros de área en pociones y conjuros personales. Para tus propios objetos con reglas de la casa. |

Una línea bajo los controles comprueba tus conjuros mientras escribes, y dice qué se creará o qué falla.

Palabras de metamagia: `+empower` (Potenciar conjuro), `+enlarge` (Ampliar conjuro), `+extend` (Prolongar conjuro), `+heighten N` (Elevar conjuro, al nivel N), `+maximize` (Maximizar conjuro), `+quicken` (Apresurar conjuro), `+silent` (Conjuro silencioso), `+still` (Conjuro inmóvil), `+widen` (Ensanchar conjuro). Cada una sube el nivel efectivo del conjuro, y con él el precio del objeto y su nivel de lanzador mínimo. Los límites de nivel del objeto cuentan la metamagia.

### El selector de conjuros

> **[Captura: el selector de conjuros]**

| Control | Qué hace |
|---|---|
| **Search** (buscar) | Reduce la lista mientras escribes. |
| Lista | De dónde vienen los niveles: la regla propia del objeto (**Lowest level (SRD prices)**, nivel más bajo, precios del SRD; **By the scroll type**, según el tipo de pergamino, para pergaminos; **The spellbook class**, la clase del libro de conjuros, para libros de conjuros), **Arcane**, **Divine** o una clase. |
| Grupos | Todos los conjuros de tus fuentes de conjuros (poderes para objetos psiónicos), por nivel. Haz clic en un nivel para abrirlo o cerrarlo, y en un conjuro para elegirlo. Solo se listan los conjuros que el objeto puede contener: pociones hasta nivel 3 sin conjuros personales ni de área, varitas hasta nivel 4, etc. (todos con **SRD limits: Ignore them**). |
| **Caster level** | Para el conjuro elegido. Se muestra su mínimo; en blanco se usa el mínimo. |
| **Metamagic** (metamagia) | Marca las dotes que aplicar. **Heighten to** (elevar a) recibe el nivel. |
| **Add to item** (añadir al objeto) | Pone el conjuro en el cuadro **Spells** como una línea (`Fireball @12 +empower`). Una poción, varita o pergamino de un conjuro contiene uno solo, así que al añadir se sustituye; los pergaminos de varios conjuros y los libros de conjuros añaden una línea. |
| **In the item** (en el objeto) | Los conjuros del cuadro, cada uno con ✕ para quitarlo. |

El selector y el cuadro trabajan juntos: lo que añades aparece en el cuadro, y lo que escribes aparece en la lista.

Para un libro de conjuros, elegir una clase en la lista también ajusta **Spellbook class** (clase del libro de conjuros), para que los conjuros vayan al libro de esa clase. Escribir otra clase en **Spellbook class** devuelve la lista a **The spellbook class**.

## Libros de conjuros

> **<img width="602" height="1011" alt="image" src="https://github.com/user-attachments/assets/72c44ce0-3b3c-4eca-982f-d722d16f1e17" />**

| Control | Qué hace |
|---|---|
| **Spells** | **The spells I list** (los conjuros que indico, en el cuadro Spells) o **Random spells** (conjuros aleatorios). |
| **Highest spell level** (nivel de conjuro máximo) | Con conjuros aleatorios: de 0 (solo trucos) a 9. |
| **Number of spells** (número de conjuros) | Con conjuros aleatorios: niveles aleatorios de 0 al máximo, sin repetir. Se detiene antes si el libro está lleno (100 páginas). |
| **Spellbook class** | La clase a cuyo libro de conjuros van los conjuros cuando el propietario los aprende (por defecto, Wizard: mago). |

## Objetos psiónicos

> **<img width="600" height="841" alt="image" src="https://github.com/user-attachments/assets/c6b143dd-bc7f-44b1-b2b1-9f2d43657c88" />**

| Control | Qué hace |
|---|---|
| **Capacity** (capacidad; cristal de cognición) | De 1 a 17 puntos de poder, con su precio. **Charged** (cargado): el cristal empieza lleno. |
| **Psicrown** (psicorona) | Una psicorona del SRD, con sus puntos de poder, su nivel de manifestador y su precio, o **Custom: the powers I list** (personalizada: los poderes que indico; escribe los poderes en el cuadro Powers). |

## Objetos concretos y aleatorios

| Control | Qué hace |
|---|---|
| **Item** (objeto) | Escribe para buscar en tus fuentes de objetos un anillo, cetro, bastón u objeto maravilloso. |
| **Category** (categoría) y grado | Para **Random item**: la categoría (poción, anillo, cetro, pergamino, bastón, varita, objeto maravilloso) y **Minor**, **Medium** o **Major** (menor, intermedio, mayor). |
| **Sheds light** (emite luz) | **By Generation settings (random)**, **No** o **Yes**. Solo anillos, cetros, bastones y objetos maravillosos. El aspecto sigue la escuela de magia del objeto. |
| **Intelligent** | **By Generation settings (random)**, **No** o **Yes (roll its mind and powers)** (sí, tirar su mente y sus poderes). Necesita D35E 3.1 o posterior, así que se oculta en Foundry 11. |
| **Cursed** | **No**, **Random curse (SRD tables)**, un tipo de maldición, o una de tus maldiciones personalizadas. Consulta [Objetos malditos](es-Objetos-malditos). |

## Cuántos

**How many** (cuántos) crear (1–20). **Unidentified** (sin identificar): los objetos empiezan sin identificar (los jugadores ven "Potion", "Scroll", "Wand"…).

## Solo DJ

> **<img width="603" height="400" alt="image" src="https://github.com/user-attachments/assets/8fd72efc-470a-44cd-9dc7-48dbd3a5aff1" />**

| Control | Qué hace |
|---|---|
| **Highest potion level** (nivel máximo de pociones) | SRD: nivel 3. Súbelo para que el DJ pueda crear aquí pociones y tatuajes de conjuros y poderes de nivel más alto. La fabricación de los jugadores siempre se queda en nivel 3. |
| **Highest wand level** (nivel máximo de varitas) | SRD: nivel 4. Súbelo de la misma forma para varitas y dorjes. La fabricación de los jugadores siempre se queda en nivel 4. |

Ajusta [Put items in](es-Generador-de-tesoros#put-items-in-poner-los-objetos-en) y pulsa **Generate**.
