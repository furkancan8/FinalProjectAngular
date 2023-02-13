import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/User/city';
import { District } from 'src/app/models/User/district';
import { User } from 'src/app/models/User/user';
import { AuthService } from 'src/app/services/User/auth.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  id=localStorage.getItem(('i_u'))
  userId=parseInt(this.id)
  UserDetails:User[]=[]
  City:City[]=[]
  District:District[]=[]
  filterDistrict:District[]=[]
  cityId:any=''
   constructor(private userService:UserService) {

   }
   ngOnInit(): void {
    this.getUserDetail();
    this.getAllDistrict();
    this.getCity();
   }
   updateChangeDistrict(){
    this.filterDistrict=[]
     this.filterDistrict=this.District.filter(d=>d.cityId==this.cityId)
   }
   getUserDetail()
   {
    this.userService.getbyId(this.userId).subscribe(res=>{
     this.UserDetails.push(res.data)
    })
   }
   getCity()
   {
    this.userService.getAllCity().subscribe(res=>{
     this.City=res.data
    })
   }
   getAllDistrict(){
    this.userService.getAllDistrict().subscribe(res=>{
      this.District=res.data
    })
   }
}
