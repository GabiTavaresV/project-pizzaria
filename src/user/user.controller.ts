import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  async createUser(@Body() data: any) {
    return this.userService.createUser(data);
  }
}
