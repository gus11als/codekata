function solution(s, n) {
    var answer = '';
    
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        
        if (char === ' ') {
            answer += ' ';
            continue;
        }
        
        var charCode = s.charCodeAt(i);
        
        // Check if the character is an uppercase letter
        if (char >= 'A' && char <= 'Z') {
            answer += String.fromCharCode((charCode - 65 + n) % 26 + 65);
        } 
        // Check if the character is a lowercase letter
        else if (char >= 'a' && char <= 'z') {
            answer += String.fromCharCode((charCode - 97 + n) % 26 + 97);
        }
    }
    
    return answer;
}
