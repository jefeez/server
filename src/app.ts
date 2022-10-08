import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import 'reflect-metadata';
import modules from '@modules/modules';

// orms

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: '*' }));

// routers
app.use(modules);

export { app };
