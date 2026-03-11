const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Log all requests
app.use((req, res, next) => {
    console.log(`[Backend Log] ${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "BuildBox Backend is ONLINE!",
        timestamp: new Date().toISOString(),
        node_version: process.version,
        env: process.env.NODE_ENV || 'development'
    });
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// For testing: echo back headers
app.get('/echo', (req, res) => {
    res.json({
        headers: req.headers,
        host: req.hostname,
        url: req.url
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Test backend running on port ${PORT}`);
});
