import { Router } from '@angular/router';
import { GithubService } from './github.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FormControl} from '@angular/forms';


@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})

export class RepoSearchComponent implements OnInit {
  @ViewChild('pagination') pagination;
  public page = 1;
  public results: any[] = [];
  public searchResults: any[] = [];
  public searchText = new FormControl();
  public totalCount: number;

  constructor(
    private repoService: GithubService,
    private router: Router
    ) {
  }

  ngOnInit() {
      this.searchText.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe(result => {
        this.repoService.getRepo(result, 1, 10).subscribe(response => {
            this.results = response.items.filter(res => res.private === false );

          });
        });
    }
    //////////////////////
    onPageChange(pageNbr) {
      this.repoService.getRepo(this.searchText.value, pageNbr, 9).pipe(debounceTime(200), distinctUntilChanged()).subscribe(r => {
        this.searchResults = r.items.filter(res => res.private === false).slice(0.1000);

      });
    }
    //////////////////////
  goToRepoDetails(result) {

    this.router.navigate(['/repos', result.owner.login, result.name ]);
  }

  goSearching() {
    this.results = [];
        this.repoService.getRepo(this.searchText.value, 1, 9).subscribe(response => {
          this.totalCount = response.total_count >= 900 ? 900 : response.total_count;
          this.searchResults = response.items.filter(res => res.private === false );
          });
  }
}
