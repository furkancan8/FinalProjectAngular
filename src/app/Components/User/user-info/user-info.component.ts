import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  id=localStorage.getItem(('i_u'))
  userId=parseInt(this.id)
  UserDetails:User[]=[]
   constructor(private authService:AuthService) {

   }
   ngOnInit(): void {
    this.getUserDetail();
   }
   getUserDetail()
   {
    this.authService.getbyId(this.userId).subscribe(res=>{
     this.UserDetails.push(res.data)
     console.log(res.data)
    })
   }
}
