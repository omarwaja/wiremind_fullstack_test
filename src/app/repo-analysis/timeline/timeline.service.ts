import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private _Http: HttpClient) { }

  getcommits(owner: string, repo: string) {
    if (true) {
      return this._Http.get('http://api.github.com/repos/' + owner + '/' + repo + '/commits', {
        params: {
          per_page: '100'
        }
      });
    }
  }

}
