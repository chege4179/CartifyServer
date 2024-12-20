import {Column, Entity, ObjectId, ObjectIdColumn} from "typeorm";

@Entity({
    name: 'products',
})
export class ProductEntity {

    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    name:string
    @Column()
    price:number

    @Column()
    description:string

    @Column()
    category:string

    //
    // images:{
    //     type:Array,
    //     required:true,
    //     default:[]
    // },

    @Column()
    onOffer:boolean

    @Column()
    offerPrice:number

    @Column()
    offerDuration:number

    @Column()
    rating:number


}