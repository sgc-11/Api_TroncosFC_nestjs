import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";

export class CreateGameDto {
    @ApiProperty()
    @IsString()
    rivalTeam: string;
    @ApiProperty()
    @IsDate()
    date: Date;
}

export class UpdateGameDto extends CreateGameDto {}