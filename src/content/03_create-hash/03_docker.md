---
title: Create your Tezos hash.txt file using Docker
description: Create a John the Ripper hash.txt file using the official tezos2john.py Python script in a Docker container.
menu: Docker
date: 2026-12-01
---

If you do not have Python installed but do have [Docker](https://www.docker.com/), you can run it using a minimal Python image. Docker Desktop is available for [Windows](https://docs.docker.com/desktop/setup/install/windows-install/), [macOS](https://docs.docker.com/desktop/setup/install/mac-install/), and [Linux](https://docs.docker.com/desktop/setup/install/linux/).

Once you have installed Docker Desktop:

1. Create a working directory such as `C:\tezos` on Windows or `~/tezos` on Linux or Mac OS.

1. `cd` to the John the Ripper `run` directory.

1. Run the following `docker` command on Linux or macOS, replacing the seed words, email, tz address, and `hash.txt` file location as necessary:

    {{ terminal }}
    ```bash
    # generate hash.txt (Linux/macOS)
    docker run -it --rm --name python -v ${PWD}:/usr/src/myapp -w /usr/src/myapp python:3-alpine python tezos2john.py 'tezos secret seed phrase used to create your wallet that stores coins for spending later' 'your@email.com' 'tz1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' > ~/tezos/hash.txt
    ```

    The Windows Powershell command is identical except for the `hash.txt` location:

    {{ terminal }}
    ```bash
    # generate hash.txt (Windows)
    docker run -it --rm --name python -v ${PWD}:/usr/src/myapp -w /usr/src/myapp python:3-alpine python tezos2john.py 'tezos secret seed phrase used to create your wallet that stores coins for spending later' 'your@email.com' 'tz1XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' > C:\tezos\hash.txt
    ```

You can now **[start password recovery with John the Ripper...](__/recover/)**
