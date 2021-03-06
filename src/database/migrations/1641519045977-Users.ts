import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1641519045977 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
            isUnique: true
          },
          {
            name: "api_key",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "api_secret",
            type: "varchar",
            isNullable: true
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users")
  }
}
