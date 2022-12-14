

export const LuhnAlgorithm = (cardNumber: number): Object => {
    let checksum: number = 0;
    let cardValidation: { errorCode: number; info: string };

    const cardNumberArray: Array<number> = String(cardNumber)
        .split('')
        .map((num) => {
            return Number(num);
        });

    for (let i = 0; i < cardNumberArray.length; i += 2) {
        cardNumberArray[i] = cardNumberArray[i] * 2;
        if (cardNumberArray[i] > 9) {
            cardNumberArray[i] = cardNumberArray[i] - 9;
        }
    }

    cardNumberArray.map((digit) => (checksum += digit));

    if (checksum % 10 == 0) {
        cardValidation = { errorCode: 0, info: 'The credit card number is valid!' };
        return cardValidation;
    } else {
        cardValidation = {
            errorCode: 1,
            info: 'The credit card number is not valid!',
        };
        return cardValidation;
    }
};