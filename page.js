nt.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    
    // Récupération des valeurs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validation simple (optionnelle)
    if (name && email && message) {
        // Affichage d'un message de succès
        document.getElementById('formMessage').textContent = 'Merci pour votre message, nous vous répondrons bientôt.';
        document.getElementById('contactForm').reset(); // Réinitialisation du formulaire
    } else {
        // Affichage d'un message d'erreur
        document.getElementById('formMessage').textContent = 'Veuillez remplir tous les champs.';
    }