import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../coursedata-service.service';
import { StudentInfoService } from '../student-info.service';
import { AppModule } from '../app.module';

import { CourseData } from '../dto/course-data';
import { StudentInfo } from '../dto/student-info';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class CoursesTableComponent implements OnInit {

    columnsToDisplay = [ 'no', 'code', 'name' ];
    courses: CourseData[];
    student: StudentInfo;

    constructor(private coursesService: CourseDataService) { }

    ngOnInit() {
        this.getCourses();
    }

    getCourses(): void {
        // Subscribe to the courses observable
        this.coursesService.getCourses()
            .subscribe(courses => this.courses = courses);
    }
}
