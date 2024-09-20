import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlheadingtagComponent } from './htmlheadingtag.component';

describe('HtmlheadingtagComponent', () => {
  let component: HtmlheadingtagComponent;
  let fixture: ComponentFixture<HtmlheadingtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlheadingtagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlheadingtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
