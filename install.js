#!/usr/bin/env node

var spawn = require('child_process').spawn
var script = require('./')
var fs = require('fs')
var path = require('path')
var server = process.argv[2]

if (!server) return console.error('Usage: install-node-on-ubuntu user@server')
var ssh = spawn('ssh', ['-o', 'UserKnownHostsFile=/dev/null', '-o', 'StrictHostKeyChecking=no', server])

ssh.stdout.pipe(process.stdout)
ssh.stderr.pipe(process.stderr)

ssh.on('exit', function(code, signal) {
  console.log('done', {code: code, signal: signal})
})

var scriptStream = fs.createReadStream(path.join(__dirname, 'install.sh'))
scriptStream.pipe(ssh.stdin)
