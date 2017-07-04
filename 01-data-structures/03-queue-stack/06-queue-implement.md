# Implementing Queue using a JavaScript array
To help us store the items in the queue, we will use our goold old friend, the JavaScript `Array`. Let's begin!

### Creating the class
We are going to started by defining the `class` for the queue. Since we are using an array, we can declare

```js
class Queue {

    constructor() {
        this.array = [];
    }

}
```
> [Try it!](https://jsbin.com/gahucixate/4/edit?js,console) This JSBin has a `print` and `toString` function already written - don't worry about these; they're just so we can view the queue.

> After you create the queue, hit run - an empty queue will print.

Our goal is to add enough functions to this class to turn it into a complete Queue.

> Note that to refer to the Object's own `array` property, the `this` keyword must be used.

It's very helpful while doing these exercises to first draw out your expectations of what will happen in each iteration of the exercises.

---

### Implementing `Enqueue`

Enqueue is what lets us add an element to the back of the queue (someone new joined the grocery store line). Thankfully, the JavaScript `Array` type already has a `push()` method that we can use. It adds an item to the back of the array, which is perfect. We'll have our `enqueue` method just call `push` on the array.

```js
class Queue {
//...
    enqueue(item) {
        this.array.push(item);
    }

}

```
> Try adding this to your JSBin! Try enqueueing some TV shows you like.

#### Practice

+ [Here's a JSBin](https://jsbin.com/mayovixuge/2/edit?js,console) that only has the `toString` and `print` created (so you'll call `print` to print your queue).
+ Make a new queue to store a shopping list, call it `shoppingList`
+ Enqueue at least 3 things you want to buy to the queue
+ Print your new queue

---

### Implementing `Peek`

Peek returns the front of the queue - who's at the front of the grocery store line? We first check to see if the queue is empty (conveniently, JavaScript has built in `isEmpty`), then - since the underlying structure is an array - we just return the value at index 0 of the array.

For example, if your queue were `[4,6,1,9]`, `peek` would return `4`.

```js
class Queue {

    //..

    peek() {

        //Be sure to check for the situation
        //where the queue has nothing in it
        if (this.isEmpty()) {
          return null;
        }

        //Return the first element in the Array.
        return this.array[0];
    }
}
```


[Try it!](https://jsbin.com/birefiduye/edit?js,console). This is the same queue you've seen earlier - test out enqueueing and peeking multiple times in it. What do you expect the array to return or look like each time?


---

### Exercise - Implement `Dequeue`

Your task is to implement the `dequeue()` method of the Queue class. The `dequeue()` method removes the element at the front of the queue (head) and returns it.

* Hint: JavaScript arrays have a method called `shift` that remove the first element in the array and move the rest of the elements to the left appropriately.

[Start here](https://jsbin.com/wequvicije/edit?js,console)

<details>
    <summary>...Hint 🙈</summary>
    *Pseudo-code (not real code):*

if this.array is empty, return null; var firstElement = this.array.shift();
return firstElement;


</details>

> Once you have this, try again to recreate it in a new JSBin from scratch. Play around with it to enqueue and dequeue different values and see how it changes.

[Solution](https://jsbin.com/bayunucico/edit?js,console)



---

### Exercise - Implement `Size`

Your task is to implement the `size()` method of the Queue class. This method tells you how many elements are in the queue.

[Start here](https://jsbin.com/yojiqacagu/edit?js,console)


<details>
    <summary>...Hint 🙈</summary>
    *Pseudo-code (not real code):*

return the size of this.array;


</details>

[Solution](https://jsbin.com/nofideciwo/edit?js,console)

---
