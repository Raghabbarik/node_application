import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3001;

app.get('/', (req, res) => {
  return res.json({ msg: 'Hello from the server' });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
