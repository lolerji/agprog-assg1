import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { StudentInfoService } from '../student-info.service';
import { CourseDataService } from '../coursedata-service.service';
import { StudentInfo } from '../dto/student-info';
import { CourseData } from '../dto/course-data';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

    course: CourseData;
    student: StudentInfo;
    formControl = new FormControl('', []);

    constructor(private coursesService: CourseDataService, 
                private studentService: StudentInfoService)
    { }

    ngOnInit() {
        this.course = new CourseData();
        this.student = new StudentInfo();
        this.getStudentInfo();
        var id = this.student.no % 5;
        this.getCourseInfo(id);
    }

    getCourseInfo(no: number) {
        // Subscribe to active course
        this.coursesService.getCourse(no)
            .subscribe(course => this.course = course);
    }

    getStudentInfo(): void {
        // Subscribe to the student observable
        this.studentService.getStudent()
            .subscribe(student => this.student = student);
    }

    idBinding(event: KeyboardEvent): void {
        this.course.no = +(<HTMLInputElement>event.target).value;
        this.updateFirebase();
    }

    codeBinding(event: KeyboardEvent): void {
        this.course.code = (<HTMLInputElement>event.target).value;
        this.updateFirebase();
    }

    nameBinding(event: KeyboardEvent): void {
        this.course.name = (<HTMLInputElement>event.target).value;
        this.updateFirebase();
    }

    updateFirebase() {
        this.coursesService.updateCourse(this.course);
    }
}
