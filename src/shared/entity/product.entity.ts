import {Column, Entity, ObjectId, ObjectIdColumn} from "typeorm";

@Entity({
    name: 'products',
})
export class ProductEntity {

    @ObjectIdColumn({ name:"id" })
    _id: ObjectId;

    @Column()
    name:string
    @Column()
    price:number

    @Column()
    description:string

    @Column()
    category:string

    @Column((type) => Image)
    images: Image[]

    @Column()
    onOffer:boolean

    @Column()
    offerPrice:number

    @Column()
    offerDuration:number

    @Column()
    rating:number
}

export class Image {
    @Column()
    url: string

    @Column()
    id: string


}