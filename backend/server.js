import express from 'express'
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import routes from './routes/productsRoutes.js';

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();
app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', routes)

app.listen(port, () => console.log(`server running on port ${port}`));
connectDB();

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use('/uploads', express.static('/var/data/uploads'));
    app.use(express.static(path.join(__dirname, '/frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    );
  } else {
    const __dirname = path.resolve();
    app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }