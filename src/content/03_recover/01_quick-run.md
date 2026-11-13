---
title: John the Ripper quick run
description: A quick run can find simpler passwords using your name and common strings such as "password", "qwerty", and "123456".
menu: Quick run
date: 2026-12-01
---

A John the Ripper quick run attempts to find simpler passwords using combinations of your user name and common passwords such as "password", "qwerty", and "123456".

Start a quick run without any specific options:

```bash
john hash
```

Add [generic options](__/recover/#generic-options) when possible to use the GPU, disable logs, save the session, and set minimum and/or maximum password lengths, e.g.

```bash
john --format=tezos-opencl --no-log --session=tezos --min-length=7 --max-length=9 hash
```

(Remove the `--format=tezos-opencl` GPU option if the command returns an error.)

John the Ripper shows the password and saves it to a [`john.pot` file](__/recover/recovery-file/) when recovery is successful.
