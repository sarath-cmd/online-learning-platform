import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaandselectComponent } from './textareaandselect.component';

describe('TextareaandselectComponent', () => {
  let component: TextareaandselectComponent;
  let fixture: ComponentFixture<TextareaandselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaandselectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaandselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
