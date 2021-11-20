
import server from './server/server';
import { Router } from 'express';
import { routerV1 } from './api/1.0';

const router = Router();
router.use('/api', routerV1);

const port = parseInt(process.env.PORT || '4000');

const starter = new server(router).start(port)
  .then(port => console.log(`Running on port ${port}`))
  .catch(error => {
    console.log(error)
  });

export default starter;