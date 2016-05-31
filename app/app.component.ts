import {Component} from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
@Component({
    selector: 'my-app',
    template: '<h1>Welcome to Angular2</h1><courses></courses><author></author>',
    directives: [CoursesComponent, AuthorComponent]
})
export class AppComponent { }