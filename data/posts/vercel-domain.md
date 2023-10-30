## Google Domains

구글 도메인은 2023년 9월 7일에 서비스를 종료하고 Squaresapce사로 서비스를 넘겼습니다[관련기사](https://arstechnica.com/google/2023/09/google-domains-halts-registrations-as-it-waits-for-the-google-grim-reaper/#:~:text=Google%20Domains%20has%20registered%20its,the%20existing%20Google%20Domains%20functionality.).

## 도메인 구매

👶🏻 얼마 전 구글 도메인에서 블로그에 사용할 도메인을 구매했습니다. Vercel에 배포한 블로그에 해당 도메인을 연결했는데요, 오늘은 Vercel 에 배포한 프로젝트에 도메인을 연결하는 과정을 살펴보겠습니다.

![구글도메인](https://github.com/ssungbeenkim/clang-datastructure/assets/74309458/ea33c1c8-6246-4926-a49f-14f66500e519)

## Vercel

![vercel](https://github.com/ssungbeenkim/clang-datastructure/assets/74309458/98ae8e15-2aa6-4e39-a2c8-814fd0db8464)

👨🏻 우선 https://vercel.com/dashboard 으로 접속 후 도메인 연결을 원하는 프로젝트를 선택하고 Domains 탭으로 들어가면 위와 같이 도메인을 입력하는 창이 나오는데요, 구매한 도메인을 입력하고 Add를 클릭해 줍니다.

![redirect 선택하기](https://github.com/ssungbeenkim/clang-datastructure/assets/74309458/8f6c46c7-674c-4772-bc29-a64b10cef8af)

👨🏻‍🦳 그럼 redirect 를 어떻게 할것인지 묻는 창이 나오고, 원하는 것을 선택합니다. 저는 추천하고 있는 방식을 선택했습니다.

![A Record](https://github.com/ssungbeenkim/clang-datastructure/assets/74309458/41a19e7d-0847-4d66-9f60-2fbcd8aa8010)

Vercel에서는 기본적으로 A Record 설정을 해주는 것을 추천해주는데요, 네임서버 변경의 경우 48시간까지 걸릴 수 있기 때문에 A레코드를 바꿔주는 것을 추천해주고 있습니다. 이제 구글 도메인으로 가봅시다!

## Google Domains

![구글도메인](https://github.com/ssungbeenkim/clang-datastructure/assets/74309458/4a5665b3-fdfb-42a3-8a17-dcbb75dfe44b)

구글 도메인에 로그인 한 후 DNS 탭에 들어갑니다.

![리소스레코드](https://github.com/ssungbeenkim/clang-datastructure/assets/74309458/a8d31838-c6ef-49cf-8b9d-f220a500d92c)

👴🏻 위와 같이 레코드를 두번 입력해 주었습니다. 첫번째 레코드는 아까 Vercel 에서 A Type 에 있던 값을 근거로 레코드를 입력한 것이고 두번째 레코드는 www.sungbeen.com 에 대하여 sungbeen.com 으로 연결시켜 주는 것입니다. TTL은 1시간으로 설정해 주었습니다.

![연결성공](https://github.com/ssungbeenkim/clang-datastructure/assets/74309458/8d71f160-1f72-46f1-b6f8-d7a9db1ac701)

👍🏻 다시 Vercel에 돌아오면 SSL 설정중인 화면이 나올텐데 1~2분정도 기다리시면 완료가 되고 위와 같이 도메인 연결이 완료된 것을 보실 수 있습니다.

읽어주셔서 감사합니다. 오늘도 행복한 하루 보내세요 : )
