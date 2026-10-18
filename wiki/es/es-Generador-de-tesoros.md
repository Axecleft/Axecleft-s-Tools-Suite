# La ventana Treasure Generator (generador de tesoros)

Ábrela desde **Axecleft's Tools → Treasure Generator** en la barra de herramientas izquierda, o con el botón **Treasure** en la parte superior de la barra lateral **Items**.

> **<img width="999" height="713" alt="image" src="https://github.com/user-attachments/assets/9c18e923-18f8-4b33-9628-8f200a2acf70" />**

## Pestañas

Cada módulo añade sus propias pestañas, así que solo ves las de los módulos que tienes:

| Pestaña | De | Qué crea |
|---|---|---|
| **Gems**, **Art Objects**, **Jewelry** (gemas, objetos de arte, joyas) | Gemstones | Gemas, objetos de arte y joyas, elegidos o tirados. Consulta [Gemas, arte y joyas](es-Gemas-arte-y-joyas). |
| **Forge** (forja) | Armory | Armas, armaduras, escudos y munición hechos a mano. Consulta [Forja](es-Forja). |
| **Curios** | Curios | Pociones, pergaminos, varitas, anillos, cetros, bastones, objetos maravillosos y psiónicos hechos a mano. Consulta [Taller de Curios](es-Taller-de-Curios). |
| **Treasure by Level** (tesoro por nivel) | integrada | La tabla Tesoro del SRD para un nivel de encuentro. Consulta [Tesoro por nivel](es-Tesoro-por-nivel). |
| **Token Loot** (botín de fichas) | integrada | El tesoro propio de cada ficha de PNJ según su VD. Consulta [Botín de fichas](es-Botín-de-fichas). |
| **Lists** (listas) | integrada | Tus gemas, materiales, maldiciones, correcciones de precio personalizados, y más. Consulta [Listas de tesoros](es-Listas-de-tesoros). |

Algunos módulos también añaden botones sobre las pestañas.

## Put items in (poner los objetos en)

Cada pestaña que crea tesoro termina con el cuadro **Put items in**, que decide adónde van los resultados:

| Destino | Qué ocurre |
|---|---|
| **Selected tokens (each gets its own roll)** (fichas seleccionadas, cada una con su propia tirada) | Selecciona antes las fichas en la escena. Cada ficha seleccionada recibe su propio tesoro, tirado por separado. |
| **A chosen actor or token** (un actor o ficha elegido) | Elige un actor o una ficha de la lista, o arrastra un actor desde la barra lateral Actors hasta el cuadro. |
| **Items sidebar ("Generated Treasure" folder)** (barra lateral Items, carpeta "Generated Treasure") | Los objetos se crean en la barra lateral Items, en una carpeta llamada Generated Treasure. |
| **Chat card only (create items later)** (solo tarjeta de chat, crear los objetos después) | Aún no se crea nada. La tarjeta de chat enumera los resultados, con un botón **Create Item** (crear objeto) para cada uno. |

**Tasación:**
- Los objetos que se dan a un actor o ficha van directamente a su inventario con su valor real ya tirado, listos para una hoja de botín. Las monedas van a su bolsa. Una ficha no vinculada guarda su botín en esa única criatura.
- Los objetos enviados a la barra lateral Items o a la tarjeta de chat empiezan **sin tasar**. Su valor real se tira cuando se sueltan sobre un personaje.

> **<img width="291" height="405" alt="image" src="https://github.com/user-attachments/assets/4dd00f99-deab-485f-bbe3-61558d228082" />**

## Generate y la tarjeta de chat

Pulsa **Generate** (generar). Los resultados se publican en una tarjeta de chat **susurrada al DJ**. Muestra cada objeto con un breve resumen (precio, calidad, maldición, etc.) y enlaces a los objetos creados. Con **Chat card only**, cada línea tiene un botón **Create Item**; solo lo ve el DJ.

Si una parte del tesoro necesita un módulo que no tienes, por ejemplo armas mágicas sin Armory, la tarjeta de chat la enumera para que la resuelvas a mano.

## Tus elecciones se guardan

La ventana recuerda tus últimas elecciones en cada pestaña para la próxima vez. Los ajustes de generación y de monedas se guardan para el mundo, así que todos los DJ del mundo los comparten.
