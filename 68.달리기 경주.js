function solution(players, callings) {
    // 선수의 이름을 키로 하고 현재 순위를 값으로 하는 객체를 생성
    let playerPosition = {};
    players.forEach((player, index) => {
        playerPosition[player] = index;
    });

    // callings 배열을 순회하며 선수의 순위를 업데이트
    callings.forEach((called) => {
        let currentPosition = playerPosition[called];
        if (currentPosition > 0) {
            // 현재 선수의 바로 앞에 있는 선수
            let frontPlayer = players[currentPosition - 1];
            
            // 선수들의 순위를 서로 바꾼다
            players[currentPosition - 1] = called;
            players[currentPosition] = frontPlayer;

            // 업데이트된 순위를 객체에 반영
            playerPosition[called] = currentPosition - 1;
            playerPosition[frontPlayer] = currentPosition;
        }
    });

    return players;
}

// 예시 실행
console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]));
// 결과: ["mumu", "kai", "mine", "soe", "poe"]
