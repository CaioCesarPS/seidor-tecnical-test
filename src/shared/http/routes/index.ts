import { Router } from 'express';
import carsRouter from '../../../modules/Cars/routes/cars.routes';
import driversRouter from '../../../modules/Drivers/routes/drivers.routes';

const routes = Router();

routes.use('/cars', carsRouter);
routes.use('/drivers', driversRouter)

export default routes;