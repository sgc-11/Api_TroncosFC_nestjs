// controllers/PlayerController.ts
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { PlayersService } from "./players.service";
import { CreatePlayerDto, UpdatePlayerDto } from "./CreatePlayer.dto";
import { Player } from "./players.entity";

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async createPlayer(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.playersService.createPlayer(createPlayerDto);
  }

  @Get()
  async getAllPlayers(): Promise<Player[]> {
    return this.playersService.getAllPlayers();
  }

  @Get(':id')
  async getPlayerById(@Param('id') id: number): Promise<Player> {
    return this.playersService.getPlayerById(id);
  }

  @Put(':id')
  async updatePlayer(
    @Param('id') id: number,
    @Body() updatePlayerDto: UpdatePlayerDto
  ): Promise<Player> {
    return this.playersService.updatePlayer(id, updatePlayerDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // Devuelve 204 si se elimina correctamente
  async deletePlayer(@Param('id') id: number): Promise<void> {
    await this.playersService.deletePlayer(id);
  }
}
