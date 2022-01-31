import { Router } from 'express';
import { celebrate } from 'celebrate';
import CarsController from '../Cars.controller';
import { createCarSchema } from './routesValidation/validation';

const carsRouter = Router();
const carsController = new CarsController();

carsRouter.get('/', carsController.listCars);
carsRouter.get('/:id', carsController.getCar);
carsRouter.post('/', celebrate(createCarSchema),carsController.createCar);
carsRouter.patch('/:id', carsController.updateCar);
carsRouter.delete('/:id', carsController.deleteCar);

export default carsRouter;