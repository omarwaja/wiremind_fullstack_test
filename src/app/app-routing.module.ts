import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoAnalysisComponent } from './repo-analysis/repo-analysis.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';

const routes: Routes = [
  {
    path: '',
    component: RepoSearchComponent
  },
  {
    path: 'repos/:owner/:repo',
    component: RepoAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
