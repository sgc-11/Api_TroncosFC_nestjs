import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { MerchModule } from './merch/merch.module';
import { GamesModule } from './games/games.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PlayersModule,
    MerchModule,
    GamesModule,
    DatabaseModule,
    MediaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
