import { Component,OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Product/comment';
import { CommentService } from 'src/app/services/Product/comment.service';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit{
  userComment:Comment[]=[]
  id=localStorage.getItem("i_u")
  userId=parseInt(this.id);
  constructor(private commentService:CommentService) {

  }
  ngOnInit(): void {
    this.getUserComment(this.userId)
  }
  getUserComment(userId:number)
  {
    this.commentService.getUserOfComment(userId).subscribe(res=>{
     this.userComment=res.data
    })
  }
}
