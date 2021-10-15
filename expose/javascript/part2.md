# Part 2. A Little More of a Challenge...

## Q1. What will happen at line 12 and why? If the code causes an error, explain why.
> `3` will be printed. 
> - Change in the value of `i`: `0` -> `1` -> `2` -> `3`
> - The variable `i` is defined in `for` statement by `var`. After the `for` loop, the value of `i` will be reassigned to `3` because the value of `prices.length` is `3` and `(var i = 0; i < prices.length; i++)`.
> - Since "The `var` keyword provides its variable with what is known as function scope", and `i` is defined in the function `discountPrices`, so `i` can be accessed anywhere inside the function `discountPrices`. 
> - The statement `console.log(i);` is inside the funtion `discountPrices`, so `i` can be accessed and `3` will be printed.

## Q2. What will happen at line 13 and why? If the code causes an error, explain why.
> `150` will be printed. 
> - Change in the value of `discountedPrice`: `50` -> `100` -> `150`
> - The variable `discountedPrice` is defined in `for` loop by `var`. In every loop, `discountedPrice` is defined and assigned again.
> - Since "The `var` keyword provides its variable with what is known as function scope", and `discountedPrice` is defined in the function `discountPrices`, so `discountedPrice` can be accessed anywhere inside the function `discountPrices`. 
> - The statement `console.log(discountedPrice);` is inside the funtion `discountPrices`, so `discountedPrice` can be accessed and `150` will be printed.

## Q3. What will happen at line 14 and why? If the code causes an error, explain why.
> `150` will be printed. 
> - Change in the value of `finalPrice`: `0` -> `50` -> `100` -> `150`
> - The variable `finalPrice` is defined by `var`. In every loop, `finalPrice` is reassigned.
> - Since "The `var` keyword provides its variable with what is known as function scope", and `finalPrice` is defined in the function `discountPrices`, so `finalPrice` can be accessed anywhere inside the function `discountPrices`. 
> - The statement `console.log(finalPrice);` is inside the funtion `discountPrices`, so `finalPrice` can be accessed and `150` will be printed.

## Q4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
> `[ 50, 100, 150 ]` will be returned.
> - This function return `discounted`, and `discounted` is an array.
> - In every loop, the statement `discounted.push(finalPrice);` push the `finalPrice` to the array `discounted`.
> - Change in the value of `discounted`: `[]` -> `[ 50 ]` -> `[ 50, 100 ]` -> `[ 50, 100, 150 ]`. `discounted` is defined by `var`, so `discounted` can be reassigned.

## Q5. What will happen at line 12 and why?  If the code causes an error, explain why.
> ReferenceError: i is not defined
> - The variable `i` with the `let` keyword has a block scope.
> - `i` is defined in the `for` block, so the scope of `i` is the `for` block.
> - The line 12 is not in the `for` scope, so `i` is not defined.

## Q6. What will happen at line 13 and why? If the code causes an error, explain why.
> ReferenceError: discountedPrice is not defined
> - The variable `discountedPrice` with the `let` keyword has a block scope.
> - `discountedPrice` is defined in the `for` block, so the scope of `discountedPrice` is the `for` block.
> - The line 13 is not in the `for` scope, so `discountedPrice` is not defined.

## Q7. What will happen at line 14 and why? If the code causes an error, explain why.
> `150` will be printed.
> - The variable `finalPrice` with the `let` keyword has a block scope.
> - `finalPrice` is defined in the function `discountPrices` block, so the scope of `finalPrice` is the function `discountPrices` block.
> - The line 14 is in the function `discountPrices` block, so `finalPrice` can be accessed and `150` will be printed.

## Q8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
> `[ 50, 100, 150 ]` will be returned.
> - This function return `discounted`, and `discounted` is an array.
> - In every loop, the statement `discounted.push(finalPrice);` push the `finalPrice` to the array `discounted`.
> - Change in the value of `discounted`: `[]` -> `[ 50 ]` -> `[ 50, 100 ]` -> `[ 50, 100, 150 ]`. `discounted` is defined by `let`, so `discounted` can be reassigned.

## Q9. What will happen at line 11 and why? If the code causes an error, explain why.
> ReferenceError: i is not defined
> - The variable `i` with the `let` keyword has a block scope.
> - `i` is defined in the `for` block, so the scope of `i` is the `for` block.
> - The line 11 is not in the `for` scope, so `i` is not defined.

## Q10. What will happen at line 12 and why? If the code causes an error, explain why. 
> `3` will be printed.
> - The variable `length` with the `const` keyword has a block scope.
> - `length` is defined in the function `discountPrices` block, so the scope of `length` is the function `discountPrices` block.
> - `length` does not be reassigned in the funtion, so no such error.
> - The line 12 is in the function `discountPrices` block, so `length` can be accessed and `3` will be printed.

