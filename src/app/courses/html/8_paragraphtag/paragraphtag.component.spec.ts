import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphtagComponent } from './paragraphtag.component';

describe('ParagraphtagComponent', () => {
  let component: ParagraphtagComponent;
  let fixture: ComponentFixture<ParagraphtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParagraphtagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
