import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './players.entity';
import { CreatePlayerDto, UpdatePlayerDto } from './CreatePlayer.dto';

@Injectable()
export class PlayersService {
    constructor(
        @InjectRepository(Player) private playersRepository: Repository<Player>) {}

    // Crear un nuevo jugador
  async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = this.playersRepository.create(createPlayerDto);
    return this.playersRepository.save(player);
  }

  // Obtener todos los jugadores
  async getAllPlayers(): Promise<Player[]> {
    return this.playersRepository.find();
  }

  // Obtener un jugador por ID
  async getPlayerById(id: number): Promise<Player | null> {
    return this.playersRepository.findOne({ where: { id } });
  }

  // Actualizar un jugador parcialmente
  async updatePlayer(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player | null> {
    const player = await this.getPlayerById(id);
    if (!player) throw new NotFoundException(`Player with id #${id} not found`);

    // Actualiza solo los campos presentes en el DTO
    Object.assign(player, updatePlayerDto);
    return this.playersRepository.save(player);
  }

  // Eliminar un jugador por ID
  async deletePlayer(id: number): Promise<boolean> {
    const result = await this.playersRepository.delete(id);
    return result.affected !== 0;
  }

}
