import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LessonModule } from './lesson/lesson.module'; 
import { LessonResolver } from './lesson/lesson.resolver';
import {TypeOrmModule}from '@nestjs/typeorm'
import { Lesson } from './lesson/lesson.entity';

dotenv.config();

@Module({
    imports: [
     
      TypeOrmModule.forRoot({
        type:"mongodb",
        url:process.env.MONGODB_STRING,
        synchronize:true,
        useUnifiedTopology:true,
        entities:[
           Lesson
        ]
      }),

       GraphQLModule.forRoot<ApolloDriverConfig>({

      driver: ApolloDriver,
      autoSchemaFile: 'true',
    }),
    LessonModule,
  ],
  controllers:[],
   providers: [LessonResolver]
})
export class AppModule {}