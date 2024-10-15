module.exports = function toReadable (number) {
    const digitsArray = (number === 0 ? [0] : splitToDigits(number));
    const hundredPostfix = 'hundred';
    const thousandPostfix = 'thousand';
    const millionPostfix = 'million';
    const billionPostfix = 'billion';
    let result = '';
    let partOfNumber;

    if (number === 0) {
        return 'zero';
    }

    for (let i = 0; i < digitsArray.length; i++) {
        partOfNumber = digitsArray[i];

        switch (i) {
            case 0:
                result = getOnes(partOfNumber);
                break;
            case 1:
                if (partOfNumber === 1) {
                    result = getfirstTens(digitsArray[1], digitsArray[0]);
                } else {
                    result = `${getTens(partOfNumber)} ${result}`;
                }
                break;
            case 2:
                result = `${getOnes(partOfNumber)} ${hundredPostfix} ${result}`;
                break;
            case 3:
                result = `${getOnes(partOfNumber)} ${thousandPostfix} ${result}`;
                break;
            case 4:
                result = `${getTens(partOfNumber)} ${result}`;
                break;
            case 5:
                result = `${getOnes(partOfNumber)} ${hundredPostfix} ${result}`;
                break;
            case 6:
                result = `${getOnes(partOfNumber)} ${millionPostfix} ${result}`;
                break;
            case 7:
                result = `${getTens(partOfNumber)} ${result}`;
                break;
            case 8:
                result = `${getOnes(partOfNumber)} ${billionPostfix} ${result}`;
                break;
                
        }
    }

    return result.replace(/ +/g, ' ').trim();
}

function splitToDigits(number) {
    let digits = [];

    while (number) {
        digits.push(number % 10);
        number = Math.floor(number/10);
    }
    return digits;
}

function getOnes(number) {
    let one;
    switch (number) {
        case 1:
            one = 'one';
            break;
        case 2:
            one = 'two';
            break;
        case 3:
            one = 'three';
            break;
        case 4:
            one = 'four';
            break;
        case 5:
            one = 'five';
            break;
        case 6:
            one = 'six';
            break;
        case 7:
            one = 'seven';
            break;
        case 8:
            one = 'eight';
            break;
        case 9:
            one = 'nine';
            break;
        default:
            one = '';
            break;
    }

    return one;
};

function getfirstTens(ten, one) {
    let number = + (`${ten}${one}`);
    let result;

    switch (number) {
        case 10:
            result = 'ten';
            break;
        case 11:
            result = 'eleven';
            break;
        case 12:
            result = 'twelve';
            break;
        case 13:
            result = 'thirteen';
            break;
        case 14:
            result = 'fourteen';
            break;
        case 15:
            result = 'fifteen';
            break;
        case 16:
            result = 'sixteen';
            break;
        case 17:
            result = 'seventeen';
            break;
        case 18:
            result = 'eighteen';
            break;
        case 19:
            result = 'nineteen';
            break;
    }

    return result;
};

function getTens(number) {
    let tens;

    switch (number) {
        case 0:
            tens = '';
            break;
        case 2:
            tens = 'twenty';
            break;
        case 3:
            tens = 'thirty';
            break;
        case 4:
            tens = 'forty';
            break;
        case 5:
            tens = 'fifty';
            break;
        case 6:
            tens = 'sixty';
            break;
        case 7:
            tens = 'seventy';
            break;
        case 8:
            tens = 'eighty';
            break;
        case 9:
            tens = 'ninety';
            break;
    }

    return tens;
};
