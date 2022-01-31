import CreateDriverService from "./services/createDriver.service";
import { Request, Response } from 'express';
import ListDriversService from "./services/listDrivers.service";
import GetDriverService from "./services/getDriver.service";
import UpdateDriverService from "./services/updateDriver.service";
import DeleteDriverService from "./services/deleteDriver.service";

export default class DriversController {
    public async createDriver(req: Request, res: Response) {
        try {
            const createDriverService = new CreateDriverService();

            const driver = await createDriverService.execute(req.body);

            return res.json(driver);
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }

    public async listDrivers(req: Request, res: Response) {
        try {
            const listDriversService = new ListDriversService();

            const query = req.query;

            const drivers = await listDriversService.execute(query);

            return res.json(drivers);
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }

    public async getDriver(req: Request, res: Response) {
        try {
            const getDriver = new GetDriverService();

            const driver = await getDriver.execute(req.params.id);

            return res.json(driver);
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }

    public async updateDriver(req: Request, res: Response) {
        try {
            const updateDriver = new UpdateDriverService();

            const driver = await updateDriver.execute(req.params.id, req.body);

            return res.json(driver);
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }

    public async deleteDriver(req: Request, res: Response) {
        try {
            const deleteDriver = new DeleteDriverService();

            await deleteDriver.execute(req.params.id);

            return res.json({ message: 'Driver deleted' });
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }
}