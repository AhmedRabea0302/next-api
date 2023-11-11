import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { updateUserDTO } from "./dto/update-user.dto";
import { create } from "domain";
import { createUserDTO } from "./dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(private UserService: UserService) {}
    @Get()
    getUSers() {
        return this.UserService.get();
    } 

    @Post()
    store(@Body() createUserDTO: createUserDTO) {
        return this.UserService.create(createUserDTO)
    }

    @Patch('/:userId')
    update(
        @Body() updateUserDTO: updateUserDTO, 
        @Param('userId', ParseIntPipe) userId: number
    ) {
        return this.UserService.update(updateUserDTO, userId)
    }

    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.UserService.getUser(userId);
    }

    @Delete('/:userId')
    delete(@Param('userId', ParseIntPipe) userId: number) {
        return this.UserService.delete(userId);
    }
}
