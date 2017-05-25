import{Component} from '@angular/core';
import{Observable,Response} from 'rxjs/Observable';

import {Router} from '@angular/router';
import 'rxjs/Rx';
import {Http} from '@angular/http';
@Component({
    selector:'allpost',
    template:  `<button class="btn btn-default" (click)='getallpost()'>Display post</button>
               <post [data] = 'selectedpost' *ngIf='selectedpost!==undefined'></post>
               <table class='table'>
                            <thead>
                                <tr>
                                    <td align='center'>Userid</td>
                                    <td align='center'>Id Description</td>
                                    <td align='center'>Title </td>
                                     <td align='center'>Body </td>
                                     
                                </tr>
                            </thead>
                        
                            <tr high *ngFor="let p of result">
                                <td  align='center'>{{p.userId}}</td>
                                <td  align='center'>{{p.id}}</td>
                                <td  align='center'>{{p.title}}</td>
                                <td  align='center'>{{p.body}}</td>
                                 <td  align='center'><button (click) = "handle(p)"> Select</button></td>
                            </tr>
                        </table>
    
    `
})

export class getallpostscomponent{
    public result:any[] = [];
    public selectedpost:any;

    constructor(private r:Router,private http:Http){
    }
public getallpost(){
      var ob =  this.http.get('https://jsonplaceholder.typicode.com/posts').map((r:Response) =>r.json());
        ob.subscribe(
            (d) =>  { this.result = d },
            (error) => console.log("ERROR IS: " +error))
}
public handle(p:any){
  this.selectedpost = p;

}
}