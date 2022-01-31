import { getCustomRepository, Like } from "typeorm";
import Driver from "../typeorm/entities/Driver.entity";
import DriverRepository from "../typeorm/repositories/DriversRepository";

export default class ListDriversService {
    public async execute(query: any): Promise<Driver[] | undefined> {
        const driverRepository = getCustomRepository(DriverRepository);

        if(query.name) {
            const foundedDrivers = await driverRepository.find({
                where: {
                    name: Like(`%${query.name}%`)
                }
            });

            return foundedDrivers;
        }

        return await driverRepository.find();
    }
}