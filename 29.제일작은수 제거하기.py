def solution(arr):
    answer = arr[:]  # 입력 배열을 복사하여 answer에 할당
    min_val = min(answer)  # 배열에서 가장 작은 수를 찾음
    answer.remove(min_val)  # 가장 작은 수를 제거
    
    if not answer:  # answer가 비어있다면
        answer.append(-1)  # -1을 추가
    
    return answer