import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Media } from "src/Media/media.entity";

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    lastName: string;
    @Column()
    birthdate: Date;
    @Column()
    shirtNumber: number;
    @Column()
    height: number;
    @OneToMany(() => Media, media => media.player)
    media: Media[];
}