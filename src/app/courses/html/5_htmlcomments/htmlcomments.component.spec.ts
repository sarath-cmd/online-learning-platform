import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlcommentsComponent } from './htmlcomments.component';

describe('HtmlcommentsComponent', () => {
  let component: HtmlcommentsComponent;
  let fixture: ComponentFixture<HtmlcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlcommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
