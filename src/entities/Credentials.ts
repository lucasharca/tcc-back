import {Entity, Column, CreateDateColumn, PrimaryColumn} from 'typeorm';
import { v4 as uuid } from 'uuid'

@Entity("credentials")
export class Credential {
  
  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }

  @PrimaryColumn()
  id: string;

  @Column()
  key: string;
  
  @Column()
  secret: string;
  
  @CreateDateColumn()
  created_at: Date;

}