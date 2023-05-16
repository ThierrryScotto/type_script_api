import {
	Column,
	Entity,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('rooms')
export class Romm {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: 'text' })
  name: string

  @OneToMany(() => Video, video => video.room)
  videos: Video[]
}