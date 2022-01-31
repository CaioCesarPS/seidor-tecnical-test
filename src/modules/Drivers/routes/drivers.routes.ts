import { Router } from "express";
import DriversController from "../Drivers.controller";

const driversRouter = Router()
const driversController = new DriversController()

driversRouter.get('/', driversController.listDrivers);
driversRouter.get('/:id', driversController.getDriver);
driversRouter.post('/',driversController.createDriver);
driversRouter.patch('/:id', driversController.updateDriver);
driversRouter.delete('/:id', driversController.deleteDriver);

export default driversRouter;