/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== ABOUT TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContents) => {
            tabContents.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });
        tab.classList.add('tab__active');
    });
});

/*=============== CONTACT FORM =============== */

const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactSubject = document.getElementById('contact-subject'),
      contactMessage = document.getElementById('contact-message'),
      errorMessage = document.getElementById('error-message'); // Asegúrate de que este ID sea correcto en tu HTML

const sendEmail = (e) => {
    e.preventDefault(); // Prevenir la recarga de la página

    // Verificación de si están vacíos los campos
    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        contactSubject.value === '' ||
        contactMessage.value === ''
    ) {
        errorMessage.textContent = 'Por favor llene los campos';
    } else {
        // Consume el servicio de envío de correo
        emailjs.sendForm('service_5dalmkg', 'template_6fnsr3h', '#contact-form', 'lghDfaVAfg9J5-EiP')
            .then(() => {
                errorMessage.classList.add('color-first');
                errorMessage.textContent = 'Mensaje Enviado';

                // Remover el mensaje pasados 5 segundos
                setTimeout(() => {
                    errorMessage.textContent = '';
                }, 5000);
            }, (error) => {
                alert('OOPs! Algo salió mal', error);
            }
        );

        // Limpiar los inputs
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
};

// Añadir el event listener para el envío del formulario
contactForm.addEventListener('submit', sendEmail);
