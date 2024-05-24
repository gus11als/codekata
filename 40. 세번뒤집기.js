function solution(n) {
    // 10진법 수를 3진법으로 변환
    let ternary = n.toString(3);

    // 3진법 수를 뒤집기
    let reversedTernary = ternary.split('').reverse().join('');

    // 뒤집어진 3진법 수를 다시 10진법으로 변환
    let answer = parseInt(reversedTernary, 3);

    return answer;
}
