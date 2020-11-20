"use strict"
function getRenderedGame(position) {
    let output = "*******\n"
    for (const pos of position) {
        output += "*"
        for (const elem of pos) {
            output += elem + '*';
        }
        output += "\n"
    }
    output += "*******\n"
    return output;
}
const position = [
    ['x', 'o', ' '],
    [' ', 'o', ' '],
    [' ', 'o', 'x']
];

const renderedGame = getRenderedGame(position);
console.log(renderedGame);

/*
*******
*x*o* *
* *o* *
* *o*x*
*******
*/
function getGameinfo(position) {
    let hasEnded = false;
    let winner;
    let loser;

    /** a,b,c
        d,e,f
        g,h,i */
    /* it can also implenment by camparing all three rows then all thre columns and both diaganals*/
    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {
            //check current postion is not empty
            if (position[i][j] !== ' ') {
                // current postion is a
                if (i === 0 && j === 0) {
                    /*  a=b=c check row1
                        a=d=g check col1
                        a=e=i  check diaganol*/
                    if (position[i][j] === position[i][j + 1] && position[i][j] === position[i][j + 2] || position[i][j] === position[i + 1][j] && position[i + 1][j] === position[i + 2][j] || position[i][j] === position[i + 1][j + 1] && position[i][j] === position[i + 2][j + 2]) {
                        winner = position[i][j];
                        hasEnded = true
                        break;
                    }
                }
                // current postion is b
                else if (i === 0 && j === 1) {
                    /**b=e=h  check col2 */
                    if (position[i][j] === position[i + 1][j] && position[i][j] === position[i + 2][j]) {
                        winner = position[i][j];
                        hasEnded = true
                        break;
                    }
                }
                //current position c
                else if (i === 0 && j === 2) {
                    /**c=e=g check diagonal
                        c=f=i check col3*/
                    if (position[i][j] === position[i + 1][j - 1] && position[i][j] === position[i + 2][j - 2] || position[i][j] === position[i + 1][j] && position[i][j] === position[i + 2][j]) {
                        winner = position[i][j];
                        hasEnded = true
                        break;  //do some
                    }
                }
                // current postion is d or g
                else if ((i === 1 || i === 2) && j === 0) {
                    /**d=e=f check row2

                        g=h=i check row3*/
                    if (position[i][j] === position[i][j + 1] && position[i][j] === position[i][j + 2]) {

                        winner = position[i][j];
                        hasEnded = true
                        break;//do some
                    }
                }
            }
        }

    }


    if (winner === 'x') {
        loser = 'o';
    }
    else if (winner === 'o') {
        loser = 'x';
    }
    return {
        winner: winner,
        loser: loser,
        hasEnded: hasEnded,
    }
}
const position1 = [
    ['x', 'o', ' '],
    [' ', 'o', ' '],
    [' ', 'o', 'x']
];

const gameInfo = getGameinfo(position1);
console.log(gameInfo);
const position2 = [
    ['x', 'o', ' '],
    [' ', ' ', ' '],
    [' ', 'o', 'x']
];
const gameInfo2 = getGameinfo(position2);
console.log(gameInfo2);