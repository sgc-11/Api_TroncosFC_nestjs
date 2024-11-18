// src/modules/game/game.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GameService } from './games.service';
import { CreateGameDto, UpdateGameDto } from './CreateGame.dto';
import { Game } from './games.entity';

@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  async create(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.gameService.createGame(createGameDto);
  }

  @Get()
  async findAll(): Promise<Game[]> {
    return this.gameService.getAllGames();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Game> {
    return this.gameService.getGameById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateGameDto: UpdateGameDto,
  ): Promise<Game> {
    return this.gameService.updateGame(id, updateGameDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.gameService.deleteGame(id);
  }
}
