<img src="http://smartcore.io/css/images/smartcore-p2p.svg" alt="smartcore payment protocol" height="35" width="102">

Smartcore P2P
=======

[![NPM Package](https://img.shields.io/npm/v/smartcore-p2p.svg?style=flat-square)](https://www.npmjs.org/package/smartcore-p2p)
[![Build Status](https://img.shields.io/travis/msg768/smartcore-p2p.svg?branch=master&style=flat-square)](https://travis-ci.org/msg768/smartcore-p2p)
[![Coverage Status](https://img.shields.io/coveralls/msg768/smartcore-p2p.svg?style=flat-square)](https://coveralls.io/r/msg768/smartcore-p2p?branch=master)

`smartcore-p2p` adds [SmartCash protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for Smartcore.

See [the main smartcore repo](https://github.com/msg768/smartcore) for more information.

## Getting Started

```sh
npm install smartcore-p2p
```
In order to connect to the SmartCash network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('smartcore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [smartcore guide](http://smartcore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/msg768/smartcore/blob/master/CONTRIBUTING.md) on the main smartcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/msg768/smartcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Smartcore is a fork of Bitcore which is a trademark maintained by BitPay, Inc.
