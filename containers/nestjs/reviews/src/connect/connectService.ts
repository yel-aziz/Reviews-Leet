import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { JwtService } from '@nestjs/jwt';

@Injectable({})
export class connectService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async generateToken(userId: number): Promise<string> {
    const payload = { sub: userId };
    return this.jwtService.signAsync(payload);
  }
  async CreatUser(obj: any) {
    try {
      // Check if the user already exists
      const existingUser = await this.prisma.user.findUnique({
        where: { email: obj.email },
      });
      //console.log('from user ', existingUser.id);

      if (!existingUser) {
        console.log('user already exist');
        const newUser = await this.prisma.user.create({
          data: {
            email: obj.email,
            login: obj.username,
            avatar: obj.avatar,
            // other user data...
          },
        });
        return newUser.id;
      }
      return existingUser.id;
    } catch (error) {
      throw error;
    }
  }

  async getUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });
    return user;
  }

  async creatCompany(obj: any, user_id: number) {
    const company = await this.prisma.company.create({
      data: {
        name: obj.companyName,
        description: obj.feedback,
        creatorId: user_id,
        linkding: obj.linkedinUrl,
        YourStatus: obj.jobPosition,
        city: obj.moroccanCities,
        Positon: obj.workLocation,
        Conatract: obj.contracttype,
        progress: obj.situation ? 'In Progress' : 'Finished',
        emojistatus: obj.emojistatus,
      },
    });

    return company;
  }

  async updateUser(userid: any, imagePath: any) {
    const user = await this.prisma.company.update({
      where: { id: userid },
      data: { avatar: imagePath },
    });
    return user;
  }

  async creatComment(@Body() data: any, obj: any, companyId: number) {
    await this.prisma.comment.create({
      data: {
        text: data,
        userId: obj,
        companyId: companyId,
      },
    });
  }

  async getCompanys() {
    try {
      const allCompanies = await this.prisma.company.findMany({
        orderBy: {
          createdAt: 'desc', // Assuming you have a createdAt field in your Company model
        },
      });
      return allCompanies;
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  }

  async getCompany(companyId: number) {
    try {
      const allCompanies = await this.prisma.company.findUnique({
        where: { id: companyId },
      });
      return allCompanies;
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  }

  async getComments(commpanyId: number) {
    try {
      const company = await this.prisma.company.findUnique({
        where: { id: commpanyId },

        include: {
          comments: {
            include: {
              user: true, // Include the related user for each comment
            },
            orderBy: {
              createdAt: 'desc', // Order comments by createdAt in descending order
            },
          },
        },
      });

      // Access the related comments
      const comments = company;

      // console.log('Comments related to the company:', comments);
      return comments;
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }
}
