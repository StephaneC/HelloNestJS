import { Controller, Req, Res, Get, Post, Put, Body, HttpStatus, UseInterceptors } from '@nestjs/common';
import { UserCreateDto } from '../dto/UserCreate.dto';
import { UserLoginDto } from '../dto/UserLogin.dto';


@Controller('users')
export class UsersController {

  users : UserCreateDto[] = [];

  @Put()
  create(@Res() res, @Body() userCreateDto: UserCreateDto) {
    console.log('creating user ' + JSON.stringify(userCreateDto));
    let exist: boolean = false;
    for(var i=0; i<this.users.length; i++){
      if(this.users[i].username === userCreateDto.username){
        exist = true;
      }
    }
    if(exist){
      res.status(HttpStatus.CONFLICT).send();
      return;
    }
    this.users.push(userCreateDto);
    res.status(HttpStatus.CREATED).send();
  }

  @Post()
  sign(@Res() res, @Body() userLogin: UserLoginDto) {
    console.log('sign user ' + JSON.stringify(userLogin));
    if(!userLogin.username || !userLogin.pwd){
      res.status(HttpStatus.BAD_REQUEST).send();
      return;
    }

    for(var i=0; i<this.users.length; i++){
      if(this.users[i].username === userLogin.username){
        //user found, let's check pwd
        if(this.users[i].pwd === userLogin.pwd){
          //user found, let's check pwd
          res.status(HttpStatus.OK).send({
            token: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
            })
          });
          return;
        }
      }
    }

    res.status(HttpStatus.FORBIDDEN).send();
  }

  @Get()
  async findAll(@Req() request): Promise<any[]> {
    return [];
  }

}