## Q11. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
> `[ 50, 100, 150 ]` will be returned.
> - This function return `discounted`, and `discounted` is an array.
> - In every loop, the statement `discounted.push(discountedPrice);` push the `discountedPrice` to the array `discounted`.
> - Change in the value of `discounted`: `[]` -> `[ 50 ]` -> `[ 50, 100 ]` -> `[ 50, 100, 150 ]`. 
> - Although `const` variable cannot be reassigned, `discounted.push()` is not a reassignment.

## Q12. Given the above Object, write the notation for: 
### A. Accessing the value of the name property in the student object
`student.name`

### B. Accessing the value of the Grad Year property in the student object
`student['Grad Year']`

### C. Calling the function for the greeting property in the student object
`student.greeting();`

### D. Accessing the name property of the object in the Favorite Teacher property in student
`student['Favorite Teacher'].name`

### E. Access the first index in the array of the courseLoad property of the student object
`student.courseLoad[0]`

## Q13. Arithmetic
### A. '3' + 2
> Output: `32` (string)
> - `2`(number) convert to `'2'`(string)
> - `'3' + '2' = '32'`

### B. '3' - 2
> Output: `1` (number)
> - `'3'`(string) convert to `3`(number)
> - `3 - 2 = 1`

### C. 3 + null
> Output: `3` (number)
> - `null` convert to `0`(number)
> - `3 + 0 = 3`

### D. '3' + null
> Output: `3null` (string)
> - `null` convert to `'null'`(string)
> - `'3' + 'null' = '3null'`

### E. true + 3
> Output: `4` (number)
> - `true`(boolean) convert to `1`(number)
> - `1 + 3 = 4`


### F. false + null
> Output: `0` (number)
> - `false`(boolean) convert to `0`(number)
> - `null` convert to `0`(number)
> - `0 + 0 = 0`

### G. '3' + undefined
> Output: `3undefined` (string)
> - `undefined` convert to `'undefined'`(string)
> - `'3' + 'undefined' = '3undefined'`

### H. '3' - undefined
> Output: `NaN` (number)
> - `'3'`(string) convert to `3`(number)
> - `undefined` convert to `NaN`(number)
> - `3 - NaN = NaN`

## Q14. Comparison
### A. '2' > 1
> Output: `true`
> - `'2'`(string) convert to `2`(number)
> - `2 > 1` => `true`

### B. '2' < '12'
> Output: `false`
> - Compare two strings `'2'` and `'12'`, so compare the first character of both strings.
> - `'2' < '1'` is false, so `'2' < '12'` is false.

### C. 2 == '2'
> Output: `true`
> - `'2'`(string) convert to `2`(number)
> - `2 == 2` => `true`

### D. 2 === '2'
> Output: `false`
> - `2` is number, but `'2'` is string
> - The types are different, so false

### E. true == 2
> Output: `false`
> - `true`(boolean) convert to `1`(number)
> - `1 == 2` => `false`

### F. true === Boolean(2)
> Output: `true`
> - `Boolean(2)` get `true`(boolean)
> - `true === true` => `true`

## Q15. Explain the difference between the == and === operators.
- The `==` operator may convert the two values to other type before comparing them for equality, but the `===` operator does not do conversion.
- The `==` operator only requires that two values be compared for equality, but the `===` operator requires not only the same values but also the same type.

## Q16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.
> In the JS file 'part2-question16.js'.

## Q17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. 
> The result is: `[ 2, 4, 6 ]`
> 1. We call `modifyArray([1,2,3], doSomething)`
> 2. Initial `newArr` being a empty array.
> 3. In every for loop
>     - The statement `callback(array[i])` will call the function `doSomething(array[i])`. 
>     - Then, the value returned by the `doSomething(array[i])` function will be pushed to the array `newArr`.
> 4. After 3 times for loop: Change in the value of `newArr`: `[]` -> `[ 2 ]` -> `[ 2, 4 ]` -> `[ 2, 4, 6 ]`. 

## Q18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second. 
> In the JS file 'part2-question18.js'.

## Q19. What is the output of the above code?
> Output: 
> ```
> 1
> 4
> 3
> 2
> ```
> 1. First, the statement `console.log(1);` print `1`
> 2. Second, the statement `setTimeout (function() { console.log(2); }, 1000);` set a dalay 1 second, which means function `function() { console.log(2); }` will callback to thread after 1 second.
> 3. Third, the statement `setTimeout (function() { console.log(3); }, 0);` set a dalay 0 second, which means function `function() { console.log(3); }` will callback to thread after 0 second. In other words, the function is called back immediately, but at the end of the event queue.
> 4. Fourth, the statement `console.log(4);` print `4`
> 5. Fifth, do the function `function() { console.log(3); }`, print `3`
> 6. Finally, do the function `function() { console.log(2); }` after the function is called back to thread, print `2`