Sets
========================================================

<!--## Learning Objectives-->

<!--By the end of this lesson, Students will be able to

+ Identify the difference between a List and a Set
+ Articulate the use of a Set
+ Create a Set
+ Store data in a Set
-->
---

## Introduction

### What is a Set?

> A `Set` is a data structure; it's an unordered collection of elements that guarantees uniqueness within the set.

Here is a set:

```
{"green", "blue", "red", "orange", "yellow"}
```

A `Set` is almost the same as a `List`. There are two main differences:

1. All elements in a set are unique.
2. A Set does not care about, or guarantee, ordering of elements.


#### 1. Uniqueness
Simply put, elements in a set are always guaranteed to be unique. That means that there is only ever one of anything - even if you add something twice, it will only appear once.

Consider the following set:   

```
{"green", "blue", "red", "orange", "yellow"}
```

If you add `"pink"` to this set, you will get the set:   

```
{"green", "blue", "red", "orange", "yellow", "pink"}
```

But if you add `"red"` to this set, it won't add - there is already an element `"red"` in the set. You will get the same unchanged set:   

```
{"green", "blue", "red", "orange", "yellow", "pink"}
```

#### 2. Ordering
A `Set` does not care about ordering. As long as two sets have the same elements, no matter where the elements are, they are considered equal sets.

Conversely, for two `List`s to be considered equal, both the elements and the order the elements appear must be the same.

If I have two `List`s with the same elements, but ordered differently...

```js
var list1 = [1, 2, 3, 4, 5, 6];

var list2 = [6, 5, 4, 3, 2, 1];

```
Then `list1` is not equal to `list2`, even though `list2` is just `list1` with the elements reversed.

However, if we have those same elements, except instead of a `List`, we use `Set`s:

```
set1 = {1, 2, 3, 4, 5, 6}
```
 and
```
set2 = {6, 5, 4, 3, 2, 1}
```
then the two sets are considered equal. Even though the elements are in a different order, because they contain the same elements, the sets are equal.

---

## Why this is useful
Sets are very useful when you use to store a collection of items, but you cannot have duplicates.

Sets really come in handy when storing:

+ Emails
+ Colors
+ Usernames
+ Names
+ ...and anything else which is supposed to be unique.

With something like an array, if you didn't want duplicates, you'd have to check the entire array to see if an element is already present each time you wanted to `push()` an element.

With a set, however, you don't need to check anything. All you have to do is `add()`, and the ***Set takes care of checking for duplicates for you.***
