import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'star-fav',
    templateUrl: 'app/star.template.html',
    styles:[`
            .glyphicon-star{
                color: orange;
            }
    `]
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