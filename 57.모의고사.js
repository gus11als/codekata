function solution(answers) {
    // 각 수포자의 패턴 정의
    const patterns = [
        [1, 2, 3, 4, 5], // 1번 수포자 패턴
        [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자 패턴
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 3번 수포자 패턴
    ];
    
    // 각 수포자의 점수 계산
    const scores = [0, 0, 0]; // 수포자 1, 2, 3의 점수
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === patterns[0][i % patterns[0].length]) scores[0]++;
        if (answers[i] === patterns[1][i % patterns[1].length]) scores[1]++;
        if (answers[i] === patterns[2][i % patterns[2].length]) scores[2]++;
    }
    
    // 가장 높은 점수 찾기
    const maxScore = Math.max(...scores);
    
    // 가장 높은 점수를 받은 수포자 찾기
    const answer = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            answer.push(i + 1);
        }
    }
    
    return answer;
}
