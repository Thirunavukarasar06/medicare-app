const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'MediCare backend is running'
    });
});

app.get('/api/test-db', (req, res) => {

    db.query('SELECT 1 AS result', (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: 'MySQL database connected successfully',
            result: result
        });

    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`MediCare backend running on http://localhost:${PORT}`);
});