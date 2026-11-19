---
title: John the Ripper incremental run
description: An incremental run finds passwords using known patterns of letters, numbers, and symbols.
menu: Incremental run
date: 2026-12-01
---

If all other options fail, an incremental run attempts every possible character combination. Processing will take considerable time and it's [unlikely to find a long password](__/overview/recovery-chances/).

{{ terminal }}
```bash
john --incremental hash.txt
```

Add [generic options](__/recover/generic-options/) when possible to use the GPU, disable logs, start a session, set password lengths, and output a recovery file e.g.

{{ terminal }}
```bash
john --incremental --format=tezos-opencl --no-log --session=tezos --min-length=4 --max-length=7 --pot=tezos.pot hash.txt
```

> Remove the `--format=tezos-opencl` GPU option if the command returns an error.

John the Ripper shows the password and saves it to a [`tezos.pot` file](__/recover/recovery-file/) when recovery is successful.

**[Consider other recovery options](__/recover/more-options/)** if your password is not found.
