
## Review!
<details>
  <summary>
    What's the difference between an **Array ADT** and a **List ADT**?
  </summary>
  <br />
  <p>
    Arrays and lists both store values at numerical indexes. Arrays have a
    fixed size that's created once as the array is created an never changes.
  </p>
  <p>
    The List ADT supports more functionality than the Array ADT. The size of a
    list can grow and shrink with time. Internally, a list implements itself by
    having a fixed-size array. This array is hidden to the user so they don't
    have to deal with manually growing and shrinking the Array inside the List
    themselves.
  </p>
</details>

<details>
  <summary>
    What's the difference between the **Array ADT** and arrays as they exist in
    the JavaScript programming language?
  </summary>
  <br />
  <p>
    **Answer:** The arrays in JavaScript have lots of extra functionality beyond
    the simple operations defined in the Array ADT specification. JavaScript
    does this because it's practical and easy for programmers to use. JavaScript
    basically has malleable size-changing lists and calls them arrays because
    they can behave as arrays if users choose to treat them like arrays.
  </p>
</details>

<details>
  <summary>
    Why don't we just use JavaScript's built in array functionality and take
    advantage of their `.push()`, `.pop()` and `.splice()` methods to make our
    Lists?
  </summary>
  <br />
  <p>
    We're actually learning how `.push()`, `.pop()` and `.splice()` work under
    the hood! By building up our own List data structure using only the read
    and write operations on an array we're learning how JavaScript itself
    is able to provide us with this functionality.
  </p>
</details>

<details>
  <summary>
    What happens if you try to iterate over the `ArrayList` with a `for` loop
    from `i = 0` to `i < aa.data.length` instead of to `i < aa.size`?
  </summary>
  <br />
  <p>
    The `size` variable represents how much of the internal
    fixed-size array the list is using. The array will have lots of values that
    say `undefined` if we try to print something in the list at an index higher
    than `size`.
  </p>

  <p>Really, no one using our class (including ourselves!) should ever refer to
  `aa.data`. Programmers using our class should interact with our data structure
  through the methods we provide, like always using `.get()` and never using
  `aa.data[i]`.</p>
</details>

<details>
  <summary>
    What's the best value we can choose for the initial default size of the
    internal fixed-size array?
  </summary>
  <br />
  <p>
    Trick question. There's really no ultimate *best* value. It
    really depends on the amount of data you're dealing with at the moment.
    The class itself should be designed so it doesn't have to worry about
    what size of data you're working with. If it starts small it will eventually
    keep doubling itself until it's at the size it needs to be.
  </p>
  <p>
    Choosing `10` or `100` seems like a safe bet. Choosing `1` would be a silly
    choice because someone using a list probably certainly wants more than one
    thing in it and it would need to immediately grow. Consider the size of
    arrays you've used in every program you've ever written. Are they usually
    small, or large?
  </p>
  <p>
    Ultimately, there's one small improvement we can make to the `ArrayList`
    class to solve this question of "how big should the array be at first?"
    We can rewrite our constructor so it accepts a `size` parameter. Now any
    user can decide if they want to use our own default value, or provide
    their own.
  </p>
</details>
