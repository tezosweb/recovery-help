---
title: How to create your Tezos password hash.txt file
description: John the Ripper requires a Tezos hash.txt file when attempting to recover your password.
menu: Hash
date: 2026-12-01
---

John the Ripper requires a Tezos password `hash.txt` file before it can attempt recovery. To create it, you require the following Tezos information:

1. Your 15 seed words
1. Your email address (in the letter case you provided)
1. Your public address (36-character code starting `tz1`)

`hash.txt` contains these values and a generated hash on a single line, e.g.

{{ `hashes.txt` example }}
```txt
$tezos$1*2048*tezos secret seed phrase used to create your wallet that stores coins for spending later*your@email.com*tz1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*abcdef0123456789fedcba9876543210cebcebcebceb
```

> Note: do **not** share your `hash.txt` file with anyone!

The following pages describe different ways to create your `hash.txt` file:
