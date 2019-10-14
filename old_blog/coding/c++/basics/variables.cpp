#include <iostream>
#include <string>
#include <sstream>

using namespace std;

int main(){
    // Learning Point 1
    // an alternative way of declaring variable
    int a = 5;
    int b {3};
    int c (3);
    int results;
    results = a + b;
    cout << "varible test" << endl;
    cout << results << endl;

    // Learning Point 2
    // type deduction
    int foo = 0;
    // this automatically gives bar the type of foo
    auto bar = foo;
    // same as int bar;
    decltype (foo) bar_test = 2;
    cout << bar << "," << bar_test << endl;
    return 0;

    // Learning point 3
    // details in constant types
    auto a = 0113; // octal number
    auto a = 75u; //unsigned int
    auto a = 75ul; //unsigned long int
    auto a = 75l; // long double
    auto a = 75f; // float

    // constant definition
    // values cannot be modified
    const double a = 35;
    int b;
    // This would assign 3 to c, then c+1 to b
    b = (c=3, c+1);
}

int basic_in_out(){
    int i;
    cout << "please enter an integer \n" << endl;
    cin >> i;
    cout << "entered " << i << '\n' << endl;

    // get a string
    string mystr;
    cout << "whats ur name \n" << endl;
    // getline takes the stream(cin) as first argument, and the string variable as second
    getline(cin, mystr);
    cout << "got" << mystr << endl;

    // The standard header<sstream> defines a type called stringstream that
    // allows a string to be treated as a stream,
    // and thus allowing extraction or insertion operations
    // from / to strings in the same way as they are performed on cin and cout.
    string name;
    stringstream(mystr) >> name;

    return 0;
}
