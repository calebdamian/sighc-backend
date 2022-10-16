import { Module } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from './schemas/user.schema';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema }
    ]) //esta es la definición del modelo USER con el uso de Mongoose
  ],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService] //permite utilizar el servicio en otro modulo
})
export class UsersModule { }
