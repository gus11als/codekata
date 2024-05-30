function solution(s) {
    const numWords = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };

    let result = "";
    let word = "";

    for (let char of s) {
        if (isNaN(char)) {
            word += char;
            if (numWords[word] !== undefined) {
                result += numWords[word];
                word = "";
            }
        } else {
            result += char;
        }
    }

    return parseInt(result, 10);
}
