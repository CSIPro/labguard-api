import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reporte } from './entities/reporte.entity';
import { Repository } from 'typeorm';
import { Laboratorio } from 'src/laboratorio/entities/laboratorio.entity';

@Injectable()
export class ReporteService {
  constructor(
    @InjectRepository(Reporte)
    private reportsRepository: Repository<Reporte>,
    @InjectRepository(Laboratorio)
    private labsRepository: Repository<Laboratorio>
  ) {}

  async create(createReportesdto: CreateReporteDto) {
    try {
      const laboratorio = await this.validateLaboratorio(createReportesdto.laboratorio);

      const reporte = this.reportsRepository.create({
        ...createReportesdto,
        laboratorio: laboratorio,
      });

      return await this.reportsRepository.save(reporte);
    } catch (error) {
      // Manejo de errores - puedes lanzar una excepción específica o devolver un mensaje
      throw new Error(`Error al crear el reporte: ${error.message}`);
    }
  }

  findAll() {
    return this.reportsRepository.find();
  }

  findOne(id: number) {
    return this.reportsRepository.findOneBy({ id });
  }

  async update(id: number, updateReporte: UpdateReporteDto) {
    await this.findOne(id);
    return await this.reportsRepository.update(id, {
      ...updateReporte,
      laboratorio: updateReporte.laboratorio
        ? await this.validateLaboratorio(updateReporte.laboratorio)
        : undefined,
    });
  }

  remove(id: number) {
    return this.reportsRepository.softDelete(id);
  }

  private async validateLaboratorio(laboratorioId: number) {
    // Cambiar la búsqueda para usar laboratorioId en lugar de nombre
    const laboratorioEntity = await this.labsRepository.findOneBy({ id: laboratorioId });

    if (!laboratorioEntity) {
      throw new BadRequestException('Laboratorio no encontrado');
    }

    return laboratorioEntity;
  }
}
