import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import{Users} from "../users"


@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  users:Users

  constructor(private http:HttpClient) { 
    this.users=new Users("","",0,0,0,"","","","","",new Date())
  }

  gitHubRequest(){
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
  let promise=new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
      this.users.bio=response.bio;
      this.users.avatar_url=response.avatar_url;
      this.users.login=response.login;
      this.users.public_repos=response.public_repos;
      this.users.created_at=response.created_at;
      // this.users.updated_at=response.updated_at;
      // this.users.html_url=response.html_url;

      resolve()
    },
    error=>{
      reject(error)
    }
  )
  })
return promise
}

}
