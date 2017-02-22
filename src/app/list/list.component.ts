import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 ninja: string;
// logger: LoggingService;

 ninjas = [
    {name:"Sherif",belt:"black"},
    {name:"Asad",belt:"red"},
    {name:"Hero",belt:"blue"}
  ];

  constructor(private route: ActivatedRoute,
    private logger: LoggingService) 
  { 
    this.ninja = route.snapshot.params['ninja'];
  }

 logIt(){
   this.logger.log();
  }

  ngOnInit() {
  }

}
