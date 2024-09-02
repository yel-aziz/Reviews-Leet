import { Strategy } from 'passport-42';
import { PassportStrategy } from '@nestjs/passport';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, '42') {
  constructor(config: ConfigService) {
    super({
      clientID:
        'u-s4t2ud-427f74fdc2693e6703ff67b51cfc72cfcc5d2d27b75604fa8aae55f0a816ccb4',
      clientSecret:
        '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',
      callbackURL: 'http://localhost:8000/42/oauth',
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    done: Function,
  ): Promise<any> {
    try {
      accessToken;
      refreshToken;
      const user = {
        email: profile.emails[0].value,
        avatar: profile._json.image.link,
        username: profile.username,
      };
      if (user == undefined || user == null) {
        throw new BadRequestException();
      }
      done(null, user);
    } catch (error) {
      throw new BadRequestException({
        statusCode: 403,
        message: 'error login Or sign up try again',
      });
    }
  }
}
