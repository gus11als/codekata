function solution(today, terms, privacies) {
    // 결과를 담을 배열을 초기화
    var answer = [];
    
    // 오늘 날짜를 숫자로 변환 (YYYY.MM.DD -> YYYYMMDD)
    function convertDateToNumber(date) {
        var parts = date.split(".");
        return parseInt(parts[0]) * 12 * 28 + parseInt(parts[1]) * 28 + parseInt(parts[2]);
    }
    
    // today 날짜를 숫자로 변환
    var todayNumber = convertDateToNumber(today);

    // terms를 파싱하여 유효기간을 딕셔너리에 저장
    var termsDict = {};
    for (var term of terms) {
        var [type, period] = term.split(" ");
        termsDict[type] = parseInt(period);
    }

    // privacies를 순회하면서 파기해야 할 개인정보를 판별
    for (var i = 0; i < privacies.length; i++) {
        var [date, type] = privacies[i].split(" ");
        var collectedDateNumber = convertDateToNumber(date);
        
        // 약관의 유효기간을 더하여 만료일을 계산
        var expiryDateNumber = collectedDateNumber + (termsDict[type] * 28) - 1;
        
        // 만료일이 오늘 날짜보다 작거나 같으면 파기 대상
        if (expiryDateNumber < todayNumber) {
            answer.push(i + 1); // 개인정보 번호는 1부터 시작하므로 인덱스에 1을 더함
        }
    }
    
    return answer;
}
