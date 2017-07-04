# Let's practice!

---

### Exercise - Implement `Peek`

Your task is to implement the `peek()` method of the Stack class. The `peek()` method lets you see what is on the top of the stack without actually removing it from the stack (like `pop()`) does. So when you call it, what it should return is either `null` if the stack is empty or the top element if it isn't.


For example, if your queue were `[4,6,1,9]`, `peek` would return `9`.

[Start here](https://jsbin.com/yatufogaca/edit?js,console)

<details>
    <summary>...Hint 🙈</summary>
    Pseudo-code:

```js
if this.array is empty, return null

var lastElement = getLastElementFrom(this.array);
return lastElement;
```

</details>

[Solution](https://jsbin.com/viruwehoja/edit?js,console)

---

### Exercise - Implement `isEmpty`

Your task is to implement the `isEmpty()` method of the Stack class. This method tells you whether the Stack is empty or not. It will return `true` or `false`.

[Start here](https://jsbin.com/qovomupato/edit?js,console)

<details>
    <summary>...Hint 🙈</summary>
    Pseudo-code:

```js
if this.array has a length of 0, return true
else return false
```

</details>


[Solution](https://jsbin.com/risuhonocu/edit?js,console)

---

Congratulations! You've made an entire stack data structure. As a recap, the methods here are:

+ `push()` - Adds to the top of the stack
+ `pop()` - Removes from the top of the stack
+ `peek()` - Gives you the value at the top of the stack without removing it
+ `isEmpty()` - Determines whether the stack is empty or not
