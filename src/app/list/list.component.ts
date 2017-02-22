import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 ninja: string;
// logger: LoggingService;

 ninjas = [];

  constructor(private route: ActivatedRoute,
    private logger: LoggingService,
    private dataService: DataService) 
  { 
    this.ninja = route.snapshot.params['ninja'];
  }

 logIt(){
   this.logger.log();
  }

// to ensure the component is loaded before the service
  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.ninjas = data.json()
    );
  }

}
