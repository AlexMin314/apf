
# Map Exercises

Those are all the basic methods of a map! Let's put this into implementation.

### Most Popular Word

Write a function `mostPopularWord()` that takes an array of words (expect `String`s) and returns the word that appears the most. This is known as most popular word.

So for example, using the following input:

```js
var words = [
    "archive",
    "methodology",
    "database",
    "artificial intelligence",
    "Re-contextualized",
    "client-server",
    "reciprocal",
    "Inverse",
    "database",
    "Profit-focused",
    "regional",
    "maximized",
    "methodology",
    "Future-proofed",
    "radical",
    "initiative",
    "benchmark",
    "Universal",
    "methodology"
  ];

```

In this example, calling the `mostPopularWord()` function should return `"methodology"`, because it appears 3 times, more than any other word in the List.

```js
var answer = mostPopularWord(words);

console.log(answer); //Should print "methodology"
```
> [START HERE](https://jsbin.com/qetaxajoze/edit?js,console)

[(Hint🙈)](https://jsbin.com/zuqozujuve/edit?js,console)

[SOLUTION](https://jsbin.com/taxacivuse/edit?js,console)

---

### Reverse Lookup

What happens if you don't have the key but have the value instead?

Getting a key based on the value is known as a **reverse lookup**, because instead of going from `key -> value`, you are going from `value -> key`.

You task is to write a function that takes a `Map` and a value, returning the corresponding key.

For example, given a map of state capitals, you should be able to call a reverse lookup (here, the function that does it is called "findStateForCapital") on the value "Denver", and the key "Colorado" will print to the console.

```js
var stateCapitals = new Map()
                        .set("Alabama", "Montgomery")
                        .set("Alaska", "Juneau")
                        .set("Colorado", "Denver")
                        .set("Oregon", "Salem")
                        .set("Texas", "Austin")
                        .set("Virginia", "Richmond")
                        .set("Maryland", "Annapolis");

function findStateForCapital(capital) {
	//solve in here
}

var denverState = findStateForCapital("Denver")
console.log(denverState); //Should print Colorado

```
> [START HERE](https://jsbin.com/cutopuxeta/edit?js,console)

[(Hint🙈)](https://jsbin.com/jebesenasi/edit?js,console)

...

[SOLUTION](https://jsbin.com/rolosesota/edit?js,console)


> #### SIDE NOTE
 Be aware that in a `Map`, there may be multiple keys that share the same value.

 > For example, suppose you had a map of Phones to Manufacturers,

```js
var map = new Map()
	       .set("iPhone 5", "Apple")
	       .set("Galaxy S4", "Samsung")
	       .set("Lumia", "Nokia")
	       .set("iPhone 7 Plus", "Apple")
	       .set("iPhone 6", "Apple");
```

> If you tried to do a reverse-lookup for "Apple", you will get multiple values.
> This is more complex than we're covering here, but it is an essential case to be aware of.

---
