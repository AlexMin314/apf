
# Attaching Handy Functionality
Since the **ArrayList** is all encapsulated in a class with methods attached
to it, we have an excellent chance to build other convenient functionality on
our lists beyond what's specified in the **List ADT**.

## Exercise: Build Copy Function
Write a new method in the `List` class called `copy` that creates a new
instance of an `List` and returns it filled with the contents of the
original list.

The `copy` method will be useful if you ever need to copy a list and manipulate it
without making changes to the original list.

> Check your solution [here](../../exercise-solutions/list-copy-solution.js)



## Exercise: Reversing a list
Write a new method on the `List` class called `reverse` that reverses
the list in place.

Careful! Make sure you don't overwrite things and lose data while you're
reversing things!

> Check your solution [here](../../exercise-solutions/list-reverse-solution.js)

## Exercise: Write an equals Method
Write a new method on the `List` class called `equals` that accepts another
list called `other` as a parameter and returns `true` if the two lists contain
elements in the same order, otherwise it returns `false`.

> Check your final solution [here](../../exercise-solutions/list-final-solution.js)! This includes many tests to run to prove it works - always create tests!
