module.exports = function toReadable(number) {
    if (number === 0) return 'zero';
    objNumbers = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        200: ''
    }
    let result = '';
    let hund = '';
    let tens = '';
    switch (true) {
        case (number > 20 && number < 100):
            result = objNumbers[String(number - (number % 10))] + ' ' + objNumbers[String(number % 10)];
            return result.trim();
        case (number > 99 && number < 1000):
            hund = String(number)[0];
            tens = String(number)[1];
            if (tens === '0') tens = '20'; // in some reason 00 string is undefined, just replace for some string in obj
            if (number % 100 > 10 && number % 100 < 20) {
                result = objNumbers[hund] +
                    ' ' + objNumbers[String(100)] +
                    ' ' + objNumbers[String(number % 100)];
            } else result = (objNumbers[hund] +
                    ' ' + objNumbers[String(100)] +
                    ' ' + objNumbers[tens + '0']).trim() +
                ' ' + objNumbers[String(number % 10)];
            return result.trim();
    }

    for (let key in objNumbers) {
        if (Number(key) === number) return objNumbers[key];
    }
}

console.log(module.exports(909));
