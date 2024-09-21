import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnorderedlistComponent } from './unorderedlist.component';

describe('UnorderedlistComponent', () => {
  let component: UnorderedlistComponent;
  let fixture: ComponentFixture<UnorderedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnorderedlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnorderedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
