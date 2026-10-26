# La Forge (forja, Axecleft's Armory)

**Dónde:** Treasure Generator → pestaña **Forge**.

Crea a mano armas, armaduras, escudos y munición. Cualquier opción puede ser **Random** (aleatoria): las partes aleatorias se tiran en las tablas del SRD para la categoría que elijas. Los precios siguen el SRD. Los objetos mágicos empiezan sin identificar a menos que marques **Identified** (identificado).

> **<img width="603" height="1004" alt="image" src="https://github.com/user-attachments/assets/49cb92a4-a53f-4833-8ab6-a2813ea42136" />**

## El objeto

| Control | Qué hace |
|---|---|
| **Kind** (tipo) | **Weapon** (arma), **Armor** (armadura), **Shield** (escudo), **Ammunition** (munición) o **Random**. |
| **Base item** (objeto base) | El arma o armadura de partida (espada larga, camisote de mallas, flechas…), o **Random (SRD tables)**. También se listan tus propios objetos de tus fuentes de objetos. |
| **Grade** (categoría) | **Minor** (menor), **Medium** (intermedio), **Major** (mayor) o **Epic (SRD epic tables)** (épico, tablas épicas del SRD; solo mientras Epic items esté activado). Se usa para cualquier mejora o aptitud **Random**. |
| **Enhancement** (mejora) | **None** (ninguna), **Random (by grade)** (aleatoria, según la categoría), **+1** a **+5**, y **+6** a **+20 (epic)** cuando se permiten objetos épicos. |
| **Epic** (épico) | **Allow epic items** (permitir objetos épicos): mejora por encima de +5 y total por encima de +10, a precios épicos del SRD (×10). Solo se muestra mientras **Epic items** esté activado en los [ajustes de generación](es-Ajustes-de-generación#campaña). |
| **Masterwork** (de gran calidad) | Hacerlo de gran calidad. Los objetos mágicos, y los de adamantina, mithril, madera oscura o piel de dragón, siempre lo son. |
| **Material** | **None (ordinary)** (ninguno, común), **Random (one that fits)** (aleatorio, uno que encaje) o un material especial (adamantina, hierro frío, plata alquímica, mithril, madera oscura, piel de dragón…). Solo se permiten materiales adecuados al objeto base. |
| **Size** (tamaño) | **Medium** (mediano), **Small** (pequeño: mismo precio, mitad de peso), **Large** (grande: doble de precio base y de peso), o **Random (Generation settings)**. |

## Aptitudes especiales

Cuatro huecos de aptitud, y aparece otro cuando todos están llenos. Cada uno puede ser:
- **None**;
- **Random (by grade)**;
- **Random psionic (by grade)** (psiónica aleatoria; solo mientras Psionics esté activado);
- una aptitud elegida.

Las listas de aptitudes están agrupadas: aptitudes de armas del SRD, de armaduras y escudos del SRD, sus versiones épicas y psiónicas, y **Your enhancements** (tus mejoras) de tus propios compendios.

- **Bane foe** (enemigo predilecto): para *perdición*, el tipo de criatura que odia, o **Random (SRD table)**.
- Cada aptitud necesita al menos una mejora de +1. Si el bonificador más las aptitudes pasan de +10 sin permitir objetos épicos, la vista previa te avisa, pero el objeto se puede crear igualmente, con el precio de la fórmula normal (el límite del SRD lo puede flexibilizar el DJ). El tesoro aleatorio se queda en +10.
- Se rechazan las aptitudes que no encajan con el objeto base, como *afilada* en una maza o *retornante* en una espada larga.

## Armas dobles

Cada extremo de un arma doble (espada de dos hojas, mayal doble terrible, bastón…) tiene su propio bonificador de mejora y sus propias aptitudes (SRD). Con un arma doble elegida aparece una sección **Other end (double weapons)** (el otro extremo, armas dobles) con sus propios huecos de mejora y aptitud.

- El otro extremo tiene el precio de un arma propia: su precio se suma al del objeto, y sus aptitudes cuentan para los requisitos previos y el nivel de lanzador.
- Sus aptitudes necesitan al menos un bonificador de +1 en ese extremo.
- D35E da a un objeto un solo juego de mejoras, así que el bonificador y las aptitudes del otro extremo van en el nombre del objeto (*+1 Flaming Two-Bladed Sword (other end +1 frost)*), su descripción y una nota de ataque.
- Las armas dobles mágicas aleatorias siguen el SRD: la mitad de las veces el otro extremo tiene el mismo bonificador, si no uno menos y sin aptitudes.

## Luz, inscripción y más

Haz clic en el encabezado para abrir esta sección.

| Control | Qué hace |
|---|---|
| **Light** (luz) | **By Generation settings (random)** (según los ajustes de generación, aleatorio), **None** o **Sheds light** (emite luz). |
| **Look** (aspecto) | **From its abilities (or neutral)** (según sus aptitudes, o neutro): un arma flamígera parpadea en naranja, una sagrada brilla dorada. También puedes elegir un tema por su nombre, o **Custom** (personalizado). |
| **Color**, **Animation**, **Speed / intensity** | Con un aspecto **Custom**: el color de la luz, la animación de luz de Foundry, y su velocidad e intensidad (1–10). |
| **Bright / dim (ft)** (brillante / tenue, pies) | Los radios de la luz. En blanco: según los [ajustes de generación](es-Ajustes-de-generación). |
| **Intelligent** (inteligente) | **By Generation settings (random)**, **No**, **Yes, all features random** (sí, todo aleatorio) o **Yes, choose the features** (sí, elegir las características). Necesita D35E 3.1 o posterior y su compendio Intelligent Item Tables, así que se oculta en Foundry 11. |
| **Cursed** (maldito) | **No**, **Random curse (SRD tables)**, un tipo de maldición, o una de tus maldiciones personalizadas. Consulta [Objetos malditos](es-Objetos-malditos). |
| **Inscription hint** (pista inscrita) | **By Generation settings (random)**, **Yes** o **No**: un diseño o inscripción que da una pista de su poder. |
| **Identified** (identificado) | **Start identified** (empezar identificado). Si no, los objetos mágicos empiezan sin identificar. |
| **Ammunition** (munición) | Con munición: cuántas piezas. La munición mágica se valora por 50. |
| **Items to make** (objetos que crear) | Cuántos, **for each target**. Las partes aleatorias se tiran para cada uno. |

### Elegir las características de un objeto inteligente

Con **Yes, choose the features**, aparecen más opciones:

| Control | Qué hace |
|---|---|
| **Alignment** (alineamiento) | Cualquier alineamiento, o **Random (suits holy, unholy, axiomatic, anarchic)** (aleatorio, adecuado a sagrada, sacrílega, axiomática, anárquica). |
| **Mind** (mente) | Su Inteligencia, Sabiduría y Carisma. La mente fija cuántos poderes menores y mayores tiene. |
| **Lesser power 1, 2…** / **Greater power 1, 2…** | Cada poder menor o mayor, o Random. |
| **Special purpose** (propósito especial) | **By Generation settings**, **None**, **Random** o un propósito elegido. |
| **Dedicated power** (poder dedicado) | Con un propósito especial, su poder dedicado. |

Los precios siguen el SRD y se suman al precio del objeto.

## Crearlo

Ajusta [Put items in](es-Generador-de-tesoros#put-items-in-poner-los-objetos-en) y pulsa **Generate**. La tarjeta de chat enumera cada objeto con su precio y, para el DJ, todo lo especial: luz, inteligencia, maldición.
