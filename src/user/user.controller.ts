import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('user')
export class UserController {
    @Get()
    getUser() {
        return 'I am from user Controller';
    }

    @Post()
    store(@Req() req: Request) {
        console.log(req.body);
    }

    @Get('/:userId')
    getUserById(@Param() params: {userId: number}) {
        return `I am a user: ${ params.userId }`;
    }
}
