import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvginhtmlComponent } from './svginhtml.component';

describe('SvginhtmlComponent', () => {
  let component: SvginhtmlComponent;
  let fixture: ComponentFixture<SvginhtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvginhtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvginhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
