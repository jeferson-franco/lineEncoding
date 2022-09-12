function solution(s) {
    let result = '';
    let current = '';
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (current === s[i]) {
            count++;
        } else {
            if (count > 1) {
                result += count;
            }
            result += current;
            current = s[i];
            count = 1;
        }
    }
    if (count > 1) {
        result += count;
    }
    result += current;
    return result;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test lineEncoding

// alternative solution
