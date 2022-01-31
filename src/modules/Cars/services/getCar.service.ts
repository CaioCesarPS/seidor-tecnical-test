import AppError from "../../../../src/shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import CarRepository from "../typeorm/repositories/CarsRepositoty";

export default class GetCarService {
    async execute(licencePlate: string) {
        const carRepository = getCustomRepository(CarRepository);
        const car = await carRepository.findOne({
            where: { licencePlate: licencePlate },
        });

        if (!car) {
            throw new AppError('Car not found');
        }

        return car;
    }
}