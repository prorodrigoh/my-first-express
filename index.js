import express from 'express'
import { hello, helloPerson } from './src/hello.js'
import { welcomeMessage } from './src/welcome.js'

const PORT = 3030
const app = express()


app.get('/', welcomeMessage)

app.get('/hello', hello)

app.get('/hello/:person', helloPerson)


app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}...`))
