#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char* solution(int num) {
   char* answer = (char*)malloc(sizeof(char) * 10); // "Even" 또는 "Odd"를 저장하기 위해 충분한 공간 할당
    if (num % 2 == 0)
        sprintf(answer, "Even");
    else
        sprintf(answer, "Odd");
    return answer;
}