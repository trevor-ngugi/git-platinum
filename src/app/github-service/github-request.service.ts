import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import{Users} from "../user-class/users"
import{Repo} from "../repo-class/repo"


@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  users:Users
  repository:Repo
  newUserData:any=[]
  repoDetails=[] 

  constructor(private http:HttpClient) { 
    this.users=new Users("","",0,0,0,"","","","","",new Date(),"")
    this.repository= new Repo("","","","",new Date(),new Date())
  }

  gitHubRequest(username:string){
    this.repoDetails.length = 0; 

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
       created_at:Date,
       html_url:string,
      //  language:string
    }
  let promise=new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>(environment.apiUrl+ username).toPromise().then(response=>{
      this.users.bio=response.bio;
      this.users.avatar_url=response.avatar_url;
      this.users.login=response.login;
      this.users.public_repos=response.public_repos;
      this.users.created_at=response.created_at;
      this.users.followers=response.followers;
      this.users.following=response.following;
      // this.users.updated_at=response.updated_at;
      // this.users.html_url=response.html_url;

      resolve()
    },
    error=>{
      reject(error)
    }
  )
   
   this.http.get<any>(environment.apiUrl + username + "/repos").toPromise().then(response=>{
    for(var i=0; i<response.length; i++)
    {
      this.newUserData = new Repo(response[i].name,
                                  response[i].description,
                                  response[i].html_url,
                                  response[i].language,
                                  response[i].created_at,
                                  response[i].updated_at,);
      this.repoDetails.push(this.newUserData);
    }

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
