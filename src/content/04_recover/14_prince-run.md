---
title: John the Ripper PRINCE mode run
description: A PRINCE mode tries all combinations from a list of strings you commonly use in passwords.
menu: PRINCE mode run
date: 2026-12-01
---

A John the Ripper PRINCE (PRobability INfinite Chained Elements) mode run is useful when you have a list of common strings you combine into a password. Perhaps you use certain names, symbol combinations, specific years, or other snippets e.g.

{{ `wordpart.txt` example }}
```txt
!$
$!
123
1234
12345
1967
1969
1999
2005
ANNE
Anne
BOB
Bob
CHRIS
Chris
anne
bob
b0b
chris
```

You can use wordlist generators to create password candidate files from a smaller list of suggestions:

* [Passwords generator](https://weakpass.com/tools/passgen) (online tool)
* [Custom Wordlist Generator](https://password-strength-analyzer-tool.vercel.app/) (online tool)
* [wgen.io](https://app.wgen.io/) (online tool)
* [COOK](https://github.com/glitchedgitz/cook) (Go app)
* [GENOVEVA](https://github.com/joseaguardia/GENOVEVA) (shell app)

Include your known capitalization and symbol replacements then save these to a file in your working directory named `wordpart.txt`. Remove all blank and duplicate lines then sort the strings into ascending ASCII order using an editor or tool:

* VS Code: <kbd>Ctrl</kbd> | <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> then enter and choose `Sort Lines Ascending`
* Sublime Text: select all lines, then Edit > Sort Lines
* Notepad++: Edit > Line Operations > Sort Lines Lexicographically Ascending
* gedit: select all lines, then Tools > Sort...
* vi: `:!sort`
* emacs: `M-x mark-whole-buffer` followed by `M-x sort-lines`
* Linux/macOS terminal: `sort wordpart.txt > wordpart-sorted.txt`
* or an [online tool](https://www.textfixer.com/tools/sort-lines-alphabetically-online.php).

Pass the file to `john` using the `--prince` option as well as `--prince-elem-cnt-max` to set the maximum number of string combinations:

{{ terminal }}
```bash
john --prince=wordpart.txt --prince-elem-cnt-max=4 hash.txt
```

PRINCE mode takes items from your wordlist and generates password candidates by concatenating them in every possible combination. The possibilities would include:

```txt
Anne!$
anne123
Bob!$1969
CHRIS123!$bob
1231967$!
```

A 300-line wordlist with up 4 combinations typically takes a couple of days to process. Increasing it to 5 exponentially increases the number of candidates and processing could take weeks.

Add [generic options](__/recover/generic-options/) when possible to use the GPU, disable logs, save the session, set password lengths, and output a recovery file e.g.

{{ terminal }}
```bash
john --prince=wordpart.txt --prince-elem-cnt-max=4 --format=tezos-opencl --no-log --session=tezos --min-length=7 --max-length=9 --pot=tezos.pot hash.txt
```

> Remove the `--format=tezos-opencl` GPU option if the command returns an error.

John the Ripper shows the password and saves it to a [`tezos.pot` file](__/recover/recovery-file/) when recovery is successful.

**[Consider an incremental run](__/recover/incremental-run/)** if your password is not found.
