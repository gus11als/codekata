#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int answer = 0;
    while (n > 0) {
        answer += n % 10; // 현재 자릿수를 answer에 더합니다.
        n /= 10; // 다음 자릿수로 이동합니다.
    }
    
    return answer;
}