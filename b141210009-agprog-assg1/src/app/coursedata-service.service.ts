import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AppModule } from './app.module';

import { CourseData } from './dto/course-data';
import { FirebaseDatabase } from '@firebase/database-types';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CourseDataService {

    constructor(private db: AngularFireDatabase) { }

    getCourses(): Observable<any>  {
        return this.db.list('/courses').valueChanges();
    }

    getCourse(id: number): Observable<any> {
        var course: CourseData = null;
        return this.db.object('/courses/' + id).valueChanges();
    }

    updateCourse(course: CourseData): void {
        this.db.object('/courses/' + course.id).set(course);
    }
}
