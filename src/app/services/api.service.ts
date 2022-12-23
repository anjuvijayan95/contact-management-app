import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MyContact} from 'src/model/myContact';
import { ViewContactComponent } from '../view-contact/view-contact.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string="http://localhost:3000/contacts"
  constructor(private http:HttpClient) { }  //constructor (Access_specifier Variable name: Class name(which having those methods)){ }
                                            // here we are placing objects inside the httpclient class to a variable called http (we can give what ever name we want)
                                            //by this way we can share the data between two classes


//here we are creating a function this fun is inside the class so we dont need to write function before fun name
//this for get allcontacts
//after observable we should tell its type also, for that we will give the class in the module ie, MyContacts
 getAllContacts():Observable<MyContact>{
  return this.http.get(this.baseUrl) //we should return this fun then only we will get this data in our component pages
 }

//function for view a particular contact
 viewContact(contactId:string){
  return this.http.get(`${this.baseUrl}/${contactId}`)
 }

//function for view a particular group

getGroupName(groupId:string){
 return this.http.get("http://localhost:3000/groups/"+groupId)
 }

 getAllGroup(){
 return this.http.get("http://localhost:3000/groups/")
 }

 // function for adding new contacts
  addContacts(contactBody:any){
  return this.http.post(this.baseUrl,contactBody)
  }

// function for delete
deleteContact(contactId:any){
 return this.http.delete(`${this.baseUrl}/${contactId}`)
}

//update contact details according to user select
updateContact(contactId:any,contactBody:any){
  return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
}

}


