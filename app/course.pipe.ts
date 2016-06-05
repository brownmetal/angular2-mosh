import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'summary'})
export class SummaryPipe implements PipeTransform {
    transform(value, args){
        if (args===undefined){
            return value;
        }
        if (value.length > args){
            return value.substring(0, args) + "..."
        } else{
            return value;
        }
       
    }       
}