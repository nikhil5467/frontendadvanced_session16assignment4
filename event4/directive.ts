import{Directive} from '@angular/core';
import {ElementRef} from '@angular/core';
@Directive({
    selector:'[high]'
})

export class high{
    @Input()
constructor(private e:ElementRef){

}
ngOnInit(){
var self = this;
     
    this.e.nativeElement.onmouseover=function(){
        self.e.nativeElement.style.color = 'red';
    }
     this.e.nativeElement.onmouseout=function(){
        self.e.nativeElement.style.color = null;
        

    }
}
}
