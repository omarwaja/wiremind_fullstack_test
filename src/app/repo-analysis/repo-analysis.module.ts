import { TimelineService } from './timeline/timeline.service';
import { RepoAnalysisComponent } from './repo-analysis.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoAnalysisService } from './repo-analysis.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { PiechartComponent } from './piechart/piechart.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    RepoAnalysisComponent,
    TimelineComponent,
    PiechartComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    HighchartsChartModule
  ],
  exports: [
    HttpClientModule
   ],
  providers: [
    TimelineService,
    RepoAnalysisService
  ]
})
export class RepoAnalysisModule { }
