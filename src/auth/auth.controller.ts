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
    login(@Body() body: { phoneNumber: string }) {
        return this.authService.sendOtp(body.phoneNumber);
    }

    @Post('verify')
    verify(@Body() body: { phoneNumber: string, code: string }) {
        const { phoneNumber, code } = body;
        return this.authService.verifyOtp(phoneNumber, code);
    }
}
