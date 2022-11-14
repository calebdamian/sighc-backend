import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(nombre_usuario: string, password: string): Promise<any> {
    const foundAdmin = await this.authService.validateUser(
      nombre_usuario,
      password,
    );
    if (!foundAdmin) {
      throw new UnauthorizedException();
    }
    return foundAdmin;
  }
}