import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Twilio } from "twilio";

@Injectable()
export class TwilioService {
    private client: Twilio;
    private serviceId: string;

    constructor() {
        this.client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        this.serviceId = process.env.TWILIO_VERIFY_SERVICE_SID || '';
    }

    async sendOtp(phoneNumber: string) {
        try {
            return await this.client.verify.v2.services(this.serviceId).verifications.create({ to: phoneNumber, channel: 'sms' });
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async verifyOtp(phoneNumber: string, code: string) {
        try {
            const result = await this.client.verify.v2.services(this.serviceId).verificationChecks.create({ to: phoneNumber, code });
            return result.status === 'approved';
        } catch(e) {
            console.log(e);
            return e;
        }
    }

}