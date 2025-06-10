import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getLogin() {
        return { message: 'login' };
    }

    @Post()
    login(@Body() body: { phoneNumber: string }) {
        return this.authService.sendOtp(body.phoneNumber);
    }

    @Post('verify')
    async verify(@Body() body: { phoneNumber: string, code: string, password: string }) {
        const { phoneNumber, code, password } = body;
        return this.authService.verifyOtpAndSendToken(phoneNumber, code, password);
    }
}
