const axios = require('axios');

module.exports = async (body, event) => {
    /* 
    Nesse arquivo deve-se implemen0tar as regras de validação/negócio a serem aplicadas na customização

    Ao retornar uma mensagem de validação, a biblioteca FSW-AWS-LAMBDA entenderá que houve alguma consistência realizada 
    e será retornada uma mensagem de validação para o produto.
    */

    if(body.name == "Felipe Gonçalves") {
        return 'O nome informado no payload de entrada é Felipe Gonçalves';
    }
};

