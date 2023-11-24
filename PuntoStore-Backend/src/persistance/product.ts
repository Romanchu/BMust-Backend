import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 100,
    })
    name!: string

    @Column({})
    price!: number


    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

}

