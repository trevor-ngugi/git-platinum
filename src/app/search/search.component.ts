import { Component, OnInit } from '@angular/core';
import{Users} from "../user-class/users"
import{GithubRequestService} from "../github-service/github-request.service"
import{ HttpClient } from '@angular/common/http'; 
import{NgForm} from "@angular/forms"




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
users:Users
username:string
repoInfo=[]
githubService:GithubRequestService

  constructor( githubService:GithubRequestService) {
    this.githubService=githubService;
   }

   submitUsername(){
     this.githubService.gitHubRequest(this.username);
   }

  ngOnInit() {
    this.users=this.githubService.users;
    this.repoInfo=this.githubService.repoDetails;
    // this.githubService.gitHubRequest()
    
    }

    
  }


