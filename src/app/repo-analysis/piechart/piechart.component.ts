import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { RepoAnalysisService } from '../repo-analysis.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  public owner: string;
  public repo: string;
  public contributors: any[] = [];
  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions = {
    chart: {
      height: '300px'
    },
    title: {
      text: 'Last 100 committers contribution'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [],
      type: 'pie',
      plotShadow: true
    }]
  }; // required
  updateFlag = true; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false
  constructor(private route: ActivatedRoute, private Analysis_service: RepoAnalysisService, private changeDetectionRef: ChangeDetectorRef) {
   }
  ngOnInit() {
    this.owner = this.route.snapshot.params.owner;
    this.repo = this.route.snapshot.params.repo;
    this.Analysis_service.getContributors(<string>this.owner, <string>this.repo).pipe(debounceTime(200)).subscribe(res => {
      this.contributors = (<Array<any>>res).map(r => ({ name: r.login, y: r.contributions }));
      this.chartOptions.series[0].data = this.contributors;
      this.updateFlag = true;
    });
  }
}
