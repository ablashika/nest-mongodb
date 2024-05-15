import { Module } from '@nestjs/common';
import {LessonResolver} from './lesson.resolver'
@Module({})
export class LessonModule {
    providers: [LessonResolver]
}
