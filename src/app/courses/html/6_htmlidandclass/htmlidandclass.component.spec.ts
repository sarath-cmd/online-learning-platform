import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlidandclassComponent } from './htmlidandclass.component';

describe('HtmlidandclassComponent', () => {
  let component: HtmlidandclassComponent;
  let fixture: ComponentFixture<HtmlidandclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlidandclassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlidandclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
