import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 100,
    })
    name!: string

    @Column({
        length: 100,
    })
    email!: string

    @Column ({
        length: 100,
    })
    password!: string

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

}
