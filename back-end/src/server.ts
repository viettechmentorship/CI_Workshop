// import express from 'express';
import express, {Express} from 'express';
const app: Express = express();
const port = 4000;
app.get('/', (req, res) => {
  res.send('Start backend');
}
);

app.get('/hello', (req, res) => {
  res.send('Hello from the backend!');
}
);

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
}
);