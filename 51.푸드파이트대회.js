function solution(food) {
    var answer = '';
    var leftSide = '';
    var rightSide = '';

    // 0번 음식은 물로 항상 1개로 고정되어 있음.
    // 1번 음식부터 시작
    for (let i = 1; i < food.length; i++) {
        // 각 음식의 절반을 leftSide에 추가
        let halfAmount = Math.floor(food[i] / 2);
        for (let j = 0; j < halfAmount; j++) {
            leftSide += i.toString();
        }
    }

    // rightSide는 leftSide의 반대쪽이므로 reverse 시킴
    rightSide = leftSide.split('').reverse().join('');
    
    // 가운데에 물(0)을 놓고 최종 문자열 생성
    answer = leftSide + '0' + rightSide;
    
    return answer;
}