# Pointers and References

## Warning
Do not initialise pointers with no value, as this may point to a "random" address in memory

Initialise a pointer by setting it to null:
```cpp
int * pointer = 0;
```

## Deleting Pointers
```cpp
delete pointer;
delete[] pointer;
```

**Deleting memory address reference from the pointer**
```cpp
delete pointer;
pointer = 0;
```
