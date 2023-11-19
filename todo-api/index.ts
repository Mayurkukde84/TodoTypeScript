import express, { Express } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import cors from 'cors';
import { Task } from './src/tasks/task.entity';
import { taskRouter } from './src/tasks/tasks.router';
import morgan from 'morgan';
const app: Express = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
const PORT = process.env.PORT;
//Create Database connections
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT);
    console.log('Data Source has been initialized');
    console.log(`server is running on ${PORT}`);
  })
  .catch((err) => {
    console.error(
      'Error during Data Source initialization',
      err,
    );
  });

app.use('/', taskRouter);
