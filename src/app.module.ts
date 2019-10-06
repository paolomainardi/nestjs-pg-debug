import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'nest',
      password: 'nest',
      database: 'nest',
      entities: [join('/usr/src/app/dist', '**/**.entity{.ts,.js}')],
      synchronize: true,
      logging: true,
    }),
    HeroesModule,
  ],
})
export class AppModule {}
