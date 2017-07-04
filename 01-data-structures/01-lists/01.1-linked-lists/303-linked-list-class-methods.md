# Linked List Class
At this point you should have an understanding of `ListNodes` and you should
be able to write code that inserts and removes nodes in small lists without
losing reference to other nodes in the list.

Now we'll take the list manipulation techniques we've learned and we'll build
one class that provides a functional interface for programmers to use. We'll
implement the **List ADT** with a **Linked List** data structure that satisfies
the **List** specification so programmers can call methods like
`.insert(i, val)`, `.replace(i, val)` and `.remove(i)` without having to bother
with manipulating the linked list internally themselves.

# Linked List Class
The basic structure of a `LinkedList` relies on two classes. One class defines
what the individual `ListNodes` look like. They have a `data` property to store
their data and they have a `next` property to keep reference to the next node
in the list.

The `LinkedList` class has just one property, its `root`. The `root` refers to
the very front of the list. The Linked List only has to keep track of what node
is at the front of the list and it can follow its references to everything else
in the list. The `LinkedList` class will have methods like `.get(i)`,
`.set(i, data)`, `.insert(i, data)`, and `.remove(i)` too when we're done.

Here's the fundamental structure of the classes for now. Feel free to create a new JSBin and follow along! A link to a JSBin with all of the exercise implemented is at the bottom of the page.

```js
class ListNode {
  constructor(data, next) {
    this.data = data;  
    this.next = next;  
  }  
}

class LinkedList {
  constructor() {
    this.root = undefined;
  }
}
```

# Exercise: Add a .prepend() Method
Use what you know about ListNode manipulations to add a method to the
`LinkedList` class. The method should be called `prepend` and accept a parameter
`data`. The method should create a new `ListNode` and set its data to the
value of the `data` parameter, then attach that new node to the front of the
list without destroying the rest of the list.

> We've seen this before! Try it yourself before looking at the code below

## Prepend Solution
The `ListNode` exercises cover exactly this scenario. Now we're just inside a
class that has `root` attached to the `this` of the object instance.

```js
class LinkedList {
  constructor() {
    this.root = undefined;
  }

  prepend(data) {
    var node = new ListNode(data);
    node.next = this.root;
    this.root = node;
  }
}
```

> We've seen this before! Try it yourself before looking at the code below

# Exercise: Add a .pop() Method
Write a method on the `LinkedList` class called `pop` that returns the value
of the first node in the list, and removes that node from the front of the list.

If the list if empty the method should return false. Be careful to check to see
if something is `undefined` before accessing `.next` off it or else there will
be an error.

## .pop() Solution
```js
class LinkedList {
  constructor() {
    this.root = undefined;
  }

  pop() {
    // check to see if the list is empty and just return false.
    if (this.root === undefined) {
      return false;
    }

    var value = this.root.data;
    root = root.next;

    return value;
  }
}
```

## Exercise: Empty
Write a method called `empty` that obliterates the entire list.

### Solution: Empty
```js
class LinkedList {
  empty() {
    this.root = undefined;
  }
}
```

## Exercise: Read Index
Add a method to the `LinkedList` class called `get(n)` that accepts integer `n`
and returns the `data` value of the node at positions `n`.

Modify the while loop above so it uses the local variable `current` to step
through the nodes in the list one by one but only prints out the `nth` node.
Use an if statement and a local variable `count` to keep track of how many
nodes you've stepped through.

Return `false` if the list is empty or the list is smaller than `n`.

### Read Index Solution
```js
var root = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3))));

class LinkedList {
  constructor() {
    this.root = undefined;
  }

  get(n) {
    var count = 0;
    var current = this.root;
    while (current !== undefined && count <= n) {
      if (count === n) {
        return current.data;
      }
      count++;
      current = current.next;
    }

    return false;
  }
}
```

## Exercise: Insert At End
Write a method called `append(data)` that accepts a piece of data and adds it
to the end of the list.

Notice that you'll have to deal with a special case if the list is empty, vs
when there's one or more items in the list. How do you know when the list is
empty?

If you run the while loop until `current` is `undefined` then you'll have run
off the list and you won't be able to add anything to the list. Instead,
look one spot ahead with current.

* if `current` is not `undefined` then you're at a node
* if `current.next` is not defined then there's a node after `current`
* if `current.next` is `undefined` then you're sitting on the last node and
  have a chance to attach a new node to the end of the list.

Here's a hint to get you started. This while loop steps current forward as long
as there's a `next` node to step on to. The loop ends when `current` is equal
to the last node in the list and you have a chance to attach another node to
its own `.next` property.

```
var current = this.root;
while(current.next !== undefined) {
  current = current.next;
}
current.next = ???
```

### Solution: Insert At End
```js
class LinkedList {
  append(data) {
    if (this.root === undefined) {
      this.root = new ListNode(data);
    } else {
      var current = this.root;
      while (current.next !== undefined) {
        current = current.next;
      }

      current.next = new ListNode(data);
    }
  }
}
```

## Exercise: Insert
Write a method called `insert(i, data)` that inserts the data at the position
`i` in the list. You may assume `i` is less than or equal to the size of the
list for this problem.

### Solution: Insert
```js
class LinkedList {
  insert(i, data) {
    if (i === 0) {
      prepend(data);
    } else {
      var count = 0;
      var current = this.root;
      while (count < i) {
        current = current.next;
      }

      current.next = new ListNode(data);
    }
  }
}
```

## Exercise: Remove
Write a method called `remove(i, data)` that removes a node at the position
`i` in the list. You may assume `i` is less than the size of the list for this
problem.

### Solution: Remove
```js
class LinkedList {
  remove(i) {
    if (i === 0) {
      this.root = this.root.next;
    } else {
      var count = 0;
      var current = this.root;
      while (count < i) {
        current = current.next;
      }

      current.next = current.next.next;
    }
  }
}
```

## Exercise: Contains
Write a method called `contains(data)` for the `LinkedList` class. It should
return `true` if the list contains `data`, or `false` if it doesn't.

### Solution: Contains
```js
class LinkedList {
  contains(data) {
    var current = this.root;
    while (current !== undefined) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
```

## Exercise: Equals
Write a method for `LinkedList` called `equals` that accepts an `other` Linked
List as a parameter and returns `true` if the two lists have the same values
at every index.

### Solution: Equals
```js
class LinkedList {
  equals(other) {
    // make a `current` point for each list
    var c1 = this.root;
    var c2 = other.root;

    // run the loop as long as each have a node
    while (c1 !== undefined && c2 !== undefined) {
      // compare their data to make sure it's the same.
      if (c1.data !== c2.data) {
        return false;
      }

      // step them each forward
      c1 = c1.next;
      c2 = c2.next;
    }

    // make sure one of them isn't longer than the other.
    if (c1 === undefined && c2 !== undefined) {
      return false;
    } else if (c2 === undefined && c1 !== undefined) {
      return false;
    }

    return true;
  }
}
```

# Total Implementation
You can see an entire Linked List implemented here.

[Try it!](http://jsbin.com/juqosiz/edit?js,console)
