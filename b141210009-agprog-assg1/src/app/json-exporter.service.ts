import { Injectable } from '@angular/core';
import { CourseData } from './dto/course-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class JsonExporterService {
    
    export(object: CourseData): Observable<any> {
        return of(JSON.stringify(object, this.replacer, 4));
    }
    
    replacer(name: string, val: string) {
        // convert RegExp to string
        if ( val && val.constructor === RegExp ) {
            return val.toString();
        } else if ( name === 'str' ) { // 
            return undefined; // remove from result
        } else {
            return val; // return as is
        }
    }
}
