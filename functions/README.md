# C++ Functions

## Basic Syntax
```c++
type name(parameter list) {
 // statements in the function body
} 
```
Where
- *type* is: `string`, `int`, etc.
- *name* is: the function name
- *parameter list* is: list of variable declarations that hold the input data


## Simple Example
```c++
int addOne(int n) {
  return n + 1;
}
```

## Syntax

### Optional Parameters
Functions can specify optional parameters by including an initializer in the variable declaration:

```c++
void getValue(int value = 72);
```

## Resources
- https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1134/handouts/05-FunctionsInC++.pdf
