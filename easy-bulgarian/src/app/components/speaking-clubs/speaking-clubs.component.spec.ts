import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingClubsComponent } from './speaking-clubs.component';

describe('SpeakingClubsComponent', () => {
  let component: SpeakingClubsComponent;
  let fixture: ComponentFixture<SpeakingClubsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakingClubsComponent]
    });
    fixture = TestBed.createComponent(SpeakingClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
