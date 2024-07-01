function solution(park, routes) {
    var answer = [];
    let height = park.length;
    let width = park[0].length;
    let startX, startY;

    // 시작 위치를 찾습니다.
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (park[i][j] === 'S') {
                startX = i;
                startY = j;
            }
        }
    }

    let currentX = startX;
    let currentY = startY;

    // 각 명령을 처리합니다.
    for (let route of routes) {
        let [direction, distance] = route.split(' ');
        distance = parseInt(distance);

        let tempX = currentX;
        let tempY = currentY;
        let isValid = true;

        for (let step = 1; step <= distance; step++) {
            if (direction === 'N') tempX -= 1;
            if (direction === 'S') tempX += 1;
            if (direction === 'W') tempY -= 1;
            if (direction === 'E') tempY += 1;

            // 공원 범위를 벗어나는지 확인
            if (tempX < 0 || tempX >= height || tempY < 0 || tempY >= width) {
                isValid = false;
                break;
            }

            // 장애물을 만나는지 확인
            if (park[tempX][tempY] === 'X') {
                isValid = false;
                break;
            }
        }

        // 이동이 가능한 경우 위치를 업데이트합니다.
        if (isValid) {
            currentX = tempX;
            currentY = tempY;
        }
    }

    answer = [currentX, currentY];
    return answer;
}