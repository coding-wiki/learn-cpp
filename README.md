learn-cpp

Learn C++

General Goals

- [ ] Hello world
- [ ] TDD
- [ ] Understand import system
- [ ] Dev Workflow - compiling
- [ ] Distribution

## Contents
- [**Declarations**](./declarations) - declaring variables and constants that will be used in your application
- [**Assignments**](./assignments) - Assigning values to variables in the application code
- [**Preprocessor Directives**](./preprocessor) - Instructions provided to the compiler based on the execution environment
- [**Comments**](./comments) - Code documentation
- [**Function Declarations**](./functions) - Reusable pieces of code
- [**Executable statements**](./) - Perform operations and execute instructions.
## Learning Outcomes

- Understand and use the basic *programming constructs* of C/C++
  - What are the basic *programming constructs*?
    - **Definition:** A programming construct is the syntax in which a programming language is written. It is often used as a reference to *control flow* or *flow control statements*
    - *Conditional statements:* `if`, `case`, etc
    - *Repetition:* `for` and `while` loops
    - *Exception handling:* `try`, `catch`,
    - *Async:*
  - What is a *preprocessor*?
- Manipulate various C/C++ datatypes, such as arrays, strings, and pointers
  - Create, manipulate and use *primitive data-structures:* variables and constants: `int`, `std::string`, etc
    - What is the best type of data-type for numbers, strings, etc? e.g. `char` vs `std::string`
  - Create, manipulate and use *complex data-structures:* arrays, structs, unions, and enumerations
  - How do we do *string* manipulation?
- Create and use simple functions
- Using **TDD** in C++
- Isolate and debug common errors in C++ apps
  - How can we efficiently debug?
  - What are common errors?
- Use memory appropriately, including proper allocation/deallocation procedures
  - How do we allocate to memory?
  - How do we deallocate from memory?
- Apply object-oriented programming approaches to software problems in C++
  - What is a class and object?
  - What is the standard way of using classes/objects?
  - What is a contstructor?
- Write small-scale C++ apps using the above skills
  - What are the applications for small C++ apps?



## Applications

Ref: [edX - C++ Algorithms and Data Structures](https://courses.edx.org/courses/course-v1:Microsoft+DEV285x+4T2017/course/)

**Basic Algorithms**

- [Selection Sort]() - 
- [Linear Search]() - 
- [Bubble Search]() - 

**Algorithmic Analysis**

- [Merge Sort]() - 
- [Binary Search]() - 
- [Big O]() - 

**Basic Data-Structures**

- [Linked Lists]()
- [Stack]()
- [Queue]()
- ​

## Tmp


## Architecture
When should I use a `class`?
  - Something which is a "separate" idea

When should I use an `object`?
  - Something which is a "separate" entity
  - An `object` is declared inside of a `class`

When should I use an `abstract class`?
  - If two classes have a common interface

When should I use a `base class`?
  - A base `class` is a significant commonality in  the implementations of two classes

When should I use a `template`?
  - When a `class` is a *container* of *objects*

When should I use a *common namespace*?
  - When a set of classes, templates, etc are logically related


## Modularising Code into Files
Each source file is compiled separately from other source files. `.cpp` files are clueless to what is happening in other `.cpp` files

Headers are used to link `.cpp` files / namespaces?

Header files: make the *interface* visible to other `.cpp` files

Class declared in the header file?

`#include` is basically a *copy/paste* operation

so duplicate `#include`s should be avoided with *include guards*

### File Extensions - Convention

*Header* files should use `.h__` which can be `.h`, `.hpp` or `.hxx`
  - `.hpp` used for inline functions?
  Anything starting with `.h` is a header file

*C++ source files* should use `.c__` extension which can be `.cpp`, `.cxx` or `.cc`

*C source files* should use `.c` *ONLY*

Header files use preprecessor directive `#include`s and not compiled

*Do not include source files*

*Derived class* - an `extends`

Parent and child classes

What is a *friend declaration*?

Are all objects *datatypes*?

What is the difference between using an object as a paramater or as say a variable declaration

Pointer, return type or parameter should use a forward declare?

How to `extend` a class:
`class ChildClass : public Parent` - 

Main header file with all imports? https://github.com/oitofelix/mininim/blob/master/src/mininim.h

What is *instantiate*?

How and what is injecting a function with `inline`

## IOStream
**std::endl** - Inserts a newline character and flushes the output sequence
What does *flushing* mean?

**std::cout** - Standard character output


## Guards

Do not define files twice

## Functions
Main function has to return an `int`.

Functions must be declared before being used

## Pointers
A *primitive* datatype that reference an object.
- To what degree is it *primitive*?
- What is a *structure*?
  - Primitive version of a *class*?
    [Pointers - Wikiversity](https://en.wikiversity.org/wiki/C%2B%2B/Pointers)

### Arrays
An array is a collection of similar data types under the same name
Syntax:

```cpp
int arr[25];
// Where 25 is the length/size of the array
```

Although arr behaves as a pointer, its value cannot be changed as it references a specific region in memory.


### Allocating variables
The new operator allocates an object from the `memory?` heap and `optionally initializes?` it

When you have finished using an object/variable, you must delete it. Otherwise, the pointed memory will be inaccessible and the result is a memory leak.

### Referencing variables
The *&* operator is used to *reference?* an object. Using the *&* operator, you can get a pointer to the object. This new pointer can be used as a function parameter or be *assigned to a variable?*.

### Multidimensional Array
- How can you implement a map with an array?


### LinkedList
Linear data structure where each element is a separate object, with *chaotic* memory locations
https://www.youtube.com/watch?v=vcQIFT79_50

Primitive array implementation?

## Resources

- http://www.stroustrup.com/C++.html
- [basic programming constructs?](http://www.cs.wustl.edu/~schmidt/PDF/C++-C-portions4.pdf)
- [Introduction to C++ Syllabus](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/61b41fca32ac19441fc06b34c87e40c0/asset-v1:Microsoft+DEV210x+4T2017+type@asset+block/Introduction_to_C___Syllabus.pdf)


- MIT - Introduction to C++ - 2011
- MIT - Introduction to C and C++
- Stanford slides and code - super useful
- https://classroom.udacity.com/courses/ud210/lessons
- http://www.cppsamples.com/
- https://github.com/jesyspa/linear-cpp
- http://en.cppreference.com/w

Cool stuff
- https://opencv.org/
