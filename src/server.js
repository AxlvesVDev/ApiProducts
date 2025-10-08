import http from "http" 
import { jsonBodyHandler } from "./middlerwares/jsonHandler.js"
import { routeHandler } from "./middlerwares/routeHandler.js"

const server = http. createServer(async(request, response) => {

    const { method, url } = request
    await jsonBodyHandler(request, response)
    routeHandler(request, response)

 
})

server.listen(3333)