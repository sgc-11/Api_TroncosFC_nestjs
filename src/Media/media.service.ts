// services/MediaService.ts
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Media } from "./media.entity";
import { CreateMediaDto, UpdateMediaDto } from "./CreateMedia.dto";
import { Player } from "src/players/players.entity";
import { Merch } from "src/Merch/Merch.entity";
import { Game } from "src/games/games.entity";

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    @InjectRepository(Merch)
    private readonly merchRepository: Repository<Merch>,
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>
  ) {}

  async createMedia(createMediaDto: CreateMediaDto): Promise<Media> {
    const media = this.mediaRepository.create(createMediaDto);

    if (createMediaDto.playerId) {
      media.player = await this.playerRepository.findOneBy({ id: createMediaDto.playerId });
    } else if (createMediaDto.merchId) {
      media.merch = await this.merchRepository.findOneBy({ id: createMediaDto.merchId });
    } else if (createMediaDto.gameId) {
      media.game = await this.gameRepository.findOneBy({ id: createMediaDto.gameId });
    }

    return this.mediaRepository.save(media);
  }

  async getAllMedia(): Promise<Media[]> {
    return this.mediaRepository.find();
  }

  async getMediaById(id: number): Promise<Media> {
    const media = await this.mediaRepository.findOne({ where: { id } });
    if (!media) throw new NotFoundException(`Media with ID ${id} not found`);
    return media;
  }

  async updateMedia(id: number, updateMediaDto: UpdateMediaDto): Promise<Media> {
    const media = await this.getMediaById(id);
    Object.assign(media, updateMediaDto);
    return this.mediaRepository.save(media);
  }

  async deleteMedia(id: number): Promise<void> {
    const result = await this.mediaRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Media with ID ${id} not found`);
  }
}
