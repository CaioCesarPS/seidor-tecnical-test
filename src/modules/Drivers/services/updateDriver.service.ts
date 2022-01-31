import { ICreateDriver } from 'src/shared/interfaces/createDriver.interface';
import { getCustomRepository } from 'typeorm';
import Driver from '../typeorm/entities/Driver.entity';
import AppError from "../../../../src/shared/errors/AppError";
import DriverRepository from '../typeorm/repositories/DriversRepository';

export default class UpdateDriverService {
    public async execute(id: string, data: ICreateDriver): Promise<Driver | undefined> {
        const driverRepository = getCustomRepository(DriverRepository);

        const driver = await driverRepository.findOne(id);

        if(!driver) {
            throw new AppError('Driver not found');
        }

        const updateDriver = {
            ...driver,
            ...data
        }

        await driverRepository.save(updateDriver);

        return updateDriver;
    }
}