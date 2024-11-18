// services/MerchService.ts
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Merch } from "./Merch.entity";
import { CreateMerchDto, UpdateMerchDto } from "./CreateMerch.dto";

@Injectable()
export class MerchService {
  constructor(
    @InjectRepository(Merch)
    private readonly merchRepository: Repository<Merch>
  ) {}

  async createMerch(createMerchDto: CreateMerchDto): Promise<Merch> {
    const merch = this.merchRepository.create(createMerchDto);
    return this.merchRepository.save(merch);
  }

  async getAllMerch(): Promise<Merch[]> {
    return this.merchRepository.find();
  }

  async getMerchById(id: number): Promise<Merch> {
    const merch = await this.merchRepository.findOne({ where: { id } });
    if (!merch) {
      throw new NotFoundException(`Merch with ID ${id} not found`);
    }
    return merch;
  }

  async updateMerch(id: number, updateMerchDto: UpdateMerchDto): Promise<Merch> {
    const merch = await this.getMerchById(id);
    Object.assign(merch, updateMerchDto);
    return this.merchRepository.save(merch);
  }

  async deleteMerch(id: number): Promise<void> {
    const result = await this.merchRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Merch with ID ${id} not found`);
    }
  }
}
