export function parseRoutePath(path){
    const routeParametersRegex = /:([a-zA-Z]+)/g   // quando é um parametro nao nomeado. 

    const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)")

    const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`)
    

    return pathRegex

    
}

