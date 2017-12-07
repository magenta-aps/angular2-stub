import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  private _baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private _http: Http) { }

  getPosts() {
    return this._http.get( this._baseUrl + '/posts' )
      .map(res => res.json());
  }

  getPost(id: number) {
    return this._http.get( this._baseUrl + '/posts/' + id )
      .map(res => res.json());
  }
}
