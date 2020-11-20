function getCharacterFrequencies(text) {
    let textArr = [
        { character: 'a', count: 0 },
        { character: 'b', count: 0 },
        { character: 'c', count: 0 },
        { character: 'd', count: 0 },
        { character: 'e', count: 0 },
        { character: 'f', count: 0 },
        { character: 'g', count: 0 },
        { character: 'h', count: 0 },
        { character: 'i', count: 0 },
        { character: 'j', count: 0 },
        { character: 'k', count: 0 },
        { character: 'l', count: 0 },
        { character: 'm', count: 0 },
        { character: 'n', count: 0 },
        { character: 'o', count: 0 },
        { character: 'p', count: 0 },
        { character: 'q', count: 0 },
        { character: 'r', count: 0 },
        { character: 's', count: 0 },
        { character: 't', count: 0 },
        { character: 'u', count: 0 },
        { character: 'v', count: 0 },
        { character: 'w', count: 0 },
        { character: 'x', count: 0 },
        { character: 'y', count: 0 },
        { character: 'z', count: 0 },
    ];
    for (let i = 0; i < text.length; i++) {

        for (let j = 0; j < textArr.length; j++) {
            if (textArr[j].character === text[i]) {
                textArr[j].count += 1;
                isfound = true;
                break;
            }
        }

    }
    const textArrSorted = [];
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i].count > 0) {
            textArrSorted.push(textArr[i])
        }
    }
    return { characters: textArrSorted, length: textArrSorted.length, };
}
console.log(getCharacterFrequencies('happy'));
