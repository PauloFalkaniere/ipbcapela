import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SermonService {

  uri = 'http://localhost:4000/sermon';

  constructor(private http: HttpClient) { }

  addSermon(id, title, passage, preacher_name, url, script) {
    const obj = {
      id: id, 
      title: title,
      passage: passage,
      preacher_name: preacher_name,
      url: url,
      script: script
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}