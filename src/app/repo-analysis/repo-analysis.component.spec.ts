import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoAnalysisComponent } from './repo-analysis.component';

describe('RepoAnalysisComponent', () => {
  let component: RepoAnalysisComponent;
  let fixture: ComponentFixture<RepoAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
