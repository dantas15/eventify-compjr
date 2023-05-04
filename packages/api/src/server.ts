import express from 'express';

const isProd = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
  const appUrl = isProd ? 'not yet implemented :/' : `http://localhost:${PORT}`;
  console.log(`Server is running on ${PORT}`);
})