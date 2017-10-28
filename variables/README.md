# Variable
A named portion of memory used to store a determined value.

## Naming variables
An identifier is a sequence of characters used to denote the name of a var, function, class, etc.

## Variable types

`bool`: 1 byte...

`unsigned` can't be negative
`signed` by default


## Array
A series of elements of the same type, occupying a contiguous block of memory.

```cpp
type name[number_elements];
```
OR
```cpp
type name[] = {1, 2, 3, etc}
```

## Standard Array - `std::array`
```cpp
int numbers[] = {1, 5, 8}

std::cout << numbers[0]

std::array<double> myArray = {1, 2, 3}
```

## Vector - `std::vector`
`#include <vector>`

Syntax
```cpp
std::vector<double> vectorVar = {1, 2, 3, etc};
```

Adding values to the array:
```cpp
vectorVar.push_back(4);
vectorVar.push_back(5);
vectorVar.push_back(6);
```

**Vector methods**
- `push_back` - vector.push_back(value) -- Adds value to vector
- `size` - vector.size() -- Prints vector size
- `at` - vector.at(0) -- Get value by index - same as vector[0]
