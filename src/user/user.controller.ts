import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
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
        @Param() param: { userId: number }
    ) {
        return this.UserService.update(updateUserDTO, param)
    }

    @Get('/:userId')
    getUser(@Param() param: { userId: number }) {
        return this.UserService.getUser(param);
    }

    @Delete('/:userId')
    delete(@Param() param: { userId: number }) {
        return this.UserService.delete(param);
    }
}
