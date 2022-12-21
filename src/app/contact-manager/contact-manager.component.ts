import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/model/myContact';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  allContacts:MyContact[]=[]
  searchKey:string=''
 // when we create a component first constructor will excicute thats why we gave this dependancy injection in constuctor
  constructor(private api:ApiService) { }

  //after consructor then ngOnInit will occur to get this we should impliment it,check line 11
  //ngOnInit whrn we craete a component it have one lifecycle and it will have a value, to initiate that value we use this method
  //if the value is change then the ngOnInitChange method will invoke automatically (check lifecycle hooks in google)
  ngOnInit(): void{
    this.getAllContact()
   
  }

getAllContact(){
  this.api.getAllContacts()
  .subscribe((data:any)=>{  //function in api().subscribe((data:its type)=>)
    console.log(data);
    this.allContacts=data
  })
}


  //search
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }

  deleteContact(contactId:any){
    this.api.deleteContact(contactId)
    .subscribe((data:any)=>{
      this.getAllContact()
      // window.location.reload()
    }
    )
  }
}
