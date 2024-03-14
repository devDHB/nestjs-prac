import { AuthService } from './../auth/auth.service';
import {
  Controller,
  Get,
  Post,
  // Put,
  // Patch,
  // Delete,
  // Param,
  // ParseIntPipe,
  UseFilters,
  UseInterceptors,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
// import { PositiveIntPipe } from 'src/common/pipes/positiveint.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { UserRequestDto } from './dto/users.request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  // users
  @ApiOperation({ summary: '현재 유저 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getUser() {
    return '유저 불러오기';
  }

  @ApiResponse({
    status: 500,
    description: '서버 에러',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: UserRequestDto) {
    return await this.usersService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut() {
    return '로그아웃';
  }

  @ApiOperation({ summary: '사진 업로드' })
  @Post('upload/users')
  uploadCatImg() {
    return '업로드 이미지';
  }
}
