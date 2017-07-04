To sort or not to sort? Watch this video:

<iframe src="http://fast.wistia.net/embed/iframe/1agzb99vg4?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>


# Sorting
Sorting is a huge topic in computer science. It turns out there are a lot of ways
to sort things. Of course, each has its advantages and disadvantages; some
are clearly bad. It's important for us to understand why they're so bad and to
see how they can be improved.

We'll go over several algorithms and see what they each do well and do poorly.

* **Bubble Sort** - A notoriously bad sorting algorithm.
* **Bucket Sort** - An efficient sorting algorithm under certain circumstances.
* **Insertion Sort** - An efficient sorting algorithm applicable in a wide
  variety of circumstances.
* **Merge Sort** - An efficient recursive sorting algorithm.

## Stability
There's one other important topic in sorting: **Stability**. Stability preserves
the initial order of a collection. It allows you to sort by one thing, then
another and the second sort won't screw up the first one.

Imagine running a programming contest. Everyone competes to answer 10 questions
in one hours. Winners are determined first by how many problems they were able
to solve, then ties are broken by how long it took them to finish all their
problems. A stable sort would allow you to sort first by the number of problems
they solved, then keep that sorting and sort the times without messing up
the problems-solved ordering.

```
programmers = [
  {solved: 2, minutes: 28}
  {solved: 6, minutes: 43},
  {solved: 8, minutes: 23},
  {solved: 6, minutes: 35},
  {solved: 6, minutes: 27},
]
```

Sorted by time:

```
programmers = [
  {solved: 8, minutes: 23},
  {solved: 6, minutes: 27},
  {solved: 2, minutes: 28},
  {solved: 6, minutes: 35},
  {solved: 6, minutes: 43},
]
```

What if I want to now sort by problems solved? This is where stability comes
into play. A stable sort will preserve the orders of the times.

**Stable Sort**:
```
programmers = [
  {solved: 8, minutes: 23},
  {solved: 6, minutes: 27},
  {solved: 6, minutes: 35},
  {solved: 6, minutes: 43},
  {solved: 2, minutes: 28},
]
```

**Unstable Sort:**
```
programmers = [
  {solved: 8, minutes: 23},
  {solved: 6, minutes: 35},
  {solved: 6, minutes: 27},
  {solved: 6, minutes: 43},
  {solved: 2, minutes: 28},
]
```

Let's check out different sort algorithms.
