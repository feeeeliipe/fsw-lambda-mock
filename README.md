# FSW-LAMBDA-MOCK

Estrutura de projeto NodeJS para simular a execução de uma função lambda para construção de customizações na Plataforma Senior X.

## Objetivo

Possibilitar a construção de customizações em ambiente local, sem a necessidade de um ambiente na AWS/Cloud9 durante o desenvolvimento.

## Principais diretórios e arquivos do projeto

  - Arquivo **index.js**
    - Esse é o arquivo principal da funcão lambda, por onde a execução será inicializada. 
    - Nesse projeto de exemplo esse arquivo já utiliza a estrutura indicada para customizações, fazendo a utilização da biblioteca FSW-AWS-LAMBDA, que disponibiliza alguns utilitários para construção de customizações para Plataforma Senior X. 

  - Diretório "src\rules"
    - Nesse diretório serão criadas as regras de validação. 
    - Para esse projeto de exemplo, as validações podem ser implementadas no próprio arquivo "RF01.js" já criado no diretório ou novos arquivos no mesmo formato podem ser criados. Caso novos arquivos sejam criados, os mesmos devem ser importados no "index.js" do projeto e repassados como parâmetro para execução no AsyncRuleValidator.

  - Diretório "tests"
    - Esse diretório armazena os arquivos utilizados para simular a chamada da função lambda, como o payload que será enviado para a execução da função e o arquivo que realiza a execução da "lambda". 
    - Obs: Esse diretório não existirá em ambiente produtivo (Cloud9). 

    - Arquivo "payload.json"
      - Nesse arquivo, deve-se informar o ambiente, token e payload que será utilizado para simular a chamada da "função lambda". 

    - Arquivo "fsw-lambda-mock-starter.js"
      - Esse é o arquivo responsável por simular a execução da lambda/chamada HTTP. 

## Como utilizar ? 

 1. Clonar o repositório para a maquina local;
 2. Instalar as dependências do projeto através do comando: npm install;
 3. Implementar as validações que deseja através do arquivo "RF01.js" ou criar novos arquivos de validação
 4. Definir através do arquivo "payload.json" os parâmetros que serão enviados para execução da "lambda"; 
 5. Executar o projeto através do comando: npm run dev
 6. Ao executar o passo 5, os parâmetros definidos no arquivo "payload.json" serão repassados para a "função lambda" e as validações serão executadas. O resultado da execução será exibido no console. 