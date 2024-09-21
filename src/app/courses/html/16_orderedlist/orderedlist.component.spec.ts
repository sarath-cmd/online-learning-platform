import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedlistComponent } from './orderedlist.component';

describe('OrderedlistComponent', () => {
  let component: OrderedlistComponent;
  let fixture: ComponentFixture<OrderedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderedlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
