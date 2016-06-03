import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'star-fav',
    template: `
                <i style="font-size:8em" class="glyphicon" [class.glyphicon-star]="isFavourite" [class.glyphicon-star-empty]="!isFavourite" (click)="onClick()"></i> Star
    `
})
export class StarComponent {
    @Input() isFavourite=true;
    @Output() change = new EventEmitter();
    onClick(){
    this.isFavourite=!this.isFavourite;
    this.change.emit({
        changedValue: 'Sunil'
    });
    }
}