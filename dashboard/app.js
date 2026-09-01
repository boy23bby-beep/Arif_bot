const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

module.exports = async (api) => {
    // ড্যাশবোর্ড এবং পোর্ট লিসেনিং পুরোপুরি বন্ধ রাখা হলো যাতে EADDRINUSE এরর না আসে।
    return;
};
