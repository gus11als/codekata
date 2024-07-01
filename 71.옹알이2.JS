function solution(babbling) {
    var answer = 0;
    var validBabblings = ["aya", "ye", "woo", "ma"];
    
    // 정규 표현식을 사용하여 발음할 수 있는 단어를 검증합니다.
    babbling.forEach(word => {
        var isValid = true;
        var lastPattern = "";
        
        while (word.length > 0) {
            var found = false;
            for (var i = 0; i < validBabblings.length; i++) {
                if (word.startsWith(validBabblings[i])) {
                    if (lastPattern === validBabblings[i]) {
                        isValid = false;
                        break;
                    }
                    lastPattern = validBabblings[i];
                    word = word.substring(validBabblings[i].length);
                    found = true;
                    break;
                }
            }
            if (!found) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) {
            answer++;
        }
    });
    
    return answer;
}