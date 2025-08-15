---
title: My first session of learning Prolog
date: 2025-09-14
author: Fabiano Luiz
---

### First concept

To run a prolog program we need a knowledge base (or database), that is a collection of facts and rules.

Like:

```pl
studying(bernardo).
happy(bernardo).
listens2Lofi(bernardo).
```

So if we ask to prolog:

```
?- happy(bernardo).
true
```

Because we have an fact that Bernardo is happy. But if we run:

```
?- listens2Lofi(augusto).
false
```

Because we're querying about something thatis not a fact on our knowledge base.

### Second concepts

We already learned what is a fact, so we need to learn what is a rule.

Given the following code:

```pl
studying(bernardo).
listens2Lofi(bernardo):- studying(bernardo).
learningProlog(bernardo):- listens2Lofi(bernardo).
```

We have 1 fact and the last 2 items are rules.

The seconds stations days that Bernardo listens to lofi if he is studying. Basically is a `is implied by`.

So lets's try to run this prolog code.<br>
If we ask to prolog:

```pl
?- listensToLofi(bernardo).
true
```

it'll says `true` because we have the fact that Bernardo is stutying, so if Bernardo is studying, this implies that Bernardo is listening to Lofi music.

So, next if we ask:

```pl
?- learningProlog(bernardo).
true
```

Prolog will follow the rules to define that it's true, because if Bernardo is studying, and Bernardo listens to Lofi when he is studying, this implies that Bernardo is listenind to Lofi then we can say that Bernardo is learning Prolog.

So, we can say that we have 3 clausules on this program, being:

```
studying
listens2Lofi
learningProlog
```
