import { MigrationInterface, QueryRunner } from 'typeorm';

export class Labguard1742582656680 implements MigrationInterface {
  name = 'Labguard1742582656680';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(500) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "rol" character varying NOT NULL DEFAULT 'user', "deletedAt" TIMESTAMP, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "laboratorio" ("id" SERIAL NOT NULL, "clave" character varying NOT NULL, "nombre" character varying NOT NULL, "creado" TIMESTAMP NOT NULL DEFAULT now(), "eliminado" TIMESTAMP, "modificado" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0da9d571d9f912a3329aa4bdbda" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "reporte" ("id" SERIAL NOT NULL, "tipoMant" character varying NOT NULL, "estado" character varying NOT NULL, "objeto" character varying NOT NULL, "especificacion" character varying, "descripcion" text NOT NULL, "creado" TIMESTAMP NOT NULL DEFAULT now(), "eliminado" TIMESTAMP, "modificado" TIMESTAMP NOT NULL DEFAULT now(), "laboratorioId" integer, "usuarioMantId" integer, CONSTRAINT "PK_8ff73251b8d9b8c8c6acf1deb46" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "reporte" ADD CONSTRAINT "FK_550e6710f77cbe0b7f6aae2e5d3" FOREIGN KEY ("laboratorioId") REFERENCES "laboratorio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "reporte" ADD CONSTRAINT "FK_d768b2866a4e465e22f4880e407" FOREIGN KEY ("usuarioMantId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reporte" DROP CONSTRAINT "FK_d768b2866a4e465e22f4880e407"`,
    );
    await queryRunner.query(
      `ALTER TABLE "reporte" DROP CONSTRAINT "FK_550e6710f77cbe0b7f6aae2e5d3"`,
    );
    await queryRunner.query(`DROP TABLE "reporte"`);
    await queryRunner.query(`DROP TABLE "laboratorio"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
