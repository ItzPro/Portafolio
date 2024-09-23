/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*==================== ABOUT TABS ====================*/

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContents) => {
      tabContents.classList.remove("tab__active");
    });

    target.classList.add("tab__active");

    tabs.forEach((tab) => {
      tab.classList.remove("tab__active");
    });
    tab.classList.add("tab__active");
  });
});

//Seccion de about se adapte dependiendo de la informacion del tab
const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsItem = document.querySelectorAll(".tabs__item");
const tabsContent = document.querySelector(".tabs__content");

// Función para activar un tab
function activateTab(target) {
  // Ocultar todos los elementos de contenido
  tabsItem.forEach((item) => {
    item.classList.remove("active");
    item.style.display = "none"; // Ocultar el contenido
  });

  // Activar el contenido correspondiente
  const activeItem = document.querySelector(target);
  activeItem.classList.add("active");
  activeItem.style.display = "block"; // Mostrar el contenido activo

  // Ajustar la altura de la sección
  const contentHeight = activeItem.scrollHeight; // Obtener la altura del contenido activo
  tabsContent.style.height = `${contentHeight}px`; // Ajustar la altura de la sección
}

// Manejar el clic en los botones de tab
tabsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;

    // Eliminar la clase 'tab__active' de todos los botones
    tabsBtn.forEach((b) => b.classList.remove("tab__active"));
    btn.classList.add("tab__active"); // Activar el botón clicado

    // Activar el tab correspondiente
    activateTab(target);
  });
});

// Activar el tab por defecto al cargar la página
const defaultTab = document.querySelector(".tabs__btn.tab__active").dataset
  .target;
activateTab(defaultTab);

/*=============== CONTACT FORM =============== */

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactSubject = document.getElementById("contact-subject"),
  contactMessage = document.getElementById("contact-message"),
  errorMessage = document.getElementById("error-message"); // Asegúrate de que este ID sea correcto en tu HTML

const sendEmail = (e) => {
  e.preventDefault(); // Prevenir la recarga de la página

  // Verificación de si están vacíos los campos
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactSubject.value === "" ||
    contactMessage.value === ""
  ) {
    errorMessage.textContent = "Por favor llene los campos";
  } else {
    // Consume el servicio de envío de correo
    emailjs
      .sendForm(
        "service_5dalmkg",
        "template_6fnsr3h",
        "#contact-form",
        "lghDfaVAfg9J5-EiP"
      )
      .then(
        () => {
          errorMessage.classList.add("color-first");
          errorMessage.textContent = "Mensaje Enviado";

          // Remover el mensaje pasados 5 segundos
          setTimeout(() => {
            errorMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPs! Algo salió mal", error);
        }
      );

    // Limpiar los inputs
    contactName.value = "";
    contactEmail.value = "";
    contactSubject.value = "";
    contactMessage.value = "";
  }
};

// Añadir el event listener para el envío del formulario
contactForm.addEventListener("submit", sendEmail);
