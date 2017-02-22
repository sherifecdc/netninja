import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  classes = {'red':true, 'underline': true, 'blue':false};
  Iftest = true;

  constructor() { }

  ngOnInit() {
  }

}
