import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Media } from "src/Media/media.entity";

@Entity()
export class Merch {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @OneToMany(() => Media, media => media.merch)
    media: Media[];

}