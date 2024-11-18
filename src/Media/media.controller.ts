// controllers/MediaController.ts
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { MediaService } from "./media.service";
import { CreateMediaDto, UpdateMediaDto } from "./CreateMedia.dto";
import { Media } from "./media.entity";

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  async createMedia(@Body() createMediaDto: CreateMediaDto): Promise<Media> {
    return this.mediaService.createMedia(createMediaDto);
  }

  @Get()
  async getAllMedia(): Promise<Media[]> {
    return this.mediaService.getAllMedia();
  }

  @Get(':id')
  async getMediaById(@Param('id') id: number): Promise<Media> {
    return this.mediaService.getMediaById(id);
  }

  @Put(':id')
  async updateMedia(@Param('id') id: number, @Body() updateMediaDto: UpdateMediaDto): Promise<Media> {
    return this.mediaService.updateMedia(id, updateMediaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteMedia(@Param('id') id: number): Promise<void> {
    await this.mediaService.deleteMedia(id);
  }
}
