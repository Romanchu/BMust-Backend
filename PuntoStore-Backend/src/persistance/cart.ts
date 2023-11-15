import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id!: Number

    @Column({
        length:100,
    })
    units!: String

    @Column({
        length:100,
    })
    total_price!: String

    @Column({
        length:100,
    })
    products!: String
}