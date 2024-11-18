import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Media } from "src/Media/media.entity";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rivalTeam: string;

    @Column()
    date: Date;

    @OneToMany(() => Media, media => media.game)
    media: Media[];
}