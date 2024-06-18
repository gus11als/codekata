function solution(s) {
    var answer = 0; // 분리한 문자열의 개수를 저장할 변수
    var i = 0; // 현재 읽고 있는 문자열의 위치를 저장할 변수
    
    while (i < s.length) {
        let x = s[i]; // 현재 분리할 문자열의 첫 글자
        let countX = 0; // x 글자의 개수
        let countNotX = 0; // x가 아닌 글자의 개수
        while (i < s.length) {
            if (s[i] === x) {
                countX++; // x 글자의 개수를 증가
            } else {
                countNotX++; // x가 아닌 글자의 개수를 증가
            }
            i++; // 다음 글자로 이동
            if (countX === countNotX) {
                break; // 두 횟수가 같아지면 분리 완료
            }
        }
        answer++; // 분리한 문자열의 개수를 증가
    }
    
    return answer; // 최종 분리한 문자열의 개수를 반환
}