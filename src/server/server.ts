import express from 'express';
import pool from '../db-config/db-connector';


class Server {
  private app;

  constructor(router: express.Router) {
    this.app = express();
    this.app.use(router);

    this.config();
    this.routerConfig();
    this.dbConnect();
  }

  private config() {
    this.app.use(express.urlencoded({ extended:true }));
    this.app.use(express.json({ limit: '1mb' }));
  }

  private routerConfig() {
    this.app.get('/', (req, res) => {
      res.send('Postgres node server is running');
    });
}

  private dbConnect() {
    pool.connect(function (err, client, done) {
      if (err) throw new Error(err.message);
      console.log('Connected');
    }); 
  
  }

  public start = (port: number) => {
    return new Promise((resolve, reject) => {
        this.app.listen(port, () => {
            resolve(port);
        }).on('error', (err: Object) => reject(err));
    });
  }
}

export default Server;