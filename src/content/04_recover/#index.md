---
title: Starting password recovery
description: The steps required to recover your Tezos password using John the Ripper.
menu: Recover
date: 2026-12-01
---

This section provides strategies for running John the Ripper depending what you know about your password. To start, you must have:

1. installed John the Ripper and any necessary GPU drivers on [Windows](__/install/windows/), [macOS](__/install/macos/), or [Linux](__/install/linux/)

1. created a `tezos` working directory such as `C:\tezos` on Windows or `~/tezos` on Linux or Mac OS

1. [generated your `hash.txt` file](__/create-hash/) and copied it to your working directory

In your terminal, `cd` to your `tezos` working directory. The general command for starting John the Ripper is:

```bash
john [options] hash.txt
```

where:

* `[options]` is one or more command-line settings for the recovery strategy you're using plus any [generic options](__/recover/generic-options/).

* `hash.txt` is your [generated `hash.txt` file](__/create-hash/).

You can view help with `john --help` but this section provides guidance.

Use any of the following strategies according to what you know about your password:
