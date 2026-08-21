const negocio = {

    // =========================================
    // IDENTIDAD DEL NEGOCIO
    // =========================================
info: {

    nombre: "Beauty Caprice",

    eslogan: "Tu belleza, tu esencia.",

    descripcion:
        "Un espacio creado para resaltar tu belleza, cuidar de ti y convertir cada visita en una experiencia especial.",

    logo: "assets/logo.jpg",

    heroImg: "assets/hero.jpg",

    nosotrosImg: "assets/nosotros.jpg"

},

    // =========================================
    // HERO
    // =========================================

    hero: {

        // true  = utilizar video
        // false = utilizar únicamente imagen
        usarVideo: true,

        // Video principal del Hero
        video: "assets/hero.mp4",

        // Imagen utilizada como respaldo
        imagen: "assets/hero.jpg"

        



    },


    // =========================================
    // COLORES DE LA MARCA
    // =========================================

    colores: {

        principal: "#171515",

        secundario: "#c9a96e",

        fondo: "#faf9f7",

        superficie: "#ffffff",

        texto: "#242222",

        textoSuave: "#77716d"

    },


    // =========================================
    // MÓDULOS
    // =========================================

    modulos: {

        hero: true,

        nosotros: true,

        servicios: true,

        galeria: true,

        profesionales: true,

        testimonios: true,

        contacto: true,

        whatsapp: true

    },


    // =========================================
// NOSOTROS
// =========================================

nosotros: {

    titulo: "Belleza que refleja tu esencia.",

    descripcion:
        "En Beia Beauty Space creamos experiencias de belleza pensadas para que cada persona se sienta especial, cuidada y auténtica.",

    imagen:
        "assets/nosotros.jpg"

},


    // =========================================
    // SERVICIOS
    // =========================================

    servicios: [

        {
            titulo: "Corte y estilismo",

            descripcion:
                "Diseñamos un estilo que resalte tu personalidad y esencia.",

            imagen:
                "assets/servicios/servicio-1.jpg"
        },


        {
            titulo: "Coloración",

            descripcion:
                "Técnicas de color pensadas para transformar y cuidar tu cabello.",

            imagen:
                "assets/servicios/servicio-2.jpg"
        },


        {
            titulo: "Manicure & Pedicure",

            descripcion:
                "Cuidado y detalle para unas manos y pies impecables.",

            imagen:
                "assets/servicios/servicio-3.jpg"
        }

    ],


    // =========================================
    // GALERÍA
    // =========================================

    galeria: [

        "assets/galeria/galeria-1.jpg",

        "assets/galeria/galeria-2.jpg",

        "assets/galeria/galeria-3.jpg",

        "assets/galeria/galeria-4.jpg",

        "assets/galeria/galeria-5.jpg",

        "assets/galeria/galeria-final.jpg",

    ],


    // =========================================
    // PROFESIONALES
    // =========================================

    profesionales: [

        {
            nombre: "Profesional Beauty",

            cargo: "Especialista en belleza",

            imagen:
                "assets/profesionales/profesional-1.jpg"
        },


        {
            nombre: "Especialista Beauty",

            cargo: "Stylist",

            imagen:
                "assets/profesionales/profesional-2.jpg"
        },


        {
            nombre: "Beauty Expert",

            cargo: "Especialista",

            imagen:
                "assets/profesionales/profesional-3.jpg"
        }

    ],


    // =========================================
    // TESTIMONIOS
    // =========================================

    testimonios: [

        {
            texto:
                "Una experiencia increíble. El servicio, la atención y cada detalle hicieron que quisiera volver.",

            nombre: "Cliente Beauty"
        },


        {
            texto:
                "El lugar es hermoso y la atención es excelente. Me encantó el resultado.",

            nombre: "Cliente Beauty"
        },


        {
            texto:
                "Definitivamente un espacio para desconectarse y disfrutar.",

            nombre: "Cliente Beauty"
        }

    ],


    // =========================================
    // CONTACTO
    // =========================================

    contacto: {

        whatsapp: "573012261366",

        mensajeWhatsapp:
            "Hola Beauty Caprice, quiero información sobre sus servicios por favor.",

        instagram:
            "https://www.instagram.com/beautycapricee/",

        facebook:
            "https://www.facebook.com/Beautycapriceee/?locale=es_LA",

        telefono:
            "573012261366",

        email:
            "hola@beautycaprice.com.co",

        direccion:
            "📍 Cl. 72 #47-54, Norte-Centro Histórico, Barranquilla, Atlántico.",

        horarios:
            "Lunes a viernes · 7:00 AM - 7:00 PM | Sábado · 8:00 AM - 7:00 PM | Domingo · 9:00 AM - 5:00 PM",

        mapa:
            ""

    }

};

 
