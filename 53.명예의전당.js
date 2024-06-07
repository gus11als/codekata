function solution(k, score) {
    var hallOfFame = [];
    var answer = [];
    
    for (var i = 0; i < score.length; i++) {
        hallOfFame.push(score[i]);
        hallOfFame.sort((a, b) => b - a);  // 내림차순 정렬
        
        if (hallOfFame.length > k) {
            hallOfFame.pop();  // k개를 초과하면 가장 작은 값 제거
        }
        
        answer.push(hallOfFame[hallOfFame.length - 1]);  // 최하위 점수 추가
    }
    
    return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
