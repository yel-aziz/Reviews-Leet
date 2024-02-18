import { Module } from '@nestjs/common';
import { connectController } from './connectController';
import { connectService } from './connectService';
import { PassportModule } from '@nestjs/passport';
import { FortyTwoStrategy } from './auth/42.strategy';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwtstrategy/jwtstrategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'bloto', // replace with your actual JWT secret
    }),
  ],
  controllers: [connectController],
  providers: [connectService, ConfigService, FortyTwoStrategy,JwtStrategy],
})
export class connectmodule {}
