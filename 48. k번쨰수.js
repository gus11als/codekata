function solution(array, commands) {
    var answer = [];
    
    for (var i = 0; i < commands.length; i++) {
        var command = commands[i];
        var start = command[0];
        var end = command[1];
        var k = command[2];
        
        // array의 start번째부터 end번째까지 자른 부분 배열을 생성합니다.
        var slicedArray = array.slice(start - 1, end);
        
        // 자른 부분 배열을 오름차순으로 정렬합니다.
        slicedArray.sort((a, b) => a - b);
        
        // 정렬된 배열에서 k번째 숫자를 찾습니다.
        var kthElement = slicedArray[k - 1];
        
        // 찾은 숫자를 결과 배열에 추가합니다.
        answer.push(kthElement);
    }
    
    return answer;
}
