import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/User/contact';
import { AdminService } from 'src/app/services/User/admin.service';
import { ContactService } from 'src/app/services/User/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contacts:Contact[]=[]
  contactAddForm:FormGroup
 constructor(private contactService:ContactService,private formBuilder:FormBuilder) {

 }
 ngOnInit(): void {
   this.getContact()
   this.createContactAddForm();
 }
 getContact()
 {
  this.contactService.getContact().subscribe(response=>{
    this.contacts=response.data
    console.log(response.data)
  });
 }
 createContactAddForm()
 {
  this.contactAddForm=this.formBuilder.group({
    name:["",Validators.required],
    email:["",Validators.required],
    subject:["",Validators.required],
    description:["",Validators.required]

  })
 }
}
