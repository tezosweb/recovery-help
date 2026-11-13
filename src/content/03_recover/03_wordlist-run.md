---
title: John the Ripper wordlist run
description: A wordlist run uses a known set of passwords with common symbol replacements.
menu: Wordlist run
date: 2026-12-01
---

A John the Ripper wordlist run is useful when you have a list of passwords you typically use, such as family names and weekdays, e.g.

```txt
anne
bob
chris
monday
tuesday
wednesday
thursday
friday
saturday
sunday
```

Save these to a file in your working directory named `wordlist.txt` and pass it to `john` using the `--wordlist` option:

```bash
john --wordlist=wordlist.txt hash
```

On it's own, JtR will examine those 10 words for an exact match. Adding the `--rules` option mutates all words by adding capitalization, making symbol replacements, duplicating words, and appending common letters, symbols, or digits.

```bash
john --wordlist=wordlist.txt --rules hash
```

This considerably expands the password candidates to include:

```txt
bob
bOb
boB
bOB
b0b
Bob
BOb
BoB
bob123
BOB!
bobbob
```

Add [generic options](__/recover/#generic-options) when possible to use the GPU, disable logs, save the session, and set minimum and/or maximum password lengths, e.g.

```bash
john --wordlist=wordlist.txt --rules --format=tezos-opencl --no-log --session=tezos --min-length=7 --max-length=9 hash
```

(Remove the `--format=tezos-opencl` GPU option if the command returns an error.)

John the Ripper shows the password and saves it to a [`john.pot` file](__/recover/recovery-file/) when recovery is successful.
