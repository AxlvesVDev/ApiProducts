export async function jsonBodyHandler(request, response){
 const buffers = []

 // coleta os chuncks de dados da requisição. 
 for await (const chunk of request){
    buffers.push(chunk)
 }


try {
   
    // concatena os chunk e converte para string. Em seguida, converte a string para json. 
    request.body = JSON.parse(Buffer.concat(buffers).toString())
} catch (error) {
    // caso nao tenha "nada" no body
    request.body = null 

    // podemos também adicionar, qual é o tempo da resposta. 
    //(define o header de resposta com JSON.)

    response.setHeader("Content-type", "application/json")

}
}