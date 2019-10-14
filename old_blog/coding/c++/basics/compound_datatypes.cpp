#include <iostream>
#include <string>
#include <new>

using namespace std;

void printarrays(int xs[]){
    for (auto i : )
}

void print_all(const int *start, const int *stop)
{
    const int *current = start;
    while (current != stop)
    {
        cout << *current << '\n';
        ++current; // increment pointer
    }
}

void increase(void *data, int psize)
{
    if (psize == sizeof(char))
    {
        char *pchar;
        pchar = (char *)data;
        ++(*pchar);
    }
    else if (psize == sizeof(int))
    {
        int *pint;
        pint = (int *)data;
        ++(*pint);
    }
}

int subtraction(int a, int b)
{
    return (a - b);
}

int operation(int x, int y, int (*functocall)(int, int))
{
    int g;
    g = (*functocall)(x, y);
    return (g);
}
int main(){
    // learning point 1: arrays
    int foo[5] = {1, 2, 3, 4, 5};
    // automatically pad zeros {1, 2, 3, 0, 0}
    int foo[5] = {1, 2, 3};
    // length defined by lhs {1, 2, 3}
    int foo[] = {1, 2, 3};
    // also valid
    int foo[] {1, 2, 3};
    // Note 1:
        // In C++, it is syntactically correct to
        // exceed the valid range of indices for an array.
        // This can create problems, since accessing out-of-range elements
        // do not cause errors on compilation, but can cause errors on runtime.
    // Note 2:
        // Copying an array can be expensive, consider the built-in <array> container

    // learning point 2
    // null-terminated char sequences and strings are inter-changable
    char [] mychars = "this is my chars";
    // convert c-string to string
    string mystring = mychars;
    cout << mystring << mystring.c_str();

    // learning point 3
    // address of a pointer
    // take the address of myvar to pointer foo
    // `*` can also work as a dereference operator
    int firstvalue, secondvalue;
    int *mypointer;

    mypointer = &firstvalue;
    *mypointer = 10;
    mypointer = &secondvalue;
    *mypointer = 20;
    cout << "firstvalue is " << firstvalue << '\n';
    cout << "secondvalue is " << secondvalue << '\n';
    // note
    int *p1, *p2; //defines two int pointers
    int *p3, p4; //p4 is in type int

    // learning point 4
    // array and pointers
    int numbers[5];
    int * p;
    // numbers is equivalent ot a pointer
    p = numbers;
    *p = 10;
    p++;
    *p = 20;
    p = &numbers[2];
    *p = 30;
    p = numbers + 3;
    *p = 40;
    p = numbers;
    *(p+4) = 50;

    // learning point 5
    // pointer arithemtic
    // size of types matter! char is 2 bytes, but short, int float are larger
    char *mychar; int *myint; //assume both start with 1000
    ++mychar; // 1001
    ++myint; // might be 1004

    *p++; // `*(p++)`
    ++*p; // `++(*p)`

    // learning point 6
    int y = 10;
    // a ready only pointer
    const int * p = &y;
    // const pointer as function arguments to avoid modifications
    print_all(numbers, numbers + 3)

    int x;
    int *p1 = &x;             // non-const pointer to non-const int
    const int *p2 = &x;       // non-const pointer to const int
    int *const p3 = &x;       // const pointer to non-const int
    const int *const p4 = &x; // const pointer to const int

    // learning point 6
    // pointer to pointer
    char a;
    char *b;
    char **c;
    a = 'z';
    b = &a;
    c = &b;

    // void pointer
    // a pointer that has no type, which implies it can points to values with any type
    // for example, used as a generic type in a function
    char a = 'x';
    int b = 1602;
    increase(&a, sizeof(a));
    increase(&b, sizeof(b));

    // learning point 7
    // initialization
    // NULL is defined in several headers of the standard library,
    // and is defined as an alias of some null pointer constant value(such as 0 or nullptr) int *p = 0;
    int *q = nullptr;
    int *r = NULL;

    // learning point 8
    // pointint to functions
    // the name of the function is enclosed between parentheses()
    // and an asterisk(*) is used in front of the function name
    int (*minus)(int, int) = subtraction;
    n = operation(20, m, minus);

    // learning point 9
    // dynamic memory
    // No need to give constant size at compile time
    int * p;
    p = new int [5];
    // equivalently
    // nothrow is in header <new>, if allocation fails, it returns a null pointer
    p = new(nothrow) int [5];
    delete[] p;

    // learning point 10
    // data structures

    struct movies_t {
    string title;
    int year;
    };

    movies_t amovie;
    movies_t * pmovie
    pmovie = &amovie;

    // The arrow operator (->) is a dereference operator
    // that is used exclusively with pointers to objects that have members
    // access to elements
    title = amovie.title;
    title2 = pmovie->title;
    title3 = (*pmovie).title;

    // learning point 11
    // typedef
    typedef char C;
    using C = char;

    // learning point 12
    // union
    // Unions allow one portion of memory to be accessed as different data types.
    // s and c shares the same memory location, it is impossible to change them individually
    // One of the uses of a union is to be able to access a value
    // either in its entirety or as an array or structure of smaller elements

    union mix_t {
    int l;
    struct {
        short hi;
        short lo;
        } s;
    char c[4];
    } mix;

    // anonymous unions
    // When unions are members of a class (or structure), they can be declared with no name.


    struct book2_t {
    char title[50];
    char author[50];
    union {
        float dollars;
        int yen;
    };} book2;
    // access anonymous union members directly from the struct
    float dollars = book2.dollars;

    // learning point 13
    // enumerated types
    // Enumerated types are types that are defined with a set of custom identifiers,
    // known as enumerators, as possible values.
    // Objects of these enumerated types can take any of these enumerators as value.
    enum months_t { january=1, february, march, april,
                may, june, july, august,
                september, october, november, december} y2k;
    // internally automatically augment to 2, 3, ...

    // enum types that are neither implicitly convertible to int and
    // that neither have enumerator values of type int,
    // but of the enum type itself, thus preserving type safety.
    // They are declared with enum class (or enum struct) instead of just enum
    enum class Colors {black, blue, green, cyan, red, purple, yellow, white};
    Colors mycolor;

    mycolor = Colors::blue;
    if (mycolor == Colors::green) mycolor = Colors::red;

    return 0;
}
