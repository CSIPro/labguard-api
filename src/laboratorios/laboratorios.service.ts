import { Injectable } from '@nestjs/common';
import { CreateLaboratorioDto } from './dto/create-laboratorio.dto';
import { UpdateLaboratorioDto } from './dto/update-laboratorio.dto';

@Injectable()
export class LaboratoriosService {
  create(createLaboratorioDto: CreateLaboratorioDto) {
    return 'This action adds a new laboratorio';
  }

  findAll() {
    return `This action returns all laboratorios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} laboratorio`;
  }

  update(id: number, updateLaboratorioDto: UpdateLaboratorioDto) {
    return `This action updates a #${id} laboratorio`;
  }

  remove(id: number) {
    return `This action removes a #${id} laboratorio`;
  }
}
