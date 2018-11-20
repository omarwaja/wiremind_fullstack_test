import { debounceTime } from 'rxjs/operators';
import { RepoAnalysisService } from './repo-analysis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo-analysis',
  templateUrl: './repo-analysis.component.html',
  styleUrls: ['./repo-analysis.component.css']
})
export class RepoAnalysisComponent implements OnInit {
  public owner: any;
  public repo: any;
  public contributors: any[] = [];

  constructor(private route: ActivatedRoute, private Analysis_service: RepoAnalysisService) { }

  ngOnInit() {
    this.owner = this.route.snapshot.params.owner;
    this.repo = this.route.snapshot.params.repo;
    this.Analysis_service.getContributors(<string>this.owner, <string>this.repo).pipe(debounceTime(200)).subscribe( res => {
      this.contributors = <Array<any>>res;
    });
  }


}
