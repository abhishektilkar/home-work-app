import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TwilioService } from './twilio/twilio.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.AUTH_SECRET,
      signOptions: { expiresIn: '11160s' },
    })
  ],
  providers: [AuthService, TwilioService],
  controllers: [AuthController]
})
export class AuthModule {}
