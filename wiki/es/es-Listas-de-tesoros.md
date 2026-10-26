# Las listas de tesoros y la pestaña Lists

Tus propias entradas para los módulos de Axecleft viven en un diario llamado **Axecleft's Treasure Lists**: gemas, objetos de arte, materiales y maldiciones personalizados, correcciones de precio, y las entradas integradas que hayas desactivado. Cada lista es una página con una tabla. Edita las tablas directamente en el diario, o usa la pestaña **Lists** (listas) del Treasure Generator.

> **<img width="964" height="805" alt="image" src="https://github.com/user-attachments/assets/357aa51d-aae2-4ce5-af94-2646a7da8357" />**

## Las páginas

| Página | De | Columnas |
|---|---|---|
| **Custom Gems** (gemas personalizadas) | Gemstones | Gem, Appraises As, Base Value (gp), Image, Description |
| **Custom Art & Jewelry** (arte y joyas personalizados) | Gemstones | Object, Construction, Art or Jewelry, Weight (lb.), Image, Description |
| **Custom Materials** (materiales personalizados) | Gemstones | Material, Used For, Min Value Level, Max Value Level, Name As |
| **Custom Embellishment Gems** (gemas de adorno personalizadas) | Gemstones | Gem, Min Value Level, Max Value Level |
| **Custom Curses** (maldiciones personalizadas) | Treasure Generator | Curse, Table, Weight, Items, What it does, Penalties (buff). Consulta [Objetos malditos](es-Objetos-malditos#maldiciones-personalizadas). |
| **Price Corrections** (correcciones de precio) | Treasure Generator | Item, Compendium, Price (gp), Note |
| **Disabled Entries (module)** (entradas desactivadas) | cada módulo | Name, List |

### Custom Gems

- **Appraises As** (se tasa como) es el nombre que se muestra antes de tasar la gema: un *Dragon's Eye Opal* se tasa como *Opal*.
- **Base Value** (valor base) es uno de los valores de gema del SRD: 10, 50, 100, 500, 1.000 o 5.000.
- **Image** (imagen) y **Description** (descripción) son opcionales.

### Custom Art & Jewelry

- **Construction** (construcción) decide de qué materiales puede hacerse el objeto:
  - **Molded** (moldeado): metales, vidrio, cerámica;
  - **Carved** (tallado): madera, hueso, marfil, piedra;
  - **Clothing** (ropa): tela, piel, cuero;
  - **Book** (libro): papel, cuero, seda.
- **Art or Jewelry** (arte o joya) decide en qué pestaña aparece.

### Custom Materials

- **Used For** (usado para) enumera las construcciones a las que conviene (Molded, Carved, Clothing, Book), separadas por comas.
- Las tiradas aleatorias solo usan un material a valores de arte entre su **Min** y su **Max Value Level** (nivel de valor, de 1 a 12).
- **Name As** (nombrar como) es opcional: un material "Wolf" nombrado como "Wolf Fur" da "Wolf Fur Cloak".

### Custom Embellishment Gems

Gemas que pueden adornar el arte y las joyas ("set with ruby", "inlaid with jade"). Las tiradas aleatorias las usan a valores de arte entre Min y Max Value Level (1 a 12).

### Price Corrections

Corrige el precio de objetos de compendio sin editar el compendio.
- **Compendium** es el identificador del compendio, por ejemplo `D35E.magicitems`. Déjalo en blanco para cualquier compendio.
- Las correcciones se aplican al tesoro generado y a las existencias de los mercaderes.
- Armory y Curios incluyen sus propias correcciones para precios erróneos conocidos de los compendios de D35E; aparecen como filas integradas.

### Disabled Entries

Entradas integradas que no deben usarse nunca, una página por módulo. **List** es la lista a la que pertenecen (por ejemplo `gems`, `curses`), o `any`. Una entrada desactivada nunca se tira ni se ofrece.

## La pestaña Lists

**Dónde:** Treasure Generator → pestaña **Lists**.

> **<img width="595" height="1062" alt="image" src="https://github.com/user-attachments/assets/3c60ee04-825a-4a85-872b-b269ce484531" />**

- **List** (lista): elige una lista. Muestra cuántas entradas has añadido y cuántas integradas has desactivado.
- **Add to List** (añadir a la lista): un formulario con las columnas de esa lista. Rellénalo y pulsa **Add to [lista]**.
- **Your entries** (tus entradas): tus filas, cada una con **Remove** (quitar). Las listas largas muestran las primeras entradas, "…and n more (see the journal)".
- **Switch off built-in entries** (desactivar entradas integradas): escribe el nombre de una entrada integrada, elige **This list** (esta lista) o **Every [module] list** (todas las listas de [módulo]), y pulsa **Switch Off** (desactivar). Las entradas desactivadas van a la página "Disabled Entries".
- **Open Lists Journal** (abrir el diario de listas): abre el diario.

## La biblioteca compartida

Cada cambio se guarda también en un archivo de biblioteca, **Data/axecleft-treasure/treasure-lists.json**, en tu carpeta Data de Foundry. Las actualizaciones de los módulos nunca lo tocan, y todos los mundos del servidor lo cargan al iniciarse, así que tus listas sobreviven a las actualizaciones y te acompañan de un mundo a otro. La carga solo añade filas (reconocidas por su nombre); nunca borra.

- **Save to Library** / **Load from Library** (guardar en / cargar desde la biblioteca): guardar o cargar a mano.
- **Export** / **Import** (exportar / importar; *Another Foundry server*, otro servidor de Foundry): Export descarga todas tus listas, de cada módulo activo, como un archivo. Import fusiona un archivo así (solo añade entradas). Los archivos exportados por Gemstones 1.14 también funcionan.

Ajustes de los módulos (**Configure Settings**):
- **Shared treasure lists library** (biblioteca compartida de listas de tesoros): **Automatic** (guarda en cada cambio y carga al iniciar) o **Manual** (solo con los botones Save / Load).
- **Shared library folder** (carpeta de la biblioteca compartida): la carpeta dentro de tu carpeta Data de Foundry que contiene `treasure-lists.json`.
