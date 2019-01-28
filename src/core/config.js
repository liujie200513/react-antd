
const getAppUrl=(httpPort,httpsPort)=>{
    let protocol = window.location.protocol
    let port = protocol.includes ('https')? httpsPort: httpPort
    let url = protocol +'//'+ window.location.hostname
    if(port) {
        url = url +':'+ port
    }
    return url
}
const development = 'http://localhost:3000'
const production = getAppUrl('','')
export const config = {
    development : development,
    production : production
}