Q: node.js如何开启进程，进程如何通讯？

进程：每个进程都有一个自己的内存空间，进程与进程在正常情况下是不可以访问的，除非两个进程互相监控并与允许 才能进行通信
线程：一个线程里面有多个线程，多个线程共享进程的内存资源


js永远是单线程的，如果需要庞大的计算，那么就需要webworker开启一个进程，计算完成之后数据通信到之前进程

为什么要多进程？
1、我们现在的cpu，更适合处理多进程
2、内存较大的情况下，多进程能够更好的利用【单进程内存有上限】
