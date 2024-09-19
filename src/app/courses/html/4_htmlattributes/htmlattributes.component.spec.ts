import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlattributesComponent } from './htmlattributes.component';

describe('HtmlattributesComponent', () => {
  let component: HtmlattributesComponent;
  let fixture: ComponentFixture<HtmlattributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlattributesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlattributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
