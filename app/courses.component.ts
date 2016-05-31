import {Component} from '@angular/core';
import {CoursesService} from './courses.service';
@Component({
    selector: 'courses',
    template: `
                <h2>Courses Angular2</h2>
                {{title}}
                <br>
                <ul>
                    <li *ngFor="let course of courses">{{course}}</li>
                </ul>                
                `,
    providers: [CoursesService]
})

export class CoursesComponent{
    title="This is the Courses Page";
    courses;
    constructor(courseService: CoursesService){
        this.courses= courseService.getCourses();
    }
}