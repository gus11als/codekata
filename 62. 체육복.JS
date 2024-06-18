function solution(n, lost, reserve) {
    // reserve와 lost에 모두 포함된 학생을 제거합니다.
    let realLost = lost.filter(l => !reserve.includes(l));
    let realReserve = reserve.filter(r => !lost.includes(r));
    
    // 체육복을 빌려줄 수 있는 학생들이 체육복을 빌려줍니다.
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);

    for (let i = 0; i < realReserve.length; i++) {
        let student = realReserve[i];
        let index = realLost.indexOf(student - 1);
        if (index !== -1) {
            realLost.splice(index, 1);
        } else {
            index = realLost.indexOf(student + 1);
            if (index !== -1) {
                realLost.splice(index, 1);
            }
        }
    }

    // 전체 학생 수에서 체육복을 도난당했지만 빌리지 못한 학생 수를 뺍니다.
    return n - realLost.length;
}