## Map summary
-----
You've made it through maps! Here are some final thoughts.

### Takeaways

+ A `Map` is a highly flexible data structure that is used to store relationships, based around the idea of `key value pairs`.
+ Maps are useful for storing information about something. For example, a hospital information card might best be implemented as a map.

### Objects vs Maps

You may have noticed that the structure of `Map` is similar to a JavaScript object.

The `Map` type was only recently introduced in ECMA 6. Until then, in JavaScript, an `Object` was used in its place.
There are a couple of notable differences between Objects and Maps.

+ An `Object` has a prototype, which means that there are default keys in an object that could conflict with your keys.
+ The keys of an Object are required to be `String`s and `Symbol`s, whereas they can be of any type in a Map, including objects, functions, or primitives.
+ Getting the `size` of an Object often involved a lot of trickery.
+ The `Map` has `size` built in as a property.

#### When to use a Map over an Object

So when should you use a Map over an Object?

If you answer **yes** to any of the questions below, use a `Map`.

+ Are keys usually unknown until run time?
+ Do you need to look up keys dynamically?
+ Do all values have the same type?
+ Do you need keys that aren't strings?
+ Are key-value pairs often added or removed?
+ Do you have a fluctuating amount of key-value pairs?
+ Are the key-value pairs iterated?


---

+ Additional information on maps can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
