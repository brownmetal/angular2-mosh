import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'voter',
    template: `
                <div style="width: 20px; margin-left: 20px">
                    <i class="glyphicon glyphicon-chevron-up big" (click)="onClickUp()"></i>
                    <span class="small a">{{ total + myVote }}</span>
                    <i class="glyphicon glyphicon-chevron-down big" (click)="onClickDown()"></i>
                </div>
    `,
    styles:[
        `
         .big{
             font-size: 5em;
             
         } 
         i:hover {
             cursor:pointer;
             color:orange;
         }
         .small{
             font-size: 4em;
             text-align:center;
         }   
        `
    ]
})
export class MyvoteComponent {
    @Input() total=0;
    @Input() myVote=0;
    @Output() vote= new EventEmitter();
    onClickUp(){
        
        if (this.myVote==1){
            return; 
        }
           
        this.myVote++;
        this.vote.emit({myvote: this.myVote});
    }
    onClickDown(){
        console.log("logged");
        if (this.myVote==-1){
            return;
        }
            
        this.myVote--;
        this.vote.emit({myvote: this.myVote});
    }
}