import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{
  
  contactId:string=''
  contact:any
  groupId:any
  groupName:any
constructor(private activatedRoute:ActivatedRoute,private api:ApiService){ }

ngOnInit(): void {
this.activatedRoute.params.subscribe((data:any)=>{
this.contactId=data.id
console.log(this.contactId);

})

//api call for getting the detais of a particular item
this.api.viewContact(this.contactId)
.subscribe((data:any)=>{
this.contact=data
this.groupId=data.groupId
console.log(this.contact);
console.log(this.groupId);


this.api.getGroupName(this.groupId)
.subscribe((result:any)=>{
this.groupName=result.name
}
)

})


}
}