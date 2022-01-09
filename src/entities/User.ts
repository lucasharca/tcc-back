import {Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
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

  @Column({ nullable: true})
  api_key: string;

  @Column({ nullable: true})
  api_secret: string;
  
  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;
  
}