import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrtagComponent } from './brtag.component';

describe('BrtagComponent', () => {
  let component: BrtagComponent;
  let fixture: ComponentFixture<BrtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrtagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
