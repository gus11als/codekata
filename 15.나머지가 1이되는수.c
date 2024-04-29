#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
  int answer = 2; // x는 최소 2부터 시작합니다. 1은 항상 n을 나누면 나머지가 1이므로 고려하지 않습니다.
    while (1) {
        if (n % answer == 1) { // n을 answer로 나눈 나머지가 1인 경우에 answer를 반환합니다.
            return answer;
        }
        answer++; // 그렇지 않은 경우 answer를 1씩 증가시켜 다음 자연수를 확인합니다.
    }
}