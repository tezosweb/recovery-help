---
title: Windows installation
description: How to install John the Ripper and its dependencies on Windows.
menu: Windows
date: 2026-12-01
---

A pre-compiled version of John the Ripper is available for Windows from [github.com/openwall/john-packages/releases/latest](https://github.com/openwall/john-packages/releases/latest)

Download and extract the file named `winX64_1_JtR.zip`. For the purposes of this tutorial, we'll assume you've extracted it to `C:\JtR`.

The `C:\JtR\run` directory contains John the Ripper executables. You can run `john.exe` from Powershell using the full path, e.g.

{{ terminal }}
```bash
C:\JtR\run\john
```

For the purposes of this tutorial, we presume you can run `john` from any folder without using the full path. You can temporarily update your Windows `PATH` environment variable  for the current terminal session using the command:

{{ terminal }}
```bash
# temporary PATH update: run after opening terminal
$env:path += ";C:\JtR\run"
```

Or you can permanently update your Windows `PATH` environment variable if you intend running John the Ripper regularly:

{{ terminal }}
```bash
# permanent PATH update: do once only
setx PATH "$($env:PATH);C:\JtR\run"
```

If you would rather set the `PATH` using Windows Settings:

1. Click **Start** and type "environment variables" or choose **Start** > **Settings** > **System** > **About** > **Advanced system settings**.

1. In the **System Properties** dialog, click the "Environment Variables..." button.

1. Choose "Path" and click "Edit...".

1. Click "New", enter `C:\JtR\run`, and click "OK".

Close and restart your terminal then test you can run `john` from any folder:

{{ terminal }}
```bash
cd \
john --list=build-info
```


## GPU support

John the Ripper communicates with your graphics card using OpenCL (Open Computing Language) -- refer to the [Windows device support list](https://opencl.gpuinfo.org/listdevices.php?platform=windows). Windows generally installs the correct graphics card driver for your system, but newer devices may require a manual download.

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

<youtube-lite video="5BdRwiRDq9g"></youtube-lite>

You can now **[create your Tezos password `hash.txt` file...](__/create-hash/)**
