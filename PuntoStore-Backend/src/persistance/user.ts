import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: Number

    @Column({
        length:100,
    })
    name!: String

    @Column({
        length:100,
    })
    email!: String

    @Column({
        length:100,
    })
    password!: String
}