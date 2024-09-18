import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlintroductionComponent } from './htmlintroduction.component';

describe('HtmlintroductionComponent', () => {
  let component: HtmlintroductionComponent;
  let fixture: ComponentFixture<HtmlintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlintroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
