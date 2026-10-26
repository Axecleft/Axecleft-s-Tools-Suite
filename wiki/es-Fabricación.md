# Crafting (fabricación)

**Dónde:** **Axecleft's Tools → Crafting**. Los jugadores lo ven en el mismo grupo de la barra de herramientas mientras **Players may craft** (los jugadores pueden fabricar) esté activado.

Los personajes fabrican objetos según las reglas del SRD: objetos mágicos con dotes de creación de objetos, y objetos comunes con Artesanía. Un jugador rellena una solicitud y el DJ la aprueba. No se gasta ni se crea nada hasta que el DJ la aprueba.

Crafting viene con Armory, Curios y Traps. Cada módulo añade sus propias pestañas a la ventana. Consulta [Pestañas de fabricación](es-Pestañas-de-fabricación) para cada pestaña.

> **[Captura: la ventana Crafting]**

## La ventana

| Control | Qué hace |
|---|---|
| **Crafter** (artesano) | El personaje que fabrica el objeto. Los jugadores eligen entre los personajes que poseen; el DJ entre todos los personajes y PNJ. |
| Pestañas | Una por tipo de objeto: armas y armaduras, armas mágicas específicas, pergaminos y pociones, objetos maravillosos, alquimia, objetos psiónicos, kits de trampa. Consulta [Pestañas de fabricación](es-Pestañas-de-fabricación). |
| Resumen | Qué necesita el objeto y si el artesano lo tiene, marcado con ✔ o ✘: la dote, el nivel de lanzador, cada conjuro, el alineamiento, la clase, el nivel, los rangos de habilidad, las po y los PX. Después el coste, el tiempo y las pruebas. |
| **Send for approval** / **Send to the GM** (enviar para aprobación / enviar al DJ) | El botón de un jugador. La solicitud llega al DJ como tarjeta de chat. |
| **Approve and craft now** (aprobar y fabricar ahora) | El botón del DJ. Se salta el paso de la solicitud. |
| **Update the request** (actualizar la solicitud) | Se muestra mientras editas una solicitud desde su tarjeta. |

Notas sobre la ventana:
- Como DJ puedes pasar por alto cualquier requisito. La tarjeta de la solicitud muestra qué falta.
- Un jugador puede enviar una solicitud con requisitos marcados con ✘. El DJ puede aprobarla igualmente, pero pregunta antes.
- El tiempo se muestra para el DJ. No se impone, y el tiempo de juego no avanza.

## Requisitos

### Conjuros

Cada conjuro que necesita el objeto debe aportarse cada día de trabajo. El resumen muestra cómo lo aporta el artesano:

- preparado, o conocido (lanzadores espontáneos);
- en el libro de conjuros pero sin preparar: prepáralo cada día de trabajo;
- **A helping caster** (un lanzador que ayuda): otro lanzador lo aporta cada día;
- **A scroll or power stone** (un pergamino o una piedra de poder): un pergamino por día de trabajo, que se gasta;
- **A wand or dorje** (una varita o un dorje): una carga por día de trabajo;
- **A staff or psicrown** (un bastón o una psicorona): las cargas del bastón cada día de trabajo.

Elige la fuente en el desplegable del conjuro cuando el artesano no lo conoce. Los pergaminos, varitas, bastones y psicoronas salen del inventario del artesano.

### Nivel de lanzador, dote y lo demás

