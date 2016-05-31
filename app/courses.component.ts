import {Component} from '@angular/core';
import {CoursesService} from './courses.service';
import { AutoGrowDirective } from './auto-grow.directive';
@Component({
    selector: 'courses',
    template: `
                <h2>Courses Angular2</h2>
                {{title}}
                <input type="text" autogrow />
                <br>
                <ul>
                    <li *ngFor="let course of courses">{{course}}</li>
                </ul>                
                `,
    providers: [CoursesService],
    directives:[AutoGrowDirective]
})

export class CoursesComponent{
    title="This is the Courses Page";
    courses;
    constructor(courseService: CoursesService){
        this.courses= courseService.getCourses();
    }
}