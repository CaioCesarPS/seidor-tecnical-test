import { IUpdateCar } from "../../../shared/interfaces/UpdateCar.interface";
import { getCustomRepository } from "typeorm";
import AppError from "../../../../src/shared/errors/AppError";
import CarRepository from "../typeorm/repositories/CarsRepositoty";
import { Helper } from "../../../shared/helpers/helper";

export default class UpdateCarService {
    async execute(licencePlate: string, payload: IUpdateCar) {
        const helper = new Helper()
        const carRepository = getCustomRepository(CarRepository);
        
        let car = await carRepository.findByLicencePlate(licencePlate);

        if (!car) {
            throw new AppError('Car not found');
        }

        if (car && car.licencePlate === payload.licencePlate) {
            throw new AppError('The licence plate is the same');
        }

        if(helper.licencePlateVerification(payload.licencePlate)) {
            throw new AppError("The licence plate is not valid");
        }

        const updateCar = {
            ...car,
            ...payload
        }

        await carRepository.save(updateCar);
    }
}