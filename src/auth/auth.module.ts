import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TwilioService } from './twilio/twilio.service';

@Module({
  providers: [AuthService, TwilioService],
  controllers: [AuthController]
})
export class AuthModule {}
