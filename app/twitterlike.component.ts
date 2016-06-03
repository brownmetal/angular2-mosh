import { Component, Input} from '@angular/core';

@Component({
    selector: 'gl-heart',
    template: `
            <i class="glyphicon glyphicon-heart" (click)="onClick()" [class.highlighted]="ilike"></i>
            <span>{{ totalLikes }}</span>
    `,
    styles:[`      
            .glyphicon-heart{
                color:#ccc;
                font-size:10em;
                cursor: pointer;
            }
            .highlighted{
                color:pink;
            }
    `]
})
export class TwitterLike{
    @Input() ilike=false;
    @Input() totalLikes=0;
    onClick(){
        console.log("clicked");
        this.ilike=!this.ilike;
        this.totalLikes+=this.ilike?1:-1;
    }
    constructor() { }

}