import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportesModule } from './reportes/reportes.module';

@Module({
  imports: [ReportesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
