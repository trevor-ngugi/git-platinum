import { Component, OnInit } from '@angular/core';
import{Users} from "../users"
import{GithubRequestService} from "../github-service/github-request.service"



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
users:Users
  constructor(private githubService:GithubRequestService) {
    this.githubService=githubService;
   }

   searchUser(){
     this.githubService.gitHubRequest()
   }

  ngOnInit() {
    this.users=this.githubService.users
    // this.githubService.gitHubRequest()
    
    }

    
  }


