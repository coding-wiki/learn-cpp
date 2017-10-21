learn-cpp

Learn C++

General Goals

- [ ] Hello world
- [ ] TDD
- [ ] Dev Workflow - compiling
- [ ] Distribution

## Tmp
[1] When you program, you create a concrete representation of the ideas in your solution to some
problem. Let the structure of the program reflect those ideas as directly as possible:
[a] If you can think of ‘‘it’’ as a separate idea, make it a class.
[b] If you can think of ‘‘it’’ as a separate entity, make it an object of some class.
[c] If two classes have a common interface, make that interface an abstract class.
[d] If the implementations of two classes have something significant in common, make that
commonality a base class.
[e] If a class is a container of objects, make it a template.
[f] If a function implements an algorithm for a container, make it a template function implementing
the algorithm for a family of containers.
[g] If a set of classes, templates, etc., are logically related, place them in a common namespace.
[2] When you define either a class that does not implement either a mathematical entity like a
matrix or a complex number or a low-level type such as a linked list:
[a] Don’t use global data (use members).
[b] Don’t use global functions.
[c] Don’t use public data members.
[d] Don’t use friends, except to avoid [a] or [c].
[e] Don’t put a ‘‘type field’’ in a class; use virtual functions.
[f] Don’t use inline functions, except as a significant optimization.


Each source file is compiled separately from other source files. `.cpp` files are clueless to what is happening in other `.cpp` files

Headers are used to link `.cpp` files / namespaces?

Header files: make the *interface* visible to other `.cpp` files

Class declared in the header file?

`#include` is basically a *copy/paste* operation

File extensions: convention

*Header* files should use `.h__` which can be `.h`, `.hpp` or `.hxx`
  - `.hpp` used for inline functions?
Anything starting with `.h` is a header file

*C++ source files* should use `.c__` extension which can be `.cpp`, `.cxx` or `.cc`

*C source files* should use `.c` *ONLY*

Header files use preprecessor directive `#include`s and not compiled

*Do not include source files*

*Derived class* - an `extends`ed 

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


Learning Outcomes

- Understand and use the basic programming constructs of C/C++
  - What are the basic programming constructs
  - What is a *preprocessor*?
- Manipulate various C/C++ datatypes, such as arrays, strings, and pointers
  - What are the C/C++ datatypes and how do we manipulate them?
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



## Resources



- MIT - Introduction to C++ - 2011
- MIT - Introduction to C and C++
- Stanford slides and code - super useful
- https://classroom.udacity.com/courses/ud210/lessons
- http://www.cppsamples.com/
- https://github.com/jesyspa/linear-cpp
- http://en.cppreference.com/w

Cool stuff
- https://opencv.org/
