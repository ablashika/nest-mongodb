import { Resolver , Query} from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver((_of: any) => LessonType)
export class LessonResolver {

    @Query(_returns => LessonType)
    lesson() { // Rename Lesson to lesson
        return {
            id: 1,
            name: "front-end",
            startDate: (new Date()).toISOString(), 
            endDate: (new Date()).toISOString()
        };
    }
}