function solution(absolutes, signs) {
    var answer = 0;
  // absolutes 배열을 순회하면서 각 요소와 signs 배열의 같은 인덱스의 값을 곱하여 합산
  for (var i = 0; i < absolutes.length; i++) {
      // signs 배열의 값이 true이면 양수, false이면 음수이므로 곱셈을 통해 부호 적용
      if (signs[i]) {
          answer += absolutes[i]; // 양수인 경우
      } else {
          answer -= absolutes[i]; // 음수인 경우
      }
  }
  return answer;
}