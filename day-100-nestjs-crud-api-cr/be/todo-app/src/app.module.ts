import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule,MongooseModule.forRoot("mongodb+srv://budaa0215:F4dcf9120177@samurai0215.1e9fs28.mongodb.net/test")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
