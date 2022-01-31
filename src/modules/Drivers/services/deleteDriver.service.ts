import AppError from "../../../../src/shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import DriversRepository from "../typeorm/repositories/DriversRepository";

export default class DeleteDriverService {
    public async execute(id: string): Promise<void> {
        const driverRepository = getCustomRepository(DriversRepository);

        const driver = await driverRepository.findOne(id);

        if(!driver) {
            throw new AppError('Driver not found');
        }

        await driverRepository.remove(driver);
    }
}