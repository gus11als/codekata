function solution(s) {
    var answer = '';
    var length = s.length;
    var middleIndex = Math.floor(length / 2); // 가운데 인덱스 구하기

    if (length % 2 === 0) {
        // 문자열의 길이가 짝수인 경우
        answer = s[middleIndex - 1] + s[middleIndex]; // 가운데 두 글자 반환
    } else {
        // 문자열의 길이가 홀수인 경우
        answer = s[middleIndex]; // 가운데 한 글자 반환
    }

    return answer;
}

// 테스트
console.log(solution("abcde")); // "c"
console.log(solution("qwer")); // "we"
