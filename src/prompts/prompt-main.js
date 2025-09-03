import chalk from "chalk"

//pede as ações que serão realizadas
const mainPrompt ={
    name: "select",
    description: chalk.yellow("Escolha a ferramenta (1 - QRCODE o 2 - PASSWORD)"),
    pattern: /^[1-2]+$/, //permite entrar apenas 1 e 2
    message: chalk.red("Escolha apenas entre 1 e 2"), //retorna em caso de erro
    required: true //enquanto nao digitar as opções repete
}

export default mainPrompt
