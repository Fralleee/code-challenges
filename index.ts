import express from 'express'

let app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', (request, response) => {
  // response.render('index');
  response.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});