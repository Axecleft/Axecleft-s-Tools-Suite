# Ajustes de los módulos

**Dónde:** **Configure Settings** (configurar ajustes), bajo el nombre de cada módulo. Son ajustes del mundo: solo el DJ los cambia.

Las opciones propias del Treasure Generator (campaña, objetos mágicos, gemas, monedas…) no están aquí. Están en su sección [Generation settings](es-Ajustes-de-generación).

Los scripts compartidos registran sus ajustes una sola vez, bajo el primer módulo de Axecleft activo que los incluye. Si tienes Armory, Curios y Gemstones, encontrarás **Shared treasure lists library** bajo uno de ellos, no bajo los tres.

## Compartidos (Treasure Generator)

Los incluyen Armory, Curios y Gemstones.

| Ajuste | Por defecto | Qué hace |
|---|---|---|
| **Shared treasure lists library** (biblioteca compartida de listas de tesoros) | Automatic | **Automatic**: tus [listas de tesoros](es-Listas-de-tesoros) se guardan en un archivo de la carpeta Data de Foundry cada vez que las cambias, y todos los mundos las cargan al iniciarse, así que sobreviven a las actualizaciones de los módulos y te acompañan entre mundos. **Manual**: solo cuando pulsas Save / Load en la pestaña Lists del Treasure Generator. |
| **Shared library folder** (carpeta de la biblioteca compartida) | `axecleft-treasure` | La carpeta dentro de tu carpeta Data de Foundry que contiene `treasure-lists.json`. |

## Compartidos (Crafting)

