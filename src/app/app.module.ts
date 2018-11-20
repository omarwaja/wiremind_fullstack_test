import { RepoAnalysisModule } from './repo-analysis/repo-analysis.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoSearchModule } from './repo-search/repo.search.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RepoSearchModule,
    RepoAnalysisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
