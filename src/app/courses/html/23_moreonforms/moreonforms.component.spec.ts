import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreonformsComponent } from './moreonforms.component';

describe('MoreonformsComponent', () => {
  let component: MoreonformsComponent;
  let fixture: ComponentFixture<MoreonformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreonformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreonformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
