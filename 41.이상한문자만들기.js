function solution(s) {
    // 입력 문자열을 공백을 기준으로 분리하여 배열로 만듭니다.
    var words = s.split(' ');

    // 각 단어에 대해 반복문을 돌립니다.
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var newWord = '';
        
        // 각 단어의 문자에 대해 반복문을 돌립니다.
        for (var j = 0; j < word.length; j++) {
            if (j % 2 === 0) {
                // 짝수번째 문자는 대문자로 변환합니다.
                newWord += word[j].toUpperCase();
            } else {
                // 홀수번째 문자는 소문자로 변환합니다.
                newWord += word[j].toLowerCase();
            }
        }
        // 변환된 단어를 다시 배열에 저장합니다.
        words[i] = newWord;
    }

    // 배열의 단어들을 공백으로 합쳐서 최종 문자열을 만듭니다.
    var answer = words.join(' ');
    return answer;
}
