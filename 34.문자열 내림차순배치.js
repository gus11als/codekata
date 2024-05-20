function solution(s) {
    // 문자열을 배열로 변환
    let arr = s.split('');
    
    // 배열을 정렬: 대소문자를 구분하여 정렬
    arr.sort((a, b) => {
        // 대문자는 소문자보다 작은 것으로 간주
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    });
    
    // 배열을 다시 문자열로 변환
    return arr.join('');
}


console.log(solution("Zbcdefg"));  // "gfedcbZ"