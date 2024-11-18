import { Module } from '@nestjs/common';
import { MerchService } from './merch.service';
import { MerchController } from './merch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merch } from './Merch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Merch])],
  providers: [MerchService],
  controllers: [MerchController]
})
export class MerchModule {}
