
import {Component} from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
import {StarComponent} from './star.component';
import { TwitterLike } from './twitterlike.component';
import { MyvoteComponent } from './vote.component';
import {ngifComponent} from './ngif.component'
@Component({
    selector: 'my-app',
    template: `<div *ngIf="hide">
                <h1>Welcome to Angular2</h1>
                    <courses></courses>
                    <author></author>
                    <voter [total]="votesDB.totalVotes" [myVote]="votesDB.uservote" (vote)="voted($event)"></voter>
                    <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue':'red'">Submit</button>
                    <div (click)="onDivClick()">
                        <button class="btn btn-success" (click)="onClick($event)">Click Me</button>
                        <input type="text" [(ngModel)]="title" /> Preview: {{title}}
                    </div>
                    <star-fav [isFavourite]="post.isFavorite" (change)="CompoChange($event)"></star-fav>
                    <gl-heart [totalLikes]="tweet.totallikes" [ilike]="tweet.ilikes"></gl-heart>
                 </div>
                 <h1>Angular Conditional statement-Working with dom...</h1>
                 <ngifc></ngifc>
                 <h2>ngSwitch</h2>
                  <ul class="nav nav-pills">
                    <li [class.active]="showDiv=='showPosts'">
                        <a href="#" (click)="showDiv='showPosts'">Posts</a>
                    </li>
                    <li [class.active]="showDiv=='showReadme'">
                        <a href="#" (click)="showDiv='showReadme'">ReadMe</a>
                    </li><br>
                    <div [ngSwitch]="showDiv" class="bigfont">
                        <template [ngSwitchWhen]="'showPosts'" ngSwitchDefault>This is posts section</template>
                        <template [ngSwitchWhen]="'showReadme'">This is Readme section</template>
                    </div>
                </ul>
                <h2>ngFor</h2>
                <ul>
                    <li *ngFor="let course of courses, #i=index">{{i+1}} - {{course}}</li>
                </ul>
                <h2>Pipes</h2>
                <div class="bigfont">
                    Title: {{course.title | uppercase | lowercase}}<br>
                    Rating: {{course.rating | number:'2.2-2'}}<br>
                    Students: {{course.students | number}}<br>
                    Price: {{course.price | currency:'INR':true:'2.2-2'}}<br>
                    Release Date: {{course.releaseDate | date:'MMM yyyy'}}<br>
                    course: {{course | json}}
                </div>
    `,
    styles:[`
       .bigfont{
           font-size:2em;
       } 
    
    `],
    directives: [CoursesComponent, AuthorComponent, StarComponent, TwitterLike, MyvoteComponent, ngifComponent]
})
export class AppComponent {
    courses=['course1', 'course2', 'course3']
    course={
        title: 'Angular 2 for Beginners',
        rating: 4.9745,
        students:5981,
        price: 99.95,
        releaseDate: new Date(2016,3,1)       
    }
   showDiv='showPosts';
    hide=false;
    votesDB={
        totalVotes:10,
        uservote:0
    }
    voted($event){
        console.log($event);
    }
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
