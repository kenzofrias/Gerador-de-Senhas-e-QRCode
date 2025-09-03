import prompt from "prompt"
import promptQRCODE from "../../prompts/prompt-qrcode.js"
import handle from "./handle.js"

//gerar grcode
async function createQRCODE() {
    //pede os parâmetros para criar o qrcode
    prompt.get(promptQRCODE, handle) 

    //mostra o qrcode
    prompt.start()
}

export default createQRCODE
