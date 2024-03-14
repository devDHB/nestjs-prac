Nest Js 연습
Nest Js 프레임워크를 사용하여 백엔드 API 구현 및 기능 연습

# 데이터베이스

몽고db (mongoose) 사용
npm i @nestjs/mongoose mongoose
npm i --save @nestjs/config (환경 변수 설정 .env 사용)

# 라이브러리

1. Class validator
   npm i --save class-validator class-transformer
   -> 스키마 검증

2. bcrypt
   npm i bcrypt
   npm i -D @types/bcrypt
   -> 비밀번호 암호화

3. swagger
   npm install --save @nestjs/swagger swagger-ui-express

http://localhost:8000/docs
-> api 확인하기

4. jwt passport
   npm i @nestjs/passport passport
   npm install --save @nestjs/jwt passport-jwt

# 구조

# application

users

# modules

users
auth

# controllers

users

# Services

users
auth

# middleware

logger
-> 로그 출력

# pipes

positiveint.pipe
-> param을 양의 정수형으로 변환

# interceptors

SuccesInterceptor
-> api 로드가 성공했을때 응답

기능

구현완료

1. 회원가입
2. 로그인(토큰 생성)

미구현

1. 유저정보 불러오기
2. 인증, 로그아웃
3. 결제 시스템

# COR문제 해결

(main.ts)
app.enableCors({
origin: true,
credentials: true,
});
추가하기
