import { Component} from '@angular/core';

@Component({
    selector: 'author',
    template: `<h2>Authors</h2>
               <ul>
                    <li *ngFor="let author of authors">{{author}}</li>
               </ul>
    `
})
export class AuthorComponent {
    authors:string[]=['Author1', 'Auhtor2', 'Author2'];
    constructor() { }

    

}