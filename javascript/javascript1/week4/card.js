function formatCreditCardNumber(number) {
    if (typeof number !== 'number') {
        return 'Please enter vald number';
    }
    else {

        const format = number.toString();
        let formatNumber = '';
        let index = 0;
        for (let i = 0; i < format.length - 4;) {

            console.log(i)
            for (let j = i; j < i + 4; j++) {
                formatNumber += format[j]
            }
            formatNumber += ' '
            i += 4;
            index = i;
        }
        for (let i = 0; i < (format.length % 4); i++) {
            formatNumber += format[index + i]
        }

        return {

            original: number,
            formatted: formatNumber,
        }
    }
}
const formattedCreditCardObject = formatCreditCardNumber(123456789122334);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/