require('dotenv').config();
const server = require('./api/server.js');

/* designate the port that we want our server to run on
    using our .env file so that sensitive information like this
    is not pushed to GitHub. Make sure to always provide a fallback port */
const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`Server online...`);
});