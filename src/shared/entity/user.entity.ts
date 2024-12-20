import {Column, Entity, ObjectId, ObjectIdColumn} from 'typeorm';

@Entity({
    name: 'users',
})
export class UserEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    fullname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phoneNumber: string;

    @Column()
    address: string;

    @Column()
    isVerified: boolean;
}