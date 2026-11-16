---
title: John the Ripper incremental run
description: An incremental run finds passwords using known patterns of letters, numbers, and symbols.
menu: Incremental run
date: 2026-12-01
---

If all other options fail, an incremental run attempts billions of character combinations. Processing will take considerable time and it's unlikely to find a long password.

```bash
john --incremental hash.txt
```

Add [generic options](__/recover/#generic-options) when possible to use the GPU, disable logs, save the session, set password lengths, and output a recovery file e.g.

```bash
john --incremental --format=tezos-opencl --no-log --session=tezos --min-length=7 --max-length=9 --pot=tezos.pot hash.txt
```

(Remove the `--format=tezos-opencl` GPU option if the command returns an error.)

John the Ripper shows the password and saves it to a [`tezos.pot` file](__/recover/recovery-file/) when recovery is successful.

[Consider other recovery strategies](__/recover/) if your password is not found.
