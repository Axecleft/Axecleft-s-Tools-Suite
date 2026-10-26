# Merchant Generator (generador de mercaderes)

**Dónde:** **Axecleft's Tools → Merchant Generator**.

Crea, abastece y reabastece mercaderes de D35E. Un mercader es un actor con la hoja de mercader de D35E, con unas existencias de objetos y una bolsa. Los jugadores compran y venden desde su ficha.

La ventana tiene cinco pestañas: **Merchant** (mercader), **Shop Types** (tipos de tienda), **People** (gente), **Item Sources** (fuentes de objetos) y **Shop Tags** (etiquetas de tienda).

> **<img width="1004" height="982" alt="image" src="https://github.com/user-attachments/assets/2ce6e875-666f-41b8-83cd-452722d8bc28" />**

## Pestaña Merchant

### La tienda

| Control | Qué hace |
|---|---|
| **Shop** (tienda) | El tipo de tienda: los tipos integrados, **Your shop types** (tus tipos de tienda; consulta [Shop Types](#pestaña-shop-types)) y los tipos añadidos por otros módulos. Una línea debajo muestra qué módulos y compendios aportan sus existencias. |
| **Settlement** (asentamiento) | El tamaño del asentamiento, que fija su límite en po, cuántos objetos distintos, la bolsa del mercader y las categorías de magia disponibles. Consulta la tabla de abajo. |
| **GP limit** (límite en po) | **Nothing priced above the settlement's gp limit** (nada por encima del límite en po del asentamiento; SRD). Desmárcalo para permitir cualquier cosa. |
| **Settlement character** (carácter del asentamiento) | Haz clic para desplegar. Marca los rasgos que encajen con el lugar (ver abajo). |
| **Different items** (objetos distintos) | Cuántos objetos distintos tener en existencias, como fórmula de dados. En blanco se usa la del asentamiento (la mitad en un reabastecimiento). |
| **Unappraised goods** (bienes sin tasar) | El % de gemas, arte y joyas que se dejan sin identificar, vendidos a su valor base (10 % por defecto). |

| Settlement | Límite en po | Objetos distintos | Bolsa | Categorías de magia |
|---|---|---|---|---|
| Thorp (caserío) | 40 po | 1d4+1 | 1d4×10 po | menor |
| Hamlet (aldea) | 100 po | 1d6+2 | 2d6×10 po | menor |
| Village (pueblo) | 200 po | 2d4+2 | 2d4×25 po | menor |
| Small town (villa pequeña) | 800 po | 2d6+3 | 2d4×100 po | menor |
| Large town (villa grande) | 3.000 po | 3d6+4 | 3d6×100 po | menor, intermedio |
| Small city (ciudad pequeña) | 15.000 po | 4d6+5 | 2d4×1.000 po | menor, intermedio |
| Large city (ciudad grande) | 40.000 po | 5d6+6 | 4d6×1.000 po | menor, intermedio, mayor |
| Metropolis (metrópolis) | 100.000 po | 6d6+8 | 6d6×1.000 po | menor, intermedio, mayor |

Rasgos del **Settlement character** (marca los que encajen):

| Rasgo | Efecto |
|---|---|
| Port / harbor (puerto) | Más bienes exóticos, gemas y arte |
| Mining town (pueblo minero) | Gemas, armas y armaduras |
| Frontier / outpost (frontera / puesto avanzado) | Equipo y armas, poca magia, precios +10 % |
| Trade hub / crossroads (centro comercial / cruce de caminos) | La mitad más de existencias, precios −5 % |
| Holy site / temple city (lugar sagrado / ciudad templo) | Pociones, pergaminos, agua bendita |
| Arcane center (centro arcano) | El doble de magia, límite en po doble |
| Wealthy (rico) | Arte y gemas, límite en po ×1,5, precios +10 % |
| Poor / war-torn (pobre / asolado por la guerra) | Menos existencias, límite en po a la mitad, precios +20 % |
| Remote / isolated (remoto / aislado) | Menos existencias, precios +25 % |
| Lawless / thieves' haven (sin ley / refugio de ladrones) | El doble de bienes sin tasar y venenos, precios −10 % |
| Epic campaign (campaña épica) | Objetos épicos en existencias en cualquier asentamiento (más o menos 1 de cada 10 objetos mágicos, por encima del límite en po), todas las categorías, límite en po ×10. Necesita **Epic items** activado en los [ajustes de generación](es-Ajustes-de-generación#campaña). |

> **<img width="1356" height="978" alt="merchant gen" src="https://github.com/user-attachments/assets/6e7b7f4c-ed9f-4af4-a705-af468be9934c" />**

### Precios y bolsa

Haz clic para desplegar.
- **Sells at** (vende a): % del valor que cobra el mercader (100 por defecto). El carácter del asentamiento puede ajustarlo.
- **Buys at** (compra a): % del valor que paga el mercader (SRD: la mitad, o sea 50).
- **Purse (gp)** (bolsa, po): una fórmula de dados. En blanco se usa la del asentamiento. Se paga en las monedas de este mundo (consulta [Monedas](es-Tesoro-por-nivel#monedas)).

### Merchant (mercader)

**Make** (crear):
- **A new merchant** (un mercader nuevo): crea un actor en la carpeta de actores **Merchants**, con la hoja de mercader de D35E y permisos en None (ninguno). Ajusta los permisos de los jugadores en la hoja para que puedan comerciar.
- **Selected tokens** (fichas seleccionadas): abastece las fichas de mercader que hayas seleccionado en la escena.
- **A chosen actor or token** (un actor o ficha elegido): elige uno, o arrastra un actor desde la barra lateral Actors hasta el cuadro.

Para un mercader nuevo:

| Control | Qué hace |
|---|---|
| **Race** / **Sex** (raza / sexo) | O **Random**. |
| **Name** (nombre) | Escribe uno, o pulsa el dado para **Roll a name** (tirar un nombre). En blanco: un nombre y un nombre de tienda aleatorios. |
| **Actor name** (nombre del actor) | **Merchant (Shop)**, **Merchant** o **Shop** (mercader, tienda), por ejemplo "Garrick (The Silver Anvil)". |
| **Image** (imagen) | Un retrato o imagen de ficha (**Browse**, examinar). En blanco: un retrato aleatorio de tu carpeta de retratos que encaje con la raza y el sexo (consulta [People](#pestaña-people)). |

Para mercaderes existentes:
- **Stock** (existencias): **Replace the old stock and purse** (reemplazar las existencias y la bolsa anteriores) o **Restock: keep the stock, add more** (reabastecer: conservar las existencias y añadir más). Reemplazar solo quita armas, equipo, consumibles y botín; las dotes, clases y demás objetos se conservan.
- **Shop settings** (ajustes de la tienda): **Use each merchant's own saved shop, settlement and traits** (usar la tienda, el asentamiento y los rasgos guardados de cada mercader). Cada mercader recuerda cómo se creó, así que reabastecer varios a la vez conserva la tienda de cada uno.

Pulsa **Generate Merchant** (generar mercader).

## Pestaña Shop Types

> **<img width="603" height="860" alt="image" src="https://github.com/user-attachments/assets/e65118e3-ecfb-4ad6-8d88-45d99c4697d9" />**

Crea tus propios tipos de tienda.
- **New shop type** (nuevo tipo de tienda) o **Edit** (editar): ponle nombre, por ejemplo *Tallista de hueso de dragón*, y elige un tipo en **Start from** (partir de).
- **What it sells** (qué vende): el número de cada categoría es su parte de las existencias (0 o en blanco: nunca se vende).
- Para tiendas de gemas y arte: **Any** (cualquiera), **Gems and art** (gemas y arte), **Art objects only** (solo objetos de arte), **Jewelry only** (solo joyas), y **Art made by** (arte hecho por): Molded / cast (moldeado / fundido: metal, vidrio), Carved (tallado: madera, hueso, piedra), Cloth, fur and hide (tela, piel y cuero) o Books and documents (libros y documentos).
- Para objetos maravillosos: opcionalmente **Only those tagged "Shop: …"** (solo los etiquetados "Shop: …"; consulta [Shop Tags](es-Etiquetas-de-tienda)).

Pulsa **Save Shop Type** (guardar tipo de tienda) o **Delete** (borrar). Los tipos de tienda se guardan en el mundo.

Tipos de tienda integrados: General store (tienda general), Adventurer's outfitter (proveedor de aventureros), Trading post (puesto comercial), Blacksmith (herrero), Weaponsmith (armero), Armorer (forjador de armaduras), Bowyer / fletcher (arquero / flechero), Alchemist (alquimista), Herbalist / apothecary (herbolario / boticario), Jeweler (joyero), Gem cutter (tallador de gemas), Gold- and silversmith (orfebre), Carver / sculptor (tallista / escultor), Clothier / furrier (sastre / peletero), Art dealer / curio shop (marchante de arte / tienda de curiosidades), Bookseller (librero), Scribe (escriba), Temple (templo), Wandwright / staff maker (fabricante de varitas y bastones), Magic shop (tienda de magia), Exotic goods (bienes exóticos), Fence / pawnbroker (perista / prestamista), Black market (mercado negro).

## Pestaña People

> **<img width="601" height="695" alt="image" src="https://github.com/user-attachments/assets/f984efa5-1acf-46f8-b161-3093a1387ec1" />**

**Names** (nombres): añade tus propios nombres, uno por línea o separados por comas.
- **Names for** (nombres para): una raza, o **Any race** (cualquier raza: nombres para todas las razas).
- Listas: **Male first names** (nombres masculinos), **Female first names** (nombres femeninos), **First names (either)** (nombres de cualquier sexo), **Surnames** (apellidos), **Shop names (any shop)** (nombres de tienda, cualquier tienda).
- **Random names use** (los nombres aleatorios usan): **Built-in names and mine** (los integrados y los míos), **Only my names** (solo los míos) u **Only built-in names** (solo los integrados).
- **Save Names** (guardar nombres) los guarda para el mundo. **Show Examples** (mostrar ejemplos) tira unos cuantos.

**Portraits** (retratos):
- **Portrait folder** (carpeta de retratos): una carpeta de retratos. Un mercader nuevo sin imagen recibe uno al azar de esta carpeta y sus subcarpetas que encaje con su raza y sexo.
- Pon la raza y el sexo en los nombres de las carpetas o archivos, en inglés, por ejemplo `dwarf/female/smith-01.webp` o `elf_male_3.png`. Funcionan plurales como dwarves, elves y women, y también m o f.
- Las imágenes sin raza ni sexo en su ruta valen para cualquiera. Una imagen con el nombre de otra raza u otro sexo nunca se usa.
- Pulsa **Save and Scan Folder** (guardar y analizar la carpeta).

## Pestaña Item Sources

> **<img width="600" height="657" alt="image" src="https://github.com/user-attachments/assets/516ecd08-837b-4c62-9057-3e22afff5ac5" />**

Además de las listas del SRD y de los módulos de Axecleft, los mercaderes (y el tesoro, donde ningún módulo cubre una categoría) toman objetos de tus **Item compendiums** (compendios de objetos). Cada objeto se clasifica según sus propios datos:
- armas, armaduras y escudos estándar, de gran calidad o mágicos;
- munición, equipo y objetos alquímicos;
- pociones, pergaminos, varitas, anillos, cetros, bastones y objetos maravillosos.

Los objetos mágicos se clasifican por precio: menores hasta 4.000 po, intermedios hasta 25.000 po, mayores por encima.

**Compendiums** (compendios):
- **Automatic (matching names)** (automático, nombres coincidentes): los compendios de objetos de D35E, y cualquier compendio con Gear, Equipment, Weapons, Ammo, Armor, Shields o Magic Items en su nombre. También Poison Consumables de Traps, Poisons, and Diseases. Los compendios traducidos se reconocen por su nombre en inglés.
- **My choice (tick below)** (mi elección, marca abajo): marca exactamente los compendios que usar. Cada uno muestra su tipo (System, Module o World: sistema, módulo o mundo) y cuántos objetos tiene.

Pulsa **Save and Rescan** (guardar y volver a analizar) después de cambiarlos, o **Rescan** después de añadir objetos.

**Price corrections** (correcciones de precio): algunos objetos de compendio tienen precios erróneos, por ejemplo varias armas mágicas específicas de D35E. Las correcciones de los módulos de Axecleft, y las tuyas en la página **Price Corrections** de las [listas de tesoros](es-Listas-de-tesoros), los corrigen para el tesoro y las existencias de los mercaderes sin cambiar el compendio.
- **Price Check** (comprobación de precios): enumera cada corrección, con el precio actual del compendio, el precio corregido y si el compendio aún necesita arreglo.
- **Export CSV** (exportar CSV): descarga esa lista como hoja de cálculo, por ejemplo para enviarla a quien mantiene un compendio.

## Pestaña Shop Tags

Consulta [Shop Tags](es-Etiquetas-de-tienda).
