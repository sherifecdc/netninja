import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { App_Routing } from './app.routes';
import { NinjaFilterPipe } from './ninja-filter.pipe';
import { LoggingService} from './logging.service';
import { DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    NinjaFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    App_Routing
  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
