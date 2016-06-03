
import {Component} from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
import {StarComponent} from './star.component';
import { TwitterLike } from './twitterlike.component';

@Component({
    selector: 'my-app',
    template: `
                <h1>Welcome to Angular2</h1>
<courses></courses>
<author></author>
<button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue':'red'">Submit</button>
<div (click)="onDivClick()">
    <button class="btn btn-success" (click)="onClick($event)">Click Me</button>
    <input type="text" [(ngModel)]="title" /> Preview: {{title}}
</div>
<star-fav [isFavourite]="post.isFavorite" (change)="CompoChange($event)"></star-fav>
    <gl-heart [totalLikes]="tweet.totallikes" [ilike]="tweet.ilikes"></gl-heart>
    `,
    directives: [CoursesComponent, AuthorComponent, StarComponent, TwitterLike]
})
export class AppComponent {
    tweet={
        totallikes:10,
        ilikes:0
    }
    post={
        title: "Input Properties",
        isFavorite: true
    }
    CompoChange($event){
        console.log($event);
    }
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