- **Dote**: la dote de creación de objetos. Los objetos épicos necesitan también la versión épica de la dote, y **Epic items** activado en los [ajustes de generación](es-Ajustes-de-generación#campaña).
- **Nivel de lanzador**: el del objeto según su línea de construcción, o el mínimo del SRD para sus conjuros.
- **El creador debe ser…**: alineamiento, clase, nivel de personaje, rangos de habilidad, nivel de lanzador, según la línea de construcción del objeto.
- **po** y **PX**: el artesano debe tenerlos. Con **XP can't cost a level** (los PX no pueden costar un nivel) activado, el artesano solo puede gastar los PX por encima del mínimo de su nivel.

### Cómo se encuentran los requisitos

Para los objetos de compendio (armas mágicas específicas, anillos, cetros, bastones, objetos maravillosos), Crafting lee la **línea de construcción del SRD** al final de la descripción del objeto, como la tiene todo objeto del SRD. Una sección de ayuda en la pestaña lo explica. Para que tus propios objetos se puedan fabricar, termina su descripción con una línea como esta (en inglés):

> *Moderate evocation; CL 12th; Craft Magic Arms and Armor, fireball or flame strike, creator must be good; Price 18,315 gp; Cost 9,315 gp + 720 XP.*

- **CL 12th;** es obligatorio, seguido de punto y coma. *Caster Level: 12th;* también vale, y *ML* para objetos psiónicos. *CL 11th (I), 14th (II)* da un nivel de lanzador por versión.
- Los **requisitos** siguen, separados por comas, hasta el siguiente punto y coma. Se acepta *Prerequisites:* delante de ellos.
- Los **conjuros y poderes** deben coincidir con un nombre de tus fuentes de conjuros o poderes. Las mayúsculas no importan, y "greater magic fang" encuentra "Magic Fang, Greater". **or** entre nombres significa que vale cualquiera.
- Las **dotes** se reconocen por su nombre: las dotes de creación de objetos y cualquier dote de un compendio llamado Feats.
- También se entiende: *creator must be good* (lawful, chaotic, evil), *creator must have 5 ranks in Jump*, *creator must be 12th level*, *creator must be caster level 11th* y *creator must be a* clase.
- Todo lo demás se enumera para que lo compruebe el DJ.
- **Cost 1,250 gp + 5,100 XP** en cualquier parte de la descripción sustituye el coste habitual (la mitad del precio en po, 1/25 en PX).
- **Price** también se lee, y se usa cuando el precio del compendio falta o es erróneo.
- La línea se lee en inglés. Los objetos del SRD traducidos usan su línea en inglés; tus propios objetos necesitan la línea en inglés.
- Sin línea de construcción, el objeto puede crearse igualmente, pero el DJ decide qué necesita.

## Coste y tiempo

| | Objetos mágicos | Objetos comunes (Artesanía) |
|---|---|---|
| **Coste** | Materiales: ½ del precio base, más PX por 1/25 de él (SRD) | Materias primas: ⅓ del precio |
| **Objetos épicos** (precio por encima de 200.000 po o nivel de lanzador por encima de 20) | PX: precio de mercado ÷ 100 + 10.000; pergaminos épicos: precio de mercado ÷ 25 + 1.000 (SRD) | — |
| **Tiempo** | 1 día por cada 1.000 po de precio base, 8 horas al día | Semanas: cada semana, prueba × CD en piezas de plata (estimación mostrada tomando 10). Los kits de trampa pueden contarlo en otra moneda: consulta [Kits de trampa](es-Kits-de-trampa#ajustes). |
| **Tiempo épico** | 1 día por cada 10.000 po de precio base (regla de la casa) | — |

Los conjuros con un componente material costoso o un componente de PX añaden ese coste.

## Pruebas

| Objeto | Prueba |
|---|---|
| Objetos mágicos | **SRD**: sin prueba; debe cumplirse cada requisito previo. **Spellcraft (house rule)** (Conocimiento de conjuros, regla de la casa): consulta el ajuste **Magic item checks** más abajo. |
| Objetos comunes | Artesanía (armería, fabricación de armaduras, fabricación de arcos, alquimia, fabricación de trampas…) contra la CD del objeto. Un objeto de gran calidad tiene una segunda prueba para su componente de gran calidad (CD 20). |
| Alquimia | Artesanía (alquimia). Solo puede usarla un lanzador de conjuros. |

- No puedes tomar 20 en una prueba de Artesanía, porque fallar cuesta materiales. Tira, o toma 10.
- Se permite Artesanía sin entrenar, y se muestra como "untrained" (sin entrenar).

## La tarjeta de solicitud

La tarjeta de chat sigue la solicitud de principio a fin.

| Estado | Significado |
|---|---|
| **Waiting for the GM** (esperando al DJ) | Enviada. El DJ puede **Approve** (aprobar), **Edit** (editar) o **Reject** (rechazar). |
| **Approved — roll the checks** (aprobada: tira las pruebas) | Pagada. El jugador del artesano (o el DJ) pulsa **Roll {skill} (DC)** (tirar {habilidad}, CD). |
| **Finished** (terminada) | Todas las pruebas han tenido éxito. El objeto está en el inventario del artesano. |
| **Failed** (fallida) | Una prueba de Conocimiento de conjuros fallada por 5 o más: se pierden las po y los PX gastados. |
| **Materials ruined** (materiales arruinados) | Una prueba de Artesanía fallada por 5 o más: se arruina la mitad de las materias primas. |
| **Rejected** (rechazada) | El DJ dijo que no. No se gastó nada. |
| **Abandoned** (abandonada) | El artesano se rindió tras un fallo. |

- **Fallar por 4 o menos**: no hay progreso. Vuelve a tirar esa prueba.
- **Fallar por 5 o más** en Artesanía: **Pay {gp} and roll again** (pagar {po} y volver a tirar) compra materiales nuevos, o **Abandon** (abandonar) lo detiene.
- **Edit**: el DJ abre la solicitud en la ventana Crafting, la cambia y pulsa **Update the request**. La tarjeta dice "edited by the GM" (editada por el DJ).
- **Checks rolled as** (pruebas tiradas como): cambia el modo de tirada en la tarjeta. Con una tirada a ciegas, el DJ resuelve el resultado.
- Si el artesano no puede pagar cuando el DJ aprueba, la tarjeta lo indica: rechaza o edita la solicitud.

## Ajustes

En **Configure Settings**, bajo el primer módulo de Axecleft activo que incluye Crafting.

| Ajuste | Por defecto | Qué hace |
|---|---|---|
| **Players may craft** (los jugadores pueden fabricar) | Activado | Los jugadores pueden abrir la ventana Crafting y enviar solicitudes. No se crea ni se cobra nada hasta que el DJ aprueba. |
| **Magic item checks** (pruebas de objetos mágicos) | SRD (no check: sin prueba) | **Spellcraft check (house rule)** (prueba de Conocimiento de conjuros, regla de la casa): Conocimiento de conjuros CD 5 + nivel de lanzador, +5 por cada requisito previo que falte (salvo la dote y el nivel de lanzador) en lugar de bloquear. Fallar por 5 o más desperdicia las po y los PX. |
| **Poison crafting** (fabricación de venenos) | House rule (regla de la casa) | El SRD no tiene regla para fabricar veneno. **House rule**: Artesanía (alquimia) contra la CD de salvación del veneno, materias primas a ⅓ del precio, solo lanzadores de conjuros. Ninguna pestaña de fabricación usa aún este ajuste. |
| **Crafting checks are rolled as** (las pruebas de fabricación se tiran como) | Public roll (tirada pública) | **Public roll**, **Private GM roll** (tirada privada del DJ) o **Blind GM roll** (tirada a ciegas del DJ). El valor por defecto al aprobar; cámbialo en cada tarjeta. |
| **Charge gp** (cobrar po) | Activado | Gasta el oro del artesano al aprobar. |
| **Charge XP** (cobrar PX) | Activado | Gasta los PX del artesano al aprobar. |
| **XP can't cost a level** (los PX no pueden costar un nivel) | Activado | SRD: un personaje no puede gastar tantos PX en un objeto que pierda un nivel. |
