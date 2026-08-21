/* =========================================================
   BEAUTY DEMO
   APP.JS — MOTOR PRINCIPAL
========================================================= */


/* =========================================================
   01. INICIO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    aplicarIdentidad();

    aplicarColores();

    controlarModulos();

    renderizarHero();

    renderizarNosotros();

    renderizarServicios();

    renderizarGaleria();

    renderizarProfesionales();

    renderizarTestimonios();

    renderizarContacto();

    configurarWhatsApp();

    configurarLightbox();

    configurarMenu();

    configurarHeader();

    iniciarPreloader();

});


/* =========================================================
   02. IDENTIDAD
========================================================= */

function aplicarIdentidad() {

    const nombre = negocio.info.nombre;


    // Título del navegador
    document.title = nombre;


    // Elementos que tengan data-business-name
    document
        .querySelectorAll("[data-business-name]")
        .forEach(elemento => {

            elemento.textContent = nombre;

        });


    // Elementos que tengan data-business-slogan
    document
        .querySelectorAll("[data-business-slogan]")
        .forEach(elemento => {

            elemento.textContent =
                negocio.info.eslogan;

        });


    // Logos
    document
        .querySelectorAll("[data-business-logo]")
        .forEach(elemento => {

            elemento.src =
                negocio.info.logo;

            elemento.alt =
                `Logo de ${nombre}`;

        });

}


/* =========================================================
   03. COLORES
========================================================= */

function aplicarColores() {

    const root =
        document.documentElement;


    root.style.setProperty(
        "--color-principal",
        negocio.colores.principal
    );


    root.style.setProperty(
        "--color-secundario",
        negocio.colores.secundario
    );


    root.style.setProperty(
        "--color-fondo",
        negocio.colores.fondo
    );


    root.style.setProperty(
        "--color-superficie",
        negocio.colores.superficie
    );


    root.style.setProperty(
        "--color-texto",
        negocio.colores.texto
    );


    root.style.setProperty(
        "--color-texto-suave",
        negocio.colores.textoSuave
    );

}


/* =========================================================
   04. CONTROL DE MÓDULOS
========================================================= */

function controlarModulos() {

    Object.entries(negocio.modulos)
        .forEach(([modulo, activo]) => {

            const elementos =
                document.querySelectorAll(
                    `[data-module="${modulo}"]`
                );


            elementos.forEach(elemento => {

                if (!activo) {

                    elemento.remove();

                }

            });

        });

}


/* =========================================================
   05. HERO
   VIDEO + IMAGEN DE RESPALDO
========================================================= */

