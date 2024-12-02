import { Injectable } from '@nestjs/common';
import { CreateLaboratorioDto } from './dto/create-laboratorio.dto';
import { UpdateLaboratorioDto } from './dto/update-laboratorio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Laboratorio } from './entities/laboratorio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LaboratorioService {
  constructor(
    @InjectRepository(Laboratorio)
    private labsRepository: Repository<Laboratorio>,
  ){}

  async create(createLaboratorioDto: CreateLaboratorioDto) {
    const lab = this.labsRepository.create(createLaboratorioDto);
    return await this.labsRepository.save(lab);
  }

  findAll() {
    return this.labsRepository.find()
  }

  findOne(id: number) {
    return this.labsRepository.findOneBy({id})  
  }

 async update(id: number, updateLaboratorioDto: UpdateLaboratorioDto) {
    return this.labsRepository.update(id, updateLaboratorioDto);
  }

  remove(id: number) {
    return this.labsRepository.delete(id)
  }
}
