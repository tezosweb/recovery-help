---
title: John the Ripper quick run
description: A quick run can find simpler passwords using your name and common strings such as "password", "qwerty", and "123456".
menu: Quick run
date: 2026-12-01
---

A John the Ripper quick run attempts to find simpler passwords using combinations of your user name and common passwords such as "password", "qwerty", and "123456".

Start a quick run without any specific options, `cd` to your working directory and run:

{{ terminal }}
```bash
john hash.txt
```

Add [generic options](__/recover/generic-options/) when possible to use the GPU, disable logs, save the session, set password lengths, and output a recovery file e.g.

{{ terminal }}
```bash
john --format=tezos-opencl --no-log --session=tezos --min-length=7 --max-length=9 --pot=tezos.pot hash.txt
```

> Remove the `--format=tezos-opencl` GPU option if the command returns an error.

John the Ripper shows the password and saves it to a [`tezos.pot` file](__/recover/recovery-file/) when recovery is successful.

**[Consider a masking run](__/recover/masking-run/)** if your password is not found.
