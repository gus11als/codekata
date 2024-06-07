function solution(a, b) {
    const daysOfWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 주어진 월(a) 이전의 모든 일수를 합산
    let totalDays = 0;
    for (let i = 0; i < a - 1; i++) {
        totalDays += daysInMonth[i];
    }

    // 주어진 월의 일(b)을 합산
    totalDays += b - 1;

    // 요일 계산
    const dayOfWeek = daysOfWeek[totalDays % 7];

    return dayOfWeek;
}

console.log(solution(5, 24)); // "TUE"
