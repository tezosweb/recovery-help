---
title: How to generate your Tezos password hash file
description: How to generate your Tezos password hash file that John the Ripper uses for recovery processing.
menu: Generate hash
date: 2026-12-01
---

John the Ripper requires a `hash` file that you must create before you can start password recovery. To create it, you require:

1. Your 15 seed words
1. Your email address (case sensitive)
1. Your public address (a 36-character code starting `tz`)

The following sections describe different ways to create your `hash` file.

> Note: never share your `hash` file -- it contains your sensitive Tezos account information.


## Using the `tezos2john.html` helper

The easiest option is to download `helpers.zip` from this website and extract it to your file system. Double-click `tezos2john.html` to open it in your default browser. Enter your information and click **DOWNLOAD hash FILE** when the hash appears. Copy the file to a working directory such as `C:\tezos` on Windows or `~/tezos` on Linux or macOS.

> Note: your browser runs this page in a local, sandboxed context and it has no access to the internet.


## Using the `tezos2john.py` Python script

John the Ripper provides a `tezos2john.py` Python script in its `run` directory that generates the `hash` file. Some Linux distros provide Python by default and downloads are available for [Windows](https://www.python.org/downloads/windows/) and [macOS](https://www.python.org/downloads/macos/).

> Using the [`tezos2john.html` helper](#using-the-tezos2johnhtml-helper) or [Docker](#using-docker) is easier if you do not have Python.
>
> Alternatvely, Windows and macOS users can use WSL2 or a Linux virtual machine that has Python installed. Copy `tezos2john.py` and the `bip-0039` subdirectory from the JtR `run` directory into the VM and run it using the command below.

The Python command format:

```bash
python3 tezos2john.py '<seed-words>' '<email>' '<tzAddress>' > hash
```

Steps:

1. Create a working directory such as `C:\tezos` on Windows or `~/tezos` on Linux or macOS.

1. `cd` to the John the Ripper `run` directory.

1. Run the following `python` command on Linux or macOS, replacing the seed words, email, tz address, and `hash` file location as necessary:

    ```bash
    # generate hash (Linux/macOS)
    python3 tezos2john.py \
      'tezos secret seed phrase used to create your wallet that stores coins for spending later' \
      'your@email.com' \
      'tz1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' \
      > ~/tezos/hash
    ```

    > Note: if this command fails, try `python` instead of `python3`.

    The equivalent Windows Powershell command:

    ```bash
    # generate hash (Windows)
    python tezos2john.py 'tezos secret seed phrase used to create your wallet that stores coins for spending later' 'your@email.com' 'tz1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' > C:\tezos\hash
    ```


## Using Docker and the `tezos2john.py` Python script

If you do not have Python installed but do have [Docker](https://www.docker.com/), you can run it using a minimal Python image. Docker Desktop is available for [Windows](https://docs.docker.com/desktop/setup/install/windows-install/), [Linux](https://docs.docker.com/desktop/setup/install/linux/), and [macOS](https://docs.docker.com/desktop/setup/install/mac-install/).

Once you have installed Docker Desktop:

1. Create a working directory such as `C:\tezos` on Windows or `~/tezos` on Linux or Mac OS.

1. `cd` to the John the Ripper `run` directory.

1. Run the following `docker` command on Linux or macOS, replacing the seed words, email, tz address, and `hash` file location as necessary:

    ```bash
    # generate hash (Linux/macOS)
    docker run -it --rm --name python \
      -v ${PWD}:/usr/src/myapp \
      -w /usr/src/myapp \
      python:3-alpine \
      python tezos2john.py \
      'tezos secret seed phrase used to create your wallet that stores coins for spending later' \
      'your@email.com' \
      'tz1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' \
      > ~/tezos/hash
    ```

    The equivalent Windows Powershell command:

    ```bash
    # generate hash (Windows)
    docker run -it --rm --name python -v ${PWD}:/usr/src/myapp -w /usr/src/myapp python:3-alpine python tezos2john.py 'tezos secret seed phrase used to create your wallet that stores coins for spending later' 'your@email.com' 'tz1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' > C:\tezos\hash
    ```


## Examine your `hash` file

Assuming there were no errors, your generated `hash` file contains your seed words, email, address, and a hash value in this format, e.g.

```txt
$tezos$1*2048*tezos secret seed phrase used to create your wallet that stores coins for spending later*your@email.com*tz1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*abcdef0123456789fedcba9876543210cebcebcebceb
```

> Note: do **not** share your `hash` file with anyone!

You can now [start password recovery with John the Ripper...](__/recover/)
