import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportesService } from './reportes.service';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';

@Controller('reportes')
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) {}

  @Post()
  create(@Body() createReporteDto: CreateReporteDto) {
    return this.reportesService.create(createReporteDto);
  }

  @Get()
  findAll() {
    return this.reportesService.findAll();
  }

  @Get('id')
  findOne(@Param('id') id: number) {
    return this.reportesService.findOne(id);
  }

  @Patch('id')
  update(@Param('id') id: number, @Body() updateReporteDto: UpdateReporteDto) {
    return this.reportesService.update(id, updateReporteDto);
  }

  @Delete('id')
  remove(@Param('id') id: number) {
    return this.reportesService.remove(id);
  }
}
