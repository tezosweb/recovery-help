---
title: Create your Tezos hash.txt file using Python
description: Create a John the Ripper hash.txt file using the official tezos2john.py Python script.
menu: Python
date: 2026-12-01
---

John the Ripper provides a `tezos2john.py` Python script in its `run` directory that generates the `hash.txt` file. Some Linux distros provide Python by default and downloads are available for [Windows](https://www.python.org/downloads/windows/) and [macOS](https://www.python.org/downloads/macos/).

> If you do not have Python installed, you can use [tezos2john.html](__/create-hash/tezos2john.html) or [Docker](__/create-hash/docker/) instead.
>
> Windows and macOS users can also use WSL2 or a Linux virtual machine that has Python installed. Copy `tezos2john.py` and the `bip-0039` subdirectory from the John the Ripper `run` directory into the VM then run it using the command below.

The Python command format:

{{ terminal }}
```bash
python3 tezos2john.py '<seed-words>' '<email>' '<tzAddress>' > hash.txt
```

Steps:

1. Create a working directory such as `C:\tezos` on Windows or `~/tezos` on Linux or macOS.

1. `cd` to the John the Ripper `run` directory.

1. Run this command on Linux or macOS, replacing the seed words, email, tz address, and `hash.txt` file location as necessary:

    {{ terminal }}
    ```bash
    # generate hash.txt (Linux/macOS)
    python3 tezos2john.py 'tezos secret seed phrase used to create your wallet that stores coins for spending later' 'your@email.com' 'tz1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' > ~/tezos/hash.txt
    ```

    > Note: if this command fails, try `python` instead of `python3`.

    The Windows Powershell command is identical except for the `hash.txt` location:

    {{ terminal }}
    ```bash
    # generate hash.txt (Windows)
    python tezos2john.py 'tezos secret seed phrase used to create your wallet that stores coins for spending later' 'your@email.com' 'tz1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' > C:\tezos\hash.txt
    ```

You can now **[start password recovery with John the Ripper...](__/recover/)**
