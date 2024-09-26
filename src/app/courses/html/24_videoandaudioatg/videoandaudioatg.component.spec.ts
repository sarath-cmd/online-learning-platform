import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoandaudioatgComponent } from './videoandaudioatg.component';

describe('VideoandaudioatgComponent', () => {
  let component: VideoandaudioatgComponent;
  let fixture: ComponentFixture<VideoandaudioatgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoandaudioatgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoandaudioatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
