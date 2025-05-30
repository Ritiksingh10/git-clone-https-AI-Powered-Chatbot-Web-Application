const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/auth/', require('./routes/query'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const app = express();

// app.get('/hello', (req, res) => {
//   res.send('Hi');
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });