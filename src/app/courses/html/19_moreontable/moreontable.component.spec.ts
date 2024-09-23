import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreontableComponent } from './moreontable.component';

describe('MoreontableComponent', () => {
  let component: MoreontableComponent;
  let fixture: ComponentFixture<MoreontableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreontableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
