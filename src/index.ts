import 'reflect-metadata';
import routes from './shared/http/routes/index';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { errors } from 'celebrate';
import AppError from './shared/errors/AppError';
import './shared/typeorm'

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }
        console.log(error)
        return response.status(500).json({
            status: 'error',
            message: 'internal server error',
        });
    },
);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});