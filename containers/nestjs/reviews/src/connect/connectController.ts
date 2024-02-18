import {
  Body,
  Controller,
  Get,
  Injectable,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { connectService } from './connectService';

import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from './jwtstrategy/jwtguard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('42')
@Injectable()
export class connectController {
  constructor(
    private readonly connect: connectService,
    private configs: ConfigService,
  ) {}

  @Get('oauth')
  @UseGuards(AuthGuard('42'))
  async fortyTwoOAuth(@Req() req: any, @Res() res: Response) {
    try {
      const data = req.user;
      const userId = await this.connect.CreatUser(data);

      const token = await this.connect.generateToken(userId);
      //res.cookie('token', token);
      res.cookie('token', token);

      res.redirect( 'http://localhost:3000/');
     
      res.status(200).send();

      

  // Send JSON response

      return token;
    } catch (error) {
      console.log('error catched', error);
    }
  }

  

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getUser(@Req() req: any) {
    return await this.connect.getUser(req.user.userId);

       
  }

  @Get('user')
  async getUserSpesific(@Query('id', ParseIntPipe) userid: number) {
    return await this.connect.getUser(userid);
  }
  @Post('companys')
  @UseGuards(JwtAuthGuard)
  async company(@Body() data: any, @Req() req: any) {
    const id = await this.connect.creatCompany(data, req.user.userId);
    if (data?.feedback?.length > 0) {
      await this.connect.creatComment(data.feedback, req.user.userId, id.id);
    }
    return id.id;
  }

  @Post('comments')
  @UseGuards(JwtAuthGuard)
  async comment(
    @Body() data: any,
    @Req() req: any,
    @Query('id', ParseIntPipe) companyId: number,
  ) {
console.log('comment', data.feedback)
    await this.connect.creatComment(data.feedback, req.user.userId, companyId);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const extension = extname(file.originalname);
          callback(null, `${uniqueSuffix}${extension}`);
        },
      }),
    }),
  )
  async uploadFile(
    @UploadedFile() file: any,
    @Query('id', ParseIntPipe) userid: number,
  ) {
    const imagePath = `http://localhost:8000/uploads/${file.filename}`;

    if (!file) {
      return { error: 'No file uploaded' };
    }
    this.connect.updateUser(userid, imagePath);
    return { imagePath };
  }

  @Get('getcompanys')
  //@UseGuards(JwtAuthGuard)
  async allCompanys() {
    const all = await this.connect.getCompanys();
    return all;
  }
  @Get('getcompany')
  //@UseGuards(JwtAuthGuard)
  async oneCompany(@Query('id', ParseIntPipe) companyId: number) {
    const all = await this.connect.getCompany(companyId);

    return all;
  }

  @Get('getComments')
  //@UseGuards(JwtAuthGuard)
  async getComments(
    companyid: number,
    @Query('id', ParseIntPipe) companyId: number,
  ) {
    const comments = await this.connect.getComments(companyId);
    return comments;
  }
}
