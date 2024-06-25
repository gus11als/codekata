function solution(keymap, targets) {
    var answer = [];
    
    // 1. 각 문자가 최소 몇 번 눌러야 하는지 저장할 객체를 생성
    var minPresses = {};
    
    // 2. keymap을 순회하며 각 문자가 최소 몇 번 눌러야 하는지 갱신
    for (let i = 0; i < keymap.length; i++) {
        let key = keymap[i];
        for (let j = 0; j < key.length; j++) {
            let char = key[j];
            if (!(char in minPresses) || minPresses[char] > j + 1) {
                minPresses[char] = j + 1;
            }
        }
    }
    
    // 3. targets 배열을 순회하며 각 타겟 문자열에 대해 최소 키 입력 횟수를 계산
    for (let i = 0; i < targets.length; i++) {
        let target = targets[i];
        let totalPresses = 0;
        let isPossible = true;
        
        for (let j = 0; j < target.length; j++) {
            let char = target[j];
            if (char in minPresses) {
                totalPresses += minPresses[char];
            } else {
                isPossible = false;
                break;
            }
        }
        
        if (isPossible) {
            answer.push(totalPresses);
        } else {
            answer.push(-1);
        }
    }
    
    return answer;
}