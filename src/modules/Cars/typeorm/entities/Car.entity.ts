import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
export default class Car {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    color: string;

    @Column()
    licencePlate: string;

    @Column()
    carBrand: string;
}