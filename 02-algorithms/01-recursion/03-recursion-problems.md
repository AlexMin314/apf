# Recursive Exercises!

Let's practice!

## Exercise 1: Palindromes
Detecting whether a string is a palindrome is an excellent example of a problem
that turns out to be extremely elegant when written recursively.

What is a palindrome? A palindrome is a string that is spelled the same backwards
and forwards.

Put another way, a palindrome is a string where the first letter is equal to the
last letter, and the second letter is equal to the second to last letter and so
on and so forth. An empty string is considered a palindrome. A one letter string
is considered a palindrome.

Write a function called `isPalindrome` that accepts a string and returns `true`
if the string is a palindrome, and returns `false` if the string is not.

** Things to think about:**

What are our base case(s)?

* Return true if the string is empty.
* Return true if the string is of length 1

What is our recursive case?

* compare the first and last letter:
  * if they are equal then recurse on the remaining parts of the string
  * if they are different then return false

Remember your return statements! The final solution should bubble up from
the deeper recursive calls!

```
isPalindrome("")         // true
isPalindrome("a")        // true
isPalindrome("ab")       // false
isPalindrome("abba")     // true
isPalindrome("catdog")   // false
isPalindrome("tacocat")  // true
```


> [Start here!](http://jsbin.com/pucuqoduvu/2/edit?js,console)

Try it before looking at the diagram below (it's a huge hint!).

> <details>
<summary>Need a hint?</summary>
Check this [JSBin](http://jsbin.com/xawumuzatu/2/edit?js,console)
</details>

> <details>
<summary>Want some pseudocode?</summary>
[JSBin that only has pseudocode here](http://jsbin.com/fevamuximo/2/edit?js,console)
</details>

> <details>
<summary>Solution:</summary>
[JSBin of solution here](http://jsbin.com/jodusum/edit?js,console)
</details>


![factorial](assets/palindrome.png)

## Exercise 2: Reverse String

Write a recursive function called `reverse` that accepts a string and returns
a reversed string.

```js
reverse("") // ""
reverse("a") // "a"
reverse("ab") // "ba"
reverse("computer") "retupmoc"
reverse("abcdefghijklmnopqrstuvwxyz") // "zyxwvutsrqponmlkjihgfedcba"
reverse(reverse("computer")) // "computer"
```

> [Start here!](http://jsbin.com/javekitehe/2/edit?js,console)

Don't look at the diagram until you need a hint!

> <details>
<summary>Solution</summary>
[In this JSBin!](http://jsbin.com/niqacof/edit?js,console)
</details>

Is `reverse(reverse("reverse"))` considered recursive? Why or why not?

![factorial](assets/palindrome.png)


## Exercise 3: Make Change
Write a recursive function called `makeChange` that accepts an integer value
and an array `[0, 0, 0, 0]` and returns the array with values representing how
many [quarters, dimes, nickels, and pennies] should be given to efficiently make
that value.

* `makeChange(0, [0,0,0,0])` should return `[0, 0, 0, 0]`
* `makeChange(1, [0,0,0,0])` should return `[0, 0, 0, 1]` for one penny.
* `makeChange(6, [0,0,0,0])` should return `[0, 0, 1, 1]` for one nickel and one penny.
* `makeChange(68, [0,0,0,0])` should return `[2, 1, 1, 3]` for two quarters,
  one dime, one nickel and three pennies.

You can pass the array parameter through recursive calls in order to maintain
values:

```js
function example(n, arr) {
  if (n < 1) {
    return arr;
  }
  arr[0]++;
  arr[1] += 2;
  arr[2] += 3;
  arr[3] += 4;
  return example(n - 1, arr);
}
```

* `example(0, [0,0,0,0])` returns `[0, 0, 0, 0]`
* `example(1, [0,0,0,0])` returns `[1, 2, 3, 4]`
* `example(2, [0,0,0,0])` returns `[2, 4, 6, 8]`


> [Start here!](http://jsbin.com/mojoyixuxo/2/edit?js,console)

> <details>
<summary>Want the answer?</summary>
[Solution here](http://jsbin.com/dorumez/edit?js,console)
</details>




## Exercise 4: Flatten Array
Write a function called `flatten` that accepts an array. The array may contain
more arrays inside itself, like `[1, 2, [3, 4], 5]` and `[[[[1]]], 2]`. The
function should return one array with all of the values of all of the arrays
"flattened" out so there's just one array and no more nested arrays.

* `flatten([])` returns `[]`
* `flatten([1,2,3])` returns `[1, 2, 3]`
* `flatten([1,[2],3])` returns `[1, 2, 3]`
* `flatten([1, 2, [3, 4], 5])` returns `[1, 2, 3, 4, 5]`
* `flatten([[[[1]]], 2])` returns `[1, 2]`

You can use the function `Array.isArray()` to determine if an item in array
is another array.

```
var aa = [1,2];
var ab = [1, [2, 3], 4];
var zz = 42
console.log(Array.isArray(aa));    // true
console.log(Array.isArray(ab));    // true
console.log(Array.isArray(ab[0])); // false
console.log(Array.isArray(ab[1])); // true
console.log(Array.isArray(ab[2])); // false
console.log(Array.isArray(zz));    // false
```

> [Start here!](http://jsbin.com/miwutitubo/1/edit?js,console)

> <details>
<summary>Ready for the solution?</summary>
[Answer here!](http://jsbin.com/jigane/edit?js,console)
</details>


## Exercise 5: Pretty Print
Write a function called `prettyPrint` that accepts a complex object and prints out
all of its properties and all of its values. The object can have objects nested
inside of it.

Make the function accept two parameters: `prettyPrint(oo, indent)`.
`oo` is the object that's currently being iterated over.
`indent` is a string representing the current level of indentation.

Here's a piece of code that will allow you to call `prettyPrint` without
having to pass in an empty string each time you indent:

```js
function prettyPrint(oo, indent) {
  indent = indent || "";

  // write your solution here
}

```

Whenever you make a recursive call increase the level of indentation by
adding two spaces to indent:

```js
function prettyPrint(oo, indent) {
  // ...
  prettyPrint(newOO, indent + '  ');
  // ...
}
```


It's useful to know how to detect actual key/value objects in JavaScript:

```js
typeof [] // "object"
typeof {} // "object"

[].constructor == Array // true
[].constructor == Object // false
({}).constructor == Object // true
```

Expected Output:

```js
o1 = {a: 1, b: 2};
o2 = {a: 1, b: 2, c: {name: "Bruce Wayne", occupation: "Hero"}, d: 4};
o3 = {a: 1, b: 2, c: {name: "Bruce Wayne", occupation: "Hero", friends: {spiderman: {name: "Peter Parker"}, superman: {name: "Clark Kent"}}}, d: 4};

prettyPrint(o1, "")
a: 1
b: 2

prettyPrint(o1, "")
a: 1
b: 2
c:
  name: Bruce Wayne
  occupation: Hero
d: 4

prettyPrint(o3, "")
a: 1
b: 2
c:
  name: Bruce Wayne
    occupation: Hero
    friends:
      spiderman:
        name: Peter Parker
      superman:
        name: Clark Kent
d: 4
```

> The JS Bin site actually adds in a lot of extra space to `console.log` when it
prints, so this pretty print function doesn't end up looking so pretty. Feel free to use repl.it instead; both are linked.

> [Start here! - JSBin](http://jsbin.com/vikefeluli/2/edit?js,console)

> [Start here! - repl.it](https://repl.it/HKP6/1)


> <details>
<summary>Pretty Print Solution</summary>
 **[Ugly solution on JSBin](http://jsbin.com/vufefey/edit?js,console)** and **[Pretty solution on repl.it!](https://repl.it/HKP6)**
</details>
