import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgtagComponent } from './imgtag.component';

describe('ImgtagComponent', () => {
  let component: ImgtagComponent;
  let fixture: ComponentFixture<ImgtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgtagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
