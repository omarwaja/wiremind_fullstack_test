import { TestBed } from '@angular/core/testing';

import { RepoAnalysisService } from './repo-analysis.service';

describe('RepoAnalysisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoAnalysisService = TestBed.get(RepoAnalysisService);
    expect(service).toBeTruthy();
  });
});
