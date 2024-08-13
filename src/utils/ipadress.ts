'use strict';

const { networkInterfaces, NetworkInterfaceInfo } = require('os');

const getIpAddresses = () : { [key: string]: string[] } => {
    const nets = networkInterfaces();
    const results: { [key: string]: string[] } = {}; // Initialize as empty object
  
    for (const name of Object.keys(nets)) {
      for (const net of nets[name] || []) {
        // Skip over non-IPv4 and internal (i.e., 127.0.0.1) addresses
        const isIPv4 = typeof net.family === 'string' ? net.family === 'IPv4' : net.family === 4;
        if (isIPv4 && !net.internal) {
          if (!results[name]) {
            results[name] = [];
          }
          results[name].push(net.address);
        }
      }
    }
  
    return results;
  };

export {getIpAddresses}