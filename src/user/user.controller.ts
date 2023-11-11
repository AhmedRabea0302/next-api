import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private UserService: UserService) {}
    @Get()
    getUSers() {
        return this.UserService.getUser();
    } 

    @Post()
    store(@Req() req: Request) {
        console.log(req.body);
    }

    @Patch('/:userId')
    update(@Req() req: Request) {
        return req.body;
    }

    @Delete('/:userId')
    delete() {
        return 'Deleted User';
    }
}
