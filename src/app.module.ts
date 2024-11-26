import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReportesModule } from "./reportes/reportes.module";
import { LaboratoriosModule } from './laboratorios/laboratorios.module';

@Module({
  imports: [
    ReportesModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "root",
      password: "root",
      database: "labguard",
      autoLoadEntities: true,
      synchronize: true,
    }),
    LaboratoriosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}