const solution = require('./lineEncoding.js');

test('test 1', () => {
    expect(solution("aabbbc")).toBe("2a3bc");
});

test('test 2', () => {
    expect(solution("abbcabb")).toBe("a2bca2b");
});

test('test 3', () => {
    expect(solution("abcd")).toBe("abcd");
});

test('test 4', () => {
    expect(solution("zzzz")).toBe("4z");
});

test('test 5', () => {
    expect(solution("wwwwwwwawwwwwww")).toBe("7wa7w");
});

test('test 6', () => {
    expect(solution("ccccccccccccccc")).toBe("15c");
});

test('test 7', () => {
    expect(solution("qwertyuioplkjhg")).toBe("qwertyuioplkjhg");
});

test('test 8', () => {
    expect(solution("ssiiggkooo")).toBe("2s2i2gk3o");
});

test('test 9', () => {
    expect(solution("adfaaa")).toBe("adf3a");
});

test('test 10', () => {
    expect(solution("bbjaadlkjdl")).toBe("2bj2adlkjdl");
});
