---
title: John the Ripper masking run
description: A masking run finds passwords using known patterns of letters, numbers, and symbols.
menu: Masking run
date: 2026-12-01
---

A John the Ripper masking run is useful when you use specific patterns to devise passwords. For example, you generally use:

1. your dog's name: Rover. But it could be `rover`, `Rover`, or `R0ver`.
1. followed by one special character, such as `!`, `$`, `&` etc.
1. followed by a four-digit year which could start with `19` or `20`.
1. followed by two random uppercase letters.

The John the Ripper `--mask` option allows you to define a password template using [special character codes](https://github.com/openwall/john/blob/bleeding-jumbo/doc/MASK). For the password above, you'd use:

```bash
--mask=[Rr][o0]ver?s[12][90]?d?d?u?u
```

Character codes include:

* `[...]` defines a range or choice of letters (such as `R` or `r` above)
* `?u` defines a single uppercase letter
* `?l` defines a single lowercase letter
* `?d` defines a single digit
* `?s` defines a single special character that's not a letter or a digit
* other characters are as-is (such as `ver` above)

JtR uses this pattern to create a list of all possibilities, such as:

```txt
Rover!1900AA
Rover#1900AB
Rover*1999XX
R0ver&2005YY
r0ver-2099ZZ
```

All candidates would be 12 characters because that's what the `mask` specifies. If you set `--max-length=13`, JtR repeats the last character type so, as well as testing `Rover!1900AA`, it also tests `Rover!1900AAA`, `Rover!1900AAB`, and so on.

Example command for a masking run:

```bash
john --mask=[Rr][o0]ver?s[12][90]?d?d?u?u hash
```

Add [generic options](__/recover/#generic-options) when possible to use the GPU, disable logs, save the session, and set minimum and/or maximum password lengths, e.g.

```bash
john --mask=[Rr][o0]ver?s[12][90]?d?d?u?u --format=tezos-opencl --no-log --session=tezos  hash
```

(Remove the `--format=tezos-opencl` GPU option if the command returns an error.)

John the Ripper shows the password and saves it to a [`john.pot` file](__/recover/recovery-file/) when recovery is successful.
