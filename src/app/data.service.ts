import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('https://sherif-ninja.firebaseio.com/.json')
    // .subscribe(
    // (data) => console.log(data)
    // )
    ;
  }

}
