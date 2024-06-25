const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour parser le body en JSON
app.use(express.json());

app.post('/modify-html', (req, res) => {
    if (req.body.translations && req.body.translations.length > 0 && req.body.translations[0].text) {
        // Extraire le HTML du champ "text"
        let htmlContent = req.body.translations[0].text;

        // Convertir le HTML en JSON pour échapper automatiquement les guillemets
        let jsonResponse = JSON.stringify({ html: htmlContent });

        // Envoyer le HTML échappé encapsulé dans un objet JSON
        res.send(jsonResponse);
    } else {
        // Envoyer une réponse d'erreur si les données nécessaires ne sont pas présentes
        res.status(400).send('Invalid request data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
