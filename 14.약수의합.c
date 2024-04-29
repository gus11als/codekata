#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int answer = 0;
     for (int i = 1; i <= n; i++) {
        if (n % i == 0) { // n을 나누었을 때 나머지가 0이면 i는 n의 약수입니다.
            answer += i; // 약수를 answer에 더합니다.
        }
    }
    return answer;
}