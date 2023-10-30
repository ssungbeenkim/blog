## 역순연결리스트

👶🏻 역순연결 리스트(reverse linked list)는 단순연결 리스트(singly linked list)를 역순으로 변환한 것입니다.
오늘은 단순 연결 리스트를 역순으로 변환하는 방법에 대해 알아보겠습니다.
우선 코드 먼저 보고 가실게요!

```c
void reverse(linkedList_h* L) {
  listNode* p;
  listNode* q;
  listNode* r;

  p = L->head;
  q = NULL;

  while (p != NULL) {
    r = q;
    q = p;
    p = p->link;
    q->link = r;
  }
  L->head = q;
}
```

> \*전체 코드는 [여기](https://github.com/ssungbeenkim/clang-datastructure/blob/main/c%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/0502-%EB%8B%A8%EC%88%9C%EC%97%B0%EA%B2%B0%EB%A6%AC%EC%8A%A4%ED%8A%B82.c)에서 보실 수 있습니다.

## 단순연결리스트

👦🏻 처음에 이 코드를 봤을 때 한참을 째려 봤지만 단번에 이해가 되지 않았습니다. 그림을 그려 이해해 보겠습니다.

![단순연결리스트](https://github.com/ssungbeenkim/clang-datastructure/assets/74309458/8dda58b4-fd8d-4caf-8d6e-90e69218494b)

우선 초기 상태는 이렇습니다. 글씨가 지렁이 기어가는 것 같지만 연두색은 NULL로 봐주시면 감사하겠습니다.

r : 아무런 값도 지정해 주지 않은 상태
q : NULL
p : head 와 동일하게 a를 가리킴

## 역순연결리스트

👨🏻 이후 while 문을 돌며 탈출조건(p → NULL)이 될 때까지 반복하게 되죠. 백문이 불여일견이니 그림과 함께 보겠습니다.

![진행과정](https://github.com/ssungbeenkim/clang-datastructure/assets/74309458/ff8eef96-e040-417d-b6eb-37f8333b7b50)

🧓🏻 규칙이 보이죠?

1. 반복문을 돌 때마다 r q p 각각의 포인터가 가리키는 값이 리스트를 따라서 나란히 이동하고 있습니다.
2. 각 호출에서 q의 참조 노드가 r의 참조 노드를 링크하며 r과 q 사이에서 방향이 바뀌지요.

결국 p는 NULL을 가리키게 되어 while 문이 종료되고, head는 q가 가리키고 있는 이제는 첫 번째 요소가 된 마지막 요소를 가리키게 되며 역순이 완료됩니다.

👴🏻 감사합니다. 좋은하루 되세요 : )
