import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptExampleComponent } from './typescript-example.component';

describe('TypescriptExampleComponent', () => {
  let component: TypescriptExampleComponent;
  let fixture: ComponentFixture<TypescriptExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
