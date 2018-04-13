import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CourseData } from './dto/course-data';
import * as xmlbuilder from 'xmlbuilder';

@Injectable()
export class XmlExporterService {

    constructor() { }

    export(object: CourseData): Observable<any> {
        return of(xmlbuilder.create({
            root: {
                course: {
                    id: object.id,
                    no: object.no,
                    code: object.code,
                    name: object.name
                }
            }
        }));
    }
}
