import{Component,Input} from '@angular/core';


@Component({
    selector:'post',
    template:  `<div class="panel-body">
                   {{data.userId}}
                   <br/>
                   {{data.id}}
                    <br/>
                   {{data.title}}
                    <br/>
                   {{data.body}}
                    <br/>
    </div>


   `
})


export class post{
@Input()
public data:any;
}