import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Room, JoinColumn } from './Room'

@Entity('videos')
export class Video {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: 'text', nullable: false })
  title: string

  @Column({ type: 'text', nullable: false })
  url: string

  @ManyToOne(() => Room, room => room.videos)   
  @JoinColumn({ name: 'name_id' }) 
  room: Room
}