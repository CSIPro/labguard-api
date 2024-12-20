import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LaboratorioModule } from './laboratorio/laboratorio.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',              
      host: 'localhost',             
      port: 5432,                    
      username: 'labguard_user',    
      password: 'Labguard@Admin',       
      database: 'labguard',          
      autoLoadEntities: true,        
      synchronize: true,            
    }),
    UsersModule,
    AuthModule,
    LaboratorioModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}