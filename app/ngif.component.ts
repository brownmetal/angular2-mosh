import { Component } from '@angular/core';

@Component({
    selector: 'ngifc',
    template: `{{courses.author}} Portfolio:
                <div *ngIf="courses.length > 0">
                    {{courses.length}} courses found in your account!
                </div>
                <div *ngIf="courses.length ==0">
                    No courses found in your account.
                </div>
    `
})
export class ngifComponent {
courses={
    length:0,
    author:'Sunil'
}

}