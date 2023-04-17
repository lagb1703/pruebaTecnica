import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTextComponent } from './generic-text.component';

describe('GenericTextComponent', () => {
  let component: GenericTextComponent;
  let fixture: ComponentFixture<GenericTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
