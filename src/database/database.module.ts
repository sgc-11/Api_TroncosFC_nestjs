import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Media } from 'src/Media/media.entity';
import { Player } from 'src/players/players.entity';
import { Merch } from 'src/Merch/Merch.entity';
import { Game } from 'src/games/games.entity';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('DB_HOST', 'localhost'),
                port: configService.get<number>('DB_PORT', 5432),
                username: configService.get<string>('DB_USERNAME', 'postgres'),
                password: configService.get<string>('DB_PASSWORD', 'postgres'),
                database: configService.get<string>('DB_DATABASE', 'mydatabase'),
                entities: [Media, Player, Merch, Game],
                autoLoadEntities: true, // Auto-detect entities in the project
                synchronize: true,      // Only for development. Set to false in production.
            }),
        }),
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}