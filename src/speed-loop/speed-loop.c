
/* speed-loop.c */
#include <stdio.h>
#include <time.h>
int main() {
    int cycles = 1000000000;
    clock_t start, end;
    double duration;
    start = clock();
    for (int i = 0; i < cycles; i++) {
      /* Empty loop */
    }
    end = clock();
    duration = ((double)(end - start)) / CLOCKS_PER_SEC;
    printf("C looped %d times in %lf seconds\n", cycles,duration);
    return 0;
}

/*
To compile and run:
```sh
$ gcc --version
```
Apple clang version 12.0.0 (clang-1200.0.32.29)
Target: x86_64-apple-darwin20.3.0
Thread model: posix
```sh
$ gcc speed-loop.c -o speed-loop
$ ./speed-loop
C looped 1000000000 times in 2.160817 seconds
```
*/

