import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('assets/ninjas.json')
    // .subscribe(
    // (data) => console.log(data)
    // )
    ;
  }

}
