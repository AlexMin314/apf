# Linked List Beginner Exercises
Here's some starter code for you. The starter code includes a class definition
for a single Node in a list, and a class that keeps track of an entire list
starting with the `root`.

These exercise problems ask you to start with the list in one state and write
code that transforms it into another state. For example, this "problem A" is
asking you to write code to remove the first item from a list.

Each problem has three lines of comments.
* The problem name, like `Problem 1`
* The list as it starts, like `1 2 3`
* The list as it should be after you write your code, `2 3`

Do not ever change `.data` values. Instead, manipulate the `.next` references
so the nodes change what they're pointing to.

So for example, here `Problem A` gives you a list that starts like `1 2 3` and asks you to
make it look like `2 3` at the end. We can then figure out that it's your job to write code that removes
the node with `1` from the list.
```js
// Problem A
// 1 2 3
// 2 3
var listA = makeList([1, 2, 3]);
// your manipulations here
console.log(listA.toString());
```

Here is what we might have:
```js
// example solution for Problem A
listA.root = listA.root.next;
```

Try to write code to solve these problems.

> [Exercise code for you to modify is here!](http://jsbin.com/nalebowoko/2/edit?js,console)

Remember, don't change the existing function definitions at the top (`ListNode`, `LinkedList`, `LinkedList.toString`) or `makeList` at the bottom. Just try to solve the problems in the middle!


> [When you're finished, solutions are here](http://jsbin.com/ximopit/edit?js,console)
