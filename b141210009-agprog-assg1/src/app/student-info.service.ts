import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { STUDENT } from './mock-data/mock-student';
import { StudentInfo } from './dto/student-info';

@Injectable()
export class StudentInfoService {

    constructor() { }

    getStudent(): Observable<StudentInfo> {
        return of(STUDENT);
    }
}
