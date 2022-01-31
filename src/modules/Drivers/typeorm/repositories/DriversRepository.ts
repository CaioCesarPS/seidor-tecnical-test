import { EntityRepository, Repository } from "typeorm";
import Driver from "../entities/Driver.entity";

@EntityRepository(Driver)
export default class DriverRepository extends Repository<Driver> {
    public async findByName(name: string) {
        const foundedDriver = await this.findOne({
            where: {
                name: name
            }
        })

        return foundedDriver;
    }
}