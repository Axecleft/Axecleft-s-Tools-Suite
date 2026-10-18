# Poison & Disease Creator (creador de venenos y enfermedades; Traps, Poisons, and Diseases)

**Dónde:** **Axecleft's Tools → Poison & Disease Creator**. Solo DJ.

Crea un veneno o una enfermedad nuevos. Cada uno se crea como dos objetos de D35E:
- un objeto de **ataque**, que tira la salvación y aplica los efectos;
- un objeto **consumible**, el vial o la dosis que un personaje lleva, usa y compra.

> **<img width="973" height="952" alt="image" src="https://github.com/user-attachments/assets/ed1f0366-fd21-4a10-ad47-4640c5a9dff8" />**

## El formulario

| Control | Qué hace |
|---|---|
| **Template** (plantilla) | Parte de un veneno o enfermedad existente para rellenar el formulario, y cambia solo lo necesario. Agrupados como **Module poisons** (venenos del módulo), **Module diseases** (enfermedades del módulo) y **Your custom poisons & diseases** (tus venenos y enfermedades personalizados). **— None (start blank) —** (ninguna, empezar en blanco) lo vacía. |
| **Type** (tipo) | **Poison** (veneno) o **Disease** (enfermedad). El formulario se adapta. |
| **Name** (nombre) | Por ejemplo *Veneno de víbora del pantano*. |
| **Delivery** (forma de transmisión) | **Contact** (contacto), **Ingested** (ingestión), **Inhaled** (inhalación) o **Injury** (herida). |
| **Saving throw** (tirada de salvación) | **Fortitude** (Fortaleza), **Reflex** (Reflejos) o **Will** (Voluntad), y la CD de salvación. |
| **Price (gp)** (precio, po) | El precio del consumible. |
| **Notes** (notas) | Una descripción opcional. |
| **Also add to Items** (añadir también a Items) | Copia también ambos objetos en la carpeta de objetos **Custom Poisons & Diseases**. |

**Solo venenos:**

| Control | Qué hace |
|---|---|
| **Initial damage** (daño inicial) | Al exponerse, con una salvación fallada. Por ejemplo `1d6 Con`, `2d12 hp` o `unconsciousness 1 minute`. |
| **Secondary damage** (daño secundario) | 1 minuto después, con una segunda salvación fallada. Por ejemplo `2d6 Con` o `1d4 Con + 1d3 Wis`. |

**Solo enfermedades:**

| Control | Qué hace |
|---|---|
| **Incubation** (incubación) | Por ejemplo `1d3 days`. |
| **Damage (each day)** (daño, cada día) | Tras la incubación, cada día con una salvación fallada. |
| **Recovery** (recuperación) | **Two successful saves in a row** (dos salvaciones con éxito seguidas, SRD) o **Three successful saves in a row** (tres seguidas). |

### Qué puedes escribir en los cuadros de daño

Escribe los efectos en inglés, sea cual sea el idioma del mundo.

| Efecto | Ejemplo |
|---|---|
| Daño de característica | `1d6 Con` |
| Consunción de característica (permanente) | `1 Con drain` |
| Daño a los puntos de golpe | `2d12 hp` |
| Sin efecto | `0` |
| Estado, con duración opcional | `unconsciousness 2d4 hours`, `paralysis 2d6 minutes` |
| Varios efectos | Únelos con `+`: `1d4 Con + 1d3 Wis` |

Características: `Str` (Fue), `Dex` (Des), `Con`, `Int`, `Wis` (Sab), `Cha` (Car). Estados que reconoce: unconsciousness (inconsciencia), paralysis (parálisis), stunned (aturdido), shaken (estremecido), frightened (asustado), petrified (petrificado), prone (tumbado), blindness (ceguera), sickened (indispuesto), fatigued (fatigado), exhausted (exhausto), deafened (ensordecido), dazzled (deslumbrado), nauseated (con náuseas). Cada uno aplica su estado o buff de D35E.

Cualquier otra cosa se publica en el chat como mensaje cuando ocurre el efecto.

### Efectos de la plantilla

Una plantilla puede llevar efectos que el formulario no muestra. Se enumeran bajo **The template also has these effects** (la plantilla también tiene estos efectos), cada uno con una casilla **Keep** (conservar).

### La vista previa

La parte inferior del formulario muestra qué se creará, por ejemplo:
- **Will create:** (se creará) *Poison, Swamp Adder Venom* (ataque) y *Swamp Adder Venom* (consumible). El ataque de una enfermedad se llama *Disease, …*.
- **Initial** (inicial: al exponerse, salvación fallada) y **Secondary** (secundario: 1 minuto después, segunda salvación fallada), cada uno con sus efectos.
- Después el veneno sigue su curso y termina. El buff **Poisoned** (envenenado) dura 10 asaltos; los estados que causó duran lo que les corresponda.
- Para una enfermedad: **After {incubation}, each day (failed save)** (tras {incubación}, cada día, salvación fallada), el daño diario y la regla de recuperación.

Revisa la vista previa antes de pulsar **Create** (crear).

## Dónde se guarda

- En el compendio de mundo **Custom Poisons & Diseases**, que se crea la primera vez que usas el creador. Los ataques van a su carpeta **Poisons** o **Diseases**, los consumibles a **Consumables**.
- Con **Also add to Items**, también en la carpeta **Custom Poisons & Diseases** de la barra lateral Items.
- Si ya existe un objeto con el mismo nombre, se te pregunta si quieres reemplazarlo.
- Si el compendio está bloqueado, desbloquéalo y vuelve a intentarlo.

Tus venenos y enfermedades personalizados aparecen en la lista **Template** del creador, para que puedas copiarlos y cambiarlos después.

## Notas

- Un veneno necesita un efecto inicial o secundario. Una enfermedad necesita su daño y su periodo de incubación. La CD de salvación debe ser mayor que 0.
- Los mercaderes tienen en existencias los consumibles de veneno de los compendios del módulo (consulta [Merchant Generator](es-Generador-de-mercaderes#pestaña-item-sources)).
