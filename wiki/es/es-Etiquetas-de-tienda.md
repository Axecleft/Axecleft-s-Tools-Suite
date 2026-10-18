# Shop Tags (etiquetas de tienda)

**Dónde:** **Axecleft's Tools → Shop Tags**, o la pestaña **Shop Tags** del Merchant Generator.

Reparte los objetos de tus compendios entre las tiendas que los venden. Un objeto ya lo venden las tiendas que tienen su propio tipo (un tomo mágico es un objeto maravilloso, así que lo venden las tiendas de magia). Una **etiqueta de tienda** permite que otras tiendas lo vendan también: etiqueta el tomo *Scroll* y los escribas lo tendrán; etiquétalo *Book* y lo tendrán los libreros.

> **<img width="599" height="535" alt="image" src="https://github.com/user-attachments/assets/38eb2460-4af8-42ff-8db7-f6a3ae13c2a2" />**

## Cómo funcionan las etiquetas de tienda

Las etiquetas de tienda son etiquetas de objeto normales de D35E, escritas como `Shop: Scroll`, `Shop: Book`, etc. Esta herramienta las escribe por ti, y también puedes añadirlas o quitarlas a mano en las etiquetas de un objeto.

- Las **etiquetas de categoría** añaden el objeto a esa categoría además de la suya: `Shop: Gem` (gema), `Shop: Art object` (objeto de arte), `Shop: Tools and gear` (herramientas y equipo), `Shop: Alchemical item` (objeto alquímico), `Shop: Poison` (veneno), `Shop: Weapon` (arma), `Shop: Armor` (armadura), `Shop: Shield` (escudo), `Shop: Ammunition` (munición), `Shop: Masterwork weapon` (arma de gran calidad), `Shop: Masterwork armor` (armadura de gran calidad), `Shop: Magic weapon` (arma mágica), `Shop: Magic armor` (armadura mágica), `Shop: Potion` (poción), `Shop: Scroll` (pergamino), `Shop: Wand` (varita), `Shop: Ring` (anillo), `Shop: Rod` (cetro), `Shop: Staff` (bastón), `Shop: Wondrous item` (objeto maravilloso).
- Las **etiquetas de especialidad** eligen los objetos maravillosos de una tienda especializada: **Book** (libreros), **Clothing** (sastres), **Jewelry** (joyeros). Tus propios [tipos de tienda](es-Generador-de-mercaderes#pestaña-shop-types) también pueden usarlas.
- Las etiquetas de tienda se escriben siempre en inglés (`Shop: Scroll`), sea cual sea el idioma del mundo, para que todos los mundos las lean.

## Etiquetar un compendio

> **<img width="597" height="822" alt="image" src="https://github.com/user-attachments/assets/b5ce8d90-dd1b-4e0d-a5db-2000df7d07e1" />**

1. **Compendium** (compendio): elige un compendio de objetos y pulsa **Scan** (analizar).
   - Las sugerencias salen de los nombres de los objetos y de las carpetas: una carpeta llamada "Books" sugiere Scroll y Book.
   - Si el compendio no está entre tus fuentes de objetos, una nota lo indica, con un botón para añadirlo.
2. **Show** (mostrar): All items (todos los objetos), Items with Shop tags (con etiquetas de tienda), Items without Shop tags (sin etiquetas de tienda), Rows with new suggestions (filas con sugerencias nuevas) o Ticked rows (filas marcadas).
3. **Filter by name, folder or tag** (filtrar por nombre, carpeta o etiqueta) para reducir las filas.
4. Cada fila muestra el **Item** (objeto), cómo se vende ahora en **Sold as** (vendido como) y sus **Shop tags**. Edita directamente las etiquetas de una fila, separadas por comas.
5. Marca las filas que cambiar. La casilla del encabezado marca o desmarca todas las filas mostradas.
6. Para cambiar muchas filas a la vez:
   - **Add** (añadir): añade una etiqueta a cada fila marcada.
   - **Remove** (quitar): quita una etiqueta de cada fila marcada.
   - **Clear** (vaciar): vacía las etiquetas de cada fila marcada.
   - **Reset** (restablecer): vuelve a las etiquetas actuales más las sugerencias.
7. Pulsa **Write Tags to Ticked Items** (escribir las etiquetas en los objetos marcados). A una fila marcada sin etiquetas se le quitan sus etiquetas de tienda.

## Notas

- Solo los compendios de tus [fuentes de objetos](es-Generador-de-mercaderes#pestaña-item-sources) abastecen a los mercaderes.
- Los compendios bloqueados se desbloquean para escribir y se vuelven a bloquear.
- Escribe las etiquetas en **tus propios** compendios. Los compendios del sistema y de los módulos se sustituyen cuando se actualizan, y las etiquetas se perderían.
