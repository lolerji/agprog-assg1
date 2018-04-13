import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { XmlExporterService } from '../xml-exporter.service';
import { MatDialog } from '@angular/material';
import { ExportViewComponent } from '../export-view/export-view.component';
import { StudentInfoService } from '../student-info.service';
import { CourseDataService } from '../coursedata-service.service';
import { CourseData } from '../dto/course-data';
import { StudentInfo } from '../dto/student-info';
import { JsonExporterService } from '../json-exporter.service';

@Component({
  selector: 'app-format-buttons',
  templateUrl: './format-buttons.component.html',
  styleUrls: ['./format-buttons.component.css']
})
export class FormatButtonsComponent implements OnInit {

    course: CourseData;
    student: StudentInfo;
    xmlContent: any;
    jsonContent: any;

    constructor(private xmlService: XmlExporterService, 
                private studentService: StudentInfoService, 
                private coursesService: CourseDataService,
                private jsonService: JsonExporterService,
                private dialog: MatDialog) { 

    }

    ngOnInit() {
        this.course = new CourseData();
        this.student = new StudentInfo();
        this.getStudentInfo();
        var id = this.student.no % 5;
        this.getCourseInfo(id);
    }

    getStudentInfo(): void {
        // Subscribe to the student observable
        this.studentService.getStudent()
            .subscribe(student => this.student = student);
    }

    getCourseInfo(no: number): void {
        // Subscribe to active course
        this.coursesService.getCourse(no)
            .subscribe(course => {
                this.course = course;
                this.getExportedJSON();
                this.getExportedXML();
            });
    }

    getExportedXML() {
        this.xmlService.export(this.course)
            .subscribe(content => this.xmlContent = content);
    }

    getExportedJSON() {
        this.jsonService.export(this.course)
            .subscribe(content => this.jsonContent = content);
    }

    exportXML() {
        this.dialog.open(ExportViewComponent, {
            height: '200px',
            width: '400px',
            data: {
                title: 'XML',
                exported: this.xmlContent
            }
        });
        console.log(this.xmlContent);
    }

    exportJSON() {
        this.dialog.open(ExportViewComponent, {
            height: '200px',
            width: '400px',
            data: {
                title: 'JSON',
                exported: this.jsonContent
            }
        });
        console.log(this.jsonContent);
    }
}