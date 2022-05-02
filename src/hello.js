export function hello (request, response){
    response.send('Hello. Is it me you\'re looking for?')
}

export const helloPerson = (request, response) => {
    const {person} = request.params
    response.send(`Hello, ${person}.`)
}