import { EntityRepository, Repository } from 'typeorm'
import Car from '../entities/Car.entity';

@EntityRepository(Car)
export default class CarRepository extends Repository<Car> {

    public async findByLicencePlate(licencePlate: string): Promise<Car | undefined> {
        const foundedCar = await this.findOne({
            where: { licencePlate: licencePlate }
        });

        return foundedCar;
    }
}