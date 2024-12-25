import {Column, Entity, ObjectId, ObjectIdColumn} from "typeorm";


@Entity({
    name: 'orders',
})
export class OrderEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    name: string

    @Column()
    userId: string

    @Column()
    email: string

    @Column()
    phoneNumber: string

    @Column()
    total: number

    @Column()
    isPaid: boolean

    @Column()
    isDelivered: boolean

    @Column()
    address: string

    @Column()
    orderedOn:string

    @Column()
    orderedAt:string

    @Column((type) => OrderProduct)
    products: OrderProduct[]

}


export class OrderProduct {
    @Column()
    id: string

    @Column()
    imageUrl: string

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    quantity: number


}