import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './media.entity';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { Game } from 'src/games/games.entity';
import { Player } from 'src/players/players.entity';
import { Merch } from 'src/Merch/Merch.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Media, Player, Merch, Game]),
    ],
    providers: [MediaService],
    controllers: [MediaController],
})
export class MediaModule {}
