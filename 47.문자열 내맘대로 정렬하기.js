function solution(strings, n) {
    // sort 함수를 사용하여 정렬합니다. 정렬 기준은 각 문자열의 n번째 문자가 됩니다.
    strings.sort((a, b) => {
        if (a[n] === b[n]) {
            // n번째 문자가 같은 경우, 사전순으로 정렬합니다.
            return a.localeCompare(b);
        } else {
            // n번째 문자가 다른 경우, 해당 문자를 기준으로 정렬합니다.
            return a[n].localeCompare(b[n]);
        }
    });
    return strings;
}