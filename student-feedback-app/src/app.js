const express = require('express');
const bodyParser = require('body-parser');
const feedbackRoutes = require('./routes/feedback');
const studentRoutes = require('./routes/student');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/feedback', feedbackRoutes);
app.use('/api/students', studentRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../views/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});