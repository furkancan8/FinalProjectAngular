import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { AdminService } from 'src/app/services/admin.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contacts:Contact[]=[]
 constructor(private contactService:ContactService) {

 }
 ngOnInit(): void {
   this.getContact()
 }
 getContact()
 {
  this.contactService.getContact().subscribe(response=>{
    this.contacts=response.data
    console.log(response.data)
  });
 }
}
