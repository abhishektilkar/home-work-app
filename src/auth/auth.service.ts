import { Injectable } from '@nestjs/common';
import { TwilioService } from './twilio/twilio.service';
import { randomUUID } from 'crypto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private twilioService: TwilioService, private jwtService: JwtService) {}

    sendOtp(phoneNumber: string) {
        return this.twilioService.sendOtp(phoneNumber);
    }

    async verifyOtpAndSendToken(phoneNumber: string, code: string, password: string) {
        const verified = await this.twilioService.verifyOtp(phoneNumber, code);
        if (!verified) throw new Error('Please enter valid otp');
        const userId = randomUUID();
        // TODO: create user in db and also set password
        const payload = { userId: userId, phoneNumber };
        const accessToken = this.jwtService.signAsync(payload);
        return { accessToken };
    }

    async verifyToken(accessToken: string) {
        
    }
}
