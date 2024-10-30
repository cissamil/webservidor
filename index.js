//importar o modulo nativo http do node
const http= require('http')
const users = require('./mock/users')
const { json } = require('stream/consumers')
//criar a instancia do servidor
const server = http.createServer((request, response)=>{

    console.log(`Request Method ${request.method} | Endpoint ${request.url}` )
    if(request.url == "/users" && request.method === "GET"){
        response.writeHead(200, {"Content-Type": "application/json"})
        response.end(JSON.stringify(users))
    }
    else{
        //definindo o cabeçalho de resposta
    response.writeHead(200,{'Content-Type': 'text/html'})
    //finaliza a resposta, comunicação completa
    response.end("<h2>Rota padão</h2>") 
    }

  
})
//subir o servidor
server.listen(3000, ()=> console.log('Servidor on-line na porta 3000'))
