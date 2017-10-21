
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

