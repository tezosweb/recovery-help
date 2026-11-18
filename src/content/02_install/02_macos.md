---
title: macOS installation
description: How to install John the Ripper and other software components on macOS.
menu: macOS
date: 2026-12-01
---

Precompiled versions of John the Ripper are [available for macOS](https://github.com/openwall/john-packages/releases/latest), and you can also install it using `brew install john-jumbo`. However, compiling the application on your local system provides better performance:

{{ terminal }}
```bash
# from home directory
cd ~

# install dependencies
brew install git openssl libomp gmp zlib

# clone latest bleeding-jumbo repository
git clone https://github.com/openwall/john -b bleeding-jumbo

# configure
cd john/src
./configure --with-openssl=$(brew --prefix openssl)

# compile
make -sj$(sysctl -n hw.ncpu)

# test
cd ../run/ && ./john --list=build-info
```

The `~/john/run` directory contains John the Ripper executables. You can run `john` from the terminal using the full path, e.g.

{{ terminal }}
```bash
~/john/run/john
```

For the purposes of this tutorial, we presume you can run `john` from any directory without using the full path. You can temporarily update your macOS `PATH` environment variable for the current terminal session using following command:

{{ terminal }}
```bash
# temporary PATH update: run after opening terminal
PATH=$PATH:$HOME/john/run
```

Or you can permanently update your macOS `PATH` environment variable if you intend running John the Ripper regularly by adding the following line to the bottom of your `~/.bash_profile` shell configuration file, e.g.

{{ `.bash_profile` }}
```bash
# add John the Ripper
export PATH=$PATH:$HOME/john/run
```

Close and restart your terminal then test you can run `john` from any directory:

{{ terminal }}
```bash
cd ~
john --list=build-info
```


## GPU support

John the Ripper communicates with your graphics card using OpenCL (Open Computing Language). Apple M chips support OpenCL so there should be nothing to install or configure.

Check whether John the Ripper can access your GPUs:

{{ terminal }}
```bash
john --list=opencl-devices
```

You will either see a list of devices or an error such as *"Error: No OpenCL-capable devices were detected"*. Test GPU performance by entering:

{{ terminal }}
```bash
john --test --format=tezos-opencl
```

You can now **[create your Tezos password `hash.txt` file...](__/create-hash/)**
