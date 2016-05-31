import {Component} from '@angular/core';
import { CoursesComponent } from './courses.component';
@Component({
    selector: 'my-app',
    template: '<h1>Welcome to Angular2</h1><courses></courses>',
    directives: [CoursesComponent]
})
export class AppComponent { }