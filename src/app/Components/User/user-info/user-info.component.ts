import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  @Input() verifyPassword:boolean;
  id=localStorage.getItem(('i_u'))
  userId=parseInt(this.id)
  userEmail:string
  user:User
  UserDetails:User[]=[]
  City:City[]=[]
  District:District[]=[]
  filterDistrict:District[]=[]
  cityId:any=''
  IsGender:number
  days: number[] = Array.from({length: 31}, (_, i) => i + 1);
  months: number[] = Array.from({length: 12}, (_, i) => i + 1);
  years: number[] = Array.from({length: 123}, (_, i) => 2023 - i);
  year:number=0
  month:number=0
  day:number=0
  IsUserDate:boolean=false;
  dayvalue:number
  updateFormGroup:FormGroup;
  updatePasswordGroup:FormGroup;
  verifyPasswordGroup:FormGroup;
  genderValue:number
  changePassword:any
  changePasswordAgain:any
  nowPassword:string
  IsNowPasswordWarning:boolean
  IsChangePasswordHtml:boolean=false
  warningPasswordActive:boolean=false
   constructor(private userService:UserService,private formBuilder:FormBuilder,private authService:AuthService) {
    //güncelee butonu inputlar boş iken gri olsun
   }
   ngOnInit(): void {
    this.getUserDetail();
    this.getAllDistrict();
    this.getCity();
    setTimeout(() => {
      this.checkFamela()
      this.checkMale()
    },200);
    this.createUserForm()
    this.createVerifyPasswordForm()
   }
   updateChangeDistrict(){
    this.filterDistrict=[]
     this.filterDistrict=this.District.filter(d=>d.cityId==this.cityId)
   }
   getUserDetail()
   {
    this.userService.getbyId(this.userId).subscribe(res=>{
     this.UserDetails.push(res.data)
     this.IsGender=res.data.gender
     this.userEmail=res.data.email
     this.UserDetails.forEach(element => {
      const date=new Date(element.dateOfBirth)
      this.year=date.getFullYear();
      this.month=date.getMonth();
      this.day=date.getDate()
       if(this.year>1900)
       {
           this.IsUserDate=true
       }
     });
     this.createUserForm()
     this.createPasswordForm()
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
   setClassPasswords(){
      if(this.authService.verifyPassword==true)
      {
        this.warningPasswordActive=true
         return "border-warning"
      }
      this.warningPasswordActive=false
      return ""
   }
   nowPasswordInputClass()
   {
    if(this.authService.IsTrueNowPassword==true)
    {
      this.IsNowPasswordWarning=true
      return "border-warning"
    }
    this.IsNowPasswordWarning=false
    return ""
   }
   IsChangePassword()
   {
    setTimeout(() => {
      if(this.authService.IsChangePassword==true)
      {
        this.IsChangePasswordHtml=true
      }else{
        this.IsChangePasswordHtml=false
      }
    }, 1000);
   }
   checkMale()
   {
    const checkboxMale = document.getElementById('checkbox-male') as HTMLInputElement;
    const checkboxFamela = document.getElementById('checkbox-famela') as HTMLInputElement;
    if (checkboxMale&&checkboxMale.checked) {
      checkboxFamela.checked = false;
      this.genderValue=1
   }
   if(checkboxMale&&checkboxFamela&&this.IsGender==1)
   {
     console.log(this.IsGender)
     checkboxMale.checked=true
   }
  }
  checkFamela()
  {
    const checkboxMale = document.getElementById('checkbox-male') as HTMLInputElement;
    const checkboxFamela = document.getElementById('checkbox-famela') as HTMLInputElement;
    if (checkboxFamela&&checkboxFamela.checked) {
      checkboxMale.checked = false;
      this.genderValue=0
   }
   if(checkboxMale&&checkboxFamela&&this.IsGender==0)
   {
     checkboxFamela.checked=true;
   }
  }
  onDaySelected(event: any) {
    this.day = parseInt(event.target.value);
  }

  onMonthSelected(event: any) {
    this.month = parseInt(event.target.value);
  }

  onYearSelected(event: any) {
    this.year = parseInt(event.target.value);
  }
  againRun(){
    this.createUserForm()
  }
  createUserForm()
  {
    this.updateFormGroup=this.formBuilder.group({
      firstName:new FormControl("",Validators.required),
      lastName:new FormControl("",Validators.required),
      address:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      dateOfBirth:new FormControl("",Validators.required),
      number:new FormControl("", [Validators.required, Validators.pattern('^[0-9]+$')]),
      gender:new FormControl("",Validators.required),
    })
   const date=new Date(this.day+"."+this.month+"."+this.year);
   this.updateFormGroup.get('dateOfBirth').setValue(date);
   this.updateFormGroup.get('gender').setValue(this.genderValue);
   if(this.UserDetails.length>0)
   {
    this.UserDetails.forEach(element => {
      this.updateFormGroup.get('firstName').setValue(element.firstName);
      this.updateFormGroup.get('lastName').setValue(element.lastName);
      this.updateFormGroup.get('address').setValue(element.address);
      this.updateFormGroup.get('email').setValue(element.email);
      this.updateFormGroup.get('number').setValue(element.number);
    });
   }
  }
  createPasswordForm()
  {
    this.updatePasswordGroup=this.formBuilder.group({
      password:new FormControl("",Validators.required)
    })
    this.updatePasswordGroup.get('password').setValue(this.changePassword)
  }
  createVerifyPasswordForm()
  {
    this.verifyPasswordGroup=this.formBuilder.group({
      email:new FormControl(this.userEmail,Validators.required),
      password:new FormControl("",Validators.required)
    })
    this.verifyPasswordGroup.get('password').setValue(this.nowPassword)
    this.IsChangePassword()
  }

}
