"use strict";
/* This is a classic programming task.

Create a function that prints the numbers from 1 to 100. But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

When that works. Make the two number for multiples into parameters. So it can be called like this:

fizzBuzz(4, 12);*/
function fizzBuzz(a, b) {
    for (let i = a; i <= b; i++) {
        /** i%3 return 0 when i is multples of 3 which is false so, need to change variable valut to true */
        const multiplesOf3 = i % 3 ? false : true;
        const multiplesOf5 = i % 5 ? false : true;
        if (multiplesOf3 && multiplesOf5) {
            console.log('FizzBuzz')
        }
        else if (multiplesOf3 && !multiplesOf5) {
            console.log('Fizz')
        }
        else if (!multiplesOf3 && multiplesOf5) {
            console.log('Buzz')
        }
        else {
            console.log(i)
        }

    }
}
fizzBuzz(2, 15);