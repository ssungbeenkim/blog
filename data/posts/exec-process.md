exec() 함수는 이미 만들어진 프로세스의 구조를 재활용하면서 새로운 작업을 수행할 수 있게 해줍니다.

## 재사용되는 프로세스의 특징

1. 코드 영역: 기존의 코드는 지워지고 새로운 코드로 대체됩니다.
2. 데이터 영역: 새로운 변수로 갱신됩니다.
3. 스택 영역: 리셋됩니다.
4. PCB 정보: PPID, CPID, UID, GID, SID, TTY, NICE, SIGNAL, FD, UMASK 등은 그대로 유지되지만, 카운터 레지스터 값과 기타 각종 레지스터, 사용한 파일 정보는 리셋됩니다.

이를 적용하는 예제를 코드를 통해 알아보겠습니다.

## exec() 함수 예제

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main() {
  int pid;

  pid = fork();

  if (pid < 0) {
    printf("Error");
    exit(-1);
  } else if (pid == 0) {
    printf("Child process");
    execl("/bin/ls", "ls", "-al", NULL);
    printf("This line should not be printed");
  } else {
    wait(NULL);  // 자식 프로세스가 종료될 때까지 기다린다.
    printf("Parent process");
    exit(0);
  }

  return 0;
}
```

위의 예제에서, 자식 프로세스는 execl() 함수를 사용하여 /bin/ls 명령을 실행합니다. 이렇게 되면 기존의 프로세스는 새로운 프로세스, 여기서는 ls 명령으로 대체됩니다. 따라서 This line should not be printed는 실제로 출력되지 않습니다.
