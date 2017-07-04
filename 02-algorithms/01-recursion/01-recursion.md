# Recursion

## Objectives

* Define recursion
* Identify the two parts of a recursive function:
  * Write base case
  * Write recursive case
* Write a recursive function
* See classic recursion problems
* Write your own recursive functions

## What is it?

First, we're going to explore a topic called **recursion**. In programming,
recursion basically means, "a function that calls itself."

Here are some images that we could say are **recursive** and exhibit properties
of **recursion** - note that inside of each image is the same image.

![Infinite elevators](https://camo.githubusercontent.com/572d49b42a426580c7aad148ab174dd3a8a62c75/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f2d424f59645a4936745437592f554a777a524b5964514e492f4141414141414143356a732f4c74672d676436534351512f773530362d683430352f70686f746f2e6a7067)
![Mona Lisa holding her own painting](recursion_mona_lisa.jpg)
![Droste branding](recursion_droste.jpg)


## Joke Dictionary Definition
**Definition of Recursion**: See **Recursion**

## A Useless Recursive Function
We know that functions can call other functions. What isn't so easily obvious is that functions can call *any* function - so, actually, functions can call themselves, too. A function that calls itself is called a **recursive function**.

Let's look at one function that
calls itself and consider what it does.

* What will be the output of this function?
* When will this program stop running?
* **Warning:** running this program may cause your JavaScript console to
  stall forever or crash.

```js
// define the function
function philosopher() {

  console.log("hmm...");

  // call itself
  philosopher();
}

// call the function initially
philosopher();
```

What will happen here?
* When we call `philosopher` initially, it prints out "hmm...".
* Then, the function calls `philosopher` - as in, itself. So, it will once again print "hmm..."
  * Before calling itself again...
  * Forever!

This function will theoretically print out "hmm..." forever. It will never stop
running. It will keep calling itself forever and ever.

In practice, the function will eventually crash. Your computer will run out of
memory and you'll see an error message saying something like, "stack overflow
exception" or "maximum call stack exceeded."


Recursion seems dangerous - crashing programs is not ideal - but it's possible to write
recursive functions in such a way that we can write very robust, expressive code. So actually - recursion is your friend!

Traditionally, recursive functions require at least one parameter passed in. Each time a function calls itself, the value of the parameter is changed to produce a desired effect. One way to think of recursive functions is that many of them could be written with `for` loops or `while` loops, but recursive functions are written more cleanly and with less code. Check out this non-recursive function:


```js
/* Display all numbers from num to 0 on the screen */
function countDown(num){
  for (x=num; x>0; x--) {
    console.log(x);
  }
}

countDown(10);
=> 10 9 8 7 6 5 4 3 2 1 0
```

It works, but if you look - we're writing a `for` loop based on the number passed in. What if we could make the function itself effectively a `for` loop? This is recursion. Here's the same function, written recursively:

```js
/* Display all numbers from num to 0 on the screen */
function countDown(num){
    /* Base Case */
    if(num < 0){
        return;
    } else {

        /* Action Steps */
        console.log(num);
        num = num - 1;

        /* Recursive Steps */
        countDown(num);     
    }
}

countDown(10);
=> 10 9 8 7 6 5 4 3 2 1 0
```

###What is this magic?!


1. The code above displays the current value of `num` to the screen then decrements the value by one (look in the `else`!)
2. It then calls `countdown(num)` again. This time the value has been decremented.
3. Notice that these statements are encapsulated inside an `if` statement. This creates what is known as a **base case.**
4. When `num` no longer satisfies the conditional statement `num >= 0`, (the variable reaches zero,) the function will no longer call itself and will end.
5. Pat yourself on the back. This is not simple stuff!

When we call `countDown()` on 10, this is what happens:
* `if` statement:
  * Is `10<0`? // No. Base case not met!
* `else` statement:
  * `console.log(10)`.
  * `num` becomes 9
  * call `countDown()` on 9!

Now we repeat, for `countDown()` being 9 -- and it's worth noting, I am literally copying and pasting this down with a different number! `countDown` called itself, so the steps are identical.

* `if` statement:
  * Is `9<0`? // No. Base case not met!
* `else` statement:
  * `console.log(9)`.
  * `num` becomes 8
  * call `countDown()` on 8!

At this point, `10 9` is printed to the console. This repeats, decreasing one every time. Eventually, `num` will equal -1. At this point, the console will have logged `10 9 8 7 6 5 4 3 2 1 0`. Now `num` is being called with -1 - let's look at what happens then.

* `if` statement:
  * Is `-1<0`? // Yes! Base case met.
  * `return`. // Recursively calling the program ends!

As you can see, the base case is **extremely** important. Otherwise, as we saw above with `philosopher`, the function would call itself forever! A recursive function needs to have a base case to check if it should stop.

In this `countDown` example, it seems easier to just have the `for` loop! But there are far more complicated functions out there, and with recursion, we can write them in a much simpler and more readable way.

## Base Cases and Recursive Cases
Recursive functions are built out of these two parts.

* the **base case** - the part of the function that doesn't call itself.
* the **recursive case** - the part of the function that calls itself.

The general format of a recursive function might look something like this:

```js
function myRecursive(){
  if (base_case) { // base case! Check something - and return if it's true
    return;
  }
  else {
    // Action step: do something
    myRecursive(); // Recursive step: Call itself.
  }
}
```

Let's look at more recursive functions and see what techniques we can use to
make sure our programs do useful things and don't simply call themselves forever.
