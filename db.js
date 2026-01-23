const img = document.createElement("img")
const productos = [
    // PRODUCTOS CATEGORIA:AUDIFONOS
    /*{ AGOTADO
        id: 1,
        nombre: "M20 V5.3-DAMIX",
        descripcion: "Auriculares inalámbricos M20 TWS para teléfono móvil, cascos intrauditivos con Bluetooth, Control táctil inteligente AI ENC, cancelación de ruido. Nueva tecnología Bluetooth 5.3",
        precio: 3500,
        categoria: "audifonos",
        imagen : img.src = "foto-productos/audifono-m20.jpg",
        destacado: true
    },*/ 
    /*{ AGOTADO
        id: 2,
        nombre: "M25 V5.3-DAMIX ",
        descripcion: "Audífonos Deportivos Inalámbricos M25 con Pantalla de Energía, Micrófono Cancelador de Ruido y Sonido HiFi - Recargables por USB-C.",
        precio: 3500,
        categoria: "audifonos",
        imagen : img.src = "foto-productos/audifono-m25.jpg",
        destacado: true
    },*/ 
    /*{ AGOTADO
        id: 1,
        nombre: "F9-5 TWS",
        descripcion: "Audífonos Inalámbricos TWS F9-5 con Sonido Estéreo HiFi, Control Táctil, Cancelación de Ruido en Llamadas, Micrófono HD, Diseño Abierto para Oídos, Caja de Carga USB-C.",
        precio: 3000,
        categoria: "audifonos",
        imagen : img.src = "foto-productos/audifono-f9.jpg",
        destacado: false 
    },*/
    /*{ AGOTADO
        id: 2,
        nombre: "A6s Pro-MiPods",
        descripcion: "Audífonos Inalámbricos con Estuche de Carga y Pantalla LED, 4 Horas de Reproducción, Audio Hi-Res y Cancelación Activa de Ruido color: negro",
        precio: 2800,
        categoria: "audifonos",
        imagen : img.src = "foto-productos/audifono-a6s.jpg",
        destacado: false 
    },*/
    /*{ AGOTADO
        id: 22,
        nombre: "A6s Pro-MiPods",
        descripcion: "Audífonos Inalámbricos con Estuche de Carga y Pantalla LED, 4 Horas de Reproducción, Audio Hi-Res y Cancelación Activa de Ruido color: blanco.",
        precio: 2800,
        categoria: "audifonos",
        imagen : img.src = "foto-productos/audifono-a6sblanco.jpg",
        destacado: false 
    },*/
    /*{ AGOTADO
        id: 5, 
        nombre: "X15",
        descripcion: "Auriculares inalámbricos con efectos de iluminación LED, latencia ultra baja, cancelación activa de ruido, pantalla digital y sonido estéreo,incluye estuche de carga, carga USB-C y diseño portátil",
        precio: 2800,
        categoria: "audifonos",
        imagen : img.src = "foto-productos/audifono-x15.jpg",
        destacado: false 
    },*/
    {
        id: 3, 
        nombre: "P47",
        descripcion: "Bluetooth + manos libres  + SD es compatible con iOS, Android y Windows. Cuenta con micrófono incorporado, Bluetooth, micro-SD.Microfono Sensible que proporciona llamadas de voz claras.Aisla el ruido ambiental",
        precio: 4000,
        categoria: "audifonos",
        imagen : img.src = "foto-productos/p47-rojos.jpg",
        destacado: false 
    },
    /*{ AGOTADO
        id: 7,
        nombre: "P47",
        descripcion: "Bluetooth + manos libres  + SD es compatible con iOS, Android y Windows. Cuenta con micrófono incorporado, Bluetooth, micro-SD.Microfono Sensible que proporciona llamadas de voz claras.Aisla el ruido ambiental",
        precio: 4000,
        categoria: "audifonos",
        imagen : img.src = "foto-productos/audifono-p47blanco.jpg",
        destacado: true
    },*/
    /*{ AGOTADO
        id: 8, 
        nombre: "P47",
        descripcion: "Bluetooth + manos libres  + SD es compatible con iOS, Android y Windows. Cuenta con micrófono incorporado, Bluetooth, micro-SD.Microfono Sensible que proporciona llamadas de voz claras.Aisla el ruido ambiental",
        precio: 3500,
        categoria: "audifonos",
        imagen : img.src = "foto-productos/audifono-p47verde.jpg",
        destacado: false 
    },*/
    
    // PRODUCTOS CATEGORIA:BOCINAS
    /*{ AGOTADO
        id: 13,
        nombre: "Bocinas A012",
        descripcion: "Altavoz portátil inalámbrico A012 con 5W de potencia, resistente al agua, batería de 800 mAh y Bluetooth. Compatible con tarjetas de memoria.",
        precio: 4000,
        categoria: "bocinas",
        imagen : img.src = "foto-productos/bocina-a012.jpg",
        destacado: true
    },*/
    /*{ AGOTADO
        id: 14, 
        nombre: "Karaoke",
        descripcion: "Karaoke portátil con un micrófono, altavoz Bluetooth de alta fidelidad con luces de colores, compatible con tarjeta TF, USB y AUX, tamaño mini para viajes, fiestas y exteriores (rosa).",
        precio: 4000,
        categoria: "bocinas",
        imagen : img.src = "foto-productos/bocina-karaoke-rosa.jpg",
        destacado: false 
    },*/
    /*{AGOTADO
        id: 3,
        nombre: "Karaoke",
        descripcion: "Karaoke portátil con un micrófono, altavoz Bluetooth de alta fidelidad con luces de colores, compatible con tarjeta TF, USB y AUX, tamaño mini para viajes, fiestas y exteriores (beig).",
        precio: 4000,
        categoria: "bocinas",
        imagen : img.src = "foto-productos/bocina-karaoke-beig.jpg",
        destacado: true 
    },*/
    // PRODUCTOS CATEGORIA:OTROS
    
    {
        id: 4,
        nombre: "Ventiladores de Mano",
        descripcion: "Mini ventiladores de mano recargables , 2 velocidades y linterna ,cable Usb C. COLORES DISPONIBLES: ",
        precio:2000,
        categoria: "otros",
        imagen : img.src = "foto-productos/ventilador-mini.webp",
        destacado: true
    },
    {
        id: 5,
        nombre: "Mouse Inalambrico",
        descripcion: "Mouse inalámbrico Bluetooth-Recargable, silencioso, modo dual (Bluetooth 5.2 y USB) con luces LED-Portátil para laptop, escritorio y tableta (negro).",
        precio: 3000,
        categoria: "otros",
        imagen: img.src = "foto-productos/mouse-recargable.jpg" ,
        destacado: false
    },
    /*{ AGOTADO
        id: 5,
        nombre: "Balanza",
        descripcion: "Balanza digital portátil de alta precisión con gancho, gramos , onzas, libras.",
        precio: 1800,
        categoria: "otros",
        imagen: img.src = "foto-productos/Balanza.jpg",
        destacado: true
    },*/
    /*{ AGOTADO
        id: 18, 
        nombre: "Pesa de Joyeria",
        descripcion: "Báscula digital de bolsillo- 500g, 1000g, de precisión para joyería, oro, diamantes y piedras preciosas - portátil con 7 modos de unidades, funciona con baterías (AAA no incluidas), pesaje de joyería, diseño compacto, plástico duradero.",
        precio: 2500,
        categoria: "otros",
        imagen: img.src = "foto-productos/pesa-joyeria.jpg",
        destacado: true
    },*/
    /*{ AGOTADO
        id: 6,
        nombre: "Trimer T9",
        descripcion: "Cortadora de cabello profesional T9 USB,color negra, máquina eléctrica recargable para cortar pelo, rasuradora para hombres, kit de peluquería.",
        precio: 2800,
        categoria: "otros",
        imagen: img.src = "foto-productos/trimer-t9negra.jpg",
        destacado: false
    },*/
    { 
        id: 7,
        nombre: "Cargador Inalambrico",
        descripcion: "Compatible con todos los telefonos que soportan carga inalambrica, potencia 30watts, carga rapida, conector tipo C.",
        precio: 2800,
        categoria: "otros",
        imagen: img.src = "foto-productos/cargador-ina.jpg",
        destacado: true
    },
    { 
        id: 8,
        nombre: "Ventilador de Campaña",
        descripcion: "Ventilador portátil para camping con luz LED, 270° de giro, USB, a batería 10400mAh, esencial para viajes y actividades al aire libre color negro.",
        precio: 20000,
        categoria: "otros",
        imagen: img.src = "foto-productos/ventilador-recargable-negro.jpg",
        destacado: false
    },
    
    { 
        id: 9,
        nombre: "Ventilador de Campaña",
        descripcion: "Ventilador portátil para camping con luz LED, 270° de giro, USB, a batería 8000 mAh, esencial para viajes y actividades al aire libre color naranja.",
        precio:17500,
        categoria: "otros",
        imagen: img.src = "foto-productos/ventilador-recargable-naranja.jpg",
        destacado: false
    },
    /*{ AGOTADO
        id: 20,
        nombre: "Trimer T9",
        descripcion: "Cortadora de cabello profesional T9 USB,color dorada, máquina eléctrica recargable para cortar pelo, rasuradora para hombres, kit de peluquería.",
        precio: 2600,
        categoria: "otros",
        imagen: img.src = "foto-productos/trimer-t9dorada.jpg",
        destacado: false
    },*/
    // PRODUCTOS CATEGORIA:DECORACION
    {
        id: 10,
        nombre: "Lampara de noche",
        descripcion: "lampara de noche en forma de esfera, con soporte de madera y dibujo de saturno , cable de alimentacion tipo USB ",
        precio:2500,
        categoria: "decoracion",
        imagen : img.src = "foto-productos/lampara.jpg",
        destacado: true
    },
    /*{ AGOTADO
        id: 11,
        nombre: "Humificador X5",
        descripcion: "Difusor de Aromas y Humidificador: Puede Agregar Aceites Esenciales Como Difusor de Aromaterapia en el Aire, ¡Su Dormitorio Fresco y Plantas Saludables con Rocío Frío y Luz Nocturna! Super Silencioso - Ideal para Oficina, Hogar, Dormitorio, color: blanco.",
        precio: 2500,
        categoria: "decoracion",
        imagen: img.src = "foto-productos/humificador-x5blanco.jpg",
        destacado: false
    },*/
    {
        id: 12,
        nombre: "Luces LED",
        descripcion: "Luces de Hadas USB,10m, 100 LED,  Alambre Plateado, 8 Modos de Iluminación, Control Remoto, Alimentado por USB, No Recargable, Control de Botón, para Boda, Dormitorio, Techo, Decoración Navideña.",
        precio: 3000,
        categoria: "decoracion",
        imagen: img.src = "foto-productos/led-multicolor.jpg",
        destacado: true
    },
    {
        id: 13,
        nombre: "Luces LED",
        descripcion: "Luces de Hadas USB,10m, 100 LED,  Alambre Plateado, 8 Modos de Iluminación, Control Remoto, Alimentado por USB, No Recargable, Control de Botón, para Boda, Dormitorio, Techo, Decoración Navideña.",
        precio: 3000,
        categoria: "decoracion",
        imagen: img.src = "foto-productos/led-blanco.jpg",
        destacado: true
    },
    {
        id: 14,
        nombre: "Luces LED",
        descripcion: "Luces de Hadas USB,10m, 100 LED,  Alambre Plateado, 8 Modos de Iluminación, Control Remoto, Alimentado por USB, No Recargable, Control de Botón, para Boda, Dormitorio, Techo, Decoración Navideña.",
        precio: 3000,
        categoria: "decoracion",
        imagen: img.src = "foto-productos/led-amarillo.jpg",
        destacado: true
    },
    /*{ AGOTADO
        id: 24,
        nombre: "Humificador X5",
        descripcion:"Difusor de Aromas y Humidificador: Puede Agregar Aceites Esenciales Como Difusor de Aromaterapia en el Aire, ¡Su Dormitorio Fresco y Plantas Saludables con Rocío Frío y Luz Nocturna! Super Silencioso - Ideal para Oficina, Hogar, Dormitorio, color: verde.",
        precio: 2100,
        categoria: "decoracion",
        imagen: img.src = "foto-productos/humificador-x5verde.jpg",
        destacado: false
    },*/
    /*{ AGOTADO
        id: 25,
        nombre: "Humificador X5",
        descripcion: "Difusor de Aromas y Humidificador: Puede Agregar Aceites Esenciales Como Difusor de Aromaterapia en el Aire, ¡Su Dormitorio Fresco y Plantas Saludables con Rocío Frío y Luz Nocturna! Super Silencioso - Ideal para Oficina, Hogar, Dormitorio, color: rosa.",
        precio: 2100,
        categoria: "decoracion",
        imagen: img.src = "foto-productos/humificador-x5rosa.jpg",
        destacado: false
    },*/
    /*{ AGOTADO
        id: 26,
        nombre: "LED STRIP LIGHTS 30m",
        descripcion: "Tira de luces LED , dos rollos 15 metros cada uno ( Total  de 30 m), con control por aplicación y control remoto de 44 teclas, sincronización de música y temporizador, ideal para decorar el dormitorio, el hogar o fiestas.",
        precio: 6000,
        categoria: "decoracion",
        imagen: img.src = "foto-productos/luces-led30m.jpg",
        destacado: true
    }*/
    
    /*{ AGOTADO
        id: 12,
        nombre: "LED STRIP LIGHTS 5M",
        descripcion: "Tira de luces LED ,5 metros, con control por aplicación y control remoto de 44 teclas, sincronización de música y temporizador, ideal para decorar el dormitorio, el hogar o fiestas.",
        precio: 3200,
        categoria: "decoracion",
        imagen: img.src = "foto-productos/led5m.jpg",
        destacado: true
    },*/
    /*{ AGOTADO
        id: 30,
        nombre: "LED STRIP LIGHTS 10M",
        descripcion: "Tira de luces LED ,  10 metros, (sin mando), control y programacion por botones, ideal para decorar el dormitorio, el hogar o fiestas.",
        precio: 3500,
        categoria: "decoracion",
        imagen: img.src = "foto-productos/led10m.jpg",
        destacado: true
    },*/
    // PRODUCTOS CATEGORIA:REPRODUCTORAS DE CARRO
    {
        id: 15,
        nombre: "Reproductora MP5",
        descripcion: "Reproductor MP5 Android Auto KEPEAK de 17.78 cm - Estéreo para auto 2DIN con conectividad inalámbrica, radio FM, pantalla táctil, entradas USB/SD/Aux, control desde el volante, llamadas y mensajes de texto manos libres, ajuste universal para la mayoría de autos.",
        precio:40000,
        categoria: "reproductoras",
        imagen : img.src = "foto-productos/reproductora-de-carro.jpg",
        destacado: false 
    },
    {
        id: 16,
        nombre: "Reproductora MP5",
        descripcion: "radio para auto con pantalla LCD de 17.78 cm, doble DIN, ecualizador, reproductor MP5 con entrada USB/SD/AUX, enlace espejo, control remoto, 4 luces LED para cámara de reversa, reproductor multimedia portátil.",
        precio:40000,
        categoria: "reproductoras",
        imagen : img.src = "foto-productos/reproductora-de-carro2.jpg",
        destacado: false 
    },
    {
        id: 17,
        nombre: "Reproductora MP3",
        descripcion: "Estéreo para auto CAMECHO 1DIN con control remoto, audio digital inalámbrico, música, 12V, MP3, USB/SD/AUX-IN.",
        precio:15000,
        categoria: "reproductoras",
        imagen : img.src = "foto-productos/reproductora-de-carro3.jpg",
        destacado: false 
    },
    {
        id: 18,
        nombre: "Car Rdio Full Screen",
        descripcion: "Radio para auto con pantalla de 9″ Android de la marca Auto GP ofrece una experiencia avanzada en entretenimiento vehicular. Con un diseño de 2 din, esta pantalla táctil de 9″ proporciona una visualización clara y amplia. Con 2 GB de RAM y 16 GB de almacenamiento interno, ofrece un rendimiento fluido. La conectividad Bluetooth permite la reproducción inalámbrica y las llamadas manos libres. El GPS integrado proporciona navegación precisa, mientras que el puerto USB y la reproducción MP5 ofrecen opciones versátiles para el entretenimiento.",
        precio:50000,
        categoria: "reproductoras",
        imagen : img.src = "foto-productos/reproductora-de-carro4.jpg",
        destacado: false 
    },
    

    
];