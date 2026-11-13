---
title: John the Ripper PRINCE mode run
description: A PRINCE mode tries all combinations from a list of strings you commonly use in passwords.
menu: PRINCE mode run
date: 2026-12-01
---

A John the Ripper PRINCE (PRobability INfinite Chained Elements) mode run is useful when you have a list of common strings you combine into a password. Perhaps you use certain names, symbol combinations, specific years, or other snippets e.g.

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

Include your known capitalization and symbol replacements then save these to a file in your working directory named `wordpart.txt`. Remove all blank and duplicate lines then sort the strings into ascending ASCII order using an editor or tool:

* VS Code: `Ctrl`|`Cmd` + `Shift` + `P` then enter and choose `Sort Lines Ascending`
* Sublime Text: select all lines, then Edit > Sort Lines
* Notepad++: Edit > Line Operations > Sort Lines Lexicographically Ascending
* gedit: select all lines, then Tools > Sort...
* vi: `:!sort`
* emacs: `M-x mark-whole-buffer` followed by `M-x sort-lines`
* Linux/macOS terminal: `sort wordpart.txt > wordpart-sorted.txt`
* or an [online tool](https://www.textfixer.com/tools/sort-lines-alphabetically-online.php).

Pass the file to `john` using the `--prince` option as well as `--prince-elem-cnt-max` to set the maximum number of string combinations:

```bash
john --prince=wordpart.txt --prince-elem-cnt-max=4 hash
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

Add [generic options](__/recover/#generic-options) when possible to use the GPU, disable logs, save the session, and set minimum and/or maximum password lengths, e.g.

```bash
john --prince=wordpart.txt --prince-elem-cnt-max=4 --format=tezos-opencl --no-log --session=tezos --min-length=7 --max-length=9 hash
```

(Remove the `--format=tezos-opencl` GPU option if the command returns an error.)

John the Ripper shows the password and saves it to a [`john.pot` file](__/recover/recovery-file/) when recovery is successful.
