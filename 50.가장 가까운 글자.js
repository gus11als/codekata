function solution(s) {
    var answer = [];
    var lastIndex = {};  // 각 문자의 마지막 출현 위치를 저장하는 객체

    for (var i = 0; i < s.length; i++) {
        var char = s[i];

        if (lastIndex[char] === undefined) {
            // 이전에 한 번도 출현하지 않은 문자일 경우
            answer.push(-1);
        } else {
            // 이전에 출현한 문자일 경우
            answer.push(i - lastIndex[char]);
        }

        // 현재 문자의 출현 위치를 업데이트
        lastIndex[char] = i;
    }

    return answer;
}
