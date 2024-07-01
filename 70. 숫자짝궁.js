function solution(X, Y) {
    let countX = Array(10).fill(0);
    let countY = Array(10).fill(0);

    // X와 Y의 각 숫자 빈도 계산
    for (let char of X) {
        countX[char]++;
    }

    for (let char of Y) {
        countY[char]++;
    }

    // 공통 숫자와 그 빈도를 찾고 가장 큰 숫자부터 결과를 만들기
    let result = [];
    for (let i = 9; i >= 0; i--) {
        let commonCount = Math.min(countX[i], countY[i]);
        if (commonCount > 0) {
            result.push(String(i).repeat(commonCount));
        }
    }

    // 결과를 문자열로 변환
    let answer = result.join('');

    // 예외 처리: 공통 숫자가 없는 경우와 "0"으로만 이루어진 경우
    if (answer === '') {
        return "-1";
    } else if (answer[0] === '0') {
        return "0";
    } else {
        return answer;
    }
}