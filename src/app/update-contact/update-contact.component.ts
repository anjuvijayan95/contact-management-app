import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact, MyGroup } from 'src/model/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
contactId:string=''
groups:MyGroup[]=[] as MyGroup[]
contact:MyContact={} as MyContact
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private router:Router){}



ngOnInit(): void {
this.activatedRoute.params.subscribe((data:any)=>{
this.contactId=data.id
console.log(this.contactId);

})

this.api.viewContact(this.contactId)
.subscribe((data:any)=>{
  this.contact=data
})
this.api.getAllGroup()
.subscribe((data:any)=>{
  this.groups=data
})
 }
 updateContact(){
  this.api.updateContact(this.contactId,this.contact)
  .subscribe((data:any)=>{
this.router.navigateByUrl('')
  })

 }
  }

