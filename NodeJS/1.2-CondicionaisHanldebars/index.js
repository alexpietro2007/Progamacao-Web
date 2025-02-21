import exphbs from 'express-handlebars';
import express from 'express';

const app = express();

// Configure o Handlebars como mecanismo de modelo
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const user = {
        firstName: 'Alex',
        lastName: 'Cerqueira',
    }
    const autentificator = false
    res.render('home', {user: user, autentificator});
});

app.get("/dashboard", (req, res) =>{
    res.render('paginaInternaSistema')
})

app.listen(3000, () => {
    console.log("App rodando na porta localhost:3000");
});
