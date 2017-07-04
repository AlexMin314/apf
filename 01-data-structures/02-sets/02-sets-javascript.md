# Sets in JavaScript
---

## Creating a Set
Creating a set in Javascript is done using a `Set` object. You create a variable and set it equal to a `new Set()`.

```js
var mySet = new Set();
var anotherSet = new Set();
```

That makes an empty set - we'll talk about adding items to sets in a moment. First, let's just create a prepopulated set by passing the information into it upon creation. This is easy to do from an array:

```js
// Create an empty set
var emptySet = new Set();

// Or, create a set by passing in an array
var setOfNames = new Set(["Cordero", "Jeff", "Jessica", "Alan", "Stephanie", "Zonia"]);
```

> [Try it!](https://jsbin.com/zejalafute/edit?js,console)




### Practice

1. Create an empty set
2. Beneath that, create a set and upon creation, pass in an array with your favorite movies, books, or songs.
3. Call the function `printSet(<yourSet>);` to print your set. Does it print?

> [Start here!](https://jsbin.com/zutuvuxuma/edit?js,console)


---

## Adding elements
Adding elements to a Set is done using the `add()` function. The parameter to pass in to `add` is the value of the element you want to add to the set. Let's say I have an empty set, and I want to add different characters into it:

```js
var characters = new Set();

characters.add("John Snow");
characters.add("Joffrey Baratheon");
characters.add("Eddard Stark");

```
> [Try it!](https://jsbin.com/sarecizeji/edit?js,console) Can you add a few more names of your choosing?

Sets don't need to contain just strings or even be all of the same element. Just like an array, you can add anything to a set, including:

+ Strings
+ Numbers
+ Booleans
+ Objects
+ Arrays
+ Other Sets
+ `null`
+ `undefined`
+ `NaN`

For example:

```js
var everything = new Set();

everything.add("Things I like");
everything.add(1051);
everything.add(["fun array", 151, "woohoo!"]);
```

### Practice
Add different types of data into a `set`:

+ Your birthday
+ A date
+ Your age
+ An object representing your favorite artist
+ Your name
+ `null`

> [Start here!](https://jsbin.com/wohelonela/edit?js,console). It will automatically print when you hit `run`.

### Duplicates
Remember that in a Set, each item must be unique, so if you add the same item twice, only one will be kept.

```js
var artists = new Set(["DJ Okawari", "Eminem", "Chopin"]);
console.log(artists.size); //Prints 3
printSet(artists); // Prints "DJ Okawari", "Eminem", "Chopin"

artists.add("Eminem"); //Eminem is already in the set 'artists'
console.log(artists.size); //Prints 3 - a new element hasn't been added
printSet(artists); // Prints "DJ Okawari", "Eminem", "Chopin" - the set hasn't changed
```

In the example above, `artists.size` is still `3` because the Set already contained `"Eminem"`. Trying to add a duplicate element doesn't change the set.

> [Try it!](https://jsbin.com/liqufikono/edit?js,console)



> Note: In sets, duplicates are determined using the `===` operator. So, in the example above, ```"Eminem" === "Eminem"```, so it is not added.

#### Practice
Create a set with the names of the planets in our solar system.
Try adding some of the planets more than once.


> [Start here!](https://jsbin.com/gusaraquve/edit?js,console)

---


## Reading from a Set

### Iteration
Iterating over a Set is done using the `forEach()` function (which you can also use on arrays). `forEach()` will step through each element in the step. We use `forEach()` to step through the elements and log each one to the console.

```js
var ages = new Set([21, 37, 28, 25, 39, 44, 52]);

//Prints 21, 37, 28, etc
ages.forEach(function(item) {
	console.log(item);
});

```
> [Try it!](https://jsbin.com/bunopedeni/edit?js,console)

#### Practice
Create a set of grocery items and print each item in the set using the `forEach()` function.
> [Start here!](https://jsbin.com/yukunerido/edit?js,console)


### Checking values
You can check whether a Set has an item in it using the `has()` function. Just pass the element you're looking for in as a parameter. For example, if we have a set of companies, we can check if the set has an element and log that to the console. `has()` returns a boolean with true or false.

```js
// our set
var companies = new Set(["Google", "Yahoo", "Amazon"]);

// Does the 'companies' set have "Apple" in it?
console.log(companies.has("Apple")); //false

// Does the 'companies' set have "Google" in it?
console.log(companies.has("Google")); //true

```
> [Try it!](https://jsbin.com/gagawoweci/edit?js,console). Try adding two more companies to the set, then check to see if the set `has` those elements.

---

# Takeaways

The next page is an exercise, so if you don't feel prepared, go through this page again!

+ Sets are like unordered lists with unique elements.
+ They excel when storing data that should not be duplicated.
+ If you'd like, read more about Sets [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Iterating_Sets).
+ NOTE: The `Set` type is available since ECMA 6
