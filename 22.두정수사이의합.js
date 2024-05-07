function solution(a, b) {
    // a와 b 중에서 작은 값과 큰 값을 구함
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    
    // 작은 값부터 큰 값까지의 모든 정수를 포함하는 범위를 생성하고, 합을 계산
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
}