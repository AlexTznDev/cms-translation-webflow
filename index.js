const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // pour supporter les corps de requêtes JSON
app.use(bodyParser.urlencoded({ extended: true })); // pour supporter les corps de requêtes URL-encoded

app.post('/modify-html', (req, res) => {
    const htmlContent = req.body.html;
    const modifiedHtml = htmlContent.replace(/'/g, " "); // Exemple de modification
    res.send(modifiedHtml);
});

app.listen(port, () => {
    console.log(`Server test2 running on ${port}`);
});
