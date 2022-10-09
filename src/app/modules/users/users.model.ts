import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  avatar: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hash() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @BeforeInsert()
  indentify() {
    this.id = uuid();
  }
}
