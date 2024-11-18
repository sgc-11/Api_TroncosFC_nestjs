// controllers/MerchController.ts
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { MerchService } from "./merch.service";
import { Merch } from "./Merch.entity";
import { CreateMerchDto, UpdateMerchDto } from "./CreateMerch.dto";

@Controller('merch')
export class MerchController {
  constructor(private readonly merchService: MerchService) {}

  @Post()
  async createMerch(@Body() createMerchDto: CreateMerchDto): Promise<Merch> {
    return this.merchService.createMerch(createMerchDto);
  }

  @Get()
  async getAllMerch(): Promise<Merch[]> {
    return this.merchService.getAllMerch();
  }

  @Get(':id')
  async getMerchById(@Param('id') id: number): Promise<Merch> {
    return this.merchService.getMerchById(id);
  }

  @Put(':id')
  async updateMerch(
    @Param('id') id: number,
    @Body() updateMerchDto: UpdateMerchDto
  ): Promise<Merch> {
    return this.merchService.updateMerch(id, updateMerchDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // Devuelve 204 si se elimina correctamente
  async deleteMerch(@Param('id') id: number): Promise<void> {
    await this.merchService.deleteMerch(id);
  }
}
