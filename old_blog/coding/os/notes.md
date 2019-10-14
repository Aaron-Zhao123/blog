### Dual-mode Operation
* User Mode: application programs.
* Kernel Mode: executing on behalf of the OS. (System Calls)


### Threads and Processes

* Thread
Has a program counter, a stack for **temporal variables**, **params**,
**data section** and **return values**.
In data section, global variables are shared among threads.

* Process
Has one or more threads, a virtual address space and execute on a virtual
processor.

Parent process creates child process and they share the same resources.
Parent and child execute concurrently and parents wait for child.
Child duplicate the address space of parent.

* Context Switching
To switch between processes, the OS saves the context of the current
process and restore the other process.

Threads are associated with thread control block which saves the metadata
about the thread.
Context switches triggers to ask the OS to save the state of a thread.
If threads are from different processes, process state is also saved.

### Paging
Allow process to exist in non-contiguous memory.
Divide physical memory into frames.
Divide logical memory into pages.

No external fragmentation since physical memory are in frames.
The OS has to maintain a **Page Table** for each process.

### Lock
A lock allows only one thread to enter the part that's locked and the lock is not shared with any other processes.

### Mutex
A mutex is the same as a lock but it can be system wide (shared by multiple processes)

### Semaphore
A semaphore does the same as a mutex but allows x number of threads to enter, this can be used for example to limit the number of cpu, io or ram intensive tasks running at the same time.
A semaphore uses wait and signal to control multiple threads to entire

### Monitor
All methods in a monitor share data, and shared data can only be visited
by methods in a monitor.
Monitor allows conditional variables, that is maintained by programmers.
