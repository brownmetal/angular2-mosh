import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'star-fav',
    templateUrl: 'app/star.template.html'
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