# Token Loot (botín de fichas)

**Dónde:** Treasure Generator → pestaña **Token Loot**, o el botón del **saco** en la barra de herramientas de fichas (*Roll Loot for Selected Tokens*, tirar el botín de las fichas seleccionadas).

Da a cada ficha de PNJ su propio tesoro, tirado en la tabla Tesoro del SRD según su **Challenge Rating** (valor de desafío, VD). El SRD dice que el tesoro de una criatura solitaria usa su VD como nivel de encuentro. La tirada se ajusta con el ajuste **Treasure** (tesoro) de la hoja del PNJ: None, Standard, Double, Triple de D35E (ninguno, estándar, doble, triple), o un % para monedas, bienes y objetos.

Los objetos van al inventario de esa ficha con su valor ya tirado, y las monedas a su bolsa, listos para saquear.
- Una ficha **no vinculada** guarda su botín en esa única criatura.
- El botín de una ficha **vinculada** va a su actor.

> **<img width="985" height="842" alt="image" src="https://github.com/user-attachments/assets/86e6352d-4ca6-404f-b7c7-0ff61f301662" />**

## Fichas seleccionadas

Selecciona fichas de PNJ en la escena y pulsa **Refresh** (actualizar). La tabla enumera cada ficha con:

- **Token** (ficha): su nombre, y "(unlinked)" (no vinculada) para las fichas no vinculadas.
- **CR** (VD): el VD con el que tira. Las trampas muestran su parte, por ejemplo "trap, ×¼".
- **Treasure** (tesoro): el ajuste Treasure de su hoja en porcentajes, por ejemplo "coins 100%, goods 100%, items 100%", o "none". Una ficha que ya tiene botín muestra **has loot** (tiene botín).

## Tirar

- **Roll** (tirar): marca **Coins**, **Goods** e **Items** para elegir qué partes tirar.
- **Replace loot rolled before** (reemplazar el botín tirado antes): recupera los objetos y monedas que el generador dio a la ficha la última vez, y vuelve a tirar.
- **Trap loot** (botín de trampas): las trampas también pueden tener botín incidental (los huesos y pertenencias de víctimas anteriores). Elige **¼ of a creature's treasure** (¼ del tesoro de una criatura) o **The full treasure for its CR** (el tesoro completo de su VD). Selecciona fichas de trampa y tira. Las trampas nunca reciben botín automáticamente.

Botones:
- **Roll Loot for Selected Tokens** (tirar el botín de las fichas seleccionadas): tira el botín de cada ficha seleccionada.
- **Clear Loot** (quitar el botín): quita solo lo que el Treasure Generator puso en las fichas seleccionadas (sus objetos marcados y las monedas que añadió). Lo que hayas dado tú a la ficha se queda.
- **Refresh**: vuelve a leer la selección.

## Botín automático

- **Roll loot when an unlinked NPC token is placed on a scene** (tirar el botín cuando se coloca una ficha de PNJ no vinculada en una escena): cada nueva ficha de PNJ no vinculada recibe su botín en cuanto la colocas.
- **Hidden tokens too** (también fichas ocultas): incluye las fichas colocadas ocultas.
- **Post a chat card (GM only) for each token's loot** (publicar una tarjeta de chat, solo DJ, con el botín de cada ficha): una tarjeta susurrada que enumera el botín de cada ficha.

El botín automático solo se aplica a fichas de PNJ no vinculadas. Nunca se aplica a trampas, personajes, fichas que pertenezcan a un jugador ni a una ficha que ya tenga botín (una ficha copiada conserva el botín con el que se copió). Estos ajustes se guardan para el mundo.

## Reglas usadas

| VD | Se tira como |
|---|---|
| Menos de 1 | EL 1, con la probabilidad de cada parte ajustada por el VD (un VD ½ tira la mitad de las veces) |
| 1–20 | Ese EL |
| 21–30 | EL 21–30: la fila de EL 20 más objetos mayores adicionales, algunos épicos mientras **Epic items** esté activado |
| Más de 30 | EL 30 |

- **Los PNJ con niveles de clase** llevan, según el SRD, equipo de PNJ en lugar de tesoro. Pon su Treasure en *None* si los equipas a mano.
- Todo lo demás sigue la pestaña [Treasure by Level](es-Tesoro-por-nivel): cómo se pagan las monedas, y los [ajustes de generación](es-Ajustes-de-generación) para la luz, los venenos, las maldiciones y el resto.
