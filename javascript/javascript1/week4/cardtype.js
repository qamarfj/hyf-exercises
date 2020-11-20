function getCardInfo(number) {
    const tex = number.toString();
    const digit = tex[0];
    switch (digit) {
        case '4': return 'visa';
            break;
        case '5': return 'master';
            break;

    }
}
console.log(getCardInfo(4781321334789876));