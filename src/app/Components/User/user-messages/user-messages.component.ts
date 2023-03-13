import { Component,OnInit } from '@angular/core';
import { Contact } from 'src/app/models/User/contact';
import { ContactService } from 'src/app/services/User/contact.service';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css']
})
export class UserMessagesComponent implements OnInit{
  id=localStorage.getItem(('i_u'))
  userId=parseInt(this.id)
  contacts:Contact[]=[]
  contactId:number
  deleteUrl:string="https://localhost:44331/Uploads/Images/delete.png";
  constructor(private contactService:ContactService) {

  }

  ngOnInit(): void {
  this.getUserContact(this.userId);
  }
  getContactId(contactId:number)
  {

    this.contacts.forEach(element => {
      if(element.id===contactId)
      {
        this.contactId=element.id
      }
    });

    return this.contactId
  }
  getUserContact(userId:number)
  {
   this.contactService.getUserContact(userId).subscribe(res=>{
    this.contacts=res.data
    console.log(res.data)
   })
  }
}
