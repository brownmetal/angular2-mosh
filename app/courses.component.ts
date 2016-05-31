import {Component} from '@angular/core'
@Component({
    selector: 'courses',
    template: `
                <h2>Courses Angular2</h2>
                {{title}}
                <br>
                <ul>
                    <li *ngFor="let course of courses">{{course}}</li>
                </ul>                
                `
})

export class CoursesComponent{
    title="This is the Courses Page";
    courses=["Course 1", "Course 2", "Course 3"];
}