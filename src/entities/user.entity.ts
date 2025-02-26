import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string

    @Column()
    lastName:string

    @Column()
    email:string

    @Column()
    avatarUrl:string


    @CreateDateColumn()
    createdAt:Date

    // @OneToMany(()=>Target type,to which it's going to connect )
    //!! Parent entity has OneToMany
    @OneToMany(()=>Property,(property)=>property.user)
    properties:Property[]

    @ManyToMany(()=>Property,(property)=>property.likedBy)
    @JoinTable({name:"user_liked_properties"})
    likedProperties:Property[]
}