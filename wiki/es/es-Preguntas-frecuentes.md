# Preguntas frecuentes

## General

**¿Dónde están las herramientas?**
En las herramientas del DJ de D35E, en el grupo **Axecleft's Tools**. Consulta [Primeros pasos](es-Primeros-pasos).

**¿Qué módulos necesito?**
Cualquiera funciona solo. Cada uno añade su parte a las herramientas compartidas: Armory (armas y armaduras), Curios (pociones, pergaminos, varitas, objetos maravillosos), Gemstones (gemas, arte y joyas), Traps (trampas, venenos, enfermedades). El Treasure Generator, el Merchant Generator y Crafting vienen con los módulos que los incluyen.

**Falta algo en Foundry 11.**
Los objetos inteligentes necesitan D35E 3.1 o posterior, así que sus opciones se ocultan en Foundry 11.

**Los módulos se ven en inglés.**
Aún no están traducidos al español. Esta guía da la traducción de cada botón entre paréntesis. Consulta [Idiomas](es-Idiomas) si quieres ayudar a traducirlos.

## Tesoro

**Nunca aparecen objetos psiónicos.**
Activa **Psionics** en los [ajustes de generación](es-Ajustes-de-generación) del Treasure Generator. Los ajustes de proporción psiónica (Armory, Curios) deciden después con qué frecuencia aparecen. Consulta [Ajustes](es-Ajustes).

**Nunca aparecen objetos épicos.**
Activa **Epic items** en los [ajustes de generación](es-Ajustes-de-generación#campaña).

**Un objeto de compendio tiene un precio erróneo.**
Añade una fila a la página **Price Corrections** de las [listas de tesoros](es-Listas-de-tesoros). Corrige el precio para el tesoro y las existencias de los mercaderes sin cambiar el compendio. **Price Check**, en la pestaña Item Sources del Merchant Generator, enumera cada corrección.

**No quiero una gema, maldición u otra entrada integrada.**
Desactívala en la [pestaña Lists](es-Listas-de-tesoros#la-pestaña-lists) del Treasure Generator. Va a la página "Disabled Entries" y nunca se tira.

**¿Una actualización de módulo borrará mis listas personalizadas?**
No. Se guardan en el diario **Axecleft's Treasure Lists** del mundo, y también en el archivo de la biblioteca compartida de tu carpeta Data de Foundry (con **Shared treasure lists library** en Automatic). Consulta [La biblioteca compartida](es-Listas-de-tesoros#la-biblioteca-compartida).

**¿Cómo funcionan los objetos malditos?**
Consulta [Objetos malditos](es-Objetos-malditos).

## Mercaderes

**Los jugadores no pueden comprarle a mi mercader.**
Los mercaderes nuevos se crean con permisos en None. Da permiso a los jugadores en la hoja del mercader.

**Los objetos de mi propio compendio nunca aparecen en las tiendas.**
El compendio debe estar entre tus [fuentes de objetos](es-Generador-de-mercaderes#pestaña-item-sources). Pulsa **Save and Rescan** después de añadirlo, o **Rescan** después de añadir objetos. Para vender un objeto en tiendas distintas a las de su tipo, dale una [etiqueta de tienda](es-Etiquetas-de-tienda).

## Fabricación

**Mis jugadores no ven Crafting.**
Activa **Players may craft** en los [ajustes](es-Fabricación#ajustes).

**El artesano tiene el oro y los PX, pero no se gastó nada.**
No se gasta nada hasta que el DJ aprueba la solicitud. Comprueba también **Charge gp** y **Charge XP**.

**Mi propio objeto mágico no se puede fabricar, o el DJ tiene que decidir qué necesita.**
Termina su descripción con una línea de construcción del SRD en inglés, como `CL 12th; Craft Wondrous Item, fly;`. Consulta [Cómo se encuentran los requisitos](es-Fabricación#cómo-se-encuentran-los-requisitos).

**El artesano no conoce un conjuro que necesita el objeto.**
Elige otra fuente en el desplegable del conjuro: un lanzador que ayuda, un pergamino, una varita o un bastón. Consulta [Conjuros](es-Fabricación#conjuros).

**¿Puede un jugador tomar 20 en una prueba de Artesanía?**
No. Fallar cuesta materiales, así que el SRD no lo permite. Tira, o toma 10.

## Trampas

**Un jugador no puede fabricar una trampa del Random Trap Generator.**
Las trampas generadas están en el mundo del DJ. Da al jugador el permiso Observer sobre el actor de trampa, y aparecerá en la pestaña **Trap kits**.

**Una trampa no se puede convertir en kit.**
Los kits de trampa son solo para trampas mecánicas; las trampas mágicas vienen de los conjuros. La trampa también necesita un precio: añade "Market Price - 1,000 gp" a sus notas.

**Los jugadores ven una trampa que no deberían.**
Revisa **Trap kits: who sees a placed trap** en [Kits de trampa](es-Kits-de-trampa#ajustes). Con **GM only**, la ficha está oculta.

**No puedo recuperar una trampa.**
Solo las trampas mecánicas activas pueden volver a un kit, y solo con **Trap kits: placed traps can be recovered** activado. Las trampas mágicas se inutilizan con Inutilizar mecanismo. Consulta [Recuperar una trampa](es-Kits-de-trampa#recuperar-una-trampa).

## Idiomas

**Parte del texto sigue en inglés.**
Aún no está traducido. Consulta [Idiomas](es-Idiomas) para ayudar.

**Mis objetos traducidos no se reconocen.**
Dales su nombre en inglés (el botón **English name** de la hoja de objeto). Consulta [Idiomas](es-Idiomas#nombres-en-inglés-para-tus-propios-objetos).
