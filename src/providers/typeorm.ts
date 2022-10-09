import { database } from '@env/database';
import { join } from 'path';
import { DataSource } from 'typeorm';

const typeorm = new DataSource({
  type: database.typeorm.driver as any,
  host: database.typeorm.host,
  port: +database.typeorm.port,
  username: database.typeorm.username,
  password: database.typeorm.password,
  database: database.typeorm.database,
  synchronize: true,
  entities: [join(__dirname, '..', 'app', 'modules', '**', '*.model.{ts,js}')],
});

typeorm
  .initialize()
  .then(() => {
    console.log('INIT: typeorm');
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });

export { typeorm };
