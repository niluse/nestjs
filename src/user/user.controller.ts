import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)  //* this activates the jwt strategy then it looks for the jwt token inside the header of the request then validates the jwt
                            //*  if it's valid and it decodes the jwt and sends the decoded payload to the validate function of the jwt Strategy that we hav written 
                            //* from there it returns an object that contains the id of the user then it gets appended to the request object under the name user 
                            //* from there we get to access it by saying req.user.id
  @Get("profile")
  getProfile(@Req() req){
    return this.userService.findOne(req.user.id)
  }
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
