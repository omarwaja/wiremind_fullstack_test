import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Timeline } from 'vis';
import { TimelineService } from './timeline.service';
declare var vis: any;
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit, AfterViewInit {

  @ViewChild('visjsTimeline') timelineContainer: ElementRef;
  tlContainer: any;
  timeline: any;
  data: any;
  options: {};
  private owner: string;
  private repo: string;
  private commits: any[] = [];

  constructor(private tservice: TimelineService, private route: ActivatedRoute) {
    this.getTimelineData();
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  getTimelineData() {
    this.owner = this.route.snapshot.params.owner;
    this.repo = this.route.snapshot.params.repo;
    this.tservice.getcommits(this.owner, this.repo,).subscribe(response => {
      this.commits = (<Array<any>>response).sort((commit1, commit2) => {
        return (commit1.commit.committer.date - commit2.commit.committer.date);
      }).map(r => ({ id: r.sha, content: r.commit.message, start: r.commit.committer.date, type: 'point' }));
      this.data = new vis.DataSet(this.commits);
      this.options = {
        editable: true,
        showTooltips: true,
        tooltip: {
          followMouse: true,
          overflowMethod: 'cap'
        },
        margin: {
          item: 5,
          axis: 10
        },
        maxHeight: '100px',
        horizontalScroll: true,
        orientation: {
          axis: 'top',
          item: 'top'
        },
        verticalScroll: true,
        zoomMax: 0,
        start: '2000-01-01',
        end: '2050-01-01',
        timeAxis: { scale: 'year', step: 5 }
      };
      this.tlContainer = this.timelineContainer.nativeElement;
      this.timeline = new vis.Timeline(this.tlContainer, this.data, {});
    });

  }

}
