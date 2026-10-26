# Generation settings (ajustes de generación)

**Dónde:** Treasure Generator → pestaña **Treasure by Level** → **Generation settings** (haz clic para desplegar).

Estos ajustes controlan los extras que los módulos de Axecleft añaden a los objetos **generados al azar**, y algunos interruptores para toda la campaña. Se guardan para el mundo en cuanto los cambias. El encabezado muestra "(SRD and Axecleft defaults)" (valores por defecto del SRD y de Axecleft) o "(changed for this world)" (cambiado para este mundo). **Reset to Defaults** (restablecer valores por defecto), al final, lo devuelve todo a su estado inicial.

Las herramientas de creación (la [Forge](es-Forja) y el [taller Curios](es-Taller-de-Curios)) siempre pueden añadir estos extras a mano, sea cual sea el ajuste aquí.

> **<img width="609" height="659" alt="image" src="https://github.com/user-attachments/assets/ae8184e0-8f90-43c1-a868-cc2f9ebb6270" />**

## Campaña

Interruptores para **todos** los módulos de Axecleft:

- **Psionics** (psiónica): desactivado, los objetos psiónicos, poderes, piedras de poder, tatuajes psiónicos, dorjes y psicoronas quedan fuera de los tesoros, los mercaderes, la fabricación y la Forge.
- **Epic items** (objetos épicos): activado, la Forge y Crafting pueden crear objetos épicos (más allá de los límites +5 y +10 del SRD), y los mercaderes con el carácter de asentamiento *Epic campaign* pueden tenerlos en existencias. El tesoro aleatorio sigue el SRD hasta EL 20.
- **Epic share of the extra items at EL 21+** (proporción épica de los objetos adicionales a partir de EL 21): el porcentaje de los [objetos mayores adicionales de EL 21–30](es-Tesoro-por-nivel#encounter-level-nivel-de-encuentro) que son objetos épicos de las tablas épicas del SRD (regla de la casa; 25 % por defecto).

## Luz, inteligencia e inscripciones

Activa o desactiva cada uno con **Random light** (luz aleatoria), **Random intelligence** (inteligencia aleatoria) e **Inscription hints** (pistas inscritas), y después ajusta las probabilidades de cada fila de la tabla:

| Fila | Sheds light (emite luz) | Bright / dim (brillante / tenue) | Intelligent (inteligente) | Hint (pista) |
|---|---|---|---|---|
| Armas cuerpo a cuerpo mágicas | 30 % | 20 / 40 pies | 1 % | 15 % |
| Armas a distancia mágicas | desactivado | 20 / 40 pies | 1 % | 15 % |
| Armaduras y escudos mágicos | 5 % | 10 / 20 pies | 1 % | — |
| Otros objetos mágicos permanentes | 1 % | 5 / 10 pies | 1 % | — |

Cada celda tiene una casilla (activado o no) y un porcentaje. Estos son los valores por defecto:
- **SRD:** el 30 % de las armas cuerpo a cuerpo mágicas emite luz (como un conjuro de *luz*: 20 pies de luz brillante, 40 de tenue), y las armas a distancia no. El 15 % de las armas lleva una inscripción que da una pista de su poder. Menos del 1 % de los objetos permanentes son inteligentes (nunca pociones, pergaminos, varitas ni munición).
- **Reglas de la casa:** la luz en armaduras, escudos y otros objetos.

> **Foundry 11:** la columna Intelligent y sus opciones están ocultas, porque D35E 2.4.3 no admite objetos inteligentes.

> **<img width="606" height="713" alt="image" src="https://github.com/user-attachments/assets/44fef60c-45f1-4b7e-a80d-72755fc99c0c" />**

**Propósitos especiales (objetos inteligentes):**
- **Intelligent items can have a special purpose** (los objetos inteligentes pueden tener un propósito especial): activa los propósitos especiales.
- **always with greater powers** (siempre con poderes mayores): los objetos más capaces, los que tienen poderes mayores, siempre tienen uno.
- **plus … % of the others** (más … % de los demás): la probabilidad para cualquier otro objeto inteligente.

El SRD no dice con qué frecuencia aparecen los propósitos especiales; este es el valor por defecto de Axecleft.

**Opciones de luz:**
- **Light color and animation follow the item's abilities** (el color y la animación de la luz siguen las aptitudes del objeto): una espada flamígera parpadea en naranja, una sagrada brilla dorada, un objeto nigromántico flota en un verde enfermizo. Desactivado: luz blanca neutra.
- **Stronger items glow brighter** (los objetos más poderosos brillan más): el brillo crece con la fuerza del aura del objeto.
- **Stronger items shine farther: … ft per +1 above +2** (los objetos más poderosos iluminan más lejos: … pies por cada +1 por encima de +2): el radio crece con el bonificador de mejora.

## Sizes of arms (tamaños de armas y armaduras)

**SRD:** las armaduras y armas aleatorias son Pequeñas un 30 %, Medianas un 60 % y de otro tamaño un 10 % (aquí, Grandes).
- Las armas y armaduras Pequeñas cuestan lo mismo y pesan la mitad.
- Las Grandes cuestan el doble y pesan el doble.

Desmarca para que todo sea Mediano.

## Venenos

**… % of mundane item rolls become a poison** (… % de las tiradas de objetos comunes se convierten en un veneno) tomado de tus fuentes de objetos (regla de la casa; 1 % por defecto). Súbelo en campañas donde el veneno sea frecuente. Necesita venenos en tus fuentes de objetos, por ejemplo los compendios de Traps, Poisons, and Diseases.

## Objetos malditos

Activa las maldiciones aleatorias y ajusta su frecuencia. Consulta [Objetos malditos](es-Objetos-malditos) para todo lo relativo a maldiciones.

- **Cursed items** (objetos malditos, casilla): activado o no.
- **Flat rate** (tasa fija): una única probabilidad para cada objeto mágico (**1 %** por defecto).
- **Rate by grade** (tasa por categoría): una probabilidad por categoría: **menor 3 %**, **intermedio 2 %**, **mayor y épico 1 %** por defecto.
- **Specific cursed items (SRD table)** (objetos malditos específicos, tabla del SRD): permite que los objetos malditos específicos del SRD (brazales de indefensión, la espada maldita –2…) sustituyan a un objeto tirado.
- **Apply simple effects (penalties, reversed bonuses)** (aplicar efectos simples: penalizadores, bonificadores invertidos): convierte un +2 invertido en –2, quita la magia de un objeto de engaño, etc.
- **Merchant stock can be cursed** (las existencias de los mercaderes pueden estar malditas): desactivado por defecto, para que las tiendas vendan objetos limpios.
- **Create the curse buffs compendium** (crear el compendio de buffs de maldición): construye el compendio de mundo "Axecleft's Curses" (consulta [Objetos malditos](es-Objetos-malditos#los-compendios-de-buffs-de-maldición)).
