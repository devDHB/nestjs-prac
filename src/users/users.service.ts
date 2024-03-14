import { UsersRepository } from './users.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRequestDto } from './dto/users.request.dto';
// import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
// import { User } from './users.schema';
// import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async signUp(body: UserRequestDto) {
    const { email, name, password } = body;
    const isUserExist = await this.usersRepository.existsByEmail(email);

    if (isUserExist) {
      throw new UnauthorizedException(
        '해당하는 사용자가 이미 존재함(이메일 중복)',
      );
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return user.readOnlyData;
  }
}
