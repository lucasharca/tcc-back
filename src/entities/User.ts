import {Entity, Column, CreateDateColumn, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm';
import { Credential } from './Credentials';
import { v4 as uuid } from 'uuid'

@Entity("users")
export class User {
  
  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
  
  @Column()
  email: string;
  
  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;
  
}