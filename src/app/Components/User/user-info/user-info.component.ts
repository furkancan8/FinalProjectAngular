import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  id=localStorage.getItem(('i_u'))
  userId=parseInt(this.id)
  UserDetails:User[]=[]
   constructor(private userService:UserService) {

   }
   ngOnInit(): void {
    this.getUserDetail();
   }
   getUserDetail()
   {
    this.userService.getbyId(this.userId).subscribe(res=>{
     this.UserDetails.push(res.data)
    })
   }
}
