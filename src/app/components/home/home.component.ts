import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = "Jeniffer";
  ra: string = "0050832021036";
  today = new Date();

  constructor() { }

  ngOnInit() {
  }

}