---
title: Password recovery requirements
description: What systems, software, and knowledge you require to start password recovery.
menu: Requirements
date: 2026-12-01
---

To attempt Tezos password recovery, you require:

1. A Windows, Linux, or Mac PC.

   Ideally, use a fast device with one or more OpenCL-compatible graphics cards such as those [supplied by NVIDIA, AMD, and Intel](https://opencl.gpuinfo.org/listdevices.php) or Apple M chipsets.

   Your PC could be running intensive processes for many weeks. If you do not have a dedicated device, start or schedule recovery runs on your main PC at times you're not using it, such as evenings, weekends, vacations, etc.

   > IMPORTANT! Check your device's power options to ensure it does not sleep after a period of user inactivity.

1. The technical ability to install software and run command-line tools.

1. Your Tezos information:

   * your 15 seed words
   * your email address (in whatever case you used when registering)
   * your public address (a 36-character string starting `tz`)

1. Some password hints. The better your hints, the better your chances of password recovery.

> Note: you can run password recovery tools in Windows WSL2, a virtual machine, or Docker container. These are not the fastest options and require configuration to use the host's GPU. This tutorial recommends a bare-metal installation.

Next: **[consider security...](__/overview/security/)**
