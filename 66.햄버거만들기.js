function solution(ingredient) {
    var answer = 0;
    var stack = [];
    const burger = [1, 2, 3, 1]; // 햄버거의 재료 순서

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        // 스택의 마지막 네 개의 재료가 햄버거 순서와 일치하는지 확인
        if (stack.length >= 4 && stack.slice(-4).join('') === burger.join('')) {
            stack.splice(-4); // 햄버거가 완성되었으므로 마지막 네 개의 재료 제거
            answer++;
        }
    }

    return answer;
}
