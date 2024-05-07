def solution(n):
    # 주어진 수를 문자열로 변환하여 각 자리 숫자를 배열에 담기
    digits = [int(x) for x in str(n)]
    # 배열을 내림차순으로 정렬
    digits.sort(reverse=True)
    # 정렬된 숫자들을 문자열로 합쳐서 정수로 반환
    answer = int(''.join(map(str, digits)))
    return answer