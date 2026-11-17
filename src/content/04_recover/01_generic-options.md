---
title: John the Ripper generic options
description: Options you can use on all John the Ripper recovery strategies.
menu: Generic options
date: 2026-12-01
---

Start John the Ripper from your working directory using the command:

```bash
john [options] hash.txt
```

where:

* `[options]` is one or more command-line settings for the [recovery strategy](__/recover/) you're using plus any generic options shown below.

* `hash.txt` is your [generated `hash.txt` file](__/install/generate-hash/).

You can view help with `john --help`, but this section provides guidance.

The following John the Ripper command-line options are available no matter which [recovery strategy](__/recover/) you use.


## Use your GPU

If you have a supported OpenCL graphics card (see output of `john --list=opencl-devices`), adding the `--format=tezos-opencl` option to the `john` command increases performance by offloading processing to the GPU.

If your PC has more than one graphics card, you can target a specific device or devices using a comma-delimited list, e.g. `--devices=1` or `--devices=1,3`. Device 1 is the first GPU shown in the output of `john --list=opencl-devices`.


## Disabling logs

As John the Ripper runs, it outputs a large log to `john.log`. The log is not useful to users, so disable it using the `--no-log` option.


## Limiting characters

Setting character limits can cut processing time. Use:

* `--length=N` to set the exact number of characters, e.g. `--length=12`
* `--min-length=N` to set a minimum number of characters, e.g. `--min-length=10`
* `--max-length=N` to set a maximum number of characters, e.g. `--max-length=15`

You can set both `--min-length` and `--max-length`.


## Set a recovery file name

JtR creates a `john.pot` file in its `run` directory when it starts processing. The file has no content until it recovers your password and processing ends. You can change the recovery file location using the `--pot` option, e.g. set `--pot=tezos.pot` to create a `tezos.pot` file in the working directory.


## Saving sessions

John the Ripper can run for a long time and use significant CPU and/or GPU time. It can save progress to a `.rec` file so you can stop and restore a recovery session without having to restart processing from scratch. This is useful when you want to run John the Ripper when you're not using your device.

To save session progress, set the `--session=NAME` option, e.g. `--session=tezos`. A `tezos.rec` file is then created in your working directory.

You can examine the status of a running process with:

{{ terminal }}
```bash
john --status=tezos
```


## Restoring sessions

If you stop a session by pressing <kbd>q</kbd> or <kbd>Ctrl</kbd> | <kbd>Cmd</kbd> + <kbd>C</kbd>, you can restart it again using:

{{ terminal }}
```bash
john --restore=tezos
```


## Full example command

From your `tezos` working directory, you can [start a quick run](__/recover/quick-run/) on a GPU, without logs, using a session named `tezos`, looking for a password between 7 and 9 characters that's stored in `tezos.pot` and uses your `hash.txt` file:

{{ terminal }}
```bash
john --format=tezos-opencl --no-log --session=tezos --min-length=7 --max-length=9 --pot=tezos.pot hash.txt
```

> Remove the `--format=tezos-opencl` GPU option if the command returns an error.

Press space to show the current status, e.g.

```txt
0g 0:00:00:22 0.01% 2/3 (ETA: 2026-05-18 07:04) 0g/s 21937p/s 21937c/s 21937C/s goodday12..291052
```

It shows the:

* total processing time
* percentage complete
* processing step
* estimated time of completion, and
* information about the number of password checks per second.

To stop processing, press <kbd>q</kbd> or <kbd>Ctrl</kbd> | <kbd>Cmd</kbd> + <kbd>C</kbd>. You can continue processing later by entering:

{{ terminal }}
```bash
john --restore=tezos
```

The command above starts **[a quick run...](__/recover/quick-run/)**
