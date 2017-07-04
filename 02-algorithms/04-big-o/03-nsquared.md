## Doctor, Doctor
Before we continue, let's see some ways to improve a quadratic time algorithm. This won't work in every case; this is just to show that you can!

One problem where quadratic algorithms show up often is detecting if a set of
data contains any duplicate entries. In order to to see if something is a
duplicate entry, you must compare each thing to each other thing.

Suppose we want to find out if there are any duplicate doctor names in a list. Our first attempt at writing a function like this might be one that uses a double `for` loop.

```js
var doctors = ["Dr. Brown", "Dr. Weinstein", "Dr. Ezekial", "Dr. Smith",
"Dr. Mandal", "Dr. Crusher", "Dr. Hologram", "Dr. Bones", "Dr. Smith"];

for (var i = 0; i < doctors.length; i++) { // loop through list once
  for (var j = 0; j < doctors.length; j++) { // for each name in the list, look through the list again
    if (i !== j && doctors[i] === doctors[j]) {
      console.log("There are two doctors named " + doctors[i]);
    }
  }
}
```

> [Try it!](http://jsbin.com/gotixab/edit?js,console)

Trying to get it down to `O(1)` is out of the question. We'll need
to at least look through everything in the list once. Our knowledge of data
structures will help us here.

> Do you have any ideas on ways we can take out the nested `for` loop?

Here's one idea:

* We can use a `Map` or a `Set` which each have `O(1)` lookup and read
operations to keep track of names as we see them.
* We'll iterate through the list
and basically mark down that we've seen each name for each name.
* If we mark a
name down once and then go to mark it a second time, we'll know that the name
is a duplicate.

This will combine an an `O(N)` `for` loop that reads each name and marks it with an `O(1)` operation
in a `Map`.

This results in a O(N) algorithm overall. This is way better than
the original O(N<sup>2</sup>) algorithm!

> When we consider algorithms that have different complexities, the slower complexity takes precedence (if you're peeling every apple and then taking the trash out with all those peels one time, you still have that O(n) from peeling the apple in there!).


Here's how we'll do this.
* Create an empty `Map`
  * We'll call it `seenName`
* Iterate through every name in the list
  * **O(n)**
* Set `map[name] = true` for each name
  * Check to see if `true` has been set for each name before you set it.
  * **O(1) inside of the O(n)**
* If `true` was set then you know the name is a duplicate!

> [Try it!](http://jsbin.com/wulikuw/edit?js,console)

```js
var doctors = ["Dr. Brown", "Dr. Weinstein", "Dr. Ezekial", "Dr. Smith",
"Dr. Mandal", "Dr. Crusher", "Dr. Hologram", "Dr. Bones", "Dr. Smith"];

var seenName = {}; // keep track of any names seen in a map
doctors.forEach(function(name) { // look through the list
  if (seenName[name]) { // check the map if the name is there
    console.log("There are two doctors named " + name);
  }
  seenName[name] = true; // if not, add it to the map.
});
```

All together, we've turned the O(n<sup>2</sup>) algorithm into an O(n) algorithm that serves the same purpose! Being able to simplify and de-complex algorithms is a huge step in being a better programmer.


Studying algorithm complexity is important because it allows us to recognize
when an algorithm will perform poorly and we can try to improve it. If we know
the algorithmic complexity of two algorithms then we can argue over which is
better!
