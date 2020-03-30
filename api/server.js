const express = require('express');

const server = express();

/* middleware */
server.use(express.json());

/* endpoints */

/* test GET to make sure our server is online */
server.get('/', (req, res) => {
    res.status(200).json({ api: 'online' });
});

module.exports = server;