import permittedCharacters from "./utills/permitted-characters.js"

//definir a senha 
async function handle() {
    let characters = []
    let password = ""

    const passwordLength = process.env.PASSWORD_LENGTH
    characters = await permittedCharacters()

    //pega o caracter da posição index e acresenta a password enquanto não alcançar o máximo de caracteres
    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * characters.length) //sorteia a posição para psuh de caracter
        password += characters[index]
    }
    return password
}

export default handle