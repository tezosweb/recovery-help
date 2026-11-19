---
title: Create your Tezos hash.txt file using tezos2john.html
description: Create a John the Ripper hash.txt file using an HTML page that works on all devices without other software.
menu: tezos2john.html
date: 2026-12-01
---

The easiest option for creating your Tezos `hash.txt` file is to download `tezos2john.html` from this website:

<a class="button" href="__/download/tezos2john.html" download="tezos2john.html">download tezos2john.html</a>

{{ SHA256 checksum }}
```txt
64b3cb41c0beee298fd804c46de70cf74cd0b4557e1ca277d6427abd1fec6c57
```

After downloading, validate the checksum above on Windows:

{{ terminal }}
```bash
CertUtil -hashfile "tezos2john.html" sha256
```

macOS:

{{ terminal }}
```bash
shasum -a 256 -c tezos2john.html
```

or Linux:

{{ terminal }}
```bash
sha256sum tezos2john.html
```

Then double-click `tezos2john.html` to open it in your default browser.

> Your browser runs this page in a secure, local, sandboxed tab with no internet access.

The `hash.txt` file content appears once you enter your:

1. 15 seed words
1. email address (in the letter case you provided)
1. public address (36-character code starting `tz1`)

Save the file and move it to a working directory such as `C:\tezos` on Windows or `~/tezos` on Linux or macOS.

You can now **[start password recovery with John the Ripper...](__/recover/)**