Los incluyen Armory, Curios y Traps. Consulta [Fabricación](es-Fabricación#ajustes) para los detalles.

| Ajuste | Por defecto |
|---|---|
| **Players may craft** (los jugadores pueden fabricar) | Activado |
| **Magic item checks** (pruebas de objetos mágicos) | SRD (no check) |
| **Poison crafting** (fabricación de venenos) | House rule (regla de la casa) |
| **Crafting checks are rolled as** (las pruebas de fabricación se tiran como) | Public roll (tirada pública) |
| **Charge gp** (cobrar po) | Activado |
| **Charge XP** (cobrar PX) | Activado |
| **XP can't cost a level** (los PX no pueden costar un nivel) | Activado |

## Axecleft's Armory

| Ajuste | Por defecto | Qué hace |
|---|---|---|
| **Psionic share of magic arms and armor (%)** (proporción psiónica de armas y armaduras mágicas) | 10 | Regla de la casa, mientras Psionics esté activado (Treasure Generator → Generation settings): esta proporción de las armas, armaduras y escudos mágicos aleatorios que reciben aptitudes especiales las tira en las tablas de aptitudes psiónicas del SRD. 0 = ninguna. |

## Axecleft's Curios

| Ajuste | Por defecto | Qué hace |
|---|---|---|
| **Highest potion level (GM)** (nivel máximo de pociones, DJ) | 3 | SRD: las pociones y tatuajes psiónicos contienen conjuros o poderes de nivel 3 o inferior. El DJ puede subirlo hasta 9 para los objetos creados en la [pestaña Curios](es-Taller-de-Curios#solo-dj). El tesoro aleatorio sigue las tablas del SRD. La fabricación de los jugadores siempre se queda en nivel 3. |
| **Highest wand level (GM)** (nivel máximo de varitas, DJ) | 4 | Lo mismo para varitas y dorjes (SRD: nivel 4). La fabricación de los jugadores siempre se queda en nivel 4. |
| **Psionic share of potions, scrolls, wands, staffs and wondrous items (%)** (proporción psiónica de pociones, pergaminos, varitas, bastones y objetos maravillosos) | 10 | Regla de la casa, mientras Psionics esté activado: esta proporción de las tiradas aleatorias de pociones, pergaminos y varitas se convierte en tatuajes psiónicos, piedras de poder y dorjes; de las de bastones, en psicoronas del SRD; de las de objetos maravillosos, en cristales de cognición y objetos psiónicos universales. 0 = ninguna. |
| **Pearls of power for spontaneous casters (house rule)** (perlas de poder para lanzadores espontáneos, regla de la casa) | Desactivado | SRD: una perla de poder recupera un conjuro que un lanzador preparó. Activado: los hechiceros, bardos y otros lanzadores espontáneos pueden usarla para recuperar un espacio de conjuro gastado del nivel de la perla. |
| **Set up psicrowns** (preparar psicoronas) | Activado | Una psicorona añadida a un personaje desde un compendio (Dominator, Evader… de D35E) recibe sus puntos de poder y sus poderes como objetos aparte que gastan los puntos de la corona. |
| **Prefer module compendiums** (preferir los compendios de los módulos) | Activado | Cuando un conjuro, poder u objeto está tanto en los compendios de D35E como en los de un módulo (como Axecleft's Shared Data), usar la copia del módulo. |
| **Take over hand-made linked items** (tomar el control de los objetos enlazados a mano) | Activado | Un libro de conjuros o pergamino que enlazaste a mano en la pestaña Links de D35E: cuando se añade a un personaje, Curios guarda una copia de su contenido, para que los pergaminos usados sigan usados cuando cambia de manos. |
| **Spellbook rule** (regla del libro de conjuros) | Desactivado | Opcional: los personajes cuya clase de libro de conjuros esté en la lista de abajo solo pueden preparar conjuros que estén en un libro de conjuros que lleven encima (Read Magic, leer magia, siempre está permitido, como en el SRD). Se avisa al DJ, pero no se le impide. |
| **Spellbook classes** (clases con libro de conjuros) | `Wizard` | Las clases a las que se aplica la regla del libro de conjuros, separadas por comas. |

## Axecleft's Gemstones

| Ajuste | Por defecto | Qué hace |
|---|---|---|
| **Gem size & quality variations** (variaciones de tamaño y calidad de las gemas) | Activado | Las gemas aleatorias usan los tamaños (Tiny a Huge) y calidades (Flawed a Exceptional) de la casa. Desactivado: gemas simples con valor del SRD. El generador tiene la misma casilla para cambios puntuales. |
| **Art & jewelry quality variations** (variaciones de calidad del arte y las joyas) | Activado | El arte y las joyas aleatorios usan las facturas de la casa (Junk a Masterpiece). Desactivado: valores de arte simples del SRD. |

## Axecleft's Traps, Poisons, and Diseases

| Ajuste | Por defecto |
|---|---|
| **Trap kits: GM approves** | Activado |
| **Trap kits: setting takes time** | Activado |
| **Trap kits: who sees a placed trap** | GM only, plus a marker for the player who set it |
| **Trap kits: placed traps can be recovered** | Activado |
| **Trap kits: compendiums for crafting** | En blanco (todos los compendios con actores de trampa) |
| **Trap kits: crafting progress** | Silver pieces (SRD) |

Consulta [Kits de trampa](es-Kits-de-trampa#ajustes) para los detalles.

## Join the Discord (unirse al Discord)

La sección de cada módulo de Axecleft también tiene **Join the Discord** y un botón **Open Discord** (abrir Discord). Abre el [servidor de Discord de Axecleft's Tool Suite](https://discord.gg/FRhPPwDWta) en tu navegador, para ayuda, novedades e ideas. Todos, también los jugadores, tienen además un botón **Join the Discord** en el menú Axecleft's Tools.

## Support on Patreon (apoyar en Patreon)

La sección de cada módulo de Axecleft empieza con **Support on Patreon** y un botón **Open Patreon** (abrir Patreon). Abre el [Patreon de Axecleft](https://www.patreon.com/Axecleft) en tu navegador y no cambia nada en tu mundo. Los jugadores también lo ven; el DJ tiene además un botón **Support on Patreon** en el menú Axecleft's Tools.
