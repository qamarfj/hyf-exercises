function printSubStr(str, low, high) {
    let string = '';
    for (let i = low; i <= high; ++i) {
        string += str[i];
    }
    console.log(string)
}
function longestPalSubstr(str) {
    // get length of input string 
    const n = str.length;

    // All substrings of length 1 
    // are palindromes 
    let maxLength = 1;
    let start = 0;

    // Nested loop to mark start and end index 
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let flag = 1;

            // Check palindrome 
            for (let k = 0; k < (j - i + 1) / 2; k++)
                if (str[i + k] != str[j - k])
                    flag = 0;

            // Palindrome 
            if (flag && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }

    console.log("Longest palindrome substring is: ");
    printSubStr(str, start, start + maxLength - 1);

    // return length of LPS 
    return maxLength;
}
const text = "ac";
console.log(longestPalSubstr(text));