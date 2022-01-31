import { Helper } from './../../../shared/helpers/helper';
import AppError from "../../../../src/shared/errors/AppError";
import { ICars } from "src/shared/interfaces/Cars.interface";
import { getCustomRepository } from "typeorm";
import CarRepository from "../typeorm/repositories/CarsRepositoty";

export default class CreateCarService {
    public async execute({ color, licencePlate, carBrand }: ICars): Promise<String> {
        const helper = new Helper()
        const carRepository = getCustomRepository(CarRepository);
        const carExists = await carRepository.findByLicencePlate(licencePlate);

        if(helper.licencePlateVerification(licencePlate)) {
            throw new AppError("The licence plate is not valid");
        }

        if (carExists) {
            throw new AppError('Car already exists');
        }

        const newCar = carRepository.create({
            color,
            licencePlate,
            carBrand
        });

        await carRepository.save(newCar);

        return 'Car created successfully';
    }
}