#!/usr/bin/env node

var spawn = require('child_process').spawn
var script = require('./')
var server = process.argv[2]

if (!server) return console.error('Usage: install-node-on-ubuntu user@server')
var ssh = spawn('ssh', ['-tt', '-o', 'UserKnownHostsFile=/dev/null', '-o', 'StrictHostKeyChecking=no', server])

ssh.stdout.pipe(process.stdout)
ssh.stderr.pipe(process.stderr)

ssh.on('exit', function(code, signal) {
  console.log('exit', code, signal)
})

ssh.stdin.write(script)
ssh.stdin.end()
