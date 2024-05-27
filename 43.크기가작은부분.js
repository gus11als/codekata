function solution(t, p) {
    var answer = 0;
    var pLength = p.length;
    var pNum = parseInt(p, 10);  // p를 정수로 변환
    
    // t의 부분 문자열을 추출하여 비교
    for (var i = 0; i <= t.length - pLength; i++) {
        var subStr = t.substring(i, i + pLength);
        var subNum = parseInt(subStr, 10);  // 부분 문자열을 정수로 변환
        
        // 부분 문자열의 수가 p의 수보다 작거나 같은지 확인
        if (subNum <= pNum) {
            answer++;
        }
    }
    
    return answer;
}
