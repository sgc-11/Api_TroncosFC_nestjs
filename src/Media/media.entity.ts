// entities/Media.ts
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Player } from "src/players/players.entity";
import { Merch } from "src/Merch/Merch.entity";
import { Game } from "src/games/games.entity";

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  date: Date;

  @ManyToOne(() => Player, player => player.media, { nullable: true })
  player?: Player;

  @ManyToOne(() => Merch, merch => merch.media, { nullable: true })
  merch?: Merch;

  @ManyToOne(() => Game, game => game.media, { nullable: true })
  game?: Game;
}
