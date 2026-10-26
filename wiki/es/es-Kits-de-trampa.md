# Trap Kits y My Traps (kits de trampa y mis trampas; Traps, Poisons, and Diseases)

Un **kit de trampa** (Trap Kit) es un objeto que contiene las piezas de una trampa mecánica ya construida, empaquetada para montarla en otro lugar. Un personaje lo lleva, lo usa para colocar la trampa en una escena, y puede volver a empaquetarla más tarde.

> **[Captura: un kit de trampa en una hoja de personaje]**

## Conseguir un kit de trampa

- **Fabricación**: un personaje lo fabrica con Artesanía (fabricación de trampas) en la pestaña **Trap kits** de la ventana [Crafting](es-Pestañas-de-fabricación#trap-kits-kits-de-trampa). El kit va al inventario del artesano.
- **A partir de un actor de trampa (DJ)**: haz clic derecho en un actor de trampa de la barra lateral Actors y elige **Make Trap Kit** (crear kit de trampa). El kit se crea en la carpeta de objetos **Trap Kits**; arrástralo a un personaje o a un mercader.

Los kits son solo para trampas mecánicas. Las trampas mágicas vienen de los conjuros.

La descripción del kit indica la trampa y su VD, cuánto se tarda en colocarla y su CD de recuperación.

## Colocar una trampa

1. Abre la escena donde va la trampa.
2. En la hoja de personaje, usa el kit de trampa como cualquier objeto.
3. Haz clic donde colocar la trampa. El clic derecho o Esc cancela.
4. Una tarjeta de chat, **Trap Kits**, dice "{who} sets {trap} (CR {cr}) on {scene}" ({quién} coloca {trampa} (VD {vd}) en {escena}) y cuánto tarda.
5. Con **Trap kits: GM approves** (el DJ aprueba) activado, la tarjeta espera al DJ: **Approve** (aprobar) o **Cancel** (cancelar). Si no, ocurre al momento.

Una vez colocada:
- El kit se gasta.
- Se crea una copia del actor de trampa en la carpeta de actores **Placed Traps** (trampas colocadas), con su ficha en la escena.
- Quién ve la ficha depende de **Trap kits: who sees a placed trap** (quién ve una trampa colocada; ver abajo).

Colocarla lleva 1 minuto por VD. La tarjeta muestra el tiempo, pero el tiempo de juego no avanza.

## Recuperar una trampa

Con **Trap kits: placed traps can be recovered** (las trampas colocadas se pueden recuperar) activado, una trampa mecánica activa puede volver a empaquetarse en un kit. Las trampas mágicas no: se inutilizan con Inutilizar mecanismo (Disable Device), y My Traps no ofrece recuperarlas.

- Lleva 1 minuto por VD y una prueba de **Disable Device** (Inutilizar mecanismo) contra la CD de Inutilizar mecanismo de la trampa + 5. Inutilizar mecanismo solo puede usarse con entrenamiento.
- **Éxito**: la trampa vuelve a un kit en el inventario del personaje.
- **Fallo por 1–4**: no pasa nada. La trampa sigue colocada y se puede volver a intentar.
- **Fallo por 5–10**: la trampa queda inutilizada para siempre.
- **Fallo por más de 10**: la trampa se **dispara** sobre el personaje. El DJ recibe una tarjeta **Trap triggered** (trampa disparada) con sus ataques y un botón, **Target {who} and open the trap** (apuntar a {quién} y abrir la trampa), para resolverla.

Los jugadores recuperan una trampa desde [My Traps](#my-traps-mis-trampas). Con **Trap kits: GM approves** activado, el DJ aprueba primero el intento.

## Trampas que el DJ coloca a mano

Una trampa que el DJ arrastra a una escena desde la barra lateral Actors o desde un compendio también es una trampa colocada, con los mismos controles: su estado en el HUD de la ficha y en Placed Traps, el ojo para indicar qué jugadores la conocen, y la recuperación en kit para las trampas mecánicas. Las fichas de trampa que ya estén en una escena se registran cuando el DJ abre la escena. Los jugadores solo la ven en My Traps cuando el DJ los marca como conocedores de ella.

## Estado de una trampa

Cada trampa colocada está **Active** (activa), **Disabled** (inutilizada) o **Triggered** (disparada).

- El DJ lo cambia en la ficha: clic derecho en la ficha y clic en el botón de trampa del HUD de la ficha (pasa de Active a Disabled y a Triggered).
- O en la ventana **Placed Traps** (ver abajo).
- Una trampa disparada sigue **Triggered** hasta que la vuelvas a poner Active, por ejemplo cuando se rearma.

## My Traps (mis trampas)

**Dónde:** **Axecleft's Tools → My Traps**. Jugadores y DJ.

> **[Captura: My Traps]**

### Para los jugadores

Enumera las trampas de esta escena que conoces: las colocaste tú, alguien te las mostró, o las tienes como objetivo.

| Columna | Qué muestra |
|---|---|
| **Trap** (trampa) | El nombre de la trampa (una mira si la tienes como objetivo). |
| **CR** (VD) | Su VD. |
| **Set by** (colocada por) | Quién la colocó. |
| **Status** (estado) | Active, Disabled o Triggered. |
| Botones | **Show its marker to other players** (mostrar su marcador a otros jugadores; icono de compartir), y **Pack it back into a kit (Disable Device DC {dc})** (volver a empaquetarla en un kit, CD de Inutilizar mecanismo {cd}; icono de caja) para las trampas activas. |

- **Recuperar**: pulsa la caja junto a la trampa. Si tienes más de un personaje, se te pregunta cuál.
- **Compartir un marcador** (solo con **GM only, plus a marker**): pulsa el icono de compartir, marca a los jugadores bajo **Show the marker to:** (mostrar el marcador a) y pulsa **Share** (compartir). Verán el marcador de la trampa y les aparecerá en su My Traps.
- Una trampa que puedes ver también se puede marcar como objetivo (T) para que aparezca aquí.

### Para el DJ: Placed Traps

La ventana del DJ se llama **Placed Traps** (trampas colocadas). Enumera las trampas colocadas con kits en esta escena.

- **Status** (estado): cámbialo desde la lista.
- **Ojo**: qué jugadores conocen la trampa, por ejemplo tras una prueba de Buscar con éxito. Márcalos y pulsa **Save** (guardar). Los jugadores solo ven las trampas que conocen.
- **Show on the scene** (mostrar en la escena): centra la vista en la ficha de la trampa.

## Ajustes

En **Configure Settings → Axecleft's Traps, Poisons, and Diseases**.

| Ajuste | Por defecto | Qué hace |
|---|---|---|
| **Trap kits: GM approves** (el DJ aprueba) | Activado | Un jugador que coloca o recupera una trampa envía una solicitud que el DJ aprueba en su tarjeta de chat. Desactivado: ocurre al momento. |
| **Trap kits: setting takes time** (colocar lleva tiempo) | Activado | Colocar lleva 1 minuto por VD (se muestra en la tarjeta; el tiempo de juego no avanza). Desactivado: las trampas se colocan al momento. Recuperar siempre lleva 1 minuto por VD. |
| **Trap kits: who sees a placed trap** (quién ve una trampa colocada) | GM only, plus a marker for the player who set it (solo el DJ, más un marcador para el jugador que la colocó) | **GM only** (solo el DJ): una ficha oculta. **Everyone** (todos): una ficha visible (el DJ decide si las criaturas la detectan). **GM only, plus a marker**: una ficha oculta, y el jugador que la colocó ve un marcador que puede compartir (My Traps). |
| **Trap kits: placed traps can be recovered** (las trampas colocadas se pueden recuperar) | Activado | Desactivado: una vez colocada, la trampa se queda hasta que se dispare o se inutilice. |
| **Trap kits: compendiums for crafting** (compendios para la fabricación) | En blanco | Los compendios de actores cuyas trampas mecánicas se pueden fabricar como kits, separados por comas (por ejemplo `traps-and-poisons.traps`). En blanco: todos los compendios con actores de trampa. |
| **Trap kits: crafting progress** (progreso de la fabricación) | Silver pieces (SRD) (piezas de plata) | La moneda en la que se cuenta el progreso semanal de Artesanía (fabricación de trampas): la prueba × la CD en **Copper pieces** (piezas de cobre, 10 veces más lento), **Silver pieces** (SRD), **Gold pieces** (piezas de oro, 10 veces más rápido) o **Platinum pieces** (piezas de platino, 100 veces más rápido). La plata del SRD hace que las trampas caras lleven años: un Wide-Mouth Spiked Pit Trap (foso con pinchos de boca ancha; 7.200 po, CD 25) lleva 288 semanas a un artesano cuya prueba es 10. |
