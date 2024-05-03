function solution(n) {
    // n이 양의 정수 x의 제곱인지 확인하기 위해 제곱근을 구합니다.
    var x = Math.sqrt(n);
    
    // x가 정수인지 확인합니다. 정수라면 양의 정수의 제곱이므로 x+1을 제곱한 값을 반환합니다.
    if (Number.isInteger(x)) {
        return Math.pow(x + 1, 2);
    } else {
        // 정수가 아니라면 양의 정수의 제곱이 아니므로 -1을 반환합니다.
        return -1;
    }
}