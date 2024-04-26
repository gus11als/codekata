#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// arr_len은 배열 arr의 길이입니다.
double solution(int arr[], size_t arr_len) {
    double sum = 0;
     for (size_t i = 0; i < arr_len; i++) {
        sum += arr[i];
    }
    double average = sum / arr_len;
    return average;
 
}