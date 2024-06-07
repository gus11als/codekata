function solution(a, b, n) {
    var answer = 0;
    
    while (n >= a) {
        var newBottles = Math.floor(n / a) * b;
        answer += newBottles;
        n = (n % a) + newBottles;
    }
    
    return answer;
}

console.log(solution(2, 1, 20)); // 출력: 19
console.log(solution(3, 1, 20)); // 출력: 9