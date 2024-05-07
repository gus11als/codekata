function solution(num) {
    let count = 0;
    
    while (num !== 1) {
        // 주어진 수가 짝수인 경우
        if (num % 2 === 0) {
            num /= 2;
        } 
        // 주어진 수가 홀수인 경우
        else {
            num = num * 3 + 1;
        }
        
        count++;
        
        // 500번 이상의 작업을 수행한 경우 -1 반환
        if (count >= 500) {
            return -1;
        }
    }
    
    return count;
}
