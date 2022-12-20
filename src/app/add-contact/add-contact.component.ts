import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{
      allGroup:any[]=[]
      contactName:string=''
  constructor(private api: ApiService ){ }
    ngOnInit():void{
      this.api.getAllGroup()
      .subscribe((data:any)=>{
        this.allGroup=data
})
    
  }

  addContact(){
    
  }
}
