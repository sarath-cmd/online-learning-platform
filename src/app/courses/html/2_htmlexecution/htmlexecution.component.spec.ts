import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlexecutionComponent } from './htmlexecution.component';

describe('HtmlexecutionComponent', () => {
  let component: HtmlexecutionComponent;
  let fixture: ComponentFixture<HtmlexecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlexecutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlexecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
