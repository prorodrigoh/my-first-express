import express from 'express'
import { greetNewPerson, hello, helloPerson } from './src/hello.js'
import { welcomeMessage } from './src/welcome.js'

const PORT = 3030
const app = express()
app.use(express.json())

app.get('/', welcomeMessage)

app.get('/hello', hello)

app.get('/hello/:person', helloPerson)

app.post('/hello', greetNewPerson)

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}...`))
