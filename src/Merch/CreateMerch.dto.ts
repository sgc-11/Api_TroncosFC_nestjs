import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateMerchDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    type: string;
}

export class UpdateMerchDto extends CreateMerchDto {}