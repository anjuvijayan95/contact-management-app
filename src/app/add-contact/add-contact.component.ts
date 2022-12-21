import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/model/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{
      allGroup:any[]=[]
      contactName:string=''
      contact:MyContact={} 

  constructor(private api: ApiService,private router:Router ){ }
    ngOnInit():void{
      this.api.getAllGroup()
      .subscribe((data:any)=>{
        this.allGroup=data
})
    
  }

  addContact(){
    this.api.addContacts(this.contact)
    .subscribe((data:any)=>{
      //navigate to admin page
      this.router.navigateByUrl('')
    }
    )
  }


}//class closing bracket
