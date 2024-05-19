import express from 'express';
// @ts-expect-error asd
import ReactDOMServer from 'react-server-dom-webpack/server';
import { Server } from '../src/Server';
import cors from 'cors';
import { createElement } from 'react';

const app = express();

app.use(cors());

app.get('/', async (_req, res) => {
  const {pipe} = ReactDOMServer.renderToPipeableStream(createElement(Server));
  pipe(res);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});