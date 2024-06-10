function solution(k, m, score) {
    // 점수 배열을 내림차순으로 정렬합니다.
    score.sort((a, b) => b - a);
    
    var answer = 0;
    // 점수 배열을 m개의 그룹으로 나누어 각 그룹의 최저 점수를 계산합니다.
    for (let i = 0; i < score.length; i += m) {
        // 그룹의 크기가 m이 되지 않으면 나머지 사과는 버립니다.
        if (i + m <= score.length) {
            let box = score.slice(i, i + m);
            let minScore = Math.min(...box);
            answer += minScore * m;
        }
    }
    
    return answer;
}