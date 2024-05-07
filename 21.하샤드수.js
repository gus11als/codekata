function solution(x) {
    const str_x = String(x);
    
    // 각 자릿수의 합을 담을 변수 초기화
    let sumOfDigits = 0;
    
    // 각 자릿수를 순회하며 합 구하기
    for (let i = 0; i < str_x.length; i++) {
        // 현재 자릿수를 정수로 변환하여 합에 더하기
        const digit = parseInt(str_x[i]);
        sumOfDigits += digit;
    }
    
    // 주어진 수를 각 자릿수의 합으로 나누어 떨어지는지 확인
    const isHarshad = x % sumOfDigits === 0;
    
    // 하샤드 수 여부 반환
    return isHarshad;
}
