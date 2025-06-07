import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    // @Get()
    // login() {
    //     return 'login';
    // }

    @Post()
    login(@Body() phoneNumber: string) {
        console.log(phoneNumber);
    }

    @Post('verify')
    verify(@Body() phoneNumber: string, code: string) {
        console.log(phoneNumber, code);
    }
}
