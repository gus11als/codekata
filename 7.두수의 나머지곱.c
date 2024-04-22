#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int num1, int num2) {
  
    double result = (double)num1 / num2 * 1000; // 정수 부분을 구하기 위해 double 형으로 연산
    int answer = (int)result; // 소수점 이하를 버리고 정수 부분만 남김
    return answer;
}