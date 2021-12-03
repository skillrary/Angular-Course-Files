import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsExampleComponent } from './ls-example.component';

describe('LsExampleComponent', () => {
  let component: LsExampleComponent;
  let fixture: ComponentFixture<LsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
