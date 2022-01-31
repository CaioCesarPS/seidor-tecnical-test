import { getCustomRepository } from "typeorm";
import Driver from "../typeorm/entities/Driver.entity";
import DriverRepository from "../typeorm/repositories/DriversRepository";
import AppError from "../../../../src/shared/errors/AppError";

export default class GetDriverService {
    public async execute(id: string): Promise<Driver | undefined> {
        const driverRepository = getCustomRepository(DriverRepository);

        const driver = await driverRepository.findOne(id);

        if (!driver) {
            throw new AppError('Driver not found');
        }

        return driver;
    }
}