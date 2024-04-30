def solution(x, n):
    answer = []
    # 주어진 조건에 따라 x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트 생성
    for i in range(1, n + 1):
        answer.append(x * i)
    return answer