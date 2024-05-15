import { Resolver , Query} from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver {

    @Query(_returns => LessonType)
    lesson() { // Rename Lesson to lesson
        return {
            id: 1,
            name: "front-end",
            startDate: (new Date()).toISOString(), // Corrected spelling from stateDate to startDate
            endDate: (new Date()).toISOString()
        };
    }
}