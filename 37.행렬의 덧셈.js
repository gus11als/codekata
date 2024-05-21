function solution(arr1, arr2) {
    // 결과를 저장할 행렬 초기화
    var answer = [];
    
    // 행렬의 행 개수만큼 반복
    for (var i = 0; i < arr1.length; i++) {
        // 각 행의 결과를 저장할 배열 초기화
        var row = [];
        
        // 각 행의 열 개수만큼 반복
        for (var j = 0; j < arr1[i].length; j++) {
            // 같은 위치의 값을 더해서 row에 추가
            row.push(arr1[i][j] + arr2[i][j]);
        }
        
        // 완성된 행을 결과 행렬에 추가
        answer.push(row);
    }
    
    return answer;
}
