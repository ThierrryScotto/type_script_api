import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity('rooms')
export class Romm {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: 'text' })
  name: string

  @OneToMany(() => Video, video => video.room)
  videos: Video[]
}