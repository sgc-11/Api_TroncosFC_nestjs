// dto/CreateMediaDto.ts
import { IsDate, IsOptional, IsString, IsUrl } from "class-validator";
import { PartialType } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";


export class CreateMediaDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsUrl()
  url: string;

  @ApiProperty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  date: Date;

  @ApiProperty()
  @IsOptional()
  playerId?: number;

  @ApiProperty()
  @IsOptional()
  merchId?: number;

  @ApiProperty()
  @IsOptional()
  gameId?: number;
}

// dto/UpdateMediaDto.ts
export class UpdateMediaDto extends PartialType(CreateMediaDto) {}
