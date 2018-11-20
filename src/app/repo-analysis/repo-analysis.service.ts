import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RepoAnalysisService {

  constructor(private _http: HttpClient) { }

  getContributors(owner: string, repo: string) {
    if (true) {
      return this._http.get('http://api.github.com/repos/' + owner + '/' + repo + '/contributors', {
        params: {
          affiliation: 'direct',
          per_page: '100'
        }
      });
    }
  }
}
