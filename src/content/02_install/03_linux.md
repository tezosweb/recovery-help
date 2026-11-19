---
title: Linux installation
description: How to install John the Ripper and its dependencies on Linux.
menu: Linux
date: 2026-12-01
---

Although flatpak versions of John the Ripper are [available for Linux](https://github.com/openwall/john-packages/releases/latest), compiling the application on your local system provides better performance:

{{ terminal }}
```bash
# from home directory
cd ~

# install dependencies
sudo apt-get install git build-essential libssl-dev zlib1g-dev yasm pkg-config libgmp-dev libpcap-dev libbz2-dev nvidia-opencl-dev

# clone latest bleeding-jumbo repository
git clone https://github.com/openwall/john -b bleeding-jumbo john

## build
cd john/src && ./configure && make -s clean && make -sj4

# test
cd ../run/ && ./john --list=build-info
```

The `~/john/run` directory contains John the Ripper executables. You can run `john` from the terminal using the full path, e.g.

{{ terminal }}
```bash
~/john/run/john
```

For the purposes of this tutorial, we presume you can run `john` from any directory without using the full path. You can temporarily update your Linux `PATH` environment variable for the current terminal session using the command:

{{ terminal }}
```bash
# temporary PATH update: run after opening terminal
PATH=$PATH:$HOME/john/run
```

Or you can permanently update your Linux `PATH` environment variable if you intend running John the Ripper regularly by adding the following line to the bottom of your `~/.bashrc` (or similar) shell configuration file, e.g.

{{ `.bashrc` }}
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

John the Ripper communicates with your graphics card using OpenCL (Open Computing Language) -- refer to the [Linux device support list](https://opencl.gpuinfo.org/listdevices.php?platform=linux). Distros and devices vary, but you can install the latest NVIDIA drivers on Ubuntu using:

{{ terminal }}
```bash
ubuntu-drivers devices
sudo ubuntu-drivers install
sudo apt update
sudo apt install -y nvidia-opencl-dev clinfo
```

Linux drivers for AMD graphics cards are available from [amd.com](https://www.amd.com/en/support/download/linux-drivers.html).

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
