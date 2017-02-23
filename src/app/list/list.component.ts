import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase: any;

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

  ngOnInit() {
    // to ensure the component is loaded before the service
    /*
    this.dataService.fetchData().subscribe(
      (data) => this.ninjas = data.json()
    );
    */

    this.fbGetData();
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', 
      (snapshot) => //console.log(snapshot.val()))
      {
          this.ninjas.push(snapshot.val());
       })
  }

  fbPostData(name, belt) {
    firebase.database().ref('/').push({name: name, belt: belt});
  }

}
