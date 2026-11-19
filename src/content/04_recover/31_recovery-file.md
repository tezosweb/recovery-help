---
title: The password recovery file
description: Information about the file John the Ripper creates when a password recovery is successful.
menu: Recovery file
date: 2026-12-01
---

John the Ripper creates a `john.pot` file in its `run` directory when it starts processing. The file has no content until your password is recovered and processing ends.

The command line examples in this tutorial set `--pot=tezos.pot` to output it to `tezos.pot` in the working directory.

On recovery, the `tezos.pot` file has the same content as [your `hash.txt` file](__/install/generate-hash/), followed by a colon (`:`) and your password. For example:

{{ `tezos.pot` example }}
```txt
your@email.com:$tezos$1*2048*tezos secret seed phrase used to create your wallet that stores coins for spending later*your@email.com*tz1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*abcdef0123456789fedcba9876543210cebcebcebceb:Password123
```

In this case, the recovered password is `Password123`.

> Note: never share your `tezos.pot` file with anyone!

Once recovered:

1. Record your password in a secure place such as a password manager.
1. Delete or move your `hash.txt` and `tezos.pot` files to a secure location.
1. If you do not require John the Ripper again, delete its directory and `PATH` environment variable.