function renderizarHero() {

    const titulo =
        document.querySelector(
            "[data-hero-title]"
        );


    const descripcion =
        document.querySelector(
            "[data-hero-description]"
        );


    const imagen =
        document.querySelector(
            "[data-hero-image]"
        );


    const video =
        document.querySelector(
            "#hero-video"
        );


    const videoSource =
        document.querySelector(
            "#hero-video-source"
        );


    const heroImage =
        document.querySelector(
            "#hero-image"
        );


    /* -----------------------------------------
       TEXTO DEL HERO
    ----------------------------------------- */

    if (titulo) {

        titulo.innerHTML =
            negocio.info.eslogan;

    }


    if (descripcion) {

        descripcion.textContent =
            negocio.info.descripcion;

    }


    /* -----------------------------------------
       IMAGEN ANTIGUA / COMPATIBILIDAD
    ----------------------------------------- */

    if (imagen) {

        imagen.style.backgroundImage =
            `url("${negocio.info.heroImg}")`;

    }


    /* -----------------------------------------
       COMPROBAR CONFIGURACIÓN DEL HERO
    ----------------------------------------- */

    if (
        !negocio.hero ||
        !heroImage
    ) {

        return;

    }


    const usarVideo =
        negocio.hero.usarVideo;


    const videoURL =
        negocio.hero.video;


    const imagenURL =
        negocio.hero.imagen ||
        negocio.info.heroImg;


    /* -----------------------------------------
       CONFIGURAR IMAGEN DE RESPALDO
    ----------------------------------------- */

    heroImage.style.backgroundImage =
        `url("${imagenURL}")`;


    /* -----------------------------------------
       SI NO SE QUIERE VIDEO
    ----------------------------------------- */

    if (
        usarVideo !== true ||
        !video ||
        !videoSource
    ) {

        if (video) {

            video.style.display =
                "none";

        }


        heroImage.style.display =
            "block";

        return;

    }


    /* -----------------------------------------
       CONFIGURAR VIDEO
    ----------------------------------------- */

    videoSource.src =
        videoURL;


    video.muted = true;

    video.autoplay = true;

    video.loop = true;

    video.playsInline = true;

    video.setAttribute(
        "muted",
        ""
    );

    video.setAttribute(
        "autoplay",
        ""
    );

    video.setAttribute(
        "loop",
        ""
    );

    video.setAttribute(
        "playsinline",
        "");


    /* -----------------------------------------
       ESTADO INICIAL
    ----------------------------------------- */

    video.style.display =
        "none";

    heroImage.style.display =
        "block";


    /* -----------------------------------------
       CUANDO EL VIDEO ESTÁ LISTO
    ----------------------------------------- */

    video.addEventListener(
        "canplay",
        () => {

            video.style.display =
                "block";

            heroImage.style.display =
                "none";


            const reproduccion =
                video.play();


            if (
                reproduccion &&
                typeof reproduccion.catch === "function"
            ) {

                reproduccion.catch(
                    error => {

                        console.warn(
                            "Beauty Demo: no se pudo reproducir el video.",
                            error
                        );


                        video.style.display =
                            "none";

                        heroImage.style.display =
                            "block";

                    }
                );

            }

        },
        {
            once: true
        }
    );


    /* -----------------------------------------
       SI EL VIDEO FALLA
    ----------------------------------------- */

    video.addEventListener(
        "error",
        () => {

            console.warn(
                "Beauty Demo: el video no pudo cargarse. Se utilizará la imagen de respaldo."
            );


            video.style.display =
                "none";


            heroImage.style.display =
                "block";

        },
        {
            once: true
        }
    );


    /* -----------------------------------------
       CARGAR VIDEO
    ----------------------------------------- */

    video.load();

}


/* =========================================================
   06. NOSOTROS
========================================================= */

function renderizarNosotros() {

    const descripcion =
        document.querySelector(
            "[data-about-description]"
        );

    const imagen =
        document.querySelector(
            "[data-about-image]"
        );


    /* -----------------------------------------
       DESCRIPCIÓN
    ----------------------------------------- */

    if (descripcion) {

        descripcion.textContent =
            negocio.info.descripcion;

    }


    /* -----------------------------------------
       IMAGEN
    ----------------------------------------- */

    if (imagen) {

        imagen.src =
            negocio.info.nosotrosImg;

        imagen.alt =
            `Experiencia de ${negocio.info.nombre}`;

    }

}


/* =========================================================
   07. SERVICIOS
========================================================= */

function renderizarServicios() {

    const contenedor =
        document.querySelector(
            "[data-services-container]"
        );


    if (!contenedor) return;


    contenedor.innerHTML = "";


    negocio.servicios.forEach(
        (servicio, index) => {

            const tarjeta =
                document.createElement("article");


            tarjeta.className =
                "service-card";


            tarjeta.innerHTML = `

                <div class="service-card__image">

                    <img
                        src="${servicio.imagen}"
                        alt="${servicio.titulo}"
                        loading="lazy"
                    >

                </div>


                <div class="service-card__overlay"></div>


                <div class="service-card__content">

                    <span class="service-card__number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>


                    <h3 class="service-card__title">
                        ${servicio.titulo}
                    </h3>


                    <p class="service-card__description">
                        ${servicio.descripcion}
                    </p>

                </div>

            `;


            contenedor.appendChild(tarjeta);

        }
    );

}


/* =========================================================
   08. GALERÍA
========================================================= */

function renderizarGaleria() {

    const contenedor =
        document.querySelector(
            "[data-gallery-container]"
        );


    if (!contenedor) return;


    contenedor.innerHTML = "";


    negocio.galeria.forEach(
        (imagen, index) => {

            const elemento =
                document.createElement("div");


            elemento.className =
                "gallery__item";


            elemento.innerHTML = `

                <img
                    src="${imagen}"
                    alt="Galería ${negocio.info.nombre} ${index + 1}"
                    loading="lazy"
                >
 
            `;


            contenedor.appendChild(elemento);

        }
    );

}

function configurarLightbox() {

    const lightbox = document.querySelector(".lightbox");

    if (!lightbox) return;

    const image = lightbox.querySelector(".lightbox__image");
    const counter = lightbox.querySelector(".lightbox__counter");
    const closeButton = lightbox.querySelector(".lightbox__close");
    const prevButton = lightbox.querySelector(".lightbox__arrow--prev");
    const nextButton = lightbox.querySelector(".lightbox__arrow--next");

    const galleryItems = document.querySelectorAll(".gallery__item");

    if (!galleryItems.length) return;

    let currentIndex = 0;

    const images = [];

    galleryItems.forEach((item, index) => {

        const img = item.querySelector("img");

        if (!img) return;

        images.push({
            src: img.src,
            alt: img.alt || ""
        });

        item.addEventListener("click", () => {

            currentIndex = index;

            abrirLightbox();

        });

    });


    function abrirLightbox() {

        if (!images[currentIndex]) return;

        image.src = images[currentIndex].src;
        image.alt = images[currentIndex].alt;

        actualizarContador();

        lightbox.classList.add("is-open");

        document.body.style.overflow = "hidden";

    }


    function cerrarLightbox() {

        lightbox.classList.remove("is-open");

        document.body.style.overflow = "";

    }


    function mostrarAnterior() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        actualizarImagen();

    }


    function mostrarSiguiente() {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        actualizarImagen();

    }


    function actualizarImagen() {

        image.style.opacity = "0";

        image.style.transform = "scale(0.94)";

        setTimeout(() => {

            image.src = images[currentIndex].src;
            image.alt = images[currentIndex].alt;

            actualizarContador();

            image.style.opacity = "1";
            image.style.transform = "scale(1)";

        }, 180);

    }


    function actualizarContador() {

        if (!counter) return;

        counter.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;

    }


    closeButton?.addEventListener("click", cerrarLightbox);

    prevButton?.addEventListener("click", mostrarAnterior);

    nextButton?.addEventListener("click", mostrarSiguiente);


    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            cerrarLightbox();
        }

    });


    document.addEventListener("keydown", (event) => {

        if (!lightbox.classList.contains("is-open")) return;

        if (event.key === "Escape") {
            cerrarLightbox();
        }

        if (event.key === "ArrowLeft") {
            mostrarAnterior();
        }

        if (event.key === "ArrowRight") {
            mostrarSiguiente();
        }

    });

}

/* =========================================================
   09. PROFESIONALES
========================================================= */

function renderizarProfesionales() {

    const contenedor =
        document.querySelector(
            "[data-professionals-container]"
        );


    if (!contenedor) return;


    contenedor.innerHTML = "";


    negocio.profesionales.forEach(
        profesional => {

            const tarjeta =
                document.createElement("article");


            tarjeta.className =
                "professional-card";


            tarjeta.innerHTML = `

                <div class="professional-card__image">

                    <img
                        src="${profesional.imagen}"
                        alt="${profesional.nombre}"
                        loading="lazy"
                    >

                </div>


                <div class="professional-card__content">

                    <h3 class="professional-card__name">
                        ${profesional.nombre}
                    </h3>


                    <span class="professional-card__role">
                        ${profesional.cargo}
                    </span>

                </div>

            `;


            contenedor.appendChild(tarjeta);

        }
    );

}


/* =========================================================
   10. TESTIMONIOS
========================================================= */

function renderizarTestimonios() {

    const contenedor =
        document.querySelector(
            "[data-testimonials-container]"
        );


    if (!contenedor) return;


    contenedor.innerHTML = "";


    negocio.testimonios.forEach(
        testimonio => {

            const tarjeta =
                document.createElement("article");


            tarjeta.className =
                "testimonial-card";


            tarjeta.innerHTML = `

                <div class="testimonial-card__quote">
                    “
                </div>


                <p class="testimonial-card__text">
                    ${testimonio.texto}
                </p>


                <span class="testimonial-card__author">
                    ${testimonio.nombre}
                </span>

            `;


            contenedor.appendChild(tarjeta);

        }
    );

}


