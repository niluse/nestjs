import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";
import * as bcrypt from 'bcrypt'
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

    @Column({ nullable: true }) 
    avatarUrl:string


    @CreateDateColumn()
    createdAt:Date

    @Column({default:'password123'})
    password:string

    // @OneToMany(()=>Target type,to which it's going to connect )
    //!! Parent entity has OneToMany
    @OneToMany(()=>Property,(property)=>property.user)
    properties:Property[]

    @ManyToMany(()=>Property,(property)=>property.likedBy)
    @JoinTable({name:"user_liked_properties"})
    likedProperties:Property[]

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password,10)
    }
}