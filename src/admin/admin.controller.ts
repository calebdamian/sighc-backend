import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UseGuards, UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('register')
  public async create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin')
  findAll() {
    return this.adminService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get('admin/:nombre_usuario')
  findByUsername(@Param('nombre_usuario') nombre_usuario: string) {
    return this.adminService.findByUsername(nombre_usuario);
  }
  @UseGuards(JwtAuthGuard)
  @Patch('admin/:id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }
}