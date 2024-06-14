function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    // 0의 개수와 일치하는 숫자의 개수를 센다
    const zeroCount = lottos.filter(num => num === 0).length;
    const matchCount = lottos.filter(num => win_nums.includes(num)).length;
    
    // 최고 순위는 0이 전부 일치하는 경우
    const maxRank = rank[matchCount + zeroCount];
    // 최저 순위는 0이 전부 일치하지 않는 경우
    const minRank = rank[matchCount];
    
    return [maxRank, minRank];
}