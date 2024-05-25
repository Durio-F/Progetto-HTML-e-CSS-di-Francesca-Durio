document.addEventListener('DOMContentLoaded', function() {
    // Seleziona gli elementi
    const navbar = document.querySelector('.navbar');
    const nav = document.querySelector('nav');

    // Aggiungi un evento di click al pulsante della barra delle icone
    navbar.addEventListener('click', function() {
        // Mostra o nasconde il menu al click
        if (nav.classList.contains('wide')) {
            nav.classList.remove('wide');
        } else {
            nav.classList.add('wide');
        }
    });

    // Gestione dell'invio del modulo di contatto
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene il comportamento di invio predefinito

        emailjs.init("4AIx4Kh6bhrhbNHBM"); // Chiave pubblica

        var params = {
            sendername: document.getElementById('sendername').value,
            subject: document.getElementById('subject').value,
            replyto: document.getElementById('replyto').value,
            from_phone: document.getElementById('from_phone').value,
            message: document.getElementById('message').value,
        };

        var serviceID = "service_6ige3du"; // Email service ID
        var templateID = "template_msfccww"; // Email template ID

        emailjs.send(serviceID, templateID, params)
            .then(function(response) {
                alert("Email inviata con successo!");
            }, function(error) {
                alert("Si è verificato un errore durante l'invio dell'email: " + JSON.stringify(error));
            });
    });
});
