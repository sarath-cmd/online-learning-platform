import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsintroductionComponent } from './formsintroduction.component';

describe('FormsintroductionComponent', () => {
  let component: FormsintroductionComponent;
  let fixture: ComponentFixture<FormsintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsintroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
