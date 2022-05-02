import express from 'express'
import { greetNewPerson, hello, helloPerson } from './src/hello.js'
import { welcomeMessage } from './src/welcome.js'

const PORT = 3030
const app = express()
app.use(express.json())

app.get('/', welcomeMessage)    // function in a different file path

app.get('/hello', hello)    // simple GET request

app.get('/hello/:person', helloPerson)  // pass a parameter within the GET method

app.post('/hello', greetNewPerson)  // POST method - uses Postman to send the POST with the local host and interact with teh app

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}...`))
