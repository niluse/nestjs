import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity()
export class PropertyFeature{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    bedrooms:number
    
    @Column()
    bathroooms:number
    
    @Column()
    parkingSpot:number
    
    @Column()
    area:number

    
    @Column()
    hasBalcony:boolean
    
    @Column()
    hasGardenYard:boolean
    
    @Column()
    hasSwimmingPool:boolean


    @OneToOne(()=>Property,(Property)=>Property.propertyFeature)
    @JoinColumn()
    property:Property
}