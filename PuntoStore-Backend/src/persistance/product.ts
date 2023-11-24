import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id!: Number

    @Column({
        length: 100,
    })
    name!: String

    @Column({})
    price!: Number


    constructor(name: String, price: Number) {
        this.name = name;
        this.price = price;
    }

}

