function solution(cards1, cards2, goal) {
    // 각각의 카드 뭉치를 큐(배열)로 초기화합니다.
    let queue1 = [...cards1];
    let queue2 = [...cards2];
    
    // goal 배열을 순서대로 탐색합니다.
    for (let word of goal) {
        // queue1의 첫 번째 단어가 현재 word와 일치하는지 확인합니다.
        if (queue1.length > 0 && queue1[0] === word) {
            queue1.shift();  // 일치하면 queue1의 첫 번째 단어를 제거합니다.
        }
        // queue2의 첫 번째 단어가 현재 word와 일치하는지 확인합니다.
        else if (queue2.length > 0 && queue2[0] === word) {
            queue2.shift();  // 일치하면 queue2의 첫 번째 단어를 제거합니다.
        }
        // 어느 큐의 첫 번째 단어도 일치하지 않으면 "No"를 반환합니다.
        else {
            return "No";
        }
    }
    
    // 모든 단어가 순서대로 일치했다면 "Yes"를 반환합니다.
    return "Yes";
}