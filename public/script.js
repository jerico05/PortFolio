const PUBLIC_KEY = "3wvhLTNNVEhdEbjyj";
const SERVICE_ID = "service_btkxq44";
const TEMPLATE_ID = "template_lb6lk4q";

emailjs.init(PUBLIC_KEY);

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
    .then(() => {
        alert("Email envoyé ✅");
        form.reset(); // vider le formulaire
    })
    .catch((error) => {
        alert("Erreur ❌ : " + error.text);
    });
});

