function solution(number, limit, power) {
    var answer = 0;

    // 1부터 number까지 반복합니다.
    for (let i = 1; i <= number; i++) {
        let divisorCount = 0;

        // 1부터 sqrt(i)까지의 수를 반복하면서 약수를 찾습니다.
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                // j가 i의 약수인 경우
                divisorCount++;

                // j와 (i / j)가 다른 경우, (i / j)도 약수입니다.
                if (j !== i / j) {
                    divisorCount++;
                }
            }
        }
        
        // 약수 개수가 limit보다 크면 power를 사용하고, 아니면 약수 개수를 사용합니다.
        if (divisorCount > limit) {
            answer += power;
        } else {
            answer += divisorCount;
        }
    }

    return answer;
}
