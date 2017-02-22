import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 ninjas = [
    {name:"Sherif",belt:"black"},
    {name:"Asad",belt:"red"},
    {name:"Hero",belt:"blue"}
  ];

  ninja: string;

  constructor(private route: ActivatedRoute) { 
    this.ninja = route.snapshot.params['ninja'];
  }

  ngOnInit() {
  }

}
