import { Response, Request, Router } from 'express';
import { jsonRouter } from './public/json/json';

const routerV1 = Router();
routerV1.use('/v1.0', jsonRouter);

routerV1.get('/version', (req: Request, res: Response) => {
  res.send('V1.0');
})
export { routerV1 };
