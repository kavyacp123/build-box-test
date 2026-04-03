const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Node Backend!' });
});

app.get('/api/test', (req, res) => {
    res.json({ status: 'success', data: 'Backend is connected correctly.' });
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
