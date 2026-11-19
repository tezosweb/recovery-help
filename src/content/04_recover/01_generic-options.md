---
title: John the Ripper generic options
description: Options you can use on all John the Ripper recovery strategies.
menu: Generic options
date: 2026-12-01
---

The general command for starting John the Ripper is:

```bash
john [options] hash.txt
```

where:

* `[options]` is one or more command-line settings for the [recovery strategy](__/recover/) you're using plus any generic options shown below.

* `hash.txt` is your [generated `hash.txt` file](__/install/generate-hash/).

The following John the Ripper command-line options are available no matter which [recovery strategy](__/recover/) you use.


## Use your GPU

If you have a supported OpenCL graphics card (see output of `john --list=opencl-devices`), adding a `--format=tezos-opencl` option to the `john` command increases performance by offloading processing to the GPU:

{{ terminal }}
```bash
# use GPU
john --format=tezos-opencl hash.txt
```

If your PC has more than one graphics card, you can target a specific device or devices using a comma-delimited list, e.g. `--devices=1` or `--devices=1,3`. Device 1 is the first GPU shown in the output of `john --list=opencl-devices`.


## Disabling logs

As John the Ripper runs, it outputs a large log to `john.log`. The log is not useful to users, so disable it using the `--no-log` option.

{{ terminal }}
```bash
# disable log
john --no-log hash.txt
```


## Limiting characters

Setting character limits can cut processing time. Use:

* `--length=N` to set the exact number of characters, e.g. `--length=12`
* `--min-length=N` to set a minimum number of characters, e.g. `--min-length=10`
* `--max-length=N` to set a maximum number of characters, e.g. `--max-length=15`

You can set both `--min-length` and `--max-length`, e.g.

{{ terminal }}
```bash
# look for 10, 11, or 12-character passwords
john --min-length=10 --max-length=12 hash.txt
```

## Set a recovery file name

John the Ripper creates a [`john.pot` password recovery file](__/recover/recovery-file/) in its `run` directory when it starts processing. The file has no content until your password is recovered and processing ends.

You can change the recovery file location using the `--pot` option, e.g. set `--pot=tezos.pot` to create a `tezos.pot` file in the working directory.

{{ terminal }}
```bash
# set recovery file name
john --pot=tezos.pot hash.txt
```


## Saving sessions

John the Ripper can run for a long time and use significant CPU and/or GPU time. It can save progress to a `.rec` file so you can stop and restore a recovery session without having to start processing from scratch. This is useful when you want to run John the Ripper at times you're not using your device.

To save session progress, set the `--session=NAME` option, e.g. `--session=tezos`:

{{ terminal }}
```bash
# save session progress
john --session=tezos hash.txt
```

This creates a `tezos.rec` file in your working directory. You can examine the status of a running process in another terminal window:

{{ terminal }}
```bash
# show session status
john --status=tezos
```


## Restoring sessions

When you stop a session by pressing <kbd>q</kbd> or <kbd>Ctrl</kbd> | <kbd>Cmd</kbd> + <kbd>C</kbd>, you can continue a saved session using:

{{ terminal }}
```bash
john --restore=tezos
```


## Full example command

From your `tezos` working directory, [start a quick run](__/recover/quick-run/) on a GPU, without logs, starting a session named `tezos`, looking for a password between 7 and 9 characters that is stored in `tezos.pot` when it's recovered:

{{ terminal }}
```bash
john --format=tezos-opencl --no-log --session=tezos --min-length=7 --max-length=9 --pot=tezos.pot hash.txt
```

> Remove the `--format=tezos-opencl` GPU option if the command returns an error.

Press space to show the current status, e.g.

```txt
0g 0:00:00:22 0.01% 2/3 (ETA: 2026-12-31 01:23) 0g/s 200000p/s 200000c/s 200000C/s goodday12..291052
```

It shows the:

* total processing time
* percentage complete
* processing step
* estimated time of completion
* information about the number of password checks per second, and
* the current password being checked.

To stop processing, press <kbd>q</kbd> or <kbd>Ctrl</kbd> | <kbd>Cmd</kbd> + <kbd>C</kbd>. Continue processing later by entering:

{{ terminal }}
```bash
john --restore=tezos
```

The full command shown above starts **[a quick run...](__/recover/quick-run/)**
