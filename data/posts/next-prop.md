👶🏻 Next.js 13+ 버전부터는 페이지들에 ‘use client’를 명시하지 않는 한 기본적으로 서버 컴포넌트로 동작하게 되는데요, 오늘은 이 서버 컴포넌트 기준으로 URL의 search params에 어떻게 접근할 수 있는지 알아보겠습니다.

![next메인페이지](https://github.com/ssungbeenkim/clang-datastructure/assets/74309458/68aebd9e-6e91-401f-ab78-2870489c7179)

👦🏻 기본적으로 Next.js 프로젝트를 생성하고 npm run dev로 실행하면 볼 수 있는 초기 화면입니다.

Next.js는 URL의 search params를 프롭으로 자동으로 전달해 줍니다. 이를 확인해보기 위해 기본 페이지 컴포넌트에 전달받은 search params를 출력해보겠습니다.

```tsx
// src>app>page.tsx

export default function Home({ searchParams }) {
  console.log(searchParams);
  return (
    <main className='  flex min-h-screen flex-col items-center justify-between p-24'>
      ...
    </main>
  );
}
```

![파람전달](https://github.com/ssungbeenkim/clang-datastructure/assets/74309458/131b29fd-a4fd-4bac-8b54-a0f442fd466e)

![콘솔](https://github.com/ssungbeenkim/clang-datastructure/assets/74309458/1b2d7bbb-58a8-4b6d-9c6f-513273fd8647)

👨🏻 위와 같이 파람을 프롭으로 받아와서 사용할 수 있습니다.

하지만 만약 클라이언트 컴포넌트에서 URL의 정보를 받아오고 싶다면 어떻게 해야 할까요?
다음의 훅들을 활용하여 URL 정보를 가져올 수 있습니다.

> usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments

이 훅들에 대해서는 다음 포스팅에서 다뤄보도록 하겠습니다.

👴🏻 읽어주셔서 감사합니다 : )
