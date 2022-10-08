import { app } from './app';

const server = async () => {
  const port = 4000;
  await app.listen(port, () => console.log('INIT: express'));
};

server();
