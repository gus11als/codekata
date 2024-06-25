function solution(s, skip, index) {
    var answer = '';
    const skipSet = new Set(skip);  // skip 문자를 Set으로 변환하여 빠르게 체크 가능하게 함
    
    for (let char of s) {
        let count = 0;
        let newChar = char;
        
        while (count < index) {
            newChar = String.fromCharCode(newChar.charCodeAt(0) + 1);
            if (newChar > 'z') {
                newChar = 'a';
            }
            if (!skipSet.has(newChar)) {
                count++;
            }
        }
        
        answer += newChar;
    }
    
    return answer;
}