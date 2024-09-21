import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchortagComponent } from './anchortag.component';

describe('AnchortagComponent', () => {
  let component: AnchortagComponent;
  let fixture: ComponentFixture<AnchortagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnchortagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchortagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
