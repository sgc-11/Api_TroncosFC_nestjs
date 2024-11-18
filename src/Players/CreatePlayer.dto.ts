import { Transform } from "class-transformer";
import { IsDate, IsNumber, IsPositive, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePlayerDto {
    @ApiProperty()
    @IsString()
    name: string;
    @ApiProperty()
    @IsString()
    lastName: string;
    @ApiProperty()
    @Transform(({ value }) => new Date(value))
    @IsDate()
    birthdate: Date;
    @ApiProperty()
    @IsNumber()
    @IsPositive()
    shirtNumber: number;
    @ApiProperty()
    @IsNumber()
    @IsPositive()
    height: number;
}

export class UpdatePlayerDto extends CreatePlayerDto {}