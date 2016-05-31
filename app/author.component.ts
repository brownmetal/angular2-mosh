import { Component} from '@angular/core';
import { AuthorService } from './author.service';
@Component({
    selector: 'author',
    template: `<h2>Authors</h2>
               <ul>
                    <li *ngFor="let author of authors">{{author}}</li>
               </ul>
    `,
    providers: [AuthorService]
})
export class AuthorComponent {
    //authors:string[]=['Author1', 'Auhtor2', 'Author2'];
    authors;
    constructor(authorService: AuthorService) {
        this.authors=authorService.getAuthors();
     }

    

}