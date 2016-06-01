import {Component} from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
@Component({
    selector: 'my-app',
    template: `<h1>Welcome to Angular2</h1><courses></courses><author></author>
                <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue':'red'">Submit</button>
                <button class="btn btn-success" (click)="onClick()">Click Me</button>
    `,
    directives: [CoursesComponent, AuthorComponent]
})
export class AppComponent { 
    isActive=true;
    onClick(){
        console.log("Button Clicked!");
    }
}
