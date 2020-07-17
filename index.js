const {
    lambdaEvent,
    lambdaResponse,
    AsyncRuleValidator
} = require('@seniorsistemas/fsw-aws-lambda');

const RF01 = require('./src/rules/RF01');

exports.handler = async (event) => {
    // Faz o parse do body da requisição HTTP recebida
    const body = lambdaEvent.parseBody(event);
    // Faz a construção do objeto "eventInfo", que contem as informações do evento recibido pela lambda
    const eventInfo = lambdaEvent.createEventInfo(event);
    
    // Execute o AsyncRuleValidator com as regras de validação importadas
    return new AsyncRuleValidator(body,eventInfo)
        .validate([
            RF01
        ])
        .then(validationResult => {
            if(validationResult.hasErrors()) {
                return lambdaResponse.validationError(validationResult.getErrorsAsString());
            }

            return lambdaResponse.success(body);
        })
        .catch(lambdaResponse.internalError);
};


