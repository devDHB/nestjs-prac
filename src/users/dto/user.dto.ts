import { ApiProperty, PickType } from '@nestjs/swagger';
import { User } from '../users.schema';

export class ReadOnlyUserDto extends PickType(User, [
  'email',
  'name',
] as const) {
  @ApiProperty({
    example: '333asdasd33fasdfas',
    description: 'id',
  })
  id: string;
}
