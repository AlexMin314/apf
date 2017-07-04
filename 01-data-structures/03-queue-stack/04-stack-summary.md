
## Real world stacks

#### The Call Stack

Most programming languages rely on something called the "call stack," especially for recursion. The call stack keeps track of function calls that are in the process of executing.  When a function is called, it's `push`ed onto the call stack. When the function returns, it's `pop`ed off of the stack.

 Here's an example:

 ```js
function one() {
    two();
    console.log("In one");
}

function two() {
    three();
    console.log("In two");
}

function three() {
    console.log("In three");
}

//Call `one`
one();
 ```

 Here is a progression of the call stack:

| Step 1 | Step 2 | Step 3 | Step 4 | Step 5 | Step 6 |
|--------|:------:|:------:|:------:|:------:|:------:|
| one()  | two()  | three()| two()  | one()  |
|        | one()  | two()  | one()  |
|        |        | one()  |        |

As you can see, when one method calls another, it gets added to the call stack. The function that is currently executing is always at the top of the call stack.

> When the call stack gets too large to fit into memory, a special error happens, called a Stack Overflow.


# Takeaways

+ Stacks work like pancakes. The element that was most recently pushed to the top is the first element to get `pop()`ed off.
+ Stacks are used to remember what function is currently executing and what function called it.
+ Stacks are easy to implement using an Array.

Some stack implementations also allow us to `peek` at the value of the top item without actually `pop`ing it off of the stack.
