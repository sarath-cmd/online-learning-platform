import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertnavComponent } from './vertnav.component';

describe('VertnavComponent', () => {
  let component: VertnavComponent;
  let fixture: ComponentFixture<VertnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VertnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VertnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
