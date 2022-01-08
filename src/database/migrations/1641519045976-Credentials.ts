import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Credentials1641519045976 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "credentials",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: true,
          },
          {
            name: "key",
            type: "varchar",
            isUnique: true,
            isNullable: true
          },
          {
            name: "secret",
            type: "varchar",
            isUnique: true,
            isNullable: true
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
    await queryRunner.dropTable("credentials")
  }

}
