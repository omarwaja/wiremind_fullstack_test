
import { RepoSearchComponent } from './repo-search.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './github.service';
import { NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RepoSearchComponent

  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbPaginationModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [
    GithubService
  ]
})

export class RepoSearchModule {}
