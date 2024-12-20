import {Column, Entity, ObjectId, ObjectIdColumn} from "typeorm";


@Entity({
    name: 'admins',
})
export class AdminEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    phoneNumber: string

    @Column()
    password: string

    @Column()
    accountType: string
}