import { Module } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { ReporteController } from './reporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reporte } from './entities/reporte.entity';
import { LaboratorioService } from 'src/laboratorio/laboratorio.service';
import { Laboratorio } from 'src/laboratorio/entities/laboratorio.entity';
import { LaboratorioModule } from 'src/laboratorio/laboratorio.module';

@Module({
  imports:[TypeOrmModule.forFeature([Reporte]), LaboratorioModule],
  controllers: [ReporteController],
  providers: [ReporteService, LaboratorioService],
})
export class ReporteModule {}
