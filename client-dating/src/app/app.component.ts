import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users : any;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:7015/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}
