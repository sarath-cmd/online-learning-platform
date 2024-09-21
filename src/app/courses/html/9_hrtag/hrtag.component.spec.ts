import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrtagComponent } from './hrtag.component';

describe('HrtagComponent', () => {
  let component: HrtagComponent;
  let fixture: ComponentFixture<HrtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrtagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
