#include <iostream>
#include <string>
using namespace std;

// learning point 1: return values
// The return value of main can be return 0, meaning the main
// function has executed successfully
// All other functions with a return type shall return a proper value

int addition (int x, int y) {
    auto z = x + y;
    return z;
}

void self_addition (int& x) {
    x = x + 2;
}

string concate_strings(const string& a, const string& b) {
    return a + b;
}

inline string inlined_concate_strings(const string& a, const string& b) {
    return a + b;
}

// a prototype
float factorial(float x);

// function overloading
int operate(int a, int b){
    return a + b;
}

float operate(float a, float b){
    return a - b;
}

template <class T>
T sum_template(T a, T b){
    auto results = a + b;
    return results;
}

template <class T, class U>
bool generic_equal(T a, U b){
    return(a == b);
}

template <class T, int N>
T fixed_multiply(T val)
{
    return val * N;
}

// namespaces
// you can split namespace
namespace test
{
    int m = 3;
}

namespace foo
{
    int value() { return 5; }
} // namespace foo

namespace bar
{
    const double pi = 3.1416;
    double value() { return 2 * pi; }
} // namespace bar

namespace test
{
    int n = 3;
}


int main(){
    int x = 3;
    int y = 2;
    int sum;

    // passing by value
    sum = addition(x, y);
    // passing by reference
    self_addition(x);

    cout << "sum is " << sum << endl;
    cout << "x is " << x << endl;

    // learning point 2: const for passing by ref
    // passing by value can be expensive because it is making copies
    // for the cuntion arguments.
    // passing by reference avoids this, but by reference nomrally means
    // we are editing the passed arguments
    // The solution is for the function to guarantee
    // that its reference parameters are not going to be modified by this function.
    // This can be done by qualifying the parameters as constant:

    // Additional Learning: Stack and Frames
    // Value types are stored in the stack, stack is ordered
    // Reference types are stored in the heap, heap is free, unordered
    // Only objects with fixed sizes known at compile time can be put on the stack
    // The stack frame contains all the data of a function call

    string a = "hi", b =" aaron";
    cout << concate_strings(a, b) << endl;

    // learning point 3: function inlining
    // calling a function can have overhead.
    // inline keywords tells the compiler to duplicate the function in source

    cout << "factorial of 5 is "<<factorial(5.0) << endl;

    // learning point 4: overloaded functions
    int a1 = 3, b1 = 3;
    float c = 3.0, d = 3.0;
    cout << operate(a1, b1) << "," << operate(c, d) << endl;

    // learning point 5: function templates
    int i = 5, j = 6;
    // we can specify the template type int
    auto res = sum_template<int>(i, j);
    cout << res << endl;

    // we can simply ignore this template type
    if (generic_equal(10, 10.0)){
        cout << "equal" << endl;
    }
    else {
        cout << "not equal" << endl;
    }
    // The template parameters can not only
    // include types introduced by class or typename,
    // but can also include expressions of a particular type

    // the value of template parameters is determined on compile -
    // time to generate a different instantiation of the function fixed_multiply,
    // and thus the value of that argument is never passed during runtime :
    // the second template argument needs to be a constant expression
    // (it cannot be passed a variable).

    std::cout << fixed_multiply<int, 2>(10) << endl;


    // learning point 6: namespace
    // Namespaces allow us to group named entities
    // that otherwise would have global scope into narrower scopes,
    // giving them namespace scope.
    // This allows organizing the elements of programs into different logical scopes referred to by names.
    cout << foo::value() << '\n';
    cout << bar::value() << '\n';
    cout << bar::pi << '\n';
    // The keyword using introduces a name into the
    // current declarative region(such as a block),
    // thus avoiding the need to qualify the name.

    // use one variable in a namespace
    using test::m;
    // use the entire namespace
    using namespace test;
    cout << m << endl;

    // aliasing namespace
    namespace new_test = test;

    // learning point 7: storage classes
    // we have static storage (global variables and global namespaaces)
    // and automatic storage (local variables, variables in a scope)

    // notice, Variables with static storage are initialized as zeros.
    //         Variables with automatic storage are initialized undefined values

    return 0;
}

// a recursive function
float factorial(float x){
    if (x > 1) {
        return x * factorial(x-1);

    }
    else {
        return 1;
    }
}
