
import { Request, Response } from 'express';
import { getJsonById } from '../../data-layer/postgres/postgres';

function jsonController() {

  function getJsonDataById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    
    const json = getJsonById(id);
    res.send('test');
  }

  return { getJsonDataById }
};

export { jsonController };
