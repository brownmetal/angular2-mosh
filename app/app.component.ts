
import {Component} from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
import {StarComponent} from './star.component';

@Component({
    selector: 'my-app',
    template: `<h1>Welcome to Angular2</h1><courses></courses><author></author>
                <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue':'red'">Submit</button>
                <div (click)="onDivClick()">
                <button class="btn btn-success" (click)="onClick($event)">Click Me</button>
                <input type="text" [(ngModel)] = "title" />
                Preview: {{title}}
                </div>
                <star-fav></star-fav>
    `,
    directives: [CoursesComponent, AuthorComponent, StarComponent]
})
export class AppComponent {
    title="Angular with Mosh";
    isActive=true;
    onDivClick(){
        console.log('Click propagated to the Div');
    }
    onClick($event){
        $event.stopPropagation();
        console.log("Button Clicked!", $event);
    }
}
