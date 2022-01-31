import AppError from "../../../shared/errors/AppError";
import { ICreateDriver } from "src/shared/interfaces/createDriver.interface";
import { getCustomRepository } from "typeorm";
import DriverRepository from "../typeorm/repositories/DriversRepository";

export default class CreateDriverService {
    public async execute({ name }: ICreateDriver): Promise<String> {
        const driverRepository = getCustomRepository(DriverRepository);

        const newDriver = driverRepository.create({
            name
        })
        await driverRepository.save(newDriver)

        return 'Driver created successfully';
    }
}