# Part 1. A Quick Introduction...

## Q1. What is printed by line 9? 
`values added:  20`

## Q2. What is printed by line 13?
`final result:  20`

## Q3. What is printed by line 9?
`final result:  20`

## Q4. What is printed by line 13?
> ReferenceError: result is not defined
> - The variable `result` with the `let` keyword has a block scope.
> - `result` is defined in the `if` block, so the scope of `result` is the `if` block.
> - The line 13 is not in the `if` scope, so `result` is not defined.

## Q5. What is printed by line 9?
> TypeError: Assignment to constant variable
> - We know that "Declaring a variable with the `const` prevents it from being reassigned after it is assigned for the first time".
> - `result` is defined and assigned by `const result = 0;`, so we cannot reassigned `result` again.
> - `result = num1 + num2;` hope to reassign `result` again, so it is will return an error.

## Q6. What is printed by line 13?
> ReferenceError: result is not defined
> - The variable `result` with the `const` keyword has a block scope.
> - `result` is defined in the `if` block, so the scope of `result` is the `if` block.
> - The line 13 is not in the `if` scope, so `result` is not defined.

<br>


