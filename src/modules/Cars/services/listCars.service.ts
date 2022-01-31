import { ICarFilter } from 'src/shared/interfaces/CarFilter.interface';
import { getCustomRepository } from 'typeorm';
import CarRepository from '../typeorm/repositories/CarsRepositoty';
export default class ListCarsService {
    async execute(query: Object) {
        const carsRepository = getCustomRepository(CarRepository);

        const cars = await carsRepository.find({
            where: {
                ...query
            }
        });

        return cars;
    }
}