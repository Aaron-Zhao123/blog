CC=gcc
CXX=g++
RM=rm -f

VSRCS=variables.cpp
OBJS=*.o

variable:
	$(CXX) $(VSRCS) -std=c++14 -o variable.o
	./variable.o
functions:
	$(CXX) functions.cpp -std=c++14 -o function.o
	./function.o
clean:
	$(RM) $(OBJS)
