import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import session, { Cookie } from 'express-session';

const cl = console.log
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

app.use('./public', express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
}
)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App rodando na porta localhost:${PORT}`));