import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) 
  private UserRepo:Repository<User> 
){}

  async create(createUserDto: CreateUserDto) {
    const user = await this.UserRepo.create(createUserDto)  //!! once bunu yapip sonraki satirda save e atamazsan calismaz !!
    return await this.UserRepo.save(user);
  }

  async findByEmail(email:string){
    return await this.UserRepo.findOne({
      where:{
        email,
      }
    })
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return this.UserRepo.findOne({
      where:{id},
      select:['firstName','lastName','avatarUrl'],
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
