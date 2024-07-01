function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0); // 각 유저가 받은 결과 메일 수
    let reportMap = {}; // 각 유저가 신고한 유저 목록을 중복 없이 저장
    let reportedCount = {}; // 각 유저가 신고당한 횟수

    id_list.forEach(id => {
        reportMap[id] = new Set();
        reportedCount[id] = 0;
    });

    report.forEach(entry => {
        let [reporter, reported] = entry.split(' ');
        reportMap[reporter].add(reported);
    });

    for (let reporter in reportMap) {
        reportMap[reporter].forEach(reported => {
            reportedCount[reported]++;
        });
    }

    let suspendedUsers = new Set();

    for (let user in reportedCount) {
        if (reportedCount[user] >= k) {
            suspendedUsers.add(user);
        }
    }

    for (let i = 0; i < id_list.length; i++) {
        let reporter = id_list[i];
        reportMap[reporter].forEach(reported => {
            if (suspendedUsers.has(reported)) {
                answer[i]++;
            }
        });
    }

    return answer;
}