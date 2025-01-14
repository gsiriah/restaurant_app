const cors = require('cors');
const express = require('express');
const reservationRoutes = require('./routes/reservation.routes');

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    credentials: true,              // Allow credentials (cookies, headers, etc.)
}));

app.use(express.json());

// Routes
app.use('/api', reservationRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});