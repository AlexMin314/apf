# Data Structures

Data structures are a pretty heavy topic - watch this video for it to be explained to you with using peanut butter cookies:

<iframe src="http://fast.wistia.net/embed/iframe/g3bn4hck0w?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>

## What is an Abstract Data Type? (ADT)

**Data Structures** and **Abstract Data Types** are related terms. Check out this table:

| Abstract Specification | Implementation     |
|------------------------|--------------------|
| Car                    | Toyota Pickup      |
| Car                    | Porsche Cayenne    |
| Music Player           | Record Player      |
| Music Player           | CD Player          |
| Music Player           | Cassette Player    |
| Music Player           | MP3 Player         |
| Smart Phone            | iPhone             |
| Smart Phone            | Android            |

You immediately know that the first column is a general type of object, while the second column is a specific implementation of that object. The same way, **abstract data types** are general, while **data structures** are specific implementations of that abstract data type. Let's investigate.

### Data structures

> A `Data Structure` is a way of organizing and storing data.

Data Structures are the specifics (Porsche Cayenne, Toyota Pickup..)

Data Structures specifically define how data should be organized so data can
be accessed and modified in certain ways. Data structures can be designed to
make programs more memory efficient, execute faster, and perform more reliably.

One data structure you're already familiar with is an **Array**.

```js
["Jimmy", "Meredith", "Ezekiel", "Sonya"]
```

An array is a data structure where items are added one by one and accessed
individually by index. The properties of the array data structure allow us to
program certain things way easier than if we didn't have arrays.

* Since arrays are ordered, we could see above that Jimmy is the first person
  in a line.
* Since arrays have a size, we can tell that there are four people in line.
* Since arrays allow us to access items according to their index, it's easy
  to ask questions like:
  * Who's the first person in line?
  * Who's the second?
  * Who's the last?

However - there are other questions we might ask about a line of people that an Array
can't immediately answer for us.

* How many unique names are there for all the people in the line?
* What name appears the most?

To answer these questions, we have to write code to process data inside the array. But it's easier to just use a different data structure - because each structures data in a different way, maybe there's one where we can store the names in a manner that easily answers those questions without any extra code.

In this course we'll study these commonly used (and very useful!) data
structures: **Lists**, **Sets**, **Stacks**, **Queues**, and **Maps**.

### Abstract Data Types
One level up from a Data Structure is what is called an **Abstract Data Type**.
An abstract data type basically describes how users interact with a data
structure.

> An `Abstract Data Type` represents the general **idea** of a Data Structure.

An Abstract Data Type (`ADT` for short), leaves out certain details about *how*
the Data Structure works. It just describes *what* it should do. The *what* and
*how* of what a data structure does is called **specification** and
**implementation**.

* **specification** - what is this thing supposed to be able to do? (Cars hold passengers and get people from point A to point B).
* **implementation** - how does this thing actually do that? (Cars have a driver, are owned by a person, and drive on a road).

An **Abstract Data Type** is a specification. A **Data Structure** is an
implementation. You can have all sorts of different implementations that all
satisfy one specification. Different implementations of the same specification
can have different advantages. Multiple data structure implementations can satisfy specifications laid out
in an Abstract Data Type. No one data structure is always the best choice. We'll
need to be aware of the properties of each data structure in order to choose
the best tool for the job.

So let's learn some!
