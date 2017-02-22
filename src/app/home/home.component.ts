import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  classes = {'red':true, 'underline': true, 'blue':false};
  Iftest = true;

  constructor(private logger: LoggingService) { }

  ngOnInit() {
  }

   logIt(){
   this.logger.log();
  }


}
