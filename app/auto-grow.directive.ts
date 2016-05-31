import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector:'[autogrow]',
    host:{
        '(focus)' : 'onFocus()',
        '(blur)' : 'onBlur'
    }
})
export class AutoGrowDirective{
    constructor(private el:ElementRef, private renderer:Renderer){};
    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }
    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '12');
    }
}