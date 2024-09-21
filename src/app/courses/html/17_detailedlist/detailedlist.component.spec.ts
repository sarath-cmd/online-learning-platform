import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedlistComponent } from './detailedlist.component';

describe('DetailedlistComponent', () => {
  let component: DetailedlistComponent;
  let fixture: ComponentFixture<DetailedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
