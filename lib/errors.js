'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on smartcore-p2p Module {0}'
};

module.exports = require('smartcore-lib').errors.extend(spec);
