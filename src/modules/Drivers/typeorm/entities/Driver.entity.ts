import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('drivers')
export default class Driver {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;
}