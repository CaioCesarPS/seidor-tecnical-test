import { ICarFilter } from './../../shared/interfaces/CarFilter.interface';
import { Request, Response } from 'express';
import CreateCarService from './services/createCar.service';
import DeleteCarService from './services/deleteCar.service';
import GetCarService from './services/getCar.service';
import ListCarsService from './services/listCars.service';
import UpdateCarService from './services/updateCar.service';

export default class CarsController {
    public async listCars(req: Request, res: Response) {
        try {
            const listCarsService = new ListCarsService();

            const query = req.query;
            const cars = await listCarsService.execute(query);

            return res.json(cars);
        } catch (error) {
            return res.status(400).json({ error: error });
        }

    };

    public async getCar(req: Request, res: Response) {
        try {
            const getCarService = new GetCarService();

            const car = await getCarService.execute(req.params.licencePlate);

            return res.json(car);
        } catch (error) {
            return res.status(400).json({ error: error });
        }

    }

    public async createCar(req: Request, res: Response) {
        try {
            const createCarService = new CreateCarService();

            const car = await createCarService.execute(req.body);

            return res.json(car);
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }

    public async deleteCar(req: Request, res: Response) {
        try {
            const deleteCarService = new DeleteCarService();

            await deleteCarService.execute(req.params.licencePlate);

            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ error: error });
        }

    }

    public async updateCar(req: Request, res: Response) {
        try {
            const updateCarService = new UpdateCarService();

            const car = await updateCarService.execute(req.params.id, req.body);

            return res.json(car);
        } catch (error) {
            return res.status(400).json({ error: error });
        }

    }
}
