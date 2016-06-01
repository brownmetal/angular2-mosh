import { Component } from '@angular/core';

@Component({
    selector: 'star-fav',
    template: `
                <i style="font-size:8em" class="glyphicon" [class.glyphicon-star]="isFavourite" [class.glyphicon-star-empty]="!isFavourite" (click)="onClick()"></i> Star
    `
})
export class StarComponent {
    isFavourite=false;
    onClick(){
        this.isFavourite=!this.isFavourite;
    }
}