function solution(price, money, count) {
    // 총 필요한 비용 계산
    const totalCost = price * (count * (count + 1) / 2);
    
    // 현재 가진 돈에서 총 비용을 뺀 나머지
    const shortfall = totalCost - money;
    
    // 부족하지 않으면 0을 반환, 부족하면 부족한 금액 반환
    return shortfall > 0 ? shortfall : 0;
}

console.log(solution(3, 20, 4));  // 10
