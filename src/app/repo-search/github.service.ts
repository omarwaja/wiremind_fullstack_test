import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface GithubRepoObject {
  items: Array<any>;
  total_count: number;
}

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  constructor(private _http: HttpClient) { }

  getRepo(name: string, pageNbr, perPage) {
    if (true) {
      return this._http.get<GithubRepoObject>('http://api.github.com/search/repositories', {
        params: {
          q: name,
          per_page: perPage,
          page: pageNbr
        }
      });
    }
  }
}
