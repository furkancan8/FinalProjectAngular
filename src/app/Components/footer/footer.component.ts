import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  facebookUrl:string="https://localhost:44331/Uploads/Images/facebook-logo.png";
  twitterUrl:string="https://localhost:44331/Uploads/Images/twitter-logo.png";
  whatsappUrl:string="https://localhost:44331/Uploads/Images/whatsapp-logo.png";
  instagramUrl:string="https://localhost:44331/Uploads/Images/instagram-logo.png";
  constructor() {

  }
  ngOnInit(): void {

  }
}
