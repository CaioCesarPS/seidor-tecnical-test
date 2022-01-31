import { getCustomRepository } from "typeorm";
import CarRepository from "../typeorm/repositories/CarsRepositoty";

export default class DeleteCarService {
    async execute(licencePlate: string): Promise<void> {
        const carRepository = getCustomRepository(CarRepository);
        const car = await carRepository.findOne(licencePlate);

        if (!car) {
            throw new Error('Car not found');
        }

        await carRepository.remove(car);
    }
}