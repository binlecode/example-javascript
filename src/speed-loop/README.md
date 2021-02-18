
This folder contains three simple loop programs for javascript, c, python, and
groovy. 

All of them are running the same logic: run an empty loop for 1million times, and track the execution time.

The following is one run result from macbook pro 2020.

```sh
$ node --version
v14.15.4
$ node src/speed-loop.js 
JavaScript looped 1000000000 times in 0.427 seconds

$ gcc --version
Configured with: --prefix=/Applications/Xcode.app/Contents/Developer/usr --with-gxx-include-dir=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/usr/include/c++/4.2.1
Apple clang version 12.0.0 (clang-1200.0.32.29)
Target: x86_64-apple-darwin20.3.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
$ gcc speed-loop.c -o speed-loop 
$ ./speed-loop 
C looped 1000000000 times in 2.160817 seconds

$ python --version
Python 3.7.2
$ python src/speed-loop/speed-loop.py 
Python looped 1000000000 times in 17.273 seconds

$ groovy --version
Groovy Version: 2.5.13 JVM: 11.0.8 Vendor: AdoptOpenJDK OS: Mac OS X
$ groovy src/speed-loop/speed-loop.groovy
groovy looped 1000000000 times in 9.952 seconds

```

