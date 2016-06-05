import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'bs-panel',
    template: `
                <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">{{Paneltitle}}
                    <ng-content select=".heading"></ng-content>
                    </h3>
                </div>
                <div class="panel-body">
                        {{PanelConent}}<ng-content select=".body"></ng-content>
                </div>
                </div>
                 <button class="btn btn-success" (click)="onClick()">Click to test Ouput Properties</button>
    `
})
export class BstrapPanelComponent  {
    @Input() Paneltitle: string;
    @Input() PanelConent:string;
    @Output() changeVal= new EventEmitter();
    onClick(){
        this.changeVal.emit({
            clickVal: 'Passed from sunil'
        });
    }
}