# install-node-on-ubuntu

[![NPM](https://nodei.co/npm/install-node-on-ubuntu.png)](https://nodei.co/npm/install-node-on-ubuntu/)

Installs Node.js on Ubuntu over SSH

Uses the [NodeSource repository](https://github.com/nodesource/distributions)

Tested w/ Ubuntu 13.04 x64, should work with other modern Ubuntus

## CLI usage

```
npm install install-node-on-ubuntu -g
install-node-on-ubuntu max@coolsite.com
```

assumptions:

you have your keys setup correctly so that passwordless login works with the SSH user + server passed in

## JS usage

```
var installScript = require('install-node-on-ubuntu')
```

`installScript` is a string containing the shell commands to install node, newline separated. Execute it somewhere!
