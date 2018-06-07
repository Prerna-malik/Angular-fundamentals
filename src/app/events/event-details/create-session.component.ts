import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { restrictedWords } from '../shared/index';
import { ISession } from '../shared/index';

@Component({
    selector:'create-session',
    templateUrl:'./create-session.component.html',
    styles:[`
em { float:right;color:orange;padding-left:10px }
`]
})

export class CreateSessionComponent implements OnInit{
    @Output() saveNewSession =new EventEmitter();
    @Output() cancelSaveSession=new EventEmitter();

    newSessionForm:FormGroup
    name:FormControl
    presenter:FormControl
    duration:FormControl
    level:FormControl
    abstract:FormControl

    ngOnInit(){
        this.name=new FormControl('',Validators.required);
        this.presenter=new FormControl('',Validators.required);
        this.duration=new FormControl('',Validators.required);
        this.level=new FormControl('',Validators.required);
        this.abstract=new FormControl('',[Validators.required,Validators.maxLength(200),restrictedWords(['foo','bar'])]);

        this.newSessionForm=new FormGroup({
        name:this.name,
        presenter:this.presenter,
        duration:this.duration,
        level:this.level,
        abstract:this.abstract
          })
    }
    
saveSession(formValues){
    let session:ISession={
     id:undefined,
     name:formValues.name,
     duration:+formValues.duration,
     level:formValues.level,
     presenter:formValues.presenter,
     abstract:formValues.abstract,
     voters:[]
    }
    this.saveNewSession.emit(session);
}
cancel(){
    this.cancelSaveSession.emit();
}
}