/* =========================================================
   11. CONTACTO
========================================================= */

function renderizarContacto() {

    const contacto =
        negocio.contacto;


    document
        .querySelectorAll("[data-phone]")
        .forEach(elemento => {

            elemento.textContent =
                contacto.telefono;


            if (elemento.tagName === "A") {

                elemento.href =
                    `tel:${contacto.telefono}`;

            }

        });


    document
        .querySelectorAll("[data-email]")
        .forEach(elemento => {

            elemento.textContent =
                contacto.email;


            if (elemento.tagName === "A") {

                elemento.href =
                    `mailto:${contacto.email}`;

            }

        });


    document
        .querySelectorAll("[data-address]")
        .forEach(elemento => {

            elemento.textContent =
                contacto.direccion;

        });


    document
        .querySelectorAll("[data-hours]")
        .forEach(elemento => {

            elemento.textContent =
                contacto.horarios;

        });


    document
        .querySelectorAll("[data-instagram]")
        .forEach(elemento => {

            elemento.href =
                contacto.instagram;

        });


    document
        .querySelectorAll("[data-facebook]")
        .forEach(elemento => {

            elemento.href =
                contacto.facebook;

        });

}


/* =========================================================
   12. WHATSAPP
========================================================= */

function configurarWhatsApp() {

    const numero =
        negocio.contacto.whatsapp;


    const mensaje =
        negocio.contacto.mensajeWhatsapp;


    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;


    document
        .querySelectorAll("[data-whatsapp]")
        .forEach(elemento => {

            elemento.href =
                url;


            elemento.target =
                "_blank";


            elemento.rel =
                "noopener noreferrer";

        });

}


/* =========================================================
   13. MENÚ MOBILE
========================================================= */

function configurarMenu() {

    const boton =
        document.querySelector(
            "[data-menu-toggle]"
        );


    const menu =
        document.querySelector(
            "[data-menu]"
        );


    if (!boton || !menu) return;


    boton.addEventListener(
        "click",
        () => {

            menu.classList.toggle(
                "is-open"
            );

        }
    );


    menu
        .querySelectorAll("a")
        .forEach(enlace => {

            enlace.addEventListener(
                "click",
                () => {

                    menu.classList.remove(
                        "is-open"
                    );

                }
            );

        });

}


/* =========================================================
   14. HEADER AL HACER SCROLL
========================================================= */

function configurarHeader() {

    const header =
        document.querySelector(
            "[data-header]"
        );


    if (!header) return;


    function actualizarHeader() {

        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        actualizarHeader
    );


    actualizarHeader();

}


/* =========================================================
   15. PRELOADER
========================================================= */

function iniciarPreloader() {

    const preloader =
        document.querySelector("#preloader");


    const barra =
        document.querySelector("#preloader-bar");


    const porcentaje =
        document.querySelector("#preloader-percent");


    const nombre =
        document.querySelector("#preloader-name");


    if (!preloader) return;


    // Nombre del negocio
    if (nombre) {

        nombre.textContent =
            negocio.info.nombre.toUpperCase();

    }


    let progreso = 0;


    const intervalo =
        setInterval(() => {

            progreso +=
                Math.floor(
                    Math.random() * 8
                ) + 3;


            if (progreso >= 100) {

                progreso = 100;

                clearInterval(intervalo);

            }


            // Actualizar barra
            if (barra) {

                barra.style.width =
                    `${progreso}%`;

            }


            // Actualizar porcentaje
            if (porcentaje) {

                porcentaje.textContent =
                    `${progreso}%`;

            }


            // Cuando llega al 100%
            if (progreso === 100) {

                setTimeout(() => {

                    preloader.classList.add(
                        "is-hidden"
                    );

                }, 500);

            }

        }, 80);

}


/* =========================================================
   16. PROTECCIÓN BÁSICA
========================================================= */

window.addEventListener(
    "error",
    error => {

        console.warn(
            "Beauty Demo:",
            error.message
        );

    }
);