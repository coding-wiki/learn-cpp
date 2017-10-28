# Operators

## Integer arithmetic
double a = 9 / 5

vs

double a = 9.0 / 5.0

## Casting types
You can cast values of one data type to a value of another data type.
A use case can be converting an `int` to a `double`

Syntax

```cpp
static_cast<data type>(value here)
```

Where:
- *data type* may be `int`, `double`, etc
- *value here* may be any variable value such as `50`

**Alternative examples**
```cpp
double anotherDouble = ((double) 20) / ((double) 7);
```

To cast an integer to string use:
```cpp
std::string = std::to_string(5)
```

## Indirection Operator - `<<`
What is this?
Pushes to a stream??? 

## Extraction Operator - `>>`
```cpp
std::cin >> width >> height;
```
How should styling work?

## Reference Operator - `&`
Read address of

## Dereference - `*`
Read value pointed by
```cpp
std :: cout << " Value is: "
  << *numberVar
```

Set the value of
```cpp
int numberVar = 5

int * pointer = &numberVar

int newNumber = 10

pointer = &newNumber

std::cout << *pointer
```
