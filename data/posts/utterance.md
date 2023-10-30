## utterance

오늘은 Next.js로 제작한 블로그에 utterance를 활용해 간단하게 댓글과 관리가 가능하도록 기능을 추가한 과정을 알아보겠습니다.

utterance 설정 방법에 대해서는 잘 설명해주신 분의 포스트가 많이 있어서 [[블로그]](https://www.irgroup.org/posts/utternace-comments-system/) 또는 https://utteranc.es/ 를 참고하시면 금방 설정이 가능합니다.

다만 Next.js 환경에서 적용하면서 간단한 이슈가 있어서 따로 기록합니다.

## Next.js와 Type Error

![utterance완료](https://github.com/ssungbeenkim/x-messenger/assets/74309458/28bd6140-f1cb-47f8-8b4e-9316582030dc)

utterance 설정을 완료하면 위 사진과 같은 script 태그를 얻게 되는데요, Jekyll의 경우에는 이 스크립트 태그를 원하는 위치에 붙이면 잘 작동이 되는 것 같습니다.

> Property 'repo' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>'.

Next.js 에서 동일하게 클라이언트 컴포넌트에 붙여보면 타입 에러가 발생합니다.
script에는 HTMLElement에서 상속받은 HTMLScriptElement의 속성들이 정의되어 있는데, 위 코드에서는 정의되지 않은 repo와 같은 속성들을 넣으려고 했기 때문에 해당 에러가 발생하는 것이었습니다.

## DOM API로 요소 생성

이를 해결하기 위해서 setAttribute와 같은 DOM API를 활용해 다음과 같이 요소를 생성하고 속성들을 추가해 주었습니다.

```jsx
// Utterance.tsx

'use client';

export default function Utterance() {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.setAttribute('repo', 'ssungbeenkim/blog');
        scriptElem.setAttribute('issue-term', 'pathname');
        scriptElem.setAttribute('theme', 'preferred-color-scheme');
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.crossOrigin = 'anonymous';
        elem.appendChild(scriptElem);
      }}
    ></section>
  );
}
```

아래는 테스트 댓글과 완성된 댓글창입니다.

![완성된 댓글 기능](https://github.com/ssungbeenkim/x-messenger/assets/74309458/a93e5945-88f2-4342-be24-3be5fad21f86)

깃헙 이슈에서도 댓글 확인이 가능합니다.

![이슈에서 확인](https://github.com/ssungbeenkim/x-messenger/assets/74309458/941817a5-d2be-432a-ad02-29e80879038b)

읽어주셔서 감사합니다 좋은하루 되세요 : )
