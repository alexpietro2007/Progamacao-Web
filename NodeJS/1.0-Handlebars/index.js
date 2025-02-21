import exphbs from 'express-handlebars';
import express from 'express';

const app = express();

// Configure o Handlebars como mecanismo de modelo
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/pg2', (req, res) => {
    res.render("page2");
});

app.listen(3000, () => {
    console.log("App rodando na porta 3000");
});
