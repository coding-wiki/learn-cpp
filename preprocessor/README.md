# Preprocessor
A preprocessor is a language that takes an input of a plain text file written using a programming language syntax, and output a new plain text file following the syntax of another programming language.

A preprocessor is a *bridge* between say *C++* source and the compiler, allowing you to **conditionally compile** based on the target environment.

## Use Cases
A compiler may define variables via a *compiler directive* to give information about the target environment, such as the usage of *x86/ARM architectures* or *Linux/Mac* systems

## Getting Started


## Preprocessor Directives

## `ifndef` - Include Guard
Checks whether the given token has been #defined earlier in the file or in an included file

Example usage:
```
#ifndef <token>
  /* code */
#else
  /* code to include if the token is defined */
#endif
```

## `define` - Define
Define an *empty?* variable

