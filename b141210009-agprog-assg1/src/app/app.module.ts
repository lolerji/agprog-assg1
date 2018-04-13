import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { CoursesTableComponent } from './courses-table/courses-table.component';
import { FormatButtonsComponent } from './format-buttons/format-buttons.component';
import { CourseInfoComponent } from './course-info/course-info.component';

import { CourseDataService } from './coursedata-service.service';
import { StudentInfoService } from './student-info.service';
import { XmlExporterService } from './xml-exporter.service';
import { MatDialogModule } from '@angular/material/dialog';
import { environment } from '../environments/environment.prod';
import { ExportViewComponent } from './export-view/export-view.component';
import { JsonExporterService } from './json-exporter.service';

@NgModule({
    entryComponents: [ExportViewComponent],
    declarations: [
        AppComponent,
        CoursesTableComponent,
        CourseInfoComponent,
        FormatButtonsComponent,
        ExportViewComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        MatButtonModule,
        MatGridListModule,
        MatDialogModule
    ],
    providers: [CourseDataService, StudentInfoService, XmlExporterService, JsonExporterService],
    bootstrap: [AppComponent]
})
export class AppModule { }
