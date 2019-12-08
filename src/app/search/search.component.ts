import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Users} from "../users"


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
users:Users
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
       login:string,
       avatar_url:string,
       followers:number,
       following:number,
       public_repos:number,
       bio:string,
       location:string,
       blog:string,
       email:string,
       company:string,
       created_at:Date
    }

    this.http.get<ApiResponse>("http://api.github.com/users").subscribe(data=>{
      // Succesful API request
      this.users= new Users(data.login, data.avatar_url,data.followers,data.following,data.public_repos,data.bio,data.location,data.blog,data.email,data.company,data.created_at)
    })
  }

}
