import { Injectable } from '@nestjs/common';
import { TwilioService } from './twilio/twilio.service';

@Injectable()
export class AuthService {
    constructor(private twilioService: TwilioService) {}

    sendOtp(phoneNumber: string) {
        return this.twilioService.sendOtp(phoneNumber);
    }

    verifyOtp(phoneNumber: string, code: string) {
        return this.twilioService.verifyOtp(phoneNumber, code);
    }
}
