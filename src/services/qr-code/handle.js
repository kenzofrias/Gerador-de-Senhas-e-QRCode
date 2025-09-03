import qr from "qrcode-terminal"
import chalk from "chalk";

//resposta em caso de erro ou resultado
async function handle(err, result) {
    if(err){
        console.log("Erro on application");
        return
    }

    //pega o tamanho que será mostrado o qrcode
    const isSmall = result.type == 2 

    //gera o qrcode a partir do link e tamanho
    qr.generate(result.link, {small: isSmall}, (qrcode)=>{
        console.log(chalk.green("QR CODE GERADO COM SUCESSO:\n"))
        console.log(qrcode)
    })
}

export default handle