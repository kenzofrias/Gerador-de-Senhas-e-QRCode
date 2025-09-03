

\# PROJETO GERADOR DE SENHAS E QRCODE

\## Sobre o projeto

Este projeto foi criado juntamente ao bootcampo Mobile Developer da \[Digital Innovation One (DIO)](https://www.dio.me/) visando o aperfeiçoamento na utilização de pacotes e na organização de códigos.



O projeto foi desenvolvido utilizando diferentes pacotes para uma modularização mais dinâmca. Além disso, diferentes funções e tarefas foram direcionadas a diferentes pastas e arquivos para tornar a leitura do código mais fácil.



Primeiramente o usuário digita o tipo de ação que deseja receber (QrCode ou Senha). Para o QrCode são solicitados outras informações, enquanto que a senha é gerada de forma aleatória (entre letras minúsculas, números e characteres especiais.) para o usuário.



\## Demonstração

```mermaid

graph TD;

&nbsp;   index-->create password;

&nbsp;   index-->create qrcode;

&nbsp;   index-->prompt main;

&nbsp;   create password-->handle password;

&nbsp;   handle password-->permitted characters;

&nbsp;   create qrcode-->handle qrcode;

&nbsp;   create qrcode--->prompt qrcode;

```



\## Pacotes Utilizados 

\- \[chalk](https://www.npmjs.com/package/chalk)

\- \[prompt](https://www.npmjs.com/package/npm/v/9.6.7?activeTab=readme)

\- \[qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)



\## Tecnologias

!\[](https://img.shields.io/badge/-Node.js-217a00?logo=nodedotjs\&logoColor=white\&style=plastic)

!\[](https://img.shields.io/badge/-JavaScript-fbff00?logo=javascript\&logoColor=white\&style=plastic)



