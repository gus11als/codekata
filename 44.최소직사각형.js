function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    // 각 명함을 가로 세로 중 큰 값을 가로, 작은 값을 세로로 정렬
    for (let i = 0; i < sizes.length; i++) {
        let [w, h] = sizes[i];
        if (w < h) {
            [w, h] = [h, w]; // 가로가 더 크도록 정렬
        }
        // 가장 큰 가로와 세로 값을 업데이트
        if (w > maxWidth) maxWidth = w;
        if (h > maxHeight) maxHeight = h;
    }
    
    // 최종 지갑의 크기는 가장 큰 가로 * 가장 큰 세로
    return maxWidth * maxHeight;
}
