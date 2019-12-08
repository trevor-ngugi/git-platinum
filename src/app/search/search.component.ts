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
    
    }

    
  }


