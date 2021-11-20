import { Router } from 'express';
import { jsonController } from '../../../../controllers/json-controller';

const jsonRouter = Router();

jsonRouter.get('/json/:id', jsonController().getJsonDataById);

export { jsonRouter };
