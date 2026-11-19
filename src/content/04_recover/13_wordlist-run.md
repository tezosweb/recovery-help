---
title: John the Ripper wordlist run
description: A wordlist run uses a known set of passwords with common symbol replacements.
menu: Wordlist run
date: 2026-12-01
---

A John the Ripper wordlist run is useful when you have a list of passwords you typically use, such as family names and weekdays, e.g.

{{ `wordlist.txt` example }}
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

You can use wordlist generators to create password candidate files from a smaller list of suggestions:

* [Passwords generator](https://weakpass.com/tools/passgen) (online tool)
* [Custom Wordlist Generator](https://password-strength-analyzer-tool.vercel.app/) (online tool)
* [wgen.io](https://app.wgen.io/) (online tool)
* [COOK](https://github.com/glitchedgitz/cook) (Go app)
* [GENOVEVA](https://github.com/joseaguardia/GENOVEVA) (shell app)

Save these to a file in your working directory named `wordlist.txt` and pass it to `john` using the `--wordlist` option:

{{ terminal }}
```bash
john --wordlist=wordlist.txt hash.txt
```

On its own, John the Ripper will examine every word for an **exact match**. Adding the `--rules` option mutates all words using capitalizations, symbol replacements, duplications, and appending common letters, symbols, and digits.

{{ terminal }}
```bash
john --wordlist=wordlist.txt --rules hash.txt
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

Add [generic options](__/recover/generic-options/) when possible to use the GPU, disable logs, start a session, set password lengths, and output a recovery file e.g.

{{ terminal }}
```bash
john --wordlist=wordlist.txt --rules --format=tezos-opencl --no-log --session=tezos --min-length=7 --max-length=9 --pot=tezos.pot hash.txt
```

> Remove the `--format=tezos-opencl` GPU option if the command returns an error.

John the Ripper shows the password and saves it to a [`john.pot` file](__/recover/recovery-file/) when recovery is successful.

**[Consider a PRINCE run](__/recover/prince-run/)** if your password is not found.
