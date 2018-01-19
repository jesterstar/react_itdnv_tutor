import express from 'express';

/**
 * Declare constants
 */
const DEFAULT_PORT = 8080;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

const server = app.listen(DEFAULT_PORT, () => {
  console.log(`Server is up and running on port ${DEFAULT_PORT}`);
})