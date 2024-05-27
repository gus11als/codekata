function solution(number) {
    var answer = 0;
    var n = number.length;
    
    // 세 중첩 반복문을 사용하여 모든 조합을 검사
    for (var i = 0; i < n - 2; i++) {
        for (var j = i + 1; j < n - 1; j++) {
            for (var k = j + 1; k < n; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}
