function solution(s) {
    // 문자열의 길이가 4 또는 6인지 확인
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    // 모든 문자가 숫자인지 확인하는 함수
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i]) || s[i] === ' ') {
            return false;
        }
    }
    
    // 조건을 모두 통과하면 true 반환
    return true;
}
console.log(solution("a234"));    // false
console.log(solution("1234"));    // true
console.log(solution("123456"));  // true
console.log(solution("abcdef"));  // false
console.log(solution("12345a"));  // false
console.log(solution("12345678"));// false
