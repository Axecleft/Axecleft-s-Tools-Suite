# Primeros pasos

## Qué necesitas

| | Foundry 13 o 14 | Foundry 11 |
|---|---|---|
| Sistema de juego | D35E 3.x | D35E 2.4.3 |
| Versiones de los módulos | 1.14.x | 1.11.x |
| Objetos inteligentes | Sí (D35E 3.1 o posterior) | No (ocultos) |

Opcional: **Babele** y un módulo de traducción (por ejemplo, la traducción francesa de D35E) para mundos en otro idioma. Consulta [Idiomas](es-Idiomas).

## Instalación

1. En la pestaña **Add-on Modules** (módulos complementarios) de Foundry, elige **Install Module** (instalar módulo) y pega la URL del manifiesto del módulo (de su página de versiones en GitHub), o búscalo por su nombre.
2. Instala los módulos que quieras. No dependen unos de otros, pero se recomiendan entre sí porque cada uno amplía las ventanas compartidas.
3. En tu mundo, abre **Game Settings → Manage Modules** (ajustes del juego → gestionar módulos), marca los módulos y guarda. Foundry recarga el mundo.

> **Usuarios de Foundry 11:** instalad las descargas **1.11.x**. Las versiones 1.14.x necesitan Foundry 13 o 14.

## Qué aporta cada módulo

| Ventana o función | Gemstones | Armory | Curios | Traps |
|---|:-:|:-:|:-:|:-:|
| Ventana [Treasure Generator](es-Generador-de-tesoros) | ✔ | ✔ | ✔ | |
| Gemas, objetos de arte y joyas | ✔ | | | |
| Armas, armaduras, escudos, munición | | ✔ | | |
| Pociones, pergaminos, varitas, anillos, cetros, bastones, objetos maravillosos y psiónicos | | | ✔ | |
| [Merchant Generator](es-Generador-de-mercaderes) y [Shop Tags](es-Etiquetas-de-tienda) | ✔ | ✔ | ✔ | |
| Ventana [Crafting](es-Fabricación) (fabricación) | | ✔ | ✔ | ✔ |
| Pestaña [Forge](es-Forja) (forja) | | ✔ | | |
| Pestaña [Curios](es-Taller-de-Curios), compendio Common Buffs | | | ✔ | |
| Trampas, venenos, enfermedades, kits de trampa | | | | ✔ |

Las ventanas compartidas funcionan mientras **cualquier** módulo que las incluya esté activo. Solo con Gemstones, el Treasure Generator tira monedas, gemas y arte, y enumera los objetos mágicos en la tarjeta de chat para que te ocupes de ellos. Añade Armory y Curios y esos objetos se crean por ti.

## Abrir las herramientas

Todas las herramientas están en el grupo **Axecleft's Tools** (herramientas de Axecleft) de la barra de herramientas izquierda de Foundry, junto a las herramientas del director de juego (DJ):

- **Treasure Generator** (generador de tesoros): monedas, gemas, arte, joyas y objetos.
- **Crafting** (fabricación): fabricar objetos según el SRD (objetos mágicos con dotes de creación de objetos, objetos comunes con Artesanía).
- **Merchant Generator** (generador de mercaderes): crear, abastecer y reabastecer mercaderes.
- **Shop Tags** (etiquetas de tienda): etiquetar los objetos de los compendios con las tiendas que los venden.
- **Random Trap Generator** (generador de trampas aleatorias): tirar trampas aleatorias por VD y crear actores de trampa.

El Treasure Generator también tiene un botón **Treasure** (tesoro) en la parte superior de la barra lateral **Items** (objetos).

> **<img width="460" height="412" alt="image" src="https://github.com/user-attachments/assets/fdf98582-71b7-4a44-8bbc-c5253b7fcb3e" />**

La mayoría de las herramientas son para el DJ. Los jugadores ven **Crafting** en su grupo Axecleft's Tools mientras el ajuste **Players may craft** (los jugadores pueden fabricar) esté activado (consulta [Fabricación](es-Fabricación)), **My Traps** (mis trampas, con Traps, Poisons, and Diseases) y **User Guide** (guía de uso).

El último botón, **User Guide**, abre este wiki en tu navegador, en el idioma elegido en Foundry.

## Primeros ajustes

1. **Fuentes de objetos.** Abre el [Merchant Generator](es-Generador-de-mercaderes) → pestaña **Item Sources** (fuentes de objetos) y marca los compendios que contienen tus objetos. El Treasure Generator y los mercaderes solo toman objetos de estos.
2. **Interruptores de campaña.** En el Treasure Generator → **Treasure by Level** (tesoro por nivel) → [Generation settings](es-Ajustes-de-generación) (ajustes de generación), activa o desactiva **Psionics** (psiónica) y **Epic items** (objetos épicos) según tu campaña.
3. **Monedas.** En la misma pestaña, elige cómo se pagan el cobre, la plata, el oro y el platino del SRD (consulta [Tesoro por nivel](es-Tesoro-por-nivel#monedas)).
4. **Pruébalo.** Elige un nivel de encuentro, pon **Put items in** (poner los objetos en) en **Chat card only** (solo tarjeta de chat) y pulsa **Generate** (generar).

## Actualizaciones

Instala las actualizaciones desde la pestaña **Add-on Modules** de Foundry, como siempre. Tus ajustes, tu diario Treasure Lists y tus listas personalizadas se conservan: las listas personalizadas también se guardan en un archivo de tu carpeta Data (consulta [Listas de tesoros](es-Listas-de-tesoros)), así que sobreviven a las actualizaciones de los módulos.

Tras una actualización, reinicia Foundry y recarga el navegador con **Ctrl+F5** para que cargue los nuevos scripts.